<?php
/**
 * Accelerance Tech - Contact Inquiry Handler for cPanel / Apache
 * Sends lead inquiry notification via Resend REST API
 */

header('Content-Type: application/json; charset=UTF-8');

// Allow CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit;
}

/**
 * Helper to retrieve environment variable from:
 * 1. Server env / getenv
 * 2. Parent directory .env (/home/username/.env)
 * 3. Local directory .env (public_html/.env)
 */
function get_env_value($key, $default = null) {
    // 1. Check getenv & superglobals
    $val = getenv($key);
    if ($val !== false && $val !== '') return $val;
    if (!empty($_ENV[$key])) return $_ENV[$key];
    if (!empty($_SERVER[$key])) return $_SERVER[$key];

    // 2. Check parent directory (.env outside public_html for security)
    $parentEnv = dirname(__DIR__, 2) . '/.env';
    if (file_exists($parentEnv) && is_readable($parentEnv)) {
        $lines = file($parentEnv, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line) || $line[0] === '#') continue;
            if (strpos($line, '=') !== false) {
                list($k, $v) = explode('=', $line, 2);
                $k = trim($k);
                $v = trim(trim($v), "\"'");
                if ($k === $key) return $v;
            }
        }
    }

    // 3. Check local .env in public_html
    $localEnv = dirname(__DIR__) . '/.env';
    if (file_exists($localEnv) && is_readable($localEnv)) {
        $lines = file($localEnv, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line) || $line[0] === '#') continue;
            if (strpos($line, '=') !== false) {
                list($k, $v) = explode('=', $line, 2);
                $k = trim($k);
                $v = trim(trim($v), "\"'");
                if ($k === $key) return $v;
            }
        }
    }

    return $default;
}

// Parse incoming JSON body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload received.']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$company = trim($data['company'] ?? '');
$message = trim($data['message'] ?? '');
$selectedServices = $data['selectedServices'] ?? [];
$budget = trim($data['budget'] ?? '');
$timeline = trim($data['timeline'] ?? '');
$hasDomain = trim($data['hasDomain'] ?? '');
$domainUrl = trim($data['domainUrl'] ?? '');
$hasHosting = trim($data['hasHosting'] ?? '');

// Validation
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Full name is required.']);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'A valid work email address is required.']);
    exit;
}

if (empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Phone / WhatsApp number is required.']);
    exit;
}

// Retrieve configuration
$apiKey = get_env_value('RESEND_API_KEY');
if (empty($apiKey)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'RESEND_API_KEY is not configured in .env. Please add it to your server .env file.',
        'code' => 'MISSING_API_KEY'
    ]);
    exit;
}

$toEmail = get_env_value('CONTACT_EMAIL_TO', 'sales@accelerance.in');
$recipients = array_values(array_filter(array_map('trim', explode(',', $toEmail))));
$fromEmail = get_env_value('RESEND_FROM_EMAIL', 'Accelerance Inquiries <onboarding@resend.dev>');

// Format display strings
$budgetMap = [
    '5k-15k' => '$5,000 – $15,000',
    '15k-30k' => '$15,000 – $30,000',
    '30k-60k' => '$30,000 – $60,000',
    '60k+' => '$60,000+ Enterprise',
];
$timelineMap = [
    'immediate' => 'Immediate (< 1 Month)',
    '1-3-months' => '1 to 3 Months',
    '3-6-months' => '3 to 6 Months',
    'planning' => 'Exploratory / Planning Stage',
];

$budgetDisplay = $budgetMap[$budget] ?? ($budget ?: 'Not specified');
$timelineDisplay = $timelineMap[$timeline] ?? ($timeline ?: 'Not specified');
$domainDisplay = $hasDomain === 'yes' ? ('Yes' . ($domainUrl ? " ({$domainUrl})" : '')) : ($hasDomain === 'no' ? 'No (Needs new domain)' : ($hasDomain ?: 'Not specified'));
$hostingDisplay = $hasHosting === 'yes' ? 'Yes (Has existing hosting / cloud)' : ($hasHosting === 'no' ? 'No (Needs hosting setup & deployment)' : ($hasHosting === 'not-sure' ? 'Not sure (Needs recommendation)' : ($hasHosting ?: 'Not specified')));
$domainDisplayEsc = htmlspecialchars($domainDisplay, ENT_QUOTES, 'UTF-8');
$hostingDisplayEsc = htmlspecialchars($hostingDisplay, ENT_QUOTES, 'UTF-8');
$servicesDisplay = !empty($selectedServices) ? implode(', ', (array)$selectedServices) : 'General Inquiry';

$servicesBadges = '';
if (!empty($selectedServices)) {
    foreach ((array)$selectedServices as $srv) {
        $srvEsc = htmlspecialchars($srv, ENT_QUOTES, 'UTF-8');
        $servicesBadges .= "<span style=\"display:inline-block;background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;margin:3px 6px 3px 0;\">{$srvEsc}</span>";
    }
} else {
    $servicesBadges = '<span style="color:#64748B;font-style:italic;">General Advisory</span>';
}

$cleanPhone = preg_replace('/[^0-9]/', '', $phone);
$nameEsc = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$emailEsc = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phoneEsc = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$companyEsc = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$messageEsc = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$dateStr = gmdate('D, d M Y H:i:s') . ' GMT';

$subject = "🚀 New Project Inquiry: {$name}" . ($company ? " ({$company})" : "");

$textContent = "New Lead Inquiry - Accelerance Tech Pvt. Ltd.\n\n"
    . "Client Details:\n"
    . "- Name: {$name}\n"
    . "- Email: {$email}\n"
    . "- Phone: {$phone}\n"
    . "- Company: " . ($company ?: 'N/A') . "\n\n"
    . "Technical Readiness:\n"
    . "- Domain: {$domainDisplay}\n"
    . "- Web Hosting: {$hostingDisplay}\n\n"
    . "Project Scope:\n"
    . "- Services: {$servicesDisplay}\n"
    . "- Budget: {$budgetDisplay}\n"
    . "- Timeline: {$timelineDisplay}\n\n"
    . "Message:\n" . ($message ?: 'No additional details provided.') . "\n\n"
    . "---\nSubmitted via accelerance.tech contact form.";

$htmlContent = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{$subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1E293B;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #E2E8F0;">
          <tr>
            <td style="background:#0F172A;padding:28px 32px;text-align:left;">
              <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#60A5FA;margin-bottom:6px;">
                Accelerance Tech &bull; Lead Notification
              </div>
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#FFFFFF;line-height:1.2;">
                New Project Proposal Inquiry
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <div style="background:#F1F5F9;border-radius:8px;padding:20px;margin-bottom:24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;width:110px;font-weight:600;">Client:</td>
                    <td style="padding:4px 0;font-size:15px;color:#0F172A;font-weight:700;">{$nameEsc}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;font-weight:600;">Work Email:</td>
                    <td style="padding:4px 0;font-size:15px;font-weight:600;">
                      <a href="mailto:{$emailEsc}" style="color:#2563EB;text-decoration:none;">{$emailEsc}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;font-weight:600;">Phone / WA:</td>
                    <td style="padding:4px 0;font-size:15px;color:#0F172A;font-weight:600;">
                      <a href="tel:{$phoneEsc}" style="color:#0F172A;text-decoration:none;">{$phoneEsc}</a>
                      &nbsp;&bull;&nbsp;
                      <a href="https://wa.me/{$cleanPhone}" target="_blank" style="color:#16A34A;text-decoration:none;font-weight:700;">WhatsApp</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;font-weight:600;">Company:</td>
                    <td style="padding:4px 0;font-size:15px;color:#0F172A;font-weight:600;">{$companyEsc}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-bottom:24px;">
                <h3 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#475569;margin:0 0 12px 0;">
                  Scope &amp; Preferences
                </h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;width:140px;font-weight:600;">Domain:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">{$domainDisplayEsc}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;font-weight:600;">Web Hosting:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">{$hostingDisplayEsc}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;font-weight:600;">Estimated Budget:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">{$budgetDisplay}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;font-weight:600;">Target Timeline:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">{$timelineDisplay}</td>
                  </tr>
                </table>
                <div style="margin-top:10px;">
                  <span style="font-size:13px;color:#64748B;display:block;margin-bottom:6px;font-weight:600;">Selected Services:</span>
                  <div>{$servicesBadges}</div>
                </div>
              </div>

              <div style="margin-bottom:28px;">
                <h3 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#475569;margin:0 0 8px 0;">
                  Client Brief / Challenge Description
                </h3>
                <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:8px;padding:16px;font-size:14px;line-height:1.65;color:#334155;">{$messageEsc}</div>
              </div>

              <div style="text-align:center;padding-top:8px;">
                <a href="mailto:{$emailEsc}?subject=Accelerance%20Tech%20Proposal%20Follow-up" style="display:inline-block;background:#0F172A;color:#FFFFFF;padding:12px 24px;border-radius:9999px;font-size:14px;font-weight:700;text-decoration:none;margin-right:8px;margin-bottom:8px;">
                  Reply to {$nameEsc} &rarr;
                </a>
                <a href="https://wa.me/{$cleanPhone}" target="_blank" style="display:inline-block;background:#22C55E;color:#FFFFFF;padding:12px 24px;border-radius:9999px;font-size:14px;font-weight:700;text-decoration:none;margin-bottom:8px;">
                  Open WhatsApp Chat
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:20px 32px;font-size:12px;color:#94A3B8;text-align:center;">
              Submitted on {$dateStr} &bull; Accelerance Tech Internal Lead System
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

// Payload for Resend REST API
$resendPayload = [
    'from' => $fromEmail,
    'to' => $recipients,
    'reply_to' => $email,
    'subject' => $subject,
    'text' => $textContent,
    'html' => $htmlContent,
];

// Call Resend REST API via cURL
$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
        'User-Agent: Accelerance-Lead-System/1.0'
    ],
    CURLOPT_POSTFIELDS => json_encode($resendPayload),
    CURLOPT_TIMEOUT => 20
]);

$response = curl_exec($ch);
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

if ($curlErr) {
    http_response_code(502);
    echo json_encode([
        'success' => false,
        'error' => 'Connection error contacting Resend API: ' . $curlErr
    ]);
    exit;
}

$resData = json_decode($response, true);

if ($httpStatus >= 200 && $httpStatus < 300) {
    echo json_encode([
        'success' => true,
        'message' => 'Your inquiry has been successfully sent. We will review your brief within 24 hours.',
        'id' => $resData['id'] ?? null
    ]);
} else {
    http_response_code($httpStatus ?: 500);
    echo json_encode([
        'success' => false,
        'error' => $resData['message'] ?? 'Resend API returned an error (' . $httpStatus . ')',
        'details' => $resData
    ]);
}
