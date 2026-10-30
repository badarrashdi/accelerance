"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroAnimatedHeading() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Words array for kinetic split-text animation
  const headlineWords = [
    { text: "Digital", highlight: false },
    { text: "platforms,", highlight: false },
    { text: "eCommerce", highlight: false },
    { text: "&", highlight: false },
    { text: "growth", highlight: false },
    { text: "marketing", highlight: false },
    { text: "for", highlight: false },
    { text: "brands", highlight: false },
    { text: "who", highlight: false },
    { text: "refuse", highlight: false },
    { text: "ordinary.", highlight: true },
  ];

  return (
    <section ref={sectionRef} className={`abox-hero-post-banner ${isVisible ? 'is-in-view' : ''}`}>
      <div className="container">
        {/* Animated Location Tag */}
        <div className="hero-tag-animated reveal-fade-up">
          <span className="live-status-dot" />
          <span>Digital Agency &bull; Delhi NCR (HQ) &bull; Dubai &bull; Bahrain &bull; Riyadh &bull; London &bull; Sydney</span>
        </div>

        {/* Current Hero Headline with Kinetic Staggered Reveal */}
        <h2 className="hero-headline-animated" aria-label="Digital platforms, eCommerce & growth marketing for brands who refuse ordinary.">
          {headlineWords.map((word, idx) => (
            <span
              key={idx}
              className={`animated-word-wrap ${word.highlight ? 'word-highlight-wrap' : ''}`}
              style={{ transitionDelay: `${idx * 45 + 100}ms` }}
            >
              <span className={`animated-word-inner ${word.highlight ? 'highlight-glow' : ''}`}>
                {word.text}
              </span>
              {idx < headlineWords.length - 1 && ' '}
            </span>
          ))}
        </h2>

        {/* Hero Subrow with Smooth Fadeup and Action CTAs */}
        <div className="hero-subrow-animated">
          <p className="hero-subtext-animated">
            Accelerance Tech pairs senior design with scalable engineering and performance marketing. 
            We build high-converting <strong>corporate websites, eCommerce stores, mobile applications, 
            and automated revenue systems</strong> that transform ambitious businesses into undisputed market leaders.
          </p>

          <div className="hero-action-row-animated">
            <Link href="/work/" className="btn-outline-pill hover-slide-right">
              <span>View Case Studies</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact/" className="btn-black-pill hover-scale-glow">
              <span>Request a Proposal</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

