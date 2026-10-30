"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HeroVideoBanner() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsVideoLoaded(true);
        })
        .catch(() => {
          // Retry muted on interaction if autoplay policy kicks in
          video.muted = true;
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        });
    }

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="hero-video-banner-section">
      <div className="container">
        <div className="hero-video-card reveal-scale">
          {/* Background Video */}
          <video
            ref={videoRef}
            className={`hero-video-element ${isVideoLoaded ? 'is-loaded' : ''}`}
            src="/videos/hero-banner.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />

          {/* Cinematic Dark Gradient Overlays for High Contrast Typography */}
          <div className="hero-video-gradient-overlay" />
          <div className="hero-video-vignette" />

          {/* Video Control Pills (Top Right) */}
          <div className="hero-video-controls">
            <button
              onClick={togglePlay}
              className="video-ctrl-btn"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              title={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMute}
              className="video-ctrl-btn"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>

          {/* Banner Hero Text Overlay */}
          <div className="hero-video-content">
            <h1 className="hero-video-title">
              We Engineer Iconic Digital Experiences That <span className="title-glow">Multiply Revenue.</span>
            </h1>

            <p className="hero-video-subtitle">
              Accelerance Tech pairs senior design with scalable engineering and performance marketing. 
              We build high-converting corporate websites, eCommerce stores, mobile applications, 
              and automated revenue systems.
            </p>

            <div className="hero-video-action-row">
              <Link href="#work" className="btn-hero-glow">
                <span>Explore Featured Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact/" className="btn-hero-glass">
                <span>Request a Proposal</span>
              </Link>
            </div>

            {/* Quick Live Performance Strip */}
            <div className="hero-video-metrics-strip">
              <div className="hero-vm-item">
                <span className="hero-vm-val">150+</span>
                <span className="hero-vm-lbl">Launches Worldwide</span>
              </div>
              <div className="hero-vm-divider" />
              <div className="hero-vm-item">
                <span className="hero-vm-val">98.4%</span>
                <span className="hero-vm-lbl">Client Retention</span>
              </div>
              <div className="hero-vm-divider" />
              <div className="hero-vm-item">
                <span className="hero-vm-val">3.4x</span>
                <span className="hero-vm-lbl">Average Traffic Lift</span>
              </div>
            </div>
          </div>

          {/* Bottom Wave / Glow Edge */}
          <div className="hero-video-bottom-indicator">
            <span className="scroll-indicator-text">Scroll to explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="bounce-arrow">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

