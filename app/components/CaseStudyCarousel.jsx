"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

export default function CaseStudyCarousel({ caseStudies = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const carouselTrackRef = useRef(null);

  // Responsive items visible calculation
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(2.35); // Elegant peek on widescreen
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const total = caseStudies.length;
  const maxIndex = Math.max(0, Math.ceil(total - Math.floor(visibleCount)));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, total]);

  // Touch and Drag handlers for ultra smooth swipe
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.touches ? e.touches[0].clientX : e.clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    setTouchDelta(currentX - touchStart);
  };

  const handleTouchEnd = () => {
    if (touchDelta < -50) {
      nextSlide();
    } else if (touchDelta > 50) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchDelta(0);
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <div
      className="cs-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Header Row with Navigation Buttons */}
      <div className="cs-carousel-header">
        <div>
          <div className="section-label-animated">
            <span className="dot-pulse-blue" />
            <span>SELECTED CLIENT SHOWCASE</span>
          </div>
          <h2 className="section-title-carousel">
            Crafted for Impact. Engineered to Lead.
          </h2>
        </div>

        <div className="cs-carousel-actions">
          {/* Navigation Arrow Buttons */}
          <div className="cs-nav-btns">
            <button
              onClick={prevSlide}
              className="cs-arrow-btn"
              aria-label="Previous Project"
              title="Previous Project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="cs-arrow-btn"
              aria-label="Next Project"
              title="Next Project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Link href="/work/" className="btn-black-pill-sm desktop-only">
            <span>View All Case Studies</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div
        className="cs-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={isDragging ? handleTouchMove : undefined}
        onMouseUp={handleTouchEnd}
      >
        <div
          ref={carouselTrackRef}
          className="cs-carousel-track"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% + ${touchDelta * 0.4}px))`,
            transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {caseStudies.map((cs, idx) => {
            return (
              <div
                key={cs.id || idx}
                className="cs-carousel-item"
                style={{ flex: `0 0 ${100 / visibleCount}%` }}
              >
                <Link
                  href={`/work/${cs.slug}/`}
                  className="cs-minimal-card"
                  aria-label={`View ${cs.client} Case Study`}
                >
                  {/* Clean Background Image / Screenshot */}
                  <div className="cs-card-media-wrapper">
                    <img
                      src={cs.screenshotImage || cs.heroImage}
                      alt={`${cs.client} Platform Showcase`}
                      className="cs-card-img"
                      loading="lazy"
                    />

                    {/* Smooth Gradient Scrim (deepens on hover) */}
                    <div className="cs-card-scrim" />

                    {/* Bottom Overlay: Heading on default; on hover shows rich overlay, description and CTA */}
                    <div className="cs-card-overlay-content">
                      <h3 className="cs-card-title">
                        {cs.client}
                      </h3>

                      {/* Description revealed on hover */}
                      <p className="cs-card-headline">
                        {cs.subtitle || cs.title}
                      </p>

                      {/* CTA revealed on hover */}
                      <div className="cs-card-cta-row">
                        <span className="cs-view-link">
                          <span>Explore Case Study</span>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Progress Bar & Dots Indicator */}
      <div className="cs-carousel-footer">
        <div className="cs-dots-row">
          {caseStudies.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(Math.min(dotIdx, maxIndex))}
              className={`cs-dot ${currentIndex === dotIdx ? 'is-active' : ''}`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        <div className="mobile-view-all">
          <Link href="/work/" className="btn-black-pill-sm">
            <span>View All Case Studies</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
