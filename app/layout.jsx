import './globals.css';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollAnimations from './components/ScrollAnimations';

export const metadata = {
  metadataBase: new URL('https://accelerance.tech'),
  title: 'Accelerance Tech | Award-Winning Digital Growth, Web & eCommerce Agency',
  description: 'Accelerance Tech delivers enterprise websites, conversion-driven eCommerce, mobile apps, SEO, and CRM automation for ambitious market leaders.',
  keywords: ['Shopify Agency', 'Headless Shopify', 'HubSpot RevOps', 'AI SaaS', 'AI Chatbot', 'Next.js SSG Agency'],
  authors: [{ name: 'Accelerance Tech' }],
  openGraph: {
    title: 'Accelerance Tech | High-Impact Shopify, HubSpot & AI Engineering',
    description: 'We craft high-converting Shopify storefronts, CRM automation, and generative AI products.',
    url: 'https://accelerance.tech',
    siteName: 'Accelerance Tech',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
      </head>
      <body>
        <ScrollAnimations />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
