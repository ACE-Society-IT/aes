'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SUMMIT_DATES = [
  { day: 'FRIDAY', date: '13', month: 'NOV', tag: 'Kickoff & Keynotes' },
  { day: 'SATURDAY', date: '14', month: 'NOV', tag: 'Pitch & Innovation' },
  { day: 'SUNDAY', date: '15', month: 'NOV', tag: 'Venture & Gala' },
];

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // 3-Line Mouse Streak Continuous Motion Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Track DPR for ultra-crisp rendering on Retina screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resizeCanvas = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    // Initial mouse center position
    const mouse = {
      x: width / 2,
      y: height * 0.45,
      targetX: width / 2,
      targetY: height * 0.45,
      active: false,
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 3 distinct streak ribbon configurations inspired by the reference photo comets
    const ribbons = [
      {
        color: { r: 229, g: 217, b: 197 }, // Brand Sand / Beige
        glowColor: 'rgba(229, 217, 197, 0.95)',
        headRadius: 4,
        glowRadius: 18,
        lerpRate: 0.12,
        phaseOffset: 0,
        waveFreq: 0.003,
        waveAmp: 24,
        tailLength: 38,
        points: [],
        currentX: width / 2,
        currentY: height * 0.45,
      },
      {
        color: { r: 244, g: 239, b: 234 }, // Crisp Soft Off-White
        glowColor: 'rgba(244, 239, 234, 0.9)',
        headRadius: 3.2,
        glowRadius: 15,
        lerpRate: 0.08,
        phaseOffset: 2.1,
        waveFreq: 0.0024,
        waveAmp: 34,
        tailLength: 46,
        points: [],
        currentX: width / 2,
        currentY: height * 0.45,
      },
      {
        color: { r: 196, g: 168, b: 145 }, // Muted Warm Taupe / Amber
        glowColor: 'rgba(215, 185, 155, 0.85)',
        headRadius: 2.6,
        glowRadius: 12,
        lerpRate: 0.05,
        phaseOffset: 4.2,
        waveFreq: 0.0018,
        waveAmp: 44,
        tailLength: 54,
        points: [],
        currentX: width / 2,
        currentY: height * 0.45,
      },
    ];

    // Seed points array
    ribbons.forEach((ribbon) => {
      for (let i = 0; i < ribbon.tailLength; i++) {
        ribbon.points.push({ x: ribbon.currentX, y: ribbon.currentY });
      }
    });

    let time = 0;

    const render = () => {
      time += 1;

      // Soft clear for natural streak trail dissolve
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse position easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Idle drifting motion if mouse is resting or left the area
      const idleWaveX = Math.sin(time * 0.015) * 60;
      const idleWaveY = Math.cos(time * 0.012) * 35;
      const baseAnchorX = mouse.active ? mouse.x : width / 2 + idleWaveX;
      const baseAnchorY = mouse.active ? mouse.y : height * 0.42 + idleWaveY;

      // Draw each of the 3 continuous motion streak lines
      ribbons.forEach((ribbon, rIdx) => {
        // Continuous perpetual undulation along horizontal trajectory
        const harmonicX =
          Math.sin(time * ribbon.waveFreq + ribbon.phaseOffset) *
          ribbon.waveAmp *
          1.2;
        const harmonicY =
          Math.cos(time * ribbon.waveFreq * 1.3 + ribbon.phaseOffset) *
          ribbon.waveAmp *
          0.8;

        // Target position with individual drag
        const targetX = baseAnchorX + harmonicX;
        const targetY = baseAnchorY + harmonicY + (rIdx - 1) * 16;

        ribbon.currentX += (targetX - ribbon.currentX) * ribbon.lerpRate;
        ribbon.currentY += (targetY - ribbon.currentY) * ribbon.lerpRate;

        // Unshift new head point and trim tail
        ribbon.points.unshift({ x: ribbon.currentX, y: ribbon.currentY });
        if (ribbon.points.length > ribbon.tailLength) {
          ribbon.points.pop();
        }

        const pts = ribbon.points;
        if (pts.length < 2) return;

        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        // 1. Draw glowing Comet Ribbon Path with smooth bezier curve
        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i];
          const p2 = pts[i + 1];
          const ratio = 1 - i / pts.length;
          const alpha = Math.pow(ratio, 1.8) * 0.85;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          ctx.strokeStyle = `rgba(${ribbon.color.r}, ${ribbon.color.g}, ${ribbon.color.b}, ${alpha})`;
          ctx.lineWidth = ribbon.headRadius * ratio * 1.8;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          // Glow shadow on leading segment
          if (i < 8) {
            ctx.shadowColor = ribbon.glowColor;
            ctx.shadowBlur = 12 * ratio;
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.stroke();
        }

        // 2. Horizontal streak accent lines (inspired by reference image speed streaks)
        const head = pts[0];
        const streakLength = 80 + Math.sin(time * 0.05 + rIdx) * 25;
        const streakGrad = ctx.createLinearGradient(
          head.x - streakLength,
          head.y,
          head.x,
          head.y
        );
        streakGrad.addColorStop(
          0,
          `rgba(${ribbon.color.r}, ${ribbon.color.g}, ${ribbon.color.b}, 0)`
        );
        streakGrad.addColorStop(
          0.7,
          `rgba(${ribbon.color.r}, ${ribbon.color.g}, ${ribbon.color.b}, 0.3)`
        );
        streakGrad.addColorStop(
          1,
          `rgba(${ribbon.color.r}, ${ribbon.color.g}, ${ribbon.color.b}, 0.9)`
        );

        ctx.beginPath();
        ctx.moveTo(head.x - streakLength, head.y);
        ctx.lineTo(head.x, head.y);
        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = ribbon.headRadius * 0.8;
        ctx.stroke();

        // 3. Radiant Comet Head with outer optical bloom
        const headGrad = ctx.createRadialGradient(
          head.x,
          head.y,
          0,
          head.x,
          head.y,
          ribbon.glowRadius
        );
        headGrad.addColorStop(0, '#FFFFFF');
        headGrad.addColorStop(0.25, ribbon.glowColor);
        headGrad.addColorStop(
          0.7,
          `rgba(${ribbon.color.r}, ${ribbon.color.g}, ${ribbon.color.b}, 0.25)`
        );
        headGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(head.x, head.y, ribbon.glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.shadowColor = ribbon.glowColor;
        ctx.shadowBlur = 16;
        ctx.fill();

        // Pinpoint bright core
        ctx.beginPath();
        ctx.arc(head.x, head.y, ribbon.headRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#281A14] pt-28 pb-20 px-4 sm:px-6 lg:px-8 select-none"
      style={{
        background:
          'radial-gradient(circle at 50% 42%, #38251D 0%, #281A14 62%, #1E130E 100%)',
      }}
    >
      {/* Background Architectural Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#E5D9C5 1px, transparent 1px), linear-gradient(to right, #E5D9C5 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Depth Vignette & Radial Light Aura */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#281A14]/20 to-[#1E130E]/90" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E5D9C5]/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Interactive 3-Line Mouse Streak Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Main Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Pre-title Summit Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#3A2D28]/85 border border-[#52433D] text-xs font-semibold uppercase tracking-wider text-[#E5D9C5] mb-8 backdrop-blur-md shadow-lg shadow-black/20 hover:border-[#E5D9C5]/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#E5D9C5] animate-ping" />
          <span>Alpha Entrepreneurship Summit 2026</span>
        </div>

        {/* Centerpiece Main Attraction: AES Monument Logo */}
        <div className="relative group mb-6 flex flex-col items-center justify-center">
          {/* Ambient Logo Backlight Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#E5D9C5]/10 via-[#38251D]/60 to-[#E5D9C5]/10 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative w-64 sm:w-80 md:w-96 lg:w-[440px] h-28 sm:h-36 md:h-44 lg:h-52 transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/aes-logo.png"
              alt="AES - Alpha Entrepreneurship Summit"
              fill
              priority
              className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
            />
          </div>

          <span className="mt-2 text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#B09B8C]">
            Alpha Entrepreneurship Summit
          </span>
        </div>

        {/* Headline & High-craft Subtitle */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4EFEA] max-w-4xl leading-[1.12]">
          Where Trailblazers Shape the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4EFEA] via-[#E5D9C5] to-[#B09B8C]">
            Future of Enterprise
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-[#B09B8C] max-w-2xl font-normal leading-relaxed">
          Three days of visionary discourse, high-stakes venture showcases, and
          curated networking with top founders, venture partners, and pioneers.
        </p>

        {/* 3 Highlighted Dates Section (Nov 13, Nov 14, Nov 15) */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center w-full">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">
            Official Summit Dates
          </div>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6">
            {SUMMIT_DATES.map((item, idx) => (
              <div
                key={item.date}
                className="group relative w-24 sm:w-28 md:w-32 h-28 sm:h-32 md:h-36 rounded-2xl bg-[#3A2D28]/80 backdrop-blur-md border border-[#52433D] hover:border-[#E5D9C5]/70 hover:bg-[#463630] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 flex flex-col items-center justify-center cursor-default"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#E5D9C5]/40 group-hover:via-[#E5D9C5] to-transparent rounded-full transition-colors" />

                {/* Weekday Micro-label */}
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#9CA3AF] uppercase">
                  {item.day}
                </span>

                {/* Date Highlight */}
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F4EFEA] group-hover:text-[#E5D9C5] transition-colors my-0.5 sm:my-1 leading-none tracking-tight">
                  {item.date}
                </span>

                {/* Month Label */}
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#E5D9C5]">
                  {item.month}
                </span>

                {/* Day Tag tooltip/micro-label */}
                <span className="text-[9px] text-[#B09B8C]/80 mt-1 hidden sm:block font-medium">
                  Day 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center">
          <Link
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full bg-white text-[#1E1410] hover:bg-[#E5D9C5] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5]"
          >
            Register for Summit
          </Link>

          <Link
            href="#schedule"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-[#3A2D28]/80 text-[#F4EFEA] border border-[#52433D] hover:border-[#E5D9C5]/60 hover:bg-[#463630] hover:text-[#E5D9C5] transition-all duration-200 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5]"
          >
            Explore Schedule
          </Link>
        </div>

        {/* Trust & Summit Highlights Micro-Badge */}
        <div className="mt-12 pt-8 border-t border-[#52433D]/30 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-[#B09B8C]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5]" />
            50+ Visionary Speakers
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5]" />
            Venture Pitch Arena
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5]" />
            Global Founder Network
          </span>
        </div>
      </div>
    </section>
  );
}