import Link from 'next/link';
import { servicesList, agencyInfo } from '../data';

export default function Footer() {
  return (
    <footer className="abox-cta-section" id="contact-footer">
      <div className="container">
        {/* Global Growth CTA Block */}
        <div className="cta-box-inner">
          <div className="section-label" style={{ color: '#94A3B8' }}>Start Your Digital Transformation</div>
          <h2 className="cta-headline">Ready to outpace your competition?</h2>
          <p className="cta-sub">
            Let’s build a high-performance digital presence that elevates your brand and drives predictable commercial growth.
          </p>
          <div className="footer-cta-buttons">
            <Link 
              href="/contact/" 
              className="btn-black-pill footer-cta-btn" 
              style={{ background: '#FFFFFF', color: '#000000', fontSize: '1.05rem', padding: '1.1rem 2.4rem' }}
            >
              <span>Get a Customized Proposal</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a 
              href="https://wa.me/919711091363" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-pill footer-cta-btn" 
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF', background: 'rgba(255,255,255,0.06)', padding: '1.1rem 2rem' }}
            >
              <span>Chat on WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Brand Header inside Footer */}
        <div className="footer-brand-header">
          <Link href="/" aria-label="Accelerance Home">
            <img src="/brand/logo-white.svg" alt="Accelerance Technology" className="footer-brand-logo" />
          </Link>
          <div style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
            Engineering Digital Growth Across Delhi NCR &bull; London &bull; Dubai &bull; Bahrain &bull; New Jersey &bull; Sydney
          </div>
        </div>

        {/* Directory Navigation Matrix */}
        <div className="footer-directory-grid">
          {/* Column 1: Core Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              {servicesList.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="footer-col-title">Company &amp; Hubs</h4>
            <ul className="footer-links-list">
              <li><Link href="/about/" className="footer-link">Get to Know Us</Link></li>
              <li><Link href="/work/" className="footer-link">Our Work &amp; Portfolio</Link></li>
              <li><Link href="/services/" className="footer-link">Full Services Matrix</Link></li>
              <li><Link href="/contact/" className="footer-link">Let&apos;s Connect &amp; Offices</Link></li>
              <li style={{ marginTop: '1rem', color: '#94A3B8', fontSize: '0.85rem' }}>
                <strong>International Presence:</strong><br />
                Delhi &bull; London &bull; Dubai &bull; Manama &bull; New Jersey (USA)
              </li>
            </ul>
          </div>

          {/* Column 3: Offices & Contact */}
          <div>
            <h4 className="footer-col-title">Let&apos;s Connect</h4>
            <div style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              <p><strong>Global Delivery HQ:</strong><br />Dariyaganj, Delhi, India</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Email:</strong> sales@accelerance.in</p>
              <p style={{ marginTop: '0.5rem' }}><strong>WhatsApp:</strong> +91 9711091363</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Response Time:</strong> Within 24 business hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="footer-nav-row">
          <div>&copy; {new Date().getFullYear()} Accelerance Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link href="/about/">Get to Know Us</Link>
            <Link href="/services/">Services</Link>
            <Link href="/work/">Work</Link>
            <Link href="/contact/">Let&apos;s Connect</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
