"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { servicesList, agencyInfo } from '../data';

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (title) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter((s) => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Header />

      {/* Contact Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-eyebrow">
            <span className="dot-pulse"></span>
            GET IN TOUCH &bull; FAST TURNAROUND
          </div>
          <h1 className="page-hero-title">
            Let’s Engineer Your Digital Advantage.
          </h1>
          <p className="page-hero-subtext">
            Tell us about your objectives, timeline, and challenges. Our solution architects will review 
            your brief and provide an actionable proposal within 24 business hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Office Grid */}
      <section style={{ padding: '3rem 0 3.5rem 0', background: '#FAFAFA' }}>
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Interactive Proposal Builder Form */}
            <div className="proposal-form-card reveal-fade-up">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.85rem' }}>
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 500, margin: '0 auto 2rem auto' }}>
                    Your project inquiry has been delivered directly to our senior solutions team. 
                    We will review your requirements and reach out via email or WhatsApp within 24 hours.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a 
                      href="https://wa.me/919711091363" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-black-pill"
                    >
                      <span>Need Urgent Assistance? WhatsApp Us</span>
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
                  <div style={{ marginBottom: '2.5rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563EB', display: 'block', marginBottom: '0.4rem' }}>
                      Step 01 / Scope
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      What services are you exploring?
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.2rem', marginBottom: '1.25rem' }}>
                      Select all that apply to your current roadmap.
                    </p>

                    <div className="chip-select-grid">
                      {servicesList.map((srv) => {
                        const isSelected = selectedServices.includes(srv.title);
                        return (
                          <button
                            type="button"
                            key={srv.slug}
                            onClick={() => toggleService(srv.title)}
                            className={`service-choice-chip ${isSelected ? 'selected' : ''}`}
                          >
                            {isSelected && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '0.4rem', verticalAlign: 'middle' }}>
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            {srv.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Choices */}
                  <div className="form-two-cols" style={{ marginBottom: '2.5rem' }}>
                    <div>
                      <label className="form-label-bold">Estimated Budget</label>
                      <select 
                        value={budget} 
                        onChange={(e) => setBudget(e.target.value)}
                        className="form-input-field"
                      >
                        <option value="">Select a range...</option>
                        <option value="5k-15k">\$5,000 – \$15,000</option>
                        <option value="15k-30k">\$15,000 – \$30,000</option>
                        <option value="30k-60k">\$30,000 – \$60,000</option>
                        <option value="60k+">\$60,000+ Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label-bold">Target Launch Timeline</label>
                      <select 
                        value={timeline} 
                        onChange={(e) => setTimeline(e.target.value)}
                        className="form-input-field"
                      >
                        <option value="">Select urgency...</option>
                        <option value="immediate">Immediate (&lt; 1 Month)</option>
                        <option value="1-3-months">1 to 3 Months</option>
                        <option value="3-6-months">3 to 6 Months</option>
                        <option value="planning">Exploratory / Planning Stage</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563EB', display: 'block', marginBottom: '0.4rem' }}>
                      Step 02 / Contact Information
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                      Where should we send your proposal?
                    </h3>

                    <div className="form-two-cols" style={{ marginBottom: '1.25rem' }}>
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

                    <div className="form-two-cols" style={{ marginBottom: '1.25rem' }}>
                      <div>
                        <label className="form-label-bold">Phone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+971 50 ... or +91 98..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input-field"
                        />
                      </div>
                      <div>
                        <label className="form-label-bold">Company Name / Website</label>
                        <input 
                          type="text" 
                          placeholder="e.g. MyBrand.com"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="form-input-field"
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label className="form-label-bold">Project Details &amp; Objectives</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your current challenges, target audience, and what success looks like..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input-field"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn-black-pill" 
                      style={{ width: '100%', justifyContent: 'center', padding: '1.1rem', fontSize: '1rem' }}
                    >
                      <span>Submit Project Brief &rarr;</span>
                    </button>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', textAlign: 'center', marginTop: '0.85rem' }}>
                      Protected by Non-Disclosure Agreement (NDA). We respect your privacy and never spam.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Offices & Direct Direct Connections */}
            <div className="offices-sidebar-stack reveal-fade-up">
              <div className="office-info-card" style={{ background: '#000000', color: '#FFFFFF' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: '#60A5FA', letterSpacing: '0.08em' }}>
                  Direct Partner Access
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.4rem', marginBottom: '0.8rem', color: '#FFFFFF' }}>
                  Prefer an immediate conversation?
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Skip the form and connect with our client solutions lead directly via email or WhatsApp.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <a 
                    href="mailto:sales@accelerance.in" 
                    className="btn-outline-pill"
                    style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#FFFFFF', justifyContent: 'center' }}
                  >
                    sales@accelerance.in
                  </a>
                  <a 
                    href="https://wa.me/919711091363" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-black-pill"
                    style={{ background: '#2563EB', justifyContent: 'center' }}
                  >
                    <span>Chat on WhatsApp</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Office Location Cards */}
              {agencyInfo.offices.map((office, oIdx) => (
                <div key={oIdx} className="office-info-card">
                  <div className="office-card-country">{office.country}</div>
                  <div className="office-card-city">{office.city}</div>
                  <div className="office-card-detail">{office.address}</div>
                  <div className="office-card-detail" style={{ fontWeight: 600, color: '#0F172A', marginTop: '0.4rem' }}>
                    {office.phone}
                  </div>
                  <div className="office-card-detail" style={{ fontSize: '0.82rem', color: '#64748B' }}>
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
