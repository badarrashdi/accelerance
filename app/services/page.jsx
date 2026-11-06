import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { servicesList, agencyInfo } from '../data';

export const metadata = {
  title: 'Full-Service Digital Capabilities & Solutions | Accelerance Tech Pvt. Ltd.',
  description: 'Explore Accelerance Tech’s end-to-end digital services: Web Design, eCommerce, Mobile Apps, SEO, Performance Marketing, CRM Automation, and Brand Identity.',
  alternates: {
    canonical: 'https://accelerance.tech/services/',
  },
  openGraph: {
    title: 'Full-Service Digital Capabilities & Solutions | Accelerance Tech',
    description: 'Explore Accelerance Tech’s end-to-end digital services: Web Design, eCommerce, Mobile Apps, SEO, Performance Marketing, CRM Automation, and Brand Identity.',
    url: 'https://accelerance.tech/services/',
  },
};

export default function ServicesHubPage() {
  const categories = [
    {
      name: "Digital Platforms & Engineering",
      desc: "Robust, sub-second web platforms and native mobile applications that elevate user engagement.",
      services: servicesList.filter((s) => s.category === "Digital Platforms"),
    },
    {
      name: "eCommerce & Omnichannel Commerce",
      desc: "Conversion-optimized online stores engineered for high average order value and repeat sales.",
      services: servicesList.filter((s) => s.category === "Commerce"),
    },
    {
      name: "Growth, SEO & Performance Marketing",
      desc: "Sustainable organic search dominance paired with hyper-targeted paid media campaigns.",
      services: servicesList.filter((s) => s.category === "Growth & Marketing"),
    },
    {
      name: "Operations, CRM & RevOps",
      desc: "Synchronized revenue operations, automated lead pipelines, and enterprise CRM architectures.",
      services: servicesList.filter((s) => s.category === "Operations & Intelligence"),
    },
    {
      name: "Brand Identity, Creative & UI/UX",
      desc: "Distinctive design systems, iconic brand identity, and intuitive interface design.",
      services: servicesList.filter((s) => s.category === "Design & Creative"),
    },
  ];

  return (
    <main>
      <Header />

      {/* Services Hub Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-eyebrow">
            <span className="dot-pulse"></span>
            COMPREHENSIVE SERVICES MATRIX
          </div>
          <h1 className="page-hero-title">
            Integrated Digital Services Engineered for Sustainable Scale.
          </h1>
          <p className="page-hero-subtext">
            From world-class web and mobile development to data-driven performance marketing and revenue operations, 
            we provide the specialized capabilities required to transform ambitious brands into market leaders.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" className="btn-black-pill">
              Request a Project Proposal
            </Link>
            <Link href="/work/" className="btn-outline-pill">
              Browse Client Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Categorized Services Matrix */}
      <section style={{ padding: '3.5rem 0', background: '#FAFAFA' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {categories.map((cat, cIdx) => (
              <div key={cIdx} className="category-group-block reveal-fade-up">
                <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-medium)', paddingBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563EB', marginBottom: '0.4rem' }}>
                    Category 0{cIdx + 1}
                  </div>
                  <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {cat.name}
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: 750 }}>
                    {cat.desc}
                  </p>
                </div>

                <div className="home-services-cards-grid">
                  {cat.services.map((srv) => (
                    <div 
                      key={srv.slug} 
                      className="approach-card home-service-card reveal-fade-up" 
                      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '22px' }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#2563EB', fontSize: '1rem' }}>
                            {srv.num}
                          </span>
                          <span className="mini-tag">
                            {srv.capabilities.length} Core Areas
                          </span>
                        </div>

                        <h3 style={{ fontSize: '1.65rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                          {srv.title}
                        </h3>

                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                          {srv.tagline}
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B', display: 'block', marginBottom: '0.65rem' }}>
                            Deliverables &amp; Specialties:
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                            {srv.capabilities.slice(0, 4).map((c, i) => (
                              <span key={i} className="mini-tag" style={{ background: '#FFFFFF' }}>
                                {c.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link href={`/services/${srv.slug}/`} className="btn-black-pill" style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}>
                          <span>Explore Service</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B' }}>
                          {srv.shortTitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery Architecture Banner */}
      <section style={{ padding: '3.5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-compact">
            <div>
              <div className="section-label">Delivery Pods</div>
              <h2 className="section-title">Dedicated Multi-Disciplinary Pods</h2>
            </div>
            <p style={{ maxWidth: 460, color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              We assign senior cross-functional teams comprising Strategists, UX Designers, Technical Architects, and Growth Leads.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="approach-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem' }}>Zero Outsourcing</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every deliverable is crafted in-house by experienced, vetted professionals from our Delhi NCR, Dubai, and regional studios.
              </p>
            </div>
            <div className="approach-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem' }}>Full IP Ownership</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                You retain 100% intellectual property, clean source code repositories, and administrative control from day one.
              </p>
            </div>
            <div className="approach-card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem' }}>Transparent Velocity</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Bi-weekly sprint demos, shared Slack/Teams channels, and real-time project management dashboards keep you fully aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section style={{ padding: '3.5rem 0', background: '#0D0E12', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 840 }}>
          <div className="section-label" style={{ color: '#94A3B8' }}>Start a Conversation</div>
          <h2 className="cta-headline" style={{ color: '#FFFFFF' }}>
            Not sure which service fits your current stage?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Our solutions team will conduct a complimentary digital audit of your current web assets and outline a prioritized growth roadmap.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" className="btn-black-pill" style={{ background: '#FFFFFF', color: '#000000', padding: '1.1rem 2.4rem' }}>
              Book Your Free Digital Audit
            </Link>
            <Link href="/work/" className="btn-outline-pill" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}>
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
