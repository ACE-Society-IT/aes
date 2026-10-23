'use client';

import React, { useRef, useEffect } from 'react';

/**
 * High-performance 3-line continuous motion golden mouse streak cursor.
 * Restored from official AES repository history.
 * - Strict 7-color palette: Imperial Gold (#f1ca7e), Alabaster Cream (#f8eee1), Warm Parchment (#e8dcc6).
 * - Multi-pass canvas rendering: Wide diffuse glow, mid-body ribbon, inner core filament, and leading tip aura.
 * - Synchronized circular orbit when mouse is stationary.
 * - Completely disabled on touch/mobile devices for peak battery and frame-rate.
 */
export default function GoldenCursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize, { passive: true });

    let animId;
    let lastMoveTimestamp = performance.now();
    let orbitBlend = 1;

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isInside: false,
    };

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isInside = true;
      lastMoveTimestamp = performance.now();
    };

    const onMouseLeave = () => {
      mouse.isInside = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // Strict official AES palette RGB values: Imperial Gold, Alabaster Cream, Warm Parchment
    const ribbons = [
      {
        color: '241, 202, 126', // Imperial Gold (#f1ca7e)
        spring: 0.05,
        friction: 0.82,
        angleOffset: 0,
        orbitRadius: 32,
        tailLength: 36,
        points: [],
        currX: width / 2,
        currY: height / 2,
        vx: 0,
        vy: 0,
        maxWidth: 5.2,
        glowWidth: 15,
      },
      {
        color: '248, 238, 225', // Alabaster Cream (#f8eee1)
        spring: 0.04,
        friction: 0.84,
        angleOffset: (Math.PI * 2) / 3,
        orbitRadius: 40,
        tailLength: 42,
        points: [],
        currX: width / 2,
        currY: height / 2,
        vx: 0,
        vy: 0,
        maxWidth: 4.4,
        glowWidth: 13,
      },
      {
        color: '232, 220, 198', // Warm Parchment (#e8dcc6)
        spring: 0.03,
        friction: 0.86,
        angleOffset: (Math.PI * 4) / 3,
        orbitRadius: 48,
        tailLength: 48,
        points: [],
        currX: width / 2,
        currY: height / 2,
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
      frame++;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      const now = performance.now();
      const isMouseStationary = !mouse.isInside || now - lastMoveTimestamp > 180;

      const targetBlend = isMouseStationary ? 1 : 0;
      orbitBlend += (targetBlend - orbitBlend) * 0.05;

      const baseAnchorX = mouse.isInside ? mouse.x : width / 2;
      const baseAnchorY = mouse.isInside ? mouse.y : height / 2;

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
        ctx.strokeStyle = `rgba(${r.color}, 0.14)`;
        ctx.lineWidth = r.glowWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Pass 2: Mid-body ribbon
        for (let j = 0; j < pts.length - 2; j += 2) {
          const ratio = 1 - j / pts.length;
          const alpha = Math.pow(ratio, 1.4) * 0.5;

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
          const alpha = ratio * 0.65;

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
        tipGrad.addColorStop(0, `rgba(${r.color}, 0.55)`);
        tipGrad.addColorStop(0.5, `rgba(${r.color}, 0.18)`);
        tipGrad.addColorStop(1, 'rgba(90, 13, 27, 0)');

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
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full hidden md:block"
      aria-hidden="true"
    />
  );
}
