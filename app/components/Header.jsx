"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { servicesList, agencyInfo } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key press or screen resize above tablet breakpoint
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
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
    <>
      <header className={`abox-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo" aria-label="Accelerance Tech Home" onClick={() => setMobileMenuOpen(false)}>
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

              {/* Get to Know Us */}
              <li>
                <Link href="/about/" className="nav-link">Get to Know Us</Link>
              </li>

              {/* Let's Connect */}
              <li>
                <Link href="/contact/" className="nav-link">Let&apos;s Connect</Link>
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
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop - Rendered outside header to escape backdrop-filter containing block */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-nav-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="container mobile-nav-content">
              <div className="mobile-nav-group">
                <span className="mobile-nav-label">Navigation</span>
                <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Home</span>
                  <span className="mobile-nav-link-arrow">&rarr;</span>
                </Link>
                <Link href="/services/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Services Hub</span>
                  <span className="mobile-nav-link-arrow">&rarr;</span>
                </Link>
                <Link href="/work/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Work &amp; Case Studies</span>
                  <span className="mobile-nav-link-arrow">&rarr;</span>
                </Link>
                <Link href="/about/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Get to Know Us</span>
                  <span className="mobile-nav-link-arrow">&rarr;</span>
                </Link>
                <Link href="/contact/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <span>Let&apos;s Connect</span>
                  <span className="mobile-nav-link-arrow">&rarr;</span>
                </Link>
              </div>

              <div className="mobile-nav-group">
                <span className="mobile-nav-label">Specialized Services</span>
                <div className="mobile-services-subgrid">
                  {servicesList.map((s) => (
                    <Link 
                      key={s.slug} 
                      href={`/services/${s.slug}/`} 
                      className="mobile-service-subitem"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mobile-service-badge">{s.num}</span>
                      <span className="mobile-service-name">{s.title}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 'auto', opacity: 0.5 }}>
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mobile-nav-footer">
                <Link href="/contact/" className="btn-black-pill mobile-nav-cta" onClick={() => setMobileMenuOpen(false)}>
                  <span>Request a Consultation &rarr;</span>
                </Link>
                <a 
                  href="https://wa.me/919711091363?text=Hi%20Accelerance%2C%20I%20would%20like%20to%20discuss%20a%20project" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-nav-whatsapp"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Chat on WhatsApp (+91 9711091363)</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}