"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { servicesList, agencyInfo } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`abox-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Logo */}
        <Link href="/" className="brand-logo" aria-label="Accelerance Tech Home">
          <img src="/brand/logo.svg" alt="Accelerance Tech" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {/* Services Dropdown */}
            <li 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link href="/services/" className="nav-link nav-link-dropdown">
                <span>Services</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`chevron ${servicesDropdownOpen ? 'rotated' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>

              <div className={`nav-mega-dropdown ${servicesDropdownOpen ? 'is-visible' : ''}`}>
                <div className="mega-dropdown-header">
                  <div>
                    <span className="mega-eyebrow">End-to-End Capabilities</span>
                    <h5 className="mega-title">Digital Solutions for Growth</h5>
                  </div>
                  <Link href="/services/" className="mega-view-all">
                    View All Services &rarr;
                  </Link>
                </div>

                <div className="mega-dropdown-grid">
                  {servicesList.map((srv) => (
                    <Link key={srv.slug} href={`/services/${srv.slug}/`} className="mega-service-item">
                      <div className="mega-item-icon">
                        <span className="mega-num">{srv.num}</span>
                      </div>
                      <div className="mega-item-text">
                        <span className="mega-item-title">{srv.title}</span>
                        <span className="mega-item-desc">{srv.tagline}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mega-dropdown-footer">
                  <span>Need help determining the best strategy for your business?</span>
                  <Link href="/contact/" className="mega-footer-link">
                    Speak with a Senior Strategist &rarr;
                  </Link>
                </div>
              </div>
            </li>

            {/* Work / Case Studies */}
            <li>
              <Link href="/work/" className="nav-link">
                <span>Work &amp; Case Studies</span>
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link href="/about/" className="nav-link">About Us</Link>
            </li>

            {/* Contact */}
            <li>
              <Link href="/contact/" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="header-actions">
          <Link href="/contact/" className="btn-black-pill header-cta-desktop">
            <span>Get a Proposal</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <button 
            type="button" 
            className="mobile-menu-trigger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="container mobile-nav-content">
            <div className="mobile-nav-group">
              <span className="mobile-nav-label">Navigation</span>
              <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/services/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services Hub</Link>
              <Link href="/work/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Work &amp; Case Studies</Link>
              <Link href="/about/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link href="/contact/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>

            <div className="mobile-nav-group">
              <span className="mobile-nav-label">Services</span>
              <div className="mobile-services-subgrid">
                {servicesList.map((s) => (
                  <Link 
                    key={s.slug} 
                    href={`/services/${s.slug}/`} 
                    className="mobile-service-subitem"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{s.num}. {s.shortTitle}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-nav-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/contact/" className="btn-black-pill" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                Request a Consultation
              </Link>
              <a 
                href="https://wa.me/919711091363?text=Hi%20Accelerance%2C%20I%20would%20like%20to%20discuss%20a%20project" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-pill" 
                style={{ width: '100%', justifyContent: 'center', borderColor: '#25D366', color: '#15803D', background: '#F0FDF4' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>WhatsApp: +91 9711091363</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
