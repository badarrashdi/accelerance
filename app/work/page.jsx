"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrowserMockup from '../components/BrowserMockup';
import Link from 'next/link';
import { caseStudiesList } from '../data';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies = activeFilter === "all"
    ? caseStudiesList
    : caseStudiesList.filter((c) => c.category === activeFilter);

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "eCommerce & Retail" },
    { id: "b2b", label: "B2B & Commercial Contracting" },
    { id: "realestate", label: "Luxury Real Estate" },
    { id: "travel", label: "Travel & Hospitality" },
  ];

  return (
    <main>
      <Header />

      {/* Hero Header */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-eyebrow">
            <span className="dot-pulse"></span>
            PORTFOLIO &amp; IMPACT METRICS
          </div>
          <h1 className="page-hero-title">
            Digital Platforms Built for Market Leadership.
          </h1>
          <p className="page-hero-subtext">
            Explore live platforms engineered for leading enterprises across India, the United Kingdom, 
            Australia, Bahrain, and the GCC. Designed for measurable conversion, velocity, and enduring brand equity.
          </p>

          {/* Filter Bar */}
          <div className="work-filter-bar">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`work-filter-chip ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Elevated Showcase */}
      <section style={{ padding: '3rem 0 3.5rem 0', background: '#FAFAFA' }}>
        <div className="container">
          <div className="case-study-showcase-grid">
            {filteredStudies.map((work, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={work.id} className={`case-study-hero-card reveal-fade-up ${isEven ? 'reversed' : ''}`}>
                  {/* Left Column: Narrative & Metrics */}
                  <div className="case-study-card-content">
                    <div className="case-study-meta-eyebrow">
                      <span>{work.industry}</span>
                      <span>&bull;</span>
                      <span style={{ color: '#64748B' }}>{work.region}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1rem' }}>
                      {work.iconImage && (
                        <img 
                          src={work.iconImage} 
                          alt={`${work.client} Logo`} 
                          width="44" 
                          height="44" 
                          style={{ borderRadius: 12, display: 'block', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} 
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      )}
                      <div>
                        <h2 className="case-study-card-title" style={{ margin: 0, fontSize: '1.9rem' }}>
                          {work.client}
                        </h2>
                        <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#2563EB', fontWeight: 600 }}>{work.domain}</span>
                      </div>
                    </div>

                    <p className="case-study-card-summary">
                      {work.summary}
                    </p>

                    {/* Metrics Mini-Grid */}
                    <div className="case-study-metrics-strip-mini">
                      {work.keyMetrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="metric-mini-box">
                          <div className="metric-mini-val">{m.value}</div>
                          <div className="metric-mini-lbl">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Deliverable Tags */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                      {work.deliverables.slice(0, 3).map((d, dIdx) => (
                        <span key={dIdx} className="mini-tag">
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="case-study-actions">
                      <Link href={`/work/${work.slug}/`} className="btn-black-pill">
                        <span>Read Case Study</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>

                      <a 
                        href={work.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-outline-pill"
                      >
                        <span>Visit {work.domain}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Live Browser Snapshot Frame */}
                  <div className="case-study-card-visual">
                    <BrowserMockup caseStudy={work} mode="card" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Impact CTA */}
      <section style={{ padding: '3.5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 840 }}>
          <div className="section-label">Your Next Milestone</div>
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
            Ready to Build a Platform that Truly Moves the Needle?
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Whether launching a high-converting eCommerce store, redesigning a corporate digital flagship, 
            or capturing high-intent search traffic, our senior engineering pods deliver on time and on budget.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" className="btn-black-pill">
              Schedule Strategic Briefing
            </Link>
            <Link href="/services/" className="btn-outline-pill">
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
