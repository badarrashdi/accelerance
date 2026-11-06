import './globals.css';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollAnimations from './components/ScrollAnimations';
import JsonLd from './components/JsonLd';

export const metadata = {
  metadataBase: new URL('https://accelerance.tech'),
  title: {
    default: 'Accelerance Tech | Award-Winning Digital Growth, Web & eCommerce Agency',
    template: '%s | Accelerance Tech'
  },
  description:
    'Accelerance Technologies Pvt. Ltd. engineers high-velocity Next.js websites, headless Shopify eCommerce, Flutter mobile apps, autonomous AI agents, and HubSpot RevOps for ambitious market leaders across Delhi NCR, London, Dubai, Bahrain, and the USA.',
  keywords: [
    'Web Design Company',
    'Custom Web Development Agency',
    'Headless Shopify Agency',
    'Next.js Developers',
    'Flutter Mobile App Development',
    'Autonomous AI Agents',
    'HubSpot RevOps Agency',
    'Enterprise SEO & Growth Marketing',
    'Web Development Company Delhi NCR',
    'Web Design Agency London UK',
    'Digital Agency Dubai UAE',
    'Software Development Company Bahrain',
    'Web Development Company New Jersey USA'
  ],
  authors: [{ name: 'Accelerance Technologies Pvt. Ltd.', url: 'https://accelerance.tech' }],
  creator: 'Accelerance Technologies Pvt. Ltd.',
  publisher: 'Accelerance Technologies Pvt. Ltd.',
  alternates: {
    canonical: 'https://accelerance.tech/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Accelerance Tech | High-Impact Web, Headless Shopify & AI Engineering',
    description:
      'We engineer conversion-driven corporate websites, scalable Shopify storefronts, mobile apps, and autonomous AI products for ambitious brands.',
    url: 'https://accelerance.tech',
    siteName: 'Accelerance Tech',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Accelerance Tech — Engineering Digital Growth for Ambitious Brands',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_IN', 'ar_AE'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accelerance Tech | Digital Growth & AI Engineering Agency',
    description:
      'Award-winning digital agency delivering high-performance websites, scalable eCommerce, mobile apps, and AI automation.',
    images: ['/brand/og-image.png'],
  },
  icons: {
    icon: '/brand/favicon.svg',
    apple: '/brand/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg" />
        <link rel="llms" type="text/markdown" href="/llms.txt" />
        {/* Baseline Global GEO Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.6433;77.2415" />
        <meta name="ICBM" content="28.6433, 77.2415" />
        {/* Global Structured Data JSON-LD */}
        <JsonLd type="global" />
      </head>
      <body>
        <ScrollAnimations />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
