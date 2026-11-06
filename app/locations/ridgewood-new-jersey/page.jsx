import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Web Design, Software & App Development Company in Ridgewood, NJ (USA) | Accelerance Tech Pvt. Ltd.',
  description:
    'Accelerance Tech Pvt. Ltd. regional hub in Ridgewood, New Jersey, USA. Delivering scalable Next.js architectures, headless Shopify storefronts, Flutter mobile applications, and AI agent workflows for US market leaders.',
  keywords: [
    'web design company New Jersey',
    'web development agency USA',
    'Next.js developers NJ',
    'Flutter mobile app development USA',
    'headless Shopify agency New Jersey',
    'AI software development company USA',
    'web design Ridgewood NJ'
  ],
  alternates: {
    canonical: 'https://accelerance.tech/locations/ridgewood-new-jersey/',
  },
  openGraph: {
    title: 'Web Design & Software Development in New Jersey, USA | Accelerance Tech',
    description:
      'Premier digital engineering agency in Ridgewood, NJ. Scalable Next.js, headless eCommerce, Flutter mobile apps, and autonomous AI agents.',
    url: 'https://accelerance.tech/locations/ridgewood-new-jersey/',
  },
};

export default function USALocationPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Accelerance Tech — United States Regional Hub (New Jersey)",
    "image": "https://accelerance.tech/brand/og-image.png",
    "@id": "https://accelerance.tech/locations/ridgewood-new-jersey/",
    "url": "https://accelerance.tech/locations/ridgewood-new-jersey/",
    "telephone": "+91-9711091363",
    "email": "usa@accelerance.tech",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1124 East Ridgewood, Av, Suite 103",
      "addressLocality": "Ridgewood",
      "addressRegion": "NJ",
      "postalCode": "07450",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.9793,
      "longitude": -74.1165
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
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
          <div className="hero-tag">Regional Hub • Ridgewood, New Jersey, USA</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            High-Impact Web Design, Mobile &amp; AI Engineering in the USA.
          </h1>
          <div className="hero-subrow">
            <p className="hero-subtext">
              Accelerance Tech Pvt. Ltd. pairs world-class digital strategy with rapid engineering execution. 
              Delivering high-converting Next.js platforms, headless eCommerce, cross-platform Flutter applications, 
              and generative AI automation for ambitious brands across New Jersey, New York Metro, and the United States.
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
