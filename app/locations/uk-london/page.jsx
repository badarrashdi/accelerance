import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Web Design, Software & App Development Company in London, UK | Accelerance Tech Pvt. Ltd.',
  description:
    'Premier digital engineering agency with active offices in London, UK. Specializing in Next.js web applications, Headless Shopify, Flutter mobile apps, and autonomous AI agents for high-growth UK enterprises.',
  keywords: [
    'web design company London',
    'web development agency UK',
    'Next.js developers London',
    'Flutter mobile app development UK',
    'headless Shopify agency London',
    'AI software development company UK',
    'digital agency London SW9'
  ],
  alternates: {
    canonical: 'https://accelerance.tech/locations/uk-london/',
  },
  openGraph: {
    title: 'Web Design & App Development in London, UK | Accelerance Tech',
    description:
      'Premier digital engineering agency with offices in London, UK. Next.js, Headless Shopify, Flutter apps, and AI agents.',
    url: 'https://accelerance.tech/locations/uk-london/',
  },
};

export default function LondonLocationPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Accelerance Tech — United Kingdom Regional Hub (London)",
    "image": "https://accelerance.tech/brand/og-image.png",
    "@id": "https://accelerance.tech/locations/uk-london/",
    "url": "https://accelerance.tech/locations/uk-london/",
    "telephone": "+44-7741-345792",
    "email": "uk@accelerance.tech",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F-B, 17 Groveway",
      "addressLocality": "London",
      "postalCode": "SW9 0AH",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4746,
      "longitude": -0.1186
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:30"
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
          <div className="hero-tag">Regional Hub • London, United Kingdom</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            High-Impact Web Design, Flutter Mobile &amp; AI Engineering in the UK.
          </h1>
          <div className="hero-subrow">
            <p className="hero-subtext">
              Accelerance Tech pairs world-class digital strategy with high-velocity engineering execution. 
              Delivering scalable Next.js architectures, headless Shopify storefronts, Flutter mobile applications, 
              and generative AI automation for ambitious brands across London and the UK.
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
