'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Global smooth scroll provider using Lenis.
 * Provides luxury, momentum-based inertia scrolling across the entire site.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    // Handle initial hash on page load (e.g. navigating from another page to /#schedule)
    if (typeof window !== 'undefined' && window.location.hash) {
      setTimeout(() => {
        try {
          const target = document.querySelector(window.location.hash);
          if (target) {
            lenis.scrollTo(target, { offset: -80 });
          }
        } catch {
          // Ignore invalid selector
        }
      }, 500);
    }

    // Intercept anchor clicks for silky smooth scrolling to in-page sections
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#') || (href.startsWith('/#') && window.location.pathname === '/')) {
        const hash = href.startsWith('/#') ? href.replace('/', '') : href;
        try {
          const target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -80 });
            window.history.pushState(null, '', hash);
          }
        } catch {
          // Ignore invalid selector
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Global prevention of dragging images or media
    const handleDragStart = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === 'img' || tag === 'svg' || tag === 'picture' || e.target?.closest?.('img, svg')) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('dragstart', handleDragStart);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      window.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
