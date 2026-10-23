'use client';

import React, { useEffect, useRef } from 'react';

/**
 * PigmentTrail - Fluid gouache/watercolor ink-brush cursor trail
 * Customized strictly for AES 2026 brand aesthetic:
 * Gold (#f1ca7e), Ruby (#89192c), Crimson (#701020), Cream (#f8eee1)
 */
export default function PigmentTrail({
  palette = ['#f1ca7e', '#89192c', '#701020', '#f8eee1'],
  maxRadius = 18,
  minRadius = 4,
  decayRate = 0.025,
  bleedSpread = 1.05,
  blendMode = 'screen',
}) {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: -100, y: -100, prevX: -100, prevY: -100, speed: 0 });
  const animFrameRef = useRef(null);
  const colorIndexRef = useRef(0);
  const isMovingRef = useRef(false);
  const idleTimerRef = useRef(null);

  useEffect(() => {
    // Only run on desktop devices with a precision pointer
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth * window.devicePixelRatio);
    let height = (canvas.height = window.innerHeight * window.devicePixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', handleResize);

    const hexToRgb = (hex) => {
      const clean = hex.replace('#', '');
      const bigint = parseInt(clean, 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const parsedPalette = palette.map(hexToRgb);

    // Mouse movement tracker with interpolation
    const handleMouseMove = (e) => {
      const dpr = window.devicePixelRatio || 1;
      const x = e.clientX * dpr;
      const y = e.clientY * dpr;

      const prevX = mouseRef.current.x === -100 ? x : mouseRef.current.x;
      const prevY = mouseRef.current.y === -100 ? y : mouseRef.current.y;

      const dx = x - prevX;
      const dy = y - prevY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.min(dist, 40);

      mouseRef.current = { x, y, prevX, prevY, speed };
      isMovingRef.current = true;

      // Cycle colors smoothly
      colorIndexRef.current = (colorIndexRef.current + 0.15) % parsedPalette.length;
      const baseColor = parsedPalette[Math.floor(colorIndexRef.current)];

      // Interpolate points between previous and current mouse position for smooth continuous stroke
      const steps = Math.max(1, Math.floor(dist / 6));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const curX = prevX + dx * t;
        const curY = prevY + dy * t;

        // Dynamic radius: faster movement creates thinner, expressive ink streaks
        const targetRadius = Math.max(minRadius * dpr, (maxRadius * dpr) - speed * 0.25 * dpr);
        const radius = targetRadius * (0.8 + Math.random() * 0.4);

        pointsRef.current.push({
          x: curX + (Math.random() - 0.5) * 4 * dpr,
          y: curY + (Math.random() - 0.5) * 4 * dpr,
          radius,
          initialRadius: radius,
          color: baseColor,
          alpha: 0.65,
          vx: (Math.random() - 0.5) * 0.8 * dpr,
          vy: (Math.random() - 0.5) * 0.8 * dpr,
          rotation: Math.random() * Math.PI * 2,
        });
      }

      // Reset idle timer
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        isMovingRef.current = false;
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      // Clear canvas with subtle trail blend
      ctx.clearRect(0, 0, width, height);

      if (pointsRef.current.length > 0) {
        ctx.globalCompositeOperation = blendMode;

        for (let i = pointsRef.current.length - 1; i >= 0; i--) {
          const p = pointsRef.current[i];

          // Decay & bleed
          p.alpha -= decayRate;
          p.radius *= bleedSpread;
          p.x += p.vx;
          p.y += p.vy;

          if (p.alpha <= 0.01) {
            pointsRef.current.splice(i, 1);
            continue;
          }

          // Soft watercolor/gouache pigment gradient
          const gradient = ctx.createRadialGradient(
            p.x,
            p.y,
            p.radius * 0.15,
            p.x,
            p.y,
            p.radius
          );

          const { r, g, b } = p.color;
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.alpha * 0.85})`);
          gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${p.alpha * 0.45})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalCompositeOperation = 'source-over';
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      clearTimeout(idleTimerRef.current);
    };
  }, [palette, maxRadius, minRadius, decayRate, bleedSpread, blendMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
      }}
      aria-hidden="true"
    />
  );
}
