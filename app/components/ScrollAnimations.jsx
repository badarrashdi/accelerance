"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Scroll Progress Bar at the top of the browser
    const progressBar = document.createElement('div');
    progressBar.className = 'global-scroll-progress-bar';
    document.body.appendChild(progressBar);

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    // 2. IntersectionObserver for Reveal Animations on Scroll
    const observeElements = () => {
      const targets = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-in, .reveal-scale, .reveal-stagger, .approach-card, .metric-box, .step-card-box, .case-study-hero-card, .service-feature-card, .faq-item, .contact-card'
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              // Optional: once revealed, unobserve to free resources
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.1,
        }
      );

      targets.forEach((el, index) => {
        // Add a slight stagger delay if inside a container or group
        if (!el.classList.contains('is-revealed')) {
          if (el.classList.contains('reveal-fade-up') && !el.style.transitionDelay) {
            const siblingIndex = Array.from(el.parentElement?.children || []).indexOf(el);
            if (siblingIndex > 0 && siblingIndex < 8) {
              el.style.transitionDelay = `${siblingIndex * 0.08}s`;
            }
          }
          observer.observe(el);
        }
      });

      return observer;
    };

    let observerInstance = observeElements();

    // MutationObserver to automatically animate dynamic components when route changes
    const mutationObserver = new MutationObserver(() => {
      observerInstance.disconnect();
      observerInstance = observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
      observerInstance.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

