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
    };
  }, []);

  return <>{children}</>;
}
