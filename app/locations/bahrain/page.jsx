import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Web Design, Mobile App & AI Software Company in Bahrain | Accelerance Tech',
  description: 'Accelerance Tech delivers premier website design, Next.js development, Flutter mobile apps, and autonomous AI agents for businesses in Manama, Seef, and across the Kingdom of Bahrain. Compliant with Bahrain PDPL.',
  keywords: [
    'website design company Bahrain',
    'web development company Bahrain',
    'AI agent development company Bahrain',
    'AI chatbot development Bahrain',
    'Flutter mobile app development Bahrain',
    'software development company Bahrain',
    'web design agency Manama'
  ],
  openGraph: {
    title: 'Web Design & AI Software Development in Bahrain | Accelerance Tech',
    description: 'Bespoke web design, Flutter mobile apps, and autonomous AI agents for businesses in Bahrain.',
    url: 'https://accelerance.tech/locations/bahrain/',
  }
};

export default function BahrainLocationPage() {
  return (
    <main>
      <Header />

      <section className="abox-hero" style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <div className="hero-tag">Regional Hub • Kingdom of Bahrain</div>
          <h1 className="hero-headline" style={{ fontSize: '3.8rem' }}>
            Next-Gen Web Design, Mobile Apps &amp; AI Agents in Bahrain.
          </h1>

          <div className="hero-subrow">
            <p className="hero-subtext">
              Accelerance Tech pairs world-class engineering execution with dedicated delivery for Manama, 
              Seef, and the wider GCC. From high-converting <strong>Next.js &amp; Storyblok websites</strong> to 
              <strong>Flutter mobile apps with BenefitPay</strong> and <strong>AI customer agents</strong>.
            </p>
            <div className="hero-action-row">
              <a href="#contact" className="btn-black-pill">Book a Bahrain Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First Entity Verification & Proof */}
      <section style={{ padding: '2.5rem 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: 860, margin: '0 auto', background: '#FFFFFF', padding: '2.5rem', borderRadius: 20, border: '1px solid var(--border-medium)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.5rem' }}>
              Local Entity &amp; Compliance Overview
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>
              Why Bahrain enterprises choose Accelerance Tech over legacy vendors
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              While Bahrain’s technology market has been crowded with generalist agencies with slow WordPress delivery, Accelerance Tech combines senior UI/UX design with modern engineering (Next.js, Flutter, and autonomous AI). We build in strict accordance with Bahrain's <strong>Personal Data Protection Law (PDPL)</strong> and NCSC cyber security guidelines, ensuring your customer data remains secure and sovereign.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.3rem', color: '#000000' }}>BenefitPay</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Native Checkout Integration</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.3rem', color: '#008060' }}>PDPL</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bahrain Data Law Compliant</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '1.3rem', color: '#2563EB' }}>Bi-Lingual</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Arabic &amp; English RTL Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services tailored for Bahrain */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="section-header-compact">
            <div>
              <div className="section-label">Tailored Solutions for Bahrain</div>
              <h2 className="section-title">What We Build for Bahrain &amp; GCC Businesses</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="approach-card">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>Corporate &amp; FinTech Websites</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Next.js SSG websites with Storyblok or Strapi, custom BenefitPay payment flows, and sub-second loading.
              </p>
              <Link href="/services/website-design-development/" style={{ color: '#2563EB', fontWeight: 600, fontSize: '0.88rem' }}>
                Learn more about Web Design →
              </Link>
            </div>

            <div className="approach-card">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>Flutter Mobile Applications</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Single-codebase iOS &amp; Android mobile apps tailored for retail, clinic booking, logistics, and real estate in Bahrain.
              </p>
              <Link href="/services/mobile-app-development-flutter/" style={{ color: '#2563EB', fontWeight: 600, fontSize: '0.88rem' }}>
                Learn more about Flutter Apps →
              </Link>
            </div>

            <div className="approach-card">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>Autonomous AI WhatsApp Bots</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                AI customer service agents operating 24/7 over WhatsApp in Arabic and English, integrated with your CRM and order database.
              </p>
              <Link href="/services/ai-agents-chatbots/" style={{ color: '#2563EB', fontWeight: 600, fontSize: '0.88rem' }}>
                Learn more about AI Bots →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bahrain Specific FAQs (AEO Strategy) */}
      <section style={{ padding: '3rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-label" style={{ textAlign: 'center' }}>Bahrain Insights</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Bahrain Buyer Questions</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 14, border: '1px solid var(--border-medium)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                How much does custom web or app development cost in Bahrain?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Corporate websites typically range from <strong>BHD 1,200 to BHD 4,500</strong>, while custom web applications and Flutter mobile apps range from <strong>BHD 4,000 to BHD 18,000</strong> depending on scope, integrations (BenefitPay, CRM), and AI agent workflows.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 14, border: '1px solid var(--border-medium)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                Can our AI agent store customer data legally under Bahrain’s PDPL?
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Yes. Accelerance Tech deploys AI agents with data sovereignty controls, keeping personally identifiable information (PII) encrypted and tokenized within your private cloud environments or authorized GCC data centers, fully conforming to Bahrain Personal Data Protection Law requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
