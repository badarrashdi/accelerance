import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BrowserMockup from '../../components/BrowserMockup';
import LavendoreVideoBanner from '../../components/LavendoreVideoBanner';
import Link from 'next/link';
import { caseStudiesList } from '../../data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return caseStudiesList.map((cs) => ({
    slug: cs.slug,
  }));
}

export function generateMetadata({ params }) {
  const caseStudy = caseStudiesList.find((c) => c.slug === params.slug);
  if (!caseStudy) return { title: 'Case Study | Accelerance Tech' };

  return {
    title: `${caseStudy.client} Case Study | Accelerance Tech`,
    description: caseStudy.summary,
    openGraph: {
      title: `${caseStudy.client} Case Study — ${caseStudy.title}`,
      description: caseStudy.summary,
    },
  };
}

export default function CaseStudyPage({ params }) {
  const caseStudy = caseStudiesList.find((c) => c.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = caseStudiesList
    .filter((c) => c.slug !== caseStudy.slug)
    .slice(0, 2);

  return (
    <main>
      <Header />

      {/* Case Study Header Hero */}
      <section className="case-study-header-deep" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
            <Link href="/work/" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B' }}>
              &larr; All Case Studies
            </Link>
            <span style={{ color: '#CBD5E1' }}>&bull;</span>
            {caseStudy.iconImage && (
              <img 
                src={caseStudy.iconImage} 
                alt="" 
                width="24" 
                height="24" 
                style={{ borderRadius: 6 }} 
              />
            )}
            <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563EB' }}>
              {caseStudy.client} &bull; {caseStudy.industry}
            </span>
          </div>

          <h1 className="page-hero-title" style={{ maxWidth: 1050 }}>
            {caseStudy.title}
          </h1>

          <p className="page-hero-subtext">
            {caseStudy.subtitle}
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <a 
              href={caseStudy.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-black-pill"
            >
              <span>Visit Live Website ({caseStudy.domain})</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
            <Link href="/contact/" className="btn-outline-pill">
              Request Similar Project Scope
            </Link>
          </div>

          {/* Full Interactive Browser Mockup / Video for Lavendore */}
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            {caseStudy.slug === 'lavendore' ? (
              <LavendoreVideoBanner caseStudy={caseStudy} />
            ) : (
              <BrowserMockup caseStudy={caseStudy} mode="full" />
            )}
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section style={{ borderBottom: '1px solid var(--border-light)', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', padding: '3.5rem 0', gap: '2rem' }}>
            {caseStudy.keyMetrics.map((m, i) => (
              <div key={i} style={{ borderLeft: '3px solid #2563EB', paddingLeft: '1.25rem' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#0F172A', lineHeight: 1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginTop: '0.4rem' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Deep Dive */}
      <section style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="case-study-deep-grid">
            {/* Main Narrative Column */}
            <div className="deep-story-section">
              <div className="deep-story-block">
                <div className="section-label">01 / The Challenge</div>
                <h3>The Bottleneck to Scalable Growth</h3>
                <p>{caseStudy.challenge}</p>
              </div>

              <div className="deep-story-block">
                <div className="section-label">02 / The Strategic Solution</div>
                <h3>Architecting a Modern Growth Engine</h3>
                <p>{caseStudy.solution}</p>
              </div>

              {/* Client Quote Box */}
              {caseStudy.testimonial && (
                <div className="quote-box-deluxe">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.15, position: 'absolute', top: '1.5rem', right: '2rem' }}>
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote>"{caseStudy.testimonial.quote}"</blockquote>
                  <div className="quote-author-info">
                    <div>
                      <div className="quote-author-name">{caseStudy.testimonial.author}</div>
                      <div className="quote-author-role">{caseStudy.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="deep-story-block">
                <div className="section-label">03 / The Business Outcome</div>
                <h3>Long-Term Revenue Impact</h3>
                <p>
                  By addressing technical friction points, elevating brand credibility, and optimizing every conversion stage, 
                  <strong> {caseStudy.client} ({caseStudy.domain})</strong> achieved sustainable performance gains that outpaced industry benchmarks.
                </p>
              </div>
            </div>

            {/* Sidebar Details */}
            <aside className="deep-sidebar">
              <div className="sidebar-card-box">
                <h4>Project Scope &amp; Deliverables</h4>
                <ul className="deliverables-checklist">
                  {caseStudy.deliverables.map((d, i) => (
                    <li key={i}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card-box">
                <h4>Client Snapshot</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>Client</span>
                    <strong>{caseStudy.client}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>Industry</span>
                    <strong>{caseStudy.industry}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>Geographic Market</span>
                    <strong>{caseStudy.region}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700 }}>Live Website</span>
                    <a href={caseStudy.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', fontWeight: 700 }}>
                      {caseStudy.domain} &rarr;
                    </a>
                  </div>
                </div>
              </div>

              <div className="sidebar-card-box" style={{ background: '#000000', color: '#FFFFFF' }}>
                <h4 style={{ color: '#FFFFFF' }}>Have a similar project?</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  Book a strategic consultation with our delivery leads to review your requirements and growth targets.
                </p>
                <Link href="/contact/" className="btn-black-pill" style={{ background: '#FFFFFF', color: '#000000', width: '100%', justifyContent: 'center' }}>
                  Start Your Project
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-compact">
            <div>
              <div className="section-label">More Proven Work</div>
              <h2 className="section-title">Explore Related Success Stories</h2>
            </div>
            <Link href="/work/" className="btn-outline-pill">
              View All Case Studies
            </Link>
          </div>

          <div className="home-services-cards-grid">
            {relatedCaseStudies.map((rcs) => (
              <div key={rcs.slug} className="approach-card home-service-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {rcs.industry}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.25 }}>
                    {rcs.client} — {rcs.domain}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {rcs.summary}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>
                    {rcs.keyMetrics[0].value} {rcs.keyMetrics[0].label}
                  </span>
                  <Link href={`/work/${rcs.slug}/`} className="btn-outline-pill" style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
                    Read Story &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
