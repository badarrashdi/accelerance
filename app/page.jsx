import Header from './components/Header';
import Footer from './components/Footer';
import HeroVideoBanner from './components/HeroVideoBanner';
import HeroAnimatedHeading from './components/HeroAnimatedHeading';
import CaseStudyCarousel from './components/CaseStudyCarousel';
import Link from 'next/link';
import { caseStudiesList, servicesList, agencyInfo } from './data';

export const metadata = {
  title: 'Accelerance Tech | Award-Winning Digital Growth, Web & eCommerce Agency',
  description: 'Full-service digital agency delivering high-performance websites, scalable eCommerce, mobile applications, performance marketing, and CRM automation for ambitious brands.',
  alternates: {
    canonical: 'https://accelerance.tech/',
  },
  openGraph: {
    title: 'Accelerance Tech | Award-Winning Digital Growth, Web & eCommerce Agency',
    description: 'Full-service digital agency delivering high-performance websites, scalable eCommerce, mobile applications, performance marketing, and CRM automation.',
    url: 'https://accelerance.tech/',
  },
};

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* 1. Hero Video Banner with Agency Copy, Controls & Live Performance Stats */}
      <HeroVideoBanner />

      {/* 2. Current Hero Heading with Modern Staggered Kinetic Text Animation */}
      <HeroAnimatedHeading />

      {/* 3. Selected Case Studies Carousel (No Video, Clean Image + Heading Overlay + Link) */}
      <section className="section-work" id="work">
        <div className="container">
          <CaseStudyCarousel caseStudies={caseStudiesList} />
        </div>
      </section>

      {/* 5. Full-Lifecycle Capabilities / Services Grid */}
      <section className="home-services-section">
        <div className="container">
          <div className="section-header-compact reveal-fade-up">
            <div>
              <div className="section-label">Full-Lifecycle Capabilities</div>
              <h2 className="section-title">End-to-End Digital Solutions to Drive Growth.</h2>
            </div>
            <Link href="/services/" className="btn-outline-pill hover-slide-right">
              <span>View All Services</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="home-services-cards-grid">
            {servicesList.map((s) => (
              <div key={s.slug} className="approach-card home-service-card reveal-fade-up">
                <div>
                  <div className="service-category-tag">
                    {s.num} / {s.category}
                  </div>
                  <h3 className="service-card-title">
                    {s.title}
                  </h3>
                  <p className="service-card-tagline">
                    {s.tagline}
                  </p>
                </div>
                <div className="service-card-footer">
                  <Link href={`/services/${s.slug}/`} className="mega-view-all">
                    <span>Explore Capabilities</span>
                    <span className="arrow-hover">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proprietary 4-Step Growth Framework */}
      <section className="home-methodology-section">
        <div className="container">
          <div className="section-header-compact reveal-fade-up">
            <div>
              <div className="section-label">Methodology</div>
              <h2 className="section-title">The Accelerance Growth Framework</h2>
            </div>
            <p className="section-desc-compact">
              From initial market audit to launch and sustained commercial scaling, our methodology eliminates guesswork.
            </p>
          </div>

          <div className="methodology-steps-row">
            <div className="step-card-box reveal-fade-up">
              <div className="step-big-num">01</div>
              <h4 className="step-name">Audit &amp; Strategy</h4>
              <p className="step-desc">Competitor benchmarking, customer persona mapping, and conversion funnel architecture.</p>
            </div>
            <div className="step-card-box reveal-fade-up">
              <div className="step-big-num">02</div>
              <h4 className="step-name">Design &amp; UI/UX</h4>
              <p className="step-desc">Interactive Figma prototypes, typography systems, and frictionless user journeys.</p>
            </div>
            <div className="step-card-box reveal-fade-up">
              <div className="step-big-num">03</div>
              <h4 className="step-name">Build &amp; Integrate</h4>
              <p className="step-desc">Modular, sub-second engineering, payment gateways, and bidirectional CRM syncing.</p>
            </div>
            <div className="step-card-box reveal-fade-up">
              <div className="step-big-num">04</div>
              <h4 className="step-name">Scale &amp; Automate</h4>
              <p className="step-desc">Organic SEO dominance, performance marketing, and automated customer nurture funnels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Accelerance Tech Comparison Grid */}
      <section className="section-approach">
        <div className="container">
          <div className="section-header-compact reveal-fade-up">
            <div>
              <div className="section-label">Why Accelerance Tech</div>
              <h2 className="section-title">Design Quality Meets Commercial Rigor.</h2>
            </div>
          </div>

          <div className="approach-grid">
            <div className="approach-card reveal-fade-up">
              <h3 className="approach-header">Traditional Generalists</h3>
              <p>Crowded agencies using slow monolithic page builders, junior outsourced talent, and fragmented tools without revenue accountability.</p>
              <ul className="checklist" style={{ color: 'var(--text-secondary)' }}>
                <li>
                  <span className="checklist-cross-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span>Slow 4+ second page load speeds causing 50%+ bounce rate</span>
                </li>
                <li>
                  <span className="checklist-cross-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span>Junior developers learning on your project dollar</span>
                </li>
                <li>
                  <span className="checklist-cross-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span>Proprietary CMS lock-in and surprise maintenance fees</span>
                </li>
                <li>
                  <span className="checklist-cross-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span>Vanity traffic metrics disconnected from closed sales</span>
                </li>
              </ul>
            </div>

            <div className="approach-card highlight reveal-fade-up">
              <h3 className="approach-header">The Accelerance Standard</h3>
              <p>Outcome-driven digital studio uniting senior design with robust full-stack engineering and proven commercial performance.</p>
              <ul className="checklist" style={{ color: '#E2E8F0' }}>
                <li style={{ color: '#FFFFFF' }}>
                  <span className="checklist-check-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Sub-1.2s average load speeds with 100/100 Core Web Vitals</span>
                </li>
                <li style={{ color: '#FFFFFF' }}>
                  <span className="checklist-check-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Direct access to senior architects and seasoned strategists</span>
                </li>
                <li style={{ color: '#FFFFFF' }}>
                  <span className="checklist-check-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Complete 100% IP and clean source code ownership</span>
                </li>
                <li style={{ color: '#FFFFFF' }}>
                  <span className="checklist-check-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>Relentless focus on qualified pipeline, AOV, and conversions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Global Regional Hubs */}
      <section className="home-offices-section">
        <div className="container">
          <div className="section-header-compact reveal-fade-up">
            <div>
              <div className="section-label">Global Presence</div>
              <h2 className="section-title">Local Presence. Global Velocity.</h2>
            </div>
            <p className="section-desc-compact">
              Headquartered in Delhi NCR with active client delivery hubs across London, Dubai, Bahrain, New Jersey (USA), and Sydney.
            </p>
          </div>

          <div className="home-offices-grid">
            {agencyInfo.offices.map((office, idx) => (
              <div key={idx} className="approach-card office-card reveal-fade-up">
                <div>
                  <span className="office-country-tag">
                    {office.country}
                  </span>
                  <h3 className="office-city-title">
                    {office.city}
                  </h3>
                  <p className="office-address-text">
                    {office.address}
                  </p>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.65rem' }}>
                    {office.phone}
                  </p>
                </div>
                <div className="office-card-footer">
                  <Link href="/contact/" className="office-contact-link">
                    <span>Let&apos;s Connect</span>
                    <span className="arrow-hover">&rarr;</span>
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
