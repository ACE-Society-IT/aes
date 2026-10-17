'use client';

import React, { useRef, useEffect, useState } from 'react';

/**
 * High-performance 3-line continuous motion mouse streak wrapper.
 * - Hardware-accelerated perspective parallax: ascends and recedes as you scroll down.
 * - Hidden and disabled on mobile devices (< 768px or touch screens).
 * - Synchronized circular orbit when mouse is stationary.
 */
export default function MouseStreakWrapper({
  children,
  className = '',
  fadeOnScroll = true,
  id,
  style = {},
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll listener (only active if fadeOnScroll is enabled)
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Detect mobile or touch-first devices
    const checkMobile = () => {
      return window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
    };

    if (checkMobile()) {
      return;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let isMobile = false;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

    const resize = () => {
      if (!container) return;
      isMobile = checkMobile();
      if (isMobile) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
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

    let lastMoveTimestamp = 0;
    let orbitBlend = 1;

    const mouse = {
      x: width / 2,
      y: height * 0.42,
      targetX: width / 2,
      targetY: height * 0.42,
      isInside: false,
    };

    const onMouseMove = (e) => {
      if (isMobile) return;
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isInside = true;
      lastMoveTimestamp = performance.now();
    };

    const onMouseLeave = () => {
      mouse.isInside = false;
    };

    container.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave, { passive: true });

    const ribbons = [
      {
        color: '218, 198, 172',
        spring: 0.05,
        friction: 0.82,
        angleOffset: 0,
        orbitRadius: 36,
        tailLength: 36,
        points: [],
        currX: width / 2,
        currY: height * 0.42,
        vx: 0,
        vy: 0,
        maxWidth: 5.2,
        glowWidth: 15,
      },
      {
        color: '198, 172, 142',
        spring: 0.04,
        friction: 0.84,
        angleOffset: (Math.PI * 2) / 3,
        orbitRadius: 44,
        tailLength: 42,
        points: [],
        currX: width / 2,
        currY: height * 0.42,
        vx: 0,
        vy: 0,
        maxWidth: 4.4,
        glowWidth: 13,
      },
      {
        color: '175, 145, 118',
        spring: 0.03,
        friction: 0.86,
        angleOffset: (Math.PI * 4) / 3,
        orbitRadius: 52,
        tailLength: 48,
        points: [],
        currX: width / 2,
        currY: height * 0.42,
        vx: 0,
        vy: 0,
        maxWidth: 3.8,
        glowWidth: 11,
      },
    ];

    ribbons.forEach((r) => {
      for (let i = 0; i < r.tailLength; i++) {
        r.points.push({ x: r.currX, y: r.currY });
      }
    });

    let frame = 0;

    const loop = () => {
      if (isMobile) {
        animId = requestAnimationFrame(loop);
        return;
      }

      frame++;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.09;
      mouse.y += (mouse.targetY - mouse.y) * 0.09;

      const now = performance.now();
      const isMouseStationary = !mouse.isInside || now - lastMoveTimestamp > 160;

      const targetBlend = isMouseStationary ? 1 : 0;
      orbitBlend += (targetBlend - orbitBlend) * 0.05;

      const baseAnchorX = mouse.isInside ? mouse.x : width / 2;
      const baseAnchorY = mouse.isInside ? mouse.y : height * 0.42;

      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < ribbons.length; i++) {
        const r = ribbons[i];

        const orbitAngle = frame * 0.032 + r.angleOffset;
        const circleTargetX = baseAnchorX + Math.cos(orbitAngle) * r.orbitRadius;
        const circleTargetY = baseAnchorY + Math.sin(orbitAngle) * r.orbitRadius;

        const moveTargetX = baseAnchorX;
        const moveTargetY = baseAnchorY;

        const finalTargetX = moveTargetX * (1 - orbitBlend) + circleTargetX * orbitBlend;
        const finalTargetY = moveTargetY * (1 - orbitBlend) + circleTargetY * orbitBlend;

        r.vx += (finalTargetX - r.currX) * r.spring;
        r.vy += (finalTargetY - r.currY) * r.spring;
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

        // Pass 1: Wide diffuse glow
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

        // Pass 2: Mid-body ribbon
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

        // Pass 3: Inner core filament
        for (let j = 0; j < Math.min(pts.length - 2, 18); j += 2) {
          const ratio = 1 - j / 18;
          const alpha = ratio * 0.58;

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

        // Leading tip aura
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
      id={id}
      ref={containerRef}
      className={`relative w-full ${className.includes('min-h-') ? '' : 'min-h-screen'} overflow-hidden flex flex-col items-center justify-center select-none ${className}`}
      style={{
        background:
          'radial-gradient(circle at 50% 38%, #2A1A13 0%, #160D09 58%, #0D0704 100%)',
        ...style,
      }}
    >
      {/* Background Layer: Ambient Vignette & Center Glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#120B07]/20 to-[#0A0503]/90 z-0 will-change-transform"
        style={{
          transform: fadeOnScroll ? `translate3d(0, ${-scrollY * 0.06}px, 0)` : undefined,
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-[#E5D9C5]/[0.035] rounded-full blur-3xl pointer-events-none z-0 will-change-transform"
        style={{
          transform: fadeOnScroll
            ? `translate3d(-50%, calc(-50% - ${scrollY * 0.1}px), 0)`
            : 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* Mid Layer: Canvas trails floating with upward perspective */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full hidden md:block will-change-transform"
        style={{
          transform: fadeOnScroll ? `translate3d(0, ${-scrollY * 0.16}px, 0)` : undefined,
          opacity: fadeOnScroll ? Math.max(0, 1 - scrollY / 600) : 1,
        }}
      />

      {/* Top Layer: Foreground Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
}
