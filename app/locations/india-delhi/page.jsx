import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Web Design, Software & App Development Company in Delhi NCR, India | Accelerance Tech Pvt. Ltd.',
  description:
    'Premier digital engineering agency headquartered in Delhi NCR, India. Specializing in Next.js web platforms, Headless Shopify, Flutter mobile apps, and autonomous AI agents for ambitious Indian & global enterprises.',
  keywords: [
    'web design company Delhi NCR',
    'web development agency India',
    'Next.js developers Delhi',
    'Flutter mobile app development company India',
    'headless Shopify agency Delhi',
    'AI software development company Delhi NCR',
    'web development Daryaganj Delhi'
  ],
  alternates: {
    canonical: 'https://accelerance.tech/locations/india-delhi/',
  },
  openGraph: {
    title: 'Web Design & Software Development Company in Delhi NCR | Accelerance Tech',
    description:
      'Premier digital engineering agency headquartered in Delhi NCR. Next.js, Headless Shopify, Flutter apps, and AI agents.',
    url: 'https://accelerance.tech/locations/india-delhi/',
  },
};

export default function DelhiLocationPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Accelerance Tech — Global Engineering HQ Delhi NCR",
    "image": "https://accelerance.tech/brand/og-image.png",
    "@id": "https://accelerance.tech/locations/india-delhi/",
    "url": "https://accelerance.tech/locations/india-delhi/",
    "telephone": "+91-9711091363",
    "email": "sales@accelerance.in",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "401, 4th Floor, Emca House, 23/23B, Ansari Road, Daryaganj",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6433,
      "longitude": 77.2415
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <section className="abox-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-tag">Global Engineering HQ • Delhi NCR, India</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            Elite Web Design, Flutter Mobile &amp; AI Engineering Studio.
          </h1>
          <div className="hero-subrow">
            <p className="hero-subtext">
              Headquartered in Delhi NCR, Accelerance Tech combines high-velocity engineering with world-class UI/UX design. 
              Powering enterprises and high-growth brands across <strong>India, the UK, Bahrain, UAE, and the US</strong>.
            </p>
            <div className="hero-action-row">
              <a href="/contact/" className="btn-black-pill">Let&apos;s Connect</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
