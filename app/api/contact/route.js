import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company = '',
      message = '',
      selectedServices = [],
      budget = '',
      timeline = '',
      hasDomain = '',
      domainUrl = '',
      hasHosting = '',
    } = body;

    // Server-side validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid work email address.' },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone / WhatsApp number is required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[Contact API Error] RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not yet configured. Please add your RESEND_API_KEY to .env.local',
          code: 'MISSING_API_KEY',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Target recipient(s) for the lead notifications
    const toEmail = process.env.CONTACT_EMAIL_TO || 'sales@accelerance.in';
    const recipients = toEmail.includes(',')
      ? toEmail.split(',').map((e) => e.trim()).filter(Boolean)
      : [toEmail.trim()];

    // Sender email (defaults to Resend onboarding address until custom domain is verified)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Accelerance Inquiries <onboarding@resend.dev>';

    // Format human-readable budget & timeline labels
    const budgetMap = {
      '5k-15k': '$5,000 – $15,000',
      '15k-30k': '$15,000 – $30,000',
      '30k-60k': '$30,000 – $60,000',
      '60k+': '$60,000+ Enterprise',
    };
    const timelineMap = {
      'immediate': 'Immediate (< 1 Month)',
      '1-3-months': '1 to 3 Months',
      '3-6-months': '3 to 6 Months',
      'planning': 'Exploratory / Planning Stage',
    };

    const budgetDisplay = budgetMap[budget] || budget || 'Not specified';
    const timelineDisplay = timelineMap[timeline] || timeline || 'Not specified';

    // Format domain & hosting
    const domainDisplay = hasDomain === 'yes'
      ? `Yes${domainUrl ? ` (${domainUrl})` : ''}`
      : hasDomain === 'no'
      ? 'No (Needs new domain)'
      : hasDomain || 'Not specified';

    const hostingDisplay = hasHosting === 'yes'
      ? 'Yes (Has existing hosting / cloud)'
      : hasHosting === 'no'
      ? 'No (Needs hosting setup & deployment)'
      : hasHosting === 'not-sure'
      ? 'Not sure (Needs recommendation)'
      : hasHosting || 'Not specified';

    // Format selected services
    const servicesDisplay = selectedServices.length > 0
      ? selectedServices.join(', ')
      : 'General Inquiry / Comprehensive';

    const servicesHtmlBadges = selectedServices.length > 0
      ? selectedServices.map((srv) => `<span style="display:inline-block;background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;margin:3px 6px 3px 0;">${srv}</span>`).join('')
      : '<span style="color:#64748B;font-style:italic;">General Advisory</span>';

    // Email Subject
    const subject = `🚀 New Project Inquiry: ${name}${company ? ` (${company})` : ''}`;

    // Plain text version
    const textContent = `
New Lead Inquiry - Accelerance Tech Pvt. Ltd.

Client Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Company: ${company || 'N/A'}

Technical Readiness:
- Domain: ${domainDisplay}
- Web Hosting: ${hostingDisplay}

Project Scope:
- Services: ${servicesDisplay}
- Estimated Budget: ${budgetDisplay}
- Target Timeline: ${timelineDisplay}

Project Details / Brief:
${message ? message : 'No additional details provided.'}

---
Sent via accelerance.tech contact form.
Reply directly to this email to contact the lead at ${email}.
`.trim();

    // Responsive HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1E293B;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #E2E8F0;">
          
          <!-- Header -->
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

          <!-- Content Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Primary Contact Card -->
              <div style="background:#F1F5F9;border-radius:8px;padding:20px;margin-bottom:24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;width:110px;font-weight:600;">Client:</td>
                    <td style="padding:4px 0;font-size:15px;color:#0F172A;font-weight:700;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;font-weight:600;">Work Email:</td>
                    <td style="padding:4px 0;font-size:15px;font-weight:600;">
                      <a href="mailto:${email}" style="color:#2563EB;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;font-weight:600;">Phone / WA:</td>
                    <td style="padding:4px 0;font-size:15px;color:#0F172A;font-weight:600;">
                      <a href="tel:${phone}" style="color:#0F172A;text-decoration:none;">${phone}</a>
                      &nbsp;&bull;&nbsp;
                      <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" style="color:#16A34A;text-decoration:none;font-weight:700;">WhatsApp</a>
                    </td>
                  </tr>
                  ${company ? `
                  <tr>
                    <td style="padding:4px 0;font-size:14px;color:#64748B;font-weight:600;">Company:</td>
                    <td style="padding:4px 0;font-size:15px;color:#0F172A;font-weight:600;">${company}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- Scope & Engagement Details -->
              <div style="margin-bottom:24px;">
                <h3 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#475569;margin:0 0 12px 0;">
                  Scope &amp; Preferences
                </h3>
                
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;width:140px;font-weight:600;">Domain:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">${domainDisplay}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;font-weight:600;">Web Hosting:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">${hostingDisplay}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;font-weight:600;">Estimated Budget:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">${budgetDisplay}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#64748B;font-weight:600;">Target Timeline:</td>
                    <td style="padding:6px 0;font-size:14px;color:#0F172A;font-weight:700;">${timelineDisplay}</td>
                  </tr>
                </table>

                <div style="margin-top:10px;">
                  <span style="font-size:13px;color:#64748B;display:block;margin-bottom:6px;font-weight:600;">Selected Services:</span>
                  <div>
                    ${servicesHtmlBadges}
                  </div>
                </div>
              </div>

              <!-- Project Brief / Details -->
              <div style="margin-bottom:28px;">
                <h3 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#475569;margin:0 0 8px 0;">
                  Client Brief / Challenge Description
                </h3>
                <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:8px;padding:16px;font-size:14px;line-height:1.65;color:#334155;white-space:pre-wrap;">${message || 'No additional project details provided.'}</div>
              </div>

              <!-- Quick Action Callouts -->
              <div style="text-align:center;padding-top:8px;">
                <a href="mailto:${email}?subject=Accelerance%20Tech%20Proposal%20Follow-up" style="display:inline-block;background:#0F172A;color:#FFFFFF;padding:12px 24px;border-radius:9999px;font-size:14px;font-weight:700;text-decoration:none;margin-right:8px;margin-bottom:8px;">
                  Reply to ${name} &rarr;
                </a>
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" target="_blank" style="display:inline-block;background:#22C55E;color:#FFFFFF;padding:12px 24px;border-radius:9999px;font-size:14px;font-weight:700;text-decoration:none;margin-bottom:8px;">
                  Open WhatsApp Chat
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:20px 32px;font-size:12px;color:#94A3B8;text-align:center;">
              Submitted on ${new Date().toUTCString()} &bull; Accelerance Tech Internal Lead System
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      reply_to: email,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error('[Contact API Resend Error]:', error);
      return NextResponse.json(
        {
          success: false,
          error: error.message || 'Resend failed to deliver the email.',
          details: error,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully sent. We will review your brief within 24 hours.',
      id: data?.id,
    });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Internal Server Error';
    console.error('[Contact API Uncaught Error]:', errorMsg);
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}
