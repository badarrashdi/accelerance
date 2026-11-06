"use client";

import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { servicesList, agencyInfo } from '../data';

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [hasDomain, setHasDomain] = useState("yes"); // 'yes' | 'no'
  const [domainUrl, setDomainUrl] = useState("");
  const [hasHosting, setHasHosting] = useState("yes"); // 'yes' | 'no' | 'not-sure'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dropdownRef = useRef(null);

  // Close multiselect dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleService = (title) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter((s) => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const removeService = (e, title) => {
    e.stopPropagation();
    setSelectedServices(selectedServices.filter((s) => s !== title));
  };

  const selectAllServices = () => {
    setSelectedServices(servicesList.map((s) => s.title));
  };

  const clearAllServices = () => {
    setSelectedServices([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const payload = {
      ...formData,
      selectedServices,
      budget,
      timeline,
      hasDomain,
      domainUrl: hasDomain === 'yes' ? domainUrl : '',
      hasHosting,
    };

    try {
      let res = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // If /api/contact/ returns 404 on static hosting without rewrite, fall back to /api/contact.php
      if (res.status === 404) {
        res = await fetch('/api/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(err.message || 'Something went wrong while sending your request. Please try again or reach out directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Header />

      {/* Contact Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-eyebrow">
            <span className="dot-pulse"></span>
            LET&apos;S CONNECT &bull; FAST TURNAROUND
          </div>
          <h1 className="page-hero-title">
            Let’s Engineer Your Digital Advantage.
          </h1>
          <p className="page-hero-subtext">
            Tell us about your objectives, timeline, and challenges. Our senior solutions architects will review 
            your brief and provide an actionable proposal within 24 business hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Office Grid */}
      <section style={{ padding: '2.5rem 0 3.5rem 0', background: '#FAFAFA' }}>
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Streamlined Proposal Builder Form */}
            <div className="proposal-form-card reveal-fade-up">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto 1.75rem auto' }}>
                    Your project brief has been received by our senior team. 
                    We will review your requirements and reach out via email or WhatsApp within 24 hours.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a 
                      href="https://wa.me/919711091363" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-black-pill"
                    >
                      <span>Need Immediate Chat? WhatsApp Us</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <button 
                      type="button" 
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-pill"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Services Multiselect Dropdown */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563EB' }}>
                        Step 01 / Scope &amp; Tech
                      </span>
                      {selectedServices.length > 0 && (
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#16A34A' }}>
                          ✓ {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} selected
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                      What services are you exploring?
                    </h3>

                    {/* Multiselect Dropdown Container */}
                    <div className="custom-multiselect-container" ref={dropdownRef}>
                      <div 
                        className={`custom-multiselect-trigger ${isServicesOpen ? 'is-open' : ''}`}
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="listbox"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsServicesOpen(!isServicesOpen);
                          }
                        }}
                      >
                        {selectedServices.length === 0 ? (
                          <span className="custom-multiselect-placeholder">
                            Select one or more services...
                          </span>
                        ) : (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
                            {selectedServices.map((srv) => (
                              <span key={srv} className="custom-multiselect-tag">
                                <span>{srv}</span>
                                <button
                                  type="button"
                                  onClick={(e) => removeService(e, srv)}
                                  className="custom-multiselect-tag-remove"
                                  aria-label={`Remove ${srv}`}
                                >
                                  &times;
                                </button>
                              </span>
                            ))}
                          </div>
                        )}

                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className={`custom-multiselect-arrow ${isServicesOpen ? 'is-open' : ''}`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>

                      {isServicesOpen && (
                        <div className="custom-multiselect-menu" role="listbox">
                          <div className="custom-multiselect-header">
                            <span style={{ color: '#64748B', fontWeight: 600 }}>
                              {selectedServices.length} of {servicesList.length} selected
                            </span>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <button 
                                type="button" 
                                onClick={selectAllServices}
                                className="custom-multiselect-header-btn"
                              >
                                Select All
                              </button>
                              <span style={{ color: '#CBD5E1' }}>|</span>
                              <button 
                                type="button" 
                                onClick={clearAllServices}
                                className="custom-multiselect-header-btn"
                                style={{ color: '#64748B' }}
                              >
                                Clear
                              </button>
                            </div>
                          </div>

                          <div className="custom-multiselect-options-list">
                            {servicesList.map((srv) => {
                              const isSelected = selectedServices.includes(srv.title);
                              return (
                                <div
                                  key={srv.slug}
                                  onClick={() => toggleService(srv.title)}
                                  className={`custom-multiselect-item ${isSelected ? 'is-selected' : ''}`}
                                  role="option"
                                  aria-selected={isSelected}
                                >
                                  <div className="custom-multiselect-checkbox">
                                    {isSelected && (
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                                        <polyline points="20 6 9 17 4 12" />
                                      </svg>
                                    )}
                                  </div>
                                  <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontWeight: isSelected ? 700 : 600, color: isSelected ? '#0F172A' : '#334155' }}>
                                      {srv.title}
                                    </div>
                                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                      {srv.tagline}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Budget & Timeline Choices */}
                  <div className="form-two-cols" style={{ marginBottom: '1.5rem' }}>
                    <div>
                      <label className="form-label-bold">Estimated Budget</label>
                      <select 
                        value={budget} 
                        onChange={(e) => setBudget(e.target.value)}
                        className="form-input-field"
                      >
                        <option value="">Select an investment range...</option>
                        <option value="5k-15k">$5,000 – $15,000</option>
                        <option value="15k-30k">$15,000 – $30,000</option>
                        <option value="30k-60k">$30,000 – $60,000</option>
                        <option value="60k+">$60,000+ Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label-bold">Target Launch Timeline</label>
                      <select 
                        value={timeline} 
                        onChange={(e) => setTimeline(e.target.value)}
                        className="form-input-field"
                      >
                        <option value="">Select timeframe...</option>
                        <option value="immediate">Immediate (&lt; 1 Month)</option>
                        <option value="1-3-months">1 to 3 Months</option>
                        <option value="3-6-months">3 to 6 Months</option>
                        <option value="planning">Exploratory / Planning Stage</option>
                      </select>
                    </div>
                  </div>

                  {/* Domain & Hosting Readiness Fields */}
                  <div style={{ marginBottom: '1.75rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0F172A', marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <span>Domain &amp; Web Hosting Infrastructure</span>
                    </div>

                    <div className="form-two-cols" style={{ gap: '1rem', alignItems: 'start' }}>
                      {/* Domain Field */}
                      <div>
                        <label className="form-label-bold" style={{ fontSize: '0.86rem' }}>
                          Do you already own a domain?
                        </label>
                        <div className="pill-select-grid">
                          <button
                            type="button"
                            className={`pill-select-btn ${hasDomain === 'yes' ? 'active' : ''}`}
                            onClick={() => setHasDomain('yes')}
                          >
                            {hasDomain === 'yes' && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            Yes, I have one
                          </button>
                          <button
                            type="button"
                            className={`pill-select-btn ${hasDomain === 'no' ? 'active' : ''}`}
                            onClick={() => setHasDomain('no')}
                          >
                            {hasDomain === 'no' && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            No, need new
                          </button>
                        </div>

                        {hasDomain === 'yes' && (
                          <div className="domain-input-box">
                            <input
                              type="text"
                              placeholder="e.g. yourcompany.com"
                              value={domainUrl}
                              onChange={(e) => setDomainUrl(e.target.value)}
                              className="form-input-field"
                              style={{ fontSize: '0.88rem', padding: '0.65rem 0.85rem' }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Hosting Field */}
                      <div>
                        <label className="form-label-bold" style={{ fontSize: '0.86rem' }}>
                          Do you have web hosting / cloud?
                        </label>
                        <div className="pill-select-grid">
                          <button
                            type="button"
                            className={`pill-select-btn ${hasHosting === 'yes' ? 'active' : ''}`}
                            onClick={() => setHasHosting('yes')}
                          >
                            {hasHosting === 'yes' && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            Yes, existing
                          </button>
                          <button
                            type="button"
                            className={`pill-select-btn ${hasHosting === 'no' ? 'active' : ''}`}
                            onClick={() => setHasHosting('no')}
                          >
                            {hasHosting === 'no' && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            Need setup
                          </button>
                          <button
                            type="button"
                            className={`pill-select-btn ${hasHosting === 'not-sure' ? 'active' : ''}`}
                            onClick={() => setHasHosting('not-sure')}
                          >
                            {hasHosting === 'not-sure' && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            Need advice
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Contact Information */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563EB', display: 'block', marginBottom: '0.35rem' }}>
                      Step 02 / Contact Information
                    </span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                      Where should we send your proposal?
                    </h3>

                    <div className="form-two-cols" style={{ marginBottom: '1rem' }}>
                      <div>
                        <label className="form-label-bold">Your Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Alexander Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-input-field"
                        />
                      </div>
                      <div>
                        <label className="form-label-bold">Work Email *</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-input-field"
                        />
                      </div>
                    </div>

                    <div className="form-two-cols" style={{ marginBottom: '1rem' }}>
                      <div>
                        <label className="form-label-bold">Phone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+1 ... / +44 ... / +91 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input-field"
                        />
                      </div>
                      <div>
                        <label className="form-label-bold">Company / Brand Name</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Acme Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="form-input-field"
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <label className="form-label-bold">Project Objectives &amp; Requirements</label>
                      <textarea 
                        rows={3}
                        placeholder="Tell us about your target goals, core features, or current pain points..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input-field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    {errorMessage && (
                      <div 
                        role="alert"
                        style={{
                          padding: '0.85rem 1.1rem',
                          borderRadius: '10px',
                          background: '#FEF2F2',
                          border: '1px solid #FCA5A5',
                          color: '#991B1B',
                          fontSize: '0.88rem',
                          lineHeight: 1.5,
                          marginBottom: '1.25rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem'
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <div>
                          <strong>Unable to send inquiry:</strong> {errorMessage}
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-black-pill" 
                      style={{ 
                        width: '100%', 
                        justifyContent: 'center', 
                        padding: '1rem', 
                        fontSize: '0.98rem',
                        opacity: isSubmitting ? 0.75 : 1,
                        cursor: isSubmitting ? 'wait' : 'pointer'
                      }}
                    >
                      {isSubmitting ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="spin" style={{ animation: 'spin 1s linear infinite' }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Transmitting Your Brief...
                        </span>
                      ) : (
                        <span>Submit Project Brief &rarr;</span>
                      )}
                    </button>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', textAlign: 'center', marginTop: '0.75rem' }}>
                      Protected by Non-Disclosure Agreement (NDA). Accelerance Technologies Pvt. Ltd. never shares your information.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Offices & Direct Direct Connections */}
            <div className="offices-sidebar-stack reveal-fade-up">
              <div className="office-info-card" style={{ background: '#000000', color: '#FFFFFF' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#60A5FA', letterSpacing: '0.08em' }}>
                  Direct Partner Access
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.35rem', marginBottom: '0.65rem', color: '#FFFFFF' }}>
                  Prefer an immediate conversation?
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Skip the form and connect with our client solutions team directly via email or WhatsApp.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a 
                    href="mailto:sales@accelerance.in" 
                    className="btn-outline-pill"
                    style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF', justifyContent: 'center', fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}
                  >
                    sales@accelerance.in
                  </a>
                  <a 
                    href="https://wa.me/919711091363" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-black-pill"
                    style={{ background: '#2563EB', justifyContent: 'center', fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}
                  >
                    <span>Chat on WhatsApp</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Office Location Cards (5 Offices: Delhi HQ, London, Dubai, Manama, New Jersey USA) */}
              {agencyInfo.offices.map((office, oIdx) => (
                <div key={oIdx} className="office-info-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <div className="office-card-country">{office.country}</div>
                    {office.isHQ && (
                      <span className="mini-tag" style={{ background: '#EFF6FF', color: '#2563EB', borderColor: '#BFDBFE', fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                        HQ
                      </span>
                    )}
                  </div>
                  <div className="office-card-city" style={{ fontSize: '1.15rem' }}>{office.city}</div>
                  <div className="office-card-detail">{office.address}</div>
                  <div className="office-card-detail" style={{ fontWeight: 600, color: '#0F172A', marginTop: '0.35rem' }}>
                    <a href={`tel:${office.phone.replace(/\s+/g, '')}`} style={{ color: '#0F172A', textDecoration: 'none' }}>
                      {office.phone}
                    </a>
                  </div>
                  <div className="office-card-detail" style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    Hours: {office.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
