'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global smooth scroll provider using Lenis.
 * Provides luxury, momentum-based inertia scrolling across the entire site.
 * Lenis is driven by GSAP's ticker and synced with ScrollTrigger so that
 * scroll-scrubbed animations stay perfectly in step with the smoothed scroll.
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

    // Sync Lenis -> ScrollTrigger on every smoothed scroll tick
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker (single shared RAF loop)
    const tickLenis = (time) => {
      lenis.raf(time * 1000); // gsap ticker time is in seconds
    };
    gsap.ticker.add(tickLenis);
    gsap.ticker.lagSmoothing(0);

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
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(tickLenis);
      gsap.ticker.lagSmoothing(500, 33); // restore GSAP default
      lenis.destroy();
      window.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
