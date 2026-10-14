'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * High-Impact Scroll-Driven Image Scatter & Typography Animation.
 * Uses Framer Motion useScroll + useSpring for extreme, buttery-smooth
 * scroll-scrubbed 3D depth choreography.
 */
export default function Competition() {
  const containerRef = useRef(null);

  // Bind scroll progress across the 280vh track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Inertia spring physics to eliminate abrupt stops
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Typography animations: dynamic reveal and subtle scale progression
  const textScale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.0, 1.1]);
  const textOpacity = useTransform(smoothProgress, [0, 0.15, 0.9, 1], [0.35, 1, 1, 0.85]);
  const textLetterSpacing = useTransform(smoothProgress, [0, 1], ['-0.05em', '-0.02em']);

  // Scroll scrub progress bar indicator
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // --- Multi-Directional Image Vectors ---

  // 1. Top-Left Image (z-10: Behind text)
  const tlX = useTransform(smoothProgress, [0, 1], ['0%', '-60%']);
  const tlY = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);
  const tlRotate = useTransform(smoothProgress, [0, 1], [0, -12]);
  const tlScale = useTransform(smoothProgress, [0, 1], [0.85, 1.08]);

  // 2. Top-Right Image (z-30: In front of text)
  const trX = useTransform(smoothProgress, [0, 1], ['0%', '65%']);
  const trY = useTransform(smoothProgress, [0, 1], ['0%', '-45%']);
  const trRotate = useTransform(smoothProgress, [0, 1], [0, 15]);
  const trScale = useTransform(smoothProgress, [0, 1], [0.8, 1.15]);

  // 3. Bottom-Left Image (z-30: In front of text)
  const blX = useTransform(smoothProgress, [0, 1], ['0%', '-55%']);
  const blY = useTransform(smoothProgress, [0, 1], ['0%', '60%']);
  const blRotate = useTransform(smoothProgress, [0, 1], [0, 8]);
  const blScale = useTransform(smoothProgress, [0, 1], [0.85, 1.05]);

  // 4. Bottom-Right Image (z-10: Behind text)
  const brX = useTransform(smoothProgress, [0, 1], ['0%', '60%']);
  const brY = useTransform(smoothProgress, [0, 1], ['0%', '55%']);
  const brRotate = useTransform(smoothProgress, [0, 1], [0, -10]);
  const brScale = useTransform(smoothProgress, [0, 1], [0.75, 1.12]);

  // 5. Center/Accent Image (z-30: Foreground depth-of-field rush)
  const centerRushX = useTransform(smoothProgress, [0, 1], ['0%', '105%']);
  const centerRushY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);
  const centerRushRotate = useTransform(smoothProgress, [0, 1], [-4, -18]);
  const centerRushScale = useTransform(smoothProgress, [0, 1], [0.6, 1.25]);
  const centerRushOpacity = useTransform(smoothProgress, [0, 0.2, 0.85, 1], [0.2, 0.9, 0.9, 0.6]);

  // 6. Deep Background Accent Image (z-10: Slow ambient parallax)
  const bgAccentX = useTransform(smoothProgress, [0, 1], ['0%', '-30%']);
  const bgAccentY = useTransform(smoothProgress, [0, 1], ['0%', '-80%']);
  const bgAccentRotate = useTransform(smoothProgress, [0, 1], [4, 9]);
  const bgAccentScale = useTransform(smoothProgress, [0, 1], [0.65, 0.9]);
  const bgAccentOpacity = useTransform(smoothProgress, [0, 0.3, 0.9, 1], [0.2, 0.6, 0.6, 0.3]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280vh] bg-[#0D0704] text-[#F4EFEA]"
    >
      {/* Sticky Fullscreen Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center select-none">
        {/* Background Atmosphere: Deep Espresso Radial Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #2A1A13 0%, #160D09 55%, #0D0704 100%)',
          }}
        />

        {/* Architectural Fine Coordinate Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{
            backgroundImage: `linear-gradient(#E5D9C5 1px, transparent 1px), linear-gradient(to right, #E5D9C5 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient Corner Glow Halos */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-[#E5D9C5]/[0.035] rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-[#38251D]/[0.45] rounded-full blur-3xl pointer-events-none z-0" />

        {/* =========================================================================
            LAYER 1 (z-10): Images Passing BEHIND Typography
           ========================================================================= */}

        {/* 1. Top-Left Floating Image */}
        <motion.div
          style={{
            x: tlX,
            y: tlY,
            rotate: tlRotate,
            scale: tlScale,
          }}
          className="absolute top-[16%] left-[8%] sm:left-[14%] z-10 w-44 sm:w-60 md:w-72 lg:w-84 aspect-[4/3] will-change-transform"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#52433D]/60 bg-[#160D09] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
            <Image
              src="/sample-pics/IF2025.jpg"
              alt="Speaker Keynote Showcase"
              fill
              sizes="(max-width: 768px) 180px, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0704]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 rounded-md bg-[#160D09]/85 backdrop-blur-md border border-[#52433D]/60 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-[#E5D9C5]">
              KEYNOTE ARENA
            </div>
          </div>
        </motion.div>

        {/* 4. Bottom-Right Floating Image */}
        <motion.div
          style={{
            x: brX,
            y: brY,
            rotate: brRotate,
            scale: brScale,
          }}
          className="absolute bottom-[16%] right-[8%] sm:right-[14%] z-10 w-44 sm:w-60 md:w-72 lg:w-80 aspect-[4/3] will-change-transform"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#52433D]/60 bg-[#160D09] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
            <Image
              src="/sample-pics/Business-Summit.jpg"
              alt="Business Summit Ecosystem"
              fill
              sizes="(max-width: 768px) 180px, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0704]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 rounded-md bg-[#160D09]/85 backdrop-blur-md border border-[#52433D]/60 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-[#E5D9C5]">
              VENTURE SUMMIT
            </div>
          </div>
        </motion.div>

        {/* 6. Deep Background Top-Center Accent */}
        <motion.div
          style={{
            x: bgAccentX,
            y: bgAccentY,
            rotate: bgAccentRotate,
            scale: bgAccentScale,
            opacity: bgAccentOpacity,
          }}
          className="absolute top-[18%] left-[40%] z-10 w-40 sm:w-52 md:w-64 aspect-[4/3] hidden sm:block will-change-transform"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#52433D]/40 bg-[#160D09] shadow-2xl">
            <Image
              src="/sample-pics/if2025_2.jpg"
              alt="Audience & Judges Session"
              fill
              sizes="240px"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[#0D0704]/40" />
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 2 (z-20): Central Massive Typographic Lockup
           ========================================================================= */}
        <motion.div
          style={{
            scale: textScale,
            opacity: textOpacity,
          }}
          className="relative z-20 max-w-5xl mx-auto px-4 flex flex-col items-center text-center will-change-transform pointer-events-none"
        >
          {/* Summit Pre-badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#241712]/90 border border-[#443027] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#E5D9C5] mb-4 sm:mb-6 backdrop-blur-md shadow-xl shadow-black/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5] animate-ping" />
            <span>AES 2026 COMPETITION ARENA</span>
          </div>

          {/* Massive Display Lockup */}
          <motion.h2
            style={{ letterSpacing: textLetterSpacing }}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black uppercase text-[#F4EFEA] leading-[0.88] select-none text-center"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F4EFEA] via-[#E5D9C5] to-[#B09B8C] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
              VENTURE
            </span>
            <span className="block text-[#F4EFEA] drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]">
              ARENA
            </span>
          </motion.h2>

          {/* Subtext Description */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[#B09B8C] max-w-xl text-center leading-relaxed font-normal">
            High-stakes venture battles where visionary founders pitch live before global investors, angel syndicates, and market leaders.
          </p>

          {/* Category Tag Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#E5D9C5]/85">
            <span className="px-3 py-1 rounded-full bg-[#241712]/80 border border-[#443027]">
              $500K+ Prize Pool
            </span>
            <span className="px-3 py-1 rounded-full bg-[#241712]/80 border border-[#443027]">
              Live Pitch
            </span>
            <span className="px-3 py-1 rounded-full bg-[#241712]/80 border border-[#443027]">
              VC Demo Day
            </span>
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 3 (z-30): Images Passing IN FRONT of Typography (3D Depth)
           ========================================================================= */}

        {/* 2. Top-Right Floating Image */}
        <motion.div
          style={{
            x: trX,
            y: trY,
            rotate: trRotate,
            scale: trScale,
          }}
          className="absolute top-[12%] right-[6%] sm:right-[12%] z-30 w-48 sm:w-64 md:w-76 lg:w-88 aspect-[4/3] will-change-transform"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#52433D]/70 bg-[#160D09] shadow-[0_25px_60px_rgba(0,0,0,0.95)] group">
            <Image
              src="/sample-pics/if2025_2.jpg"
              alt="Live Stage Founder Pitch"
              fill
              sizes="(max-width: 768px) 200px, 340px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0704]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 rounded-md bg-[#160D09]/90 backdrop-blur-md border border-[#52433D]/70 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-[#E5D9C5]">
              STARTUP SHOWDOWN
            </div>
          </div>
        </motion.div>

        {/* 3. Bottom-Left Floating Image */}
        <motion.div
          style={{
            x: blX,
            y: blY,
            rotate: blRotate,
            scale: blScale,
          }}
          className="absolute bottom-[14%] left-[6%] sm:left-[12%] z-30 w-48 sm:w-64 md:w-76 lg:w-84 aspect-[4/3] will-change-transform"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#52433D]/70 bg-[#160D09] shadow-[0_25px_60px_rgba(0,0,0,0.95)] group">
            <Image
              src="/sample-pics/IF2025.jpg"
              alt="Judge Panel & Presentation"
              fill
              sizes="(max-width: 768px) 200px, 340px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0704]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 rounded-md bg-[#160D09]/90 backdrop-blur-md border border-[#52433D]/70 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-[#E5D9C5]">
              INVESTOR ARENA
            </div>
          </div>
        </motion.div>

        {/* 5. Center-Right Foreground Depth Rush Image */}
        <motion.div
          style={{
            x: centerRushX,
            y: centerRushY,
            rotate: centerRushRotate,
            scale: centerRushScale,
            opacity: centerRushOpacity,
          }}
          className="absolute top-[36%] right-[16%] sm:right-[20%] z-30 w-44 sm:w-56 md:w-68 aspect-[4/3] will-change-transform"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E5D9C5]/40 bg-[#160D09] shadow-[0_30px_70px_rgba(0,0,0,0.98)] group">
            <Image
              src="/sample-pics/Business-Summit.jpg"
              alt="Innovation Showcase Gala"
              fill
              sizes="(max-width: 768px) 180px, 280px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0704]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 rounded-md bg-[#160D09]/90 backdrop-blur-md border border-[#E5D9C5]/50 text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-[#E5D9C5]">
              STAGE FINALE
            </div>
          </div>
        </motion.div>

        {/* Bottom Scroll-Scrub Progress Bar Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#B09B8C]">
            SCROLL TO EXPLORE ARENA
          </span>
          <div className="w-36 sm:w-48 h-1 rounded-full bg-[#3A2D28] overflow-hidden border border-[#52433D]/60">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-gradient-to-r from-[#B09B8C] via-[#E5D9C5] to-[#F4EFEA] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}