import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Web Design, Mobile App & AI Software Company in Dubai, UAE | Accelerance Tech Pvt. Ltd.',
  description:
    'Enterprise web development, Next.js, Headless Shopify, Flutter mobile applications, and AI agent architectures for forward-thinking brands in Dubai, Marina Plaza, and Abu Dhabi, UAE.',
  keywords: [
    'web design company Dubai',
    'web development agency UAE',
    'Flutter mobile app developers Dubai',
    'AI software company UAE',
    'Next.js developers Dubai',
    'headless Shopify agency Dubai',
    'software company Dubai Marina'
  ],
  alternates: {
    canonical: 'https://accelerance.tech/locations/dubai-uae/',
  },
  openGraph: {
    title: 'Web Design & Software Development Company in Dubai, UAE | Accelerance Tech',
    description:
      'Premier digital engineering agency in Dubai Marina. Next.js, Headless Shopify, Flutter apps, and AI agents.',
    url: 'https://accelerance.tech/locations/dubai-uae/',
  },
};

export default function DubaiLocationPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Accelerance Tech — United Arab Emirates Regional Hub (Dubai)",
    "image": "https://accelerance.tech/brand/og-image.png",
    "@id": "https://accelerance.tech/locations/dubai-uae/",
    "url": "https://accelerance.tech/locations/dubai-uae/",
    "telephone": "+91-9711091363",
    "email": "dubai@accelerance.tech",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 1402, Marina Plaza, Dubai Marina",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0772,
      "longitude": 55.1403
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
          <div className="hero-tag">Regional Hub • United Arab Emirates</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            Enterprise Web Development &amp; Flutter Apps in Dubai &amp; Abu Dhabi.
          </h1>
          <div className="hero-subrow">
            <p className="hero-subtext">
              Accelerance Tech delivers premier digital flagships, high-velocity Next.js platforms, 
              headless eCommerce, Flutter mobile apps, and autonomous AI chatbots for the UAE’s fastest-growing enterprises.
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
