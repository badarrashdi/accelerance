import Header from './Header';
import Footer from './Footer';
import BrowserMockup from './BrowserMockup';
import Link from 'next/link';
import { servicesList, caseStudiesList } from '../data';

export default function ServiceDetailTemplate({ service }) {
  if (!service) return null;

  // Resolve related case studies
  const relatedStudies = caseStudiesList.filter((c) => 
    service.relatedCaseStudyIds?.includes(c.id) || service.relatedCaseStudyIds?.includes(c.slug)
  );

  return (
    <main>
      <Header />

      {/* Service Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-eyebrow">
            <span className="dot-pulse"></span>
            SERVICE {service.num} &bull; {service.category}
          </div>

          <h1 className="page-hero-title">
            {service.title}
          </h1>

          <p className="page-hero-subtext">
            {service.tagline}
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" className="btn-black-pill">
              <span>Book Strategy Call</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/work/" className="btn-outline-pill">
              View Verified Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Overview & Why It Matters Section */}
      <section style={{ padding: '3.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4.5rem' }}>
            <div>
              <div className="section-label">Strategic Perspective</div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Engineered for Commercial Impact.
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {service.overview}
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                We believe your digital investments should produce compounding returns. By blending user-centric design with technical rigor, we eliminate friction and build durable digital advantages.
              </p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '24px', padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>
                What Sets Our Approach Apart:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Business-First Focus:</strong> We prioritize metrics that move the revenue needle over vanity numbers.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Senior Execution:</strong> Experienced practitioners lead strategy, design, and deployment directly.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Transparent Delivery:</strong> Real-time sprints, clear milestones, and zero proprietary lock-in.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Value Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {service.whyItMatters.map((w, i) => (
              <div key={i} className="approach-card" style={{ padding: '2rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: '#2563EB', fontWeight: 800 }}>
                  0{i + 1}
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.65rem' }}>{w.title}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Matrix */}
      <section className="service-capabilities-section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-compact">
            <div>
              <div className="section-label">End-to-End Capabilities</div>
              <h2 className="section-title">Everything Needed to Scale</h2>
            </div>
            <p style={{ maxWidth: 460, color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Modular, full-lifecycle solutions tailored to your operational model and growth milestones.
            </p>
          </div>

          <div className="capabilities-grid-cards">
            {service.capabilities.map((cap, cIdx) => (
              <div key={cIdx} className="capability-card-item">
                <span className="cap-num">0{cIdx + 1}</span>
                <h3 className="cap-title">{cap.name}</h3>
                <p className="cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven 4-Step Methodology */}
      <section className="methodology-banner-section">
        <div className="container">
          <div className="section-header-compact">
            <div>
              <div className="section-label">How We Deliver</div>
              <h2 className="section-title">Our 4-Step Execution Framework</h2>
            </div>
            <p style={{ maxWidth: 460, color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              A disciplined, risk-mitigated process engineered to deliver on time, within scope, and above expectation.
            </p>
          </div>

          <div className="methodology-steps-row">
            {service.methodology.map((m, mIdx) => (
              <div key={mIdx} className="step-card-box">
                <div className="step-big-num">{m.step}</div>
                <h4 className="step-name">{m.name}</h4>
                <p className="step-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Real Client Proof */}
      {relatedStudies.length > 0 && (
        <section style={{ padding: '3.5rem 0', background: '#FFFFFF' }}>
          <div className="container">
            <div className="section-header-compact">
              <div>
                <div className="section-label">Real Client Results</div>
                <h2 className="section-title">See How We Deliver Value</h2>
              </div>
              <Link href="/work/" className="btn-outline-pill">
                View All Case Studies
              </Link>
            </div>

            <div className="home-showcase-grid">
              {relatedStudies.map((rs) => (
                <div key={rs.slug} className="approach-card home-service-card" style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <BrowserMockup caseStudy={rs} mode="card" />
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    {rs.industry}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.65rem' }}>
                    {rs.client} — {rs.domain}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {rs.summary}
                  </p>
                  <Link href={`/work/${rs.slug}/`} className="btn-black-pill" style={{ fontSize: '0.88rem', padding: '0.6rem 1.4rem' }}>
                    Read Case Study &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="faq-compact-section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <div className="section-label">Clear Answers</div>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="faq-container-list">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="faq-item-card">
                  <h3 className="faq-q-title">{faq.q}</h3>
                  <p className="faq-a-desc">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Block */}
      <section style={{ padding: '3.5rem 0', background: '#0D0E12', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
          <div className="section-label" style={{ color: '#94A3B8' }}>Start Your Build</div>
          <h2 className="cta-headline" style={{ color: '#FFFFFF' }}>
            Let’s discuss your project goals.
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Connect with our solution architects for a complimentary review of your current systems, roadmap, and growth targets.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" className="btn-black-pill" style={{ background: '#FFFFFF', color: '#000000', padding: '1rem 2.2rem' }}>
              Book Strategic Discovery Call
            </Link>
            <Link href="/services/" className="btn-outline-pill" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}>
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
