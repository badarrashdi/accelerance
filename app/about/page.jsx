import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { agencyInfo } from '../data';

export const metadata = {
  title: 'Get to Know Us | Digital Growth Agency | Accelerance Tech Pvt. Ltd.',
  description: 'Get to know Accelerance Tech Pvt. Ltd. — an award-winning digital agency uniting senior UI/UX design, full-stack engineering, and performance marketing to deliver commercial growth.',
  alternates: {
    canonical: 'https://accelerance.tech/about/',
  },
  openGraph: {
    title: 'Get to Know Us | Accelerance Tech Pvt. Ltd.',
    description: 'Learn about Accelerance Tech — an award-winning digital agency uniting senior UI/UX design, full-stack engineering, and performance marketing.',
    url: 'https://accelerance.tech/about/',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Business Outcomes Over Code Buzzwords",
      desc: "Clients don't buy JavaScript frameworks or server architectures; they invest in revenue growth, customer acquisition, and brand authority. We frame every conversation around measurable commercial results.",
    },
    {
      title: "Radical Transparency",
      desc: "No hidden subcontractor markups, no proprietary CMS lock-in, and no vanity metrics. You receive direct access to our practitioners, real-time code repositories, and unvarnished performance reports.",
    },
    {
      title: "Craftsmanship Meets Speed",
      desc: "We refuse to choose between beautiful aesthetics and engineering velocity. Our structured delivery sprints ensure high polish delivered on disciplined schedules.",
    },
    {
      title: "Full-Funnel Accountability",
      desc: "Building a great website is only step one. We optimize the entire customer lifecycle—from the initial Google search click to the final CRM sale and post-purchase retention sequence.",
    },
  ];

  return (
    <main>
      <Header />

      {/* About Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-eyebrow">
            <span className="dot-pulse"></span>
            GET TO KNOW US &bull; ACCELERANCE TECH
          </div>
          <h1 className="page-hero-title">
            Engineering Digital Advantage for Ambitious Brands.
          </h1>
          <p className="page-hero-subtext">
            We are a digital growth agency uniting world-class design, modern engineering, 
            and data-driven performance marketing. Headquartered in Delhi NCR with active delivery 
            across London &amp; the UK, Dubai, Bahrain, the United States (New Jersey), and global markets.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" className="btn-black-pill">
              Work With Us
            </Link>
            <Link href="/work/" className="btn-outline-pill">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Metric Strip */}
      <section className="metric-strip">
        {agencyInfo.metrics.map((m, i) => (
          <div key={i} className="metric-box reveal-fade-up">
            <div className="metric-val">{m.value}</div>
            <div className="metric-lbl"><strong>{m.label}</strong> — {m.desc}</div>
          </div>
        ))}
      </section>

      {/* Narrative Section: Who We Are & Our Story */}
      <section style={{ padding: '3.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal-fade-up">
              <div className="section-label">Our Story</div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Born to Replace the Broken Agency Model.
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Traditional digital agencies operate in silos: creative design agencies build pretty mockups that can't be coded efficiently, IT developers deliver rigid code without aesthetic sensibility, and marketing agencies run ad spend on broken landing pages.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Accelerance Tech was founded to bridge this divide. We assemble senior, cross-functional pods where strategists, brand designers, full-stack engineers, and conversion analysts collaborate simultaneously on your project. The result? Digital platforms that captivate users, load instantaneously, and reliably generate inbound pipeline.
              </p>
            </div>

            <div className="approach-card reveal-fade-up" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', borderRadius: '24px', padding: '2.5rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: '#2563EB', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                The Accelerance Standard
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                100% In-House Senior Talent. Zero Junior Outsourcing.
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                When you partner with us, your project is managed directly by seasoned practitioners who have shipped high-volume platforms for market leaders. No layers of non-technical account managers playing telephone.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge-tag">Direct Architect Access</span>
                <span className="badge-tag">Sprint Deliverables</span>
                <span className="badge-tag">Complete IP Handover</span>
                <span className="badge-tag">ISO 27001 Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-compact reveal-fade-up">
            <div>
              <div className="section-label">Our Principles</div>
              <h2 className="section-title">What Guides Every Engagement</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div key={idx} className="approach-card reveal-fade-up" style={{ padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800, color: '#2563EB', marginBottom: '1rem' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.85rem' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Regional Hubs */}
      <section style={{ padding: '3.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header-compact">
            <div>
              <div className="section-label">Global Reach &bull; Local Delivery</div>
              <h2 className="section-title">Our International Offices</h2>
            </div>
            <p style={{ maxWidth: 460, color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Strategic hubs positioned to deliver world-class velocity across multiple timezones.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {agencyInfo.offices.map((office, idx) => (
              <div key={idx} className="approach-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {office.country}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.2rem' }}>
                      {office.city}
                    </h3>
                  </div>
                  {office.isHQ && (
                    <span className="mini-tag" style={{ background: '#EFF6FF', color: '#2563EB', borderColor: '#BFDBFE' }}>
                      Global HQ
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {office.address}
                </p>

                <div style={{ fontSize: '0.88rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ color: '#0F172A', fontWeight: 600 }}>{office.phone}</span>
                  <span style={{ color: '#64748B' }}>{office.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '3.5rem 0', background: '#0D0E12', color: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 820 }}>
          <div className="section-label" style={{ color: '#94A3B8' }}>Partner With Us</div>
          <h2 className="cta-headline" style={{ color: '#FFFFFF' }}>
            Let’s build something extraordinary together.
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Share your goals with our team. We’ll review your current digital footprint and prepare a detailed, actionable growth plan.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" className="btn-black-pill" style={{ background: '#FFFFFF', color: '#000000', padding: '1rem 2.2rem' }}>
              Start Your Project
            </Link>
            <Link href="/work/" className="btn-outline-pill" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}>
              See Featured Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
