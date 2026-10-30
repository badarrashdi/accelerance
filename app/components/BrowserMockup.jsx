"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function BrowserMockup({ caseStudy, mode = "card" }) {
  const [imgError, setImgError] = useState(false);
  const [iconError, setIconError] = useState(false);

  if (!caseStudy) return null;

  const isCompact = mode === "card";
  const showScreenshot = caseStudy.screenshotImage && !imgError;

  return (
    <div className={`browser-mockup-frame ${isCompact ? 'mockup-card' : 'mockup-full'}`}>
      {/* Top Browser Bar with macOS buttons, SSL bar, client favicon and visit link */}
      <div className="browser-chrome-bar">
        <div className="browser-window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="browser-address-field">
          {caseStudy.iconImage && !iconError ? (
            <img 
              src={caseStudy.iconImage} 
              alt="" 
              width="15" 
              height="15" 
              style={{ borderRadius: 3, display: 'inline-block', flexShrink: 0 }} 
              onError={() => setIconError(true)}
            />
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ssl-lock-icon">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          )}
          <span className="browser-domain-text">https://{caseStudy.domain}</span>
          <span className="ssl-secure-badge">Verified</span>
        </div>

        <div className="browser-quick-actions">
          <a 
            href={caseStudy.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="browser-visit-btn"
            title={`Visit live site ${caseStudy.domain}`}
          >
            <span>Live Site</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>

      {/* High-Resolution Screenshot Image Display */}
      {showScreenshot ? (
        <div className="browser-screenshot-container">
          <img 
            src={caseStudy.screenshotImage} 
            alt={`${caseStudy.client} Website Live Snapshot (${caseStudy.domain})`}
            className="browser-screenshot-media"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        </div>
      ) : (
        /* Fallback Viewport Screen */
        <div className="browser-viewport-screen" style={{ '--site-accent': caseStudy.accentColor, '--site-theme': caseStudy.themeColor }}>
          <div className="mock-site-header">
            <div className="mock-brand-badge">
              {caseStudy.iconImage && !iconError ? (
                <img src={caseStudy.iconImage} alt="" width="20" height="20" style={{ borderRadius: 4 }} onError={() => setIconError(true)} />
              ) : (
                <span className="mock-brand-logo-dot" style={{ backgroundColor: caseStudy.accentColor }}></span>
              )}
              <span className="mock-brand-title">{caseStudy.client}</span>
            </div>
            <div className="mock-nav-links">
              <span>Home</span>
              <span>Products</span>
              <span>About</span>
              <span className="mock-nav-cta" style={{ borderColor: caseStudy.accentColor, color: caseStudy.accentColor }}>
                Inquire / Shop
              </span>
            </div>
          </div>

          <div className="mock-hero-banner">
            <div className="mock-hero-content">
              <div className="mock-badge-pill" style={{ color: caseStudy.accentColor, backgroundColor: `${caseStudy.accentColor}1A` }}>
                {caseStudy.industry}
              </div>
              <h4 className="mock-headline">{caseStudy.snapshotPreview?.header || caseStudy.title}</h4>
              
              {caseStudy.snapshotPreview?.searchPlaceholder && (
                <div className="mock-search-bar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span>{caseStudy.snapshotPreview.searchPlaceholder}</span>
                </div>
              )}

              {caseStudy.snapshotPreview?.highlights && (
                <div className="mock-highlights-row">
                  {caseStudy.snapshotPreview.highlights.map((h, i) => (
                    <span key={i} className="mock-highlight-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: caseStudy.accentColor }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {caseStudy.snapshotPreview?.featuredCategories && (
            <div className="mock-categories-grid">
              {caseStudy.snapshotPreview.featuredCategories.map((cat, i) => (
                <div key={i} className="mock-category-pill">
                  <span className="cat-dot" style={{ backgroundColor: caseStudy.accentColor }}></span>
                  <span>{cat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Snapshot Verification Strip */}
      <div className="mock-viewport-footer" style={{ padding: '0.75rem 1.25rem', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', gap: '0.65rem' }}>
          <div className="mock-stat-pill">
            <strong>{caseStudy.keyMetrics[0].value}</strong> {caseStudy.keyMetrics[0].label}
          </div>
          <div className="mock-stat-pill">
            <strong>{caseStudy.keyMetrics[1].value}</strong> {caseStudy.keyMetrics[1].label}
          </div>
        </div>
        <div className="mock-status-live">
          <span className="pulse-green"></span>
          Live Verified Platform
        </div>
      </div>
    </div>
  );
}
