'use client';

import React, { useRef, useEffect } from 'react';

/**
 * High-performance 3-line continuous motion mouse streak wrapper.
 * Renders curvy, glowing, atmospheric light ribbons without bulbous heads or harsh white colors.
 * Uses spring physics and quadratic curve smoothing for organic sweeping arcs.
 */
export default function MouseStreakWrapper({ children, className = '' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

    const resize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Mouse coordinates with smooth interpolation
    const mouse = {
      x: width / 2,
      y: height * 0.42,
      targetX: width / 2,
      targetY: height * 0.42,
      isInside: false,
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isInside = true;
    };

    const onMouseLeave = () => {
      mouse.isInside = false;
    };

    container.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // 3 Curvy Glowing Ribbons - Warm muted palette (No pure white, no bulbous heads)
    const ribbons = [
      {
        // Ribbon 1: Warm Muted Sand
        color: '218, 198, 172',
        spring: 0.045,
        friction: 0.82,
        waveFreq: 0.018,
        waveAmp: 28,
        phase: 0,
        yOffset: -12,
        tailLength: 36,
        points: [],
        currX: width / 2,
        currY: height * 0.42,
        vx: 0,
        vy: 0,
        maxWidth: 5.5,
        glowWidth: 16,
      },
      {
        // Ribbon 2: Muted Warm Champagne
        color: '198, 172, 142',
        spring: 0.035,
        friction: 0.84,
        waveFreq: 0.015,
        waveAmp: 36,
        phase: 2.2,
        yOffset: 4,
        tailLength: 42,
        points: [],
        currX: width / 2,
        currY: height * 0.42,
        vx: 0,
        vy: 0,
        maxWidth: 4.5,
        glowWidth: 14,
      },
      {
        // Ribbon 3: Soft Roasted Taupe / Bronze
        color: '175, 145, 118',
        spring: 0.026,
        friction: 0.86,
        waveFreq: 0.012,
        waveAmp: 44,
        phase: 4.4,
        yOffset: 18,
        tailLength: 48,
        points: [],
        currX: width / 2,
        currY: height * 0.42,
        vx: 0,
        vy: 0,
        maxWidth: 4.0,
        glowWidth: 12,
      },
    ];

    // Seed initial trail points
    ribbons.forEach((r) => {
      for (let i = 0; i < r.tailLength; i++) {
        r.points.push({ x: r.currX, y: r.currY });
      }
    });

    let frame = 0;

    const loop = () => {
      frame++;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse target lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Base anchor: follows mouse when inside, or drifts in gentle infinity figure-eight when idle
      const idleX = mouse.isInside
        ? mouse.x
        : width / 2 + Math.sin(frame * 0.012) * 80;
      const idleY = mouse.isInside
        ? mouse.y
        : height * 0.42 + Math.cos(frame * 0.016) * 40;

      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < ribbons.length; i++) {
        const r = ribbons[i];

        // Curvilinear sinusoidal motion
        const oscX = Math.sin(frame * r.waveFreq + r.phase) * r.waveAmp;
        const oscY =
          Math.cos(frame * r.waveFreq * 0.85 + r.phase) * (r.waveAmp * 0.65);

        const targetX = idleX + oscX;
        const targetY = idleY + oscY + r.yOffset;

        // Spring acceleration & velocity physics (creates sweeping curves, never sharp corners)
        r.vx += (targetX - r.currX) * r.spring;
        r.vy += (targetY - r.currY) * r.spring;
        r.vx *= r.friction;
        r.vy *= r.friction;

        r.currX += r.vx;
        r.currY += r.vy;

        r.points.unshift({ x: r.currX, y: r.currY });
        if (r.points.length > r.tailLength) {
          r.points.pop();
        }

        const pts = r.points;
        if (pts.length < 4) continue;

        // Render Ribbon in 3 soft glowing passes:
        // Pass 1: Wide diffuse atmospheric aura
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let j = 1; j < pts.length - 1; j++) {
          const midX = (pts[j].x + pts[j + 1].x) / 2;
          const midY = (pts[j].y + pts[j + 1].y) / 2;
          ctx.quadraticCurveTo(pts[j].x, pts[j].y, midX, midY);
        }
        ctx.strokeStyle = `rgba(${r.color}, 0.12)`;
        ctx.lineWidth = r.glowWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Pass 2: Mid-body soft light ribbon (tapering naturally toward the tail)
        for (let j = 0; j < pts.length - 2; j += 2) {
          const ratio = 1 - j / pts.length;
          const alpha = Math.pow(ratio, 1.4) * 0.45;

          const p0 = pts[j];
          const p1 = pts[j + 1];
          const p2 = pts[j + 2];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);

          ctx.strokeStyle = `rgba(${r.color}, ${alpha})`;
          ctx.lineWidth = r.maxWidth * ratio + 1.2;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Pass 3: Inner luminous core filament (warm sand tone, NOT pure white)
        for (let j = 0; j < Math.min(pts.length - 2, 18); j += 2) {
          const ratio = 1 - j / 18;
          const alpha = ratio * 0.6;

          const p0 = pts[j];
          const p1 = pts[j + 1];
          const p2 = pts[j + 2];
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);

          ctx.strokeStyle = `rgba(${r.color}, ${alpha})`;
          ctx.lineWidth = Math.max(1, r.maxWidth * 0.45 * ratio);
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Leading tip: A soft diffuse ambient glow aura (no circle bead, no white dot)
        const tip = pts[0];
        const tipGrad = ctx.createRadialGradient(
          tip.x,
          tip.y,
          0,
          tip.x,
          tip.y,
          r.glowWidth * 0.9
        );
        tipGrad.addColorStop(0, `rgba(${r.color}, 0.5)`);
        tipGrad.addColorStop(0.5, `rgba(${r.color}, 0.15)`);
        tipGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = tipGrad;
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, r.glowWidth * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      if (container) {
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center select-none ${className}`}
      style={{
        background:
          'radial-gradient(circle at 50% 38%, #2A1A13 0%, #160D09 58%, #0D0704 100%)',
      }}
    >
      {/* Background Layer: Subtle Architectural Coordinate Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `linear-gradient(#E5D9C5 1px, transparent 1px), linear-gradient(to right, #E5D9C5 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Background Layer: Ambient Vignette & Center Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#120B07]/20 to-[#0A0503]/90 z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-[#E5D9C5]/[0.035] rounded-full blur-3xl pointer-events-none z-0" />

      {/* Mid Layer: Hardware-Accelerated Curvy Light Ribbon Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Top Layer: Foreground Content (Transparent container) */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
}
