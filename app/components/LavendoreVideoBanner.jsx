"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function LavendoreVideoBanner({ caseStudy }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict browser autoplay compliance for all mobile & desktop browsers
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      if (!video) return;
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Retry muted in case policy blocked
            video.muted = true;
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          });
      }
    };

    // 1. IntersectionObserver: plays when visible, pauses when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { rootMargin: '200px 0px 200px 0px', threshold: 0.1 }
    );

    observer.observe(video);

    // 2. Global scroll, touch & wheel listeners: instantly triggers playback when user scrolls
    const handleScroll = () => {
      if (!video) return;
      const rect = video.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight + 150 && rect.bottom > -150;
      if (inViewport && video.paused) {
        playVideo();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    // Also attempt initial play if already in view
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleScroll);
      window.removeEventListener('wheel', handleScroll);
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
    <div className="browser-mockup-frame mockup-full" style={{ background: '#09090B', borderColor: '#27272A' }}>
      {/* Top Browser Bar */}
      <div className="browser-chrome-bar" style={{ background: '#18181B', borderColor: '#27272A' }}>
        <div className="browser-window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="browser-address-field" style={{ background: '#27272A', borderColor: '#3F3F46', color: '#F4F4F5' }}>
          <img 
            src="/images/case-studies/icons/lavendore-icon.svg" 
            alt="Lavendore" 
            width="15" 
            height="15" 
            style={{ borderRadius: 3, display: 'inline-block', flexShrink: 0 }} 
          />
          <span className="browser-domain-text" style={{ color: '#FFFFFF' }}>https://lavendore.com</span>
          <span className="ssl-secure-badge" style={{ background: 'rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}>
            Featured Flagship
          </span>
        </div>

        <div className="browser-quick-actions">
          <a 
            href="https://lavendore.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="browser-visit-btn"
            style={{ background: 'rgba(212, 175, 55, 0.15)', borderColor: '#D4AF37', color: '#FDE68A' }}
          >
            <span>Visit Live Store</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video & Original Screenshot Showcase Container */}
      <div className="lavendore-video-wrapper">
        <video
          ref={videoRef}
          className="lavendore-video-player"
          poster="/images/case-studies/lavendore-screenshot.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          {/* High-speed zero-latency local MP4 & WebM stream */}
          <source src="/videos/lavendore-showcase.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay Info & Interactive Controls */}
        <div className="video-overlay-glass">
          <div className="video-badge-row">
            <span className="badge-luxury-gold">
              <span className="gold-pulse"></span>
              Live Client Video Showcase &bull; Lavendore.com
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                type="button" 
                onClick={togglePlay}
                className="video-control-pill" 
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    <span>Play Reel</span>
                  </>
                )}
              </button>
              <button 
                type="button" 
                onClick={toggleMute}
                className="video-control-pill" 
                aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              >
                {isMuted ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                )}
              </button>
            </div>
          </div>

          <div className="video-bottom-info">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                Lavendore Luxe Experience
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#D4D4D8' }}>
                Bespoke Luxury UI/UX &bull; Scent Note Profiler &bull; +185% Mobile Conversion Lift
              </p>
            </div>
            <Link href="/work/lavendore/" className="btn-black-pill" style={{ background: '#D4AF37', color: '#000000', fontSize: '0.85rem' }}>
              Read Case Study &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
