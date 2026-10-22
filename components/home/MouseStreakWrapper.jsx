'use client';

import React, { useRef, useEffect, useState } from 'react';

/**
 * High-performance ambient section wrapper with subtle parallax glow.
 * - Strict 7-color palette: Imperial Gold (#f1ca7e), Alabaster Cream (#f8eee1), Warm Parchment (#e8dcc6).
 * - Hardware-accelerated perspective parallax: ascends and recedes as you scroll down.
 */
export default function MouseStreakWrapper({
  children,
  className = '',
  fadeOnScroll = true,
  id,
  style = {},
}) {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!fadeOnScroll) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fadeOnScroll]);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative w-full ${
        className.includes('min-h-') ? '' : 'min-h-screen'
      } overflow-hidden flex flex-col items-center justify-center select-none bg-[radial-gradient(circle_at_50%_38%,#89192c_0%,#701020_45%,#5a0d1b_100%)] ${className}`}
      style={style}
    >
      {/* Background Layer: Ambient Vignette & Center Glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#650d1c]/25 to-[#5a0d1b]/95 z-0 will-change-transform"
        style={{
          transform: fadeOnScroll ? `translate3d(0, ${-scrollY * 0.06}px, 0)` : undefined,
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-[#f1ca7e]/[0.05] rounded-full blur-3xl pointer-events-none z-0 will-change-transform"
        style={{
          transform: fadeOnScroll
            ? `translate3d(-50%, calc(-50% - ${scrollY * 0.1}px), 0)`
            : 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
}
