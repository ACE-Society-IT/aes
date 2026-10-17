'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';

/**
 * AES 2026 - High-Impact Sticky Showcase Section
 *
 * Flow:
 * 1. Blank on Entrance: Initial state starts completely blank until user scrolls into the section.
 * 2. Calm & Smooth Text Reveal: Staggered character slide-up from overflow-hidden masks
 *    with smooth cubic-bezier easing [0.22, 1, 0.36, 1] and tight, stacked display typography.
 * 3. Sequential Center-to-Corner Image Choreography:
 *    - Picture 1 appears in the CENTER of the screen directly from the text, scales up,
 *      then travels diagonally to the Top-Left corner on scroll and exits.
 *    - Then Picture 2 appears in the CENTER of the screen directly from the text, scales up,
 *      then travels diagonally to the Bottom-Right corner on scroll and exits.
 * 4. No end blueprint wireframe illustration or cross-fading layout picture at the end.
 */

const LINE_1 = 'YOUR VISION.';
const LINE_2 = 'YOUR VENTURE.';
const LINE_3 = 'YOUR SUMMIT.';

// Smooth character animation variants: calm 0.65s slide-up inside overflow:hidden
const charVariants = {
  hidden: {
    y: '110%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = (delayOffset = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: delayOffset,
    },
  },
});

export default function Competition() {
  const containerRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  // 1. Scroll-linking mechanics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Inertia spring smoothing for silky scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Control calm text reveal: screen is blank when entering, triggers smoothly past 0.02
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.02 && !hasEntered) {
      setHasEntered(true);
    } else if (latest <= 0.005 && hasEntered) {
      setHasEntered(false);
    }
  });

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      if (scrollYProgress.get() > 0.02) {
        setHasEntered(true);
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, [scrollYProgress]);

  // Heading exit fade near the very end of the 320vh scroll track
  const textExitOpacity = useTransform(smoothProgress, [0.88, 0.96], [1, 0]);
  const textExitScale = useTransform(smoothProgress, [0.88, 0.96], [1, 0.95]);

  // =========================================================================
  // PICTURE 1 (IF2025.jpg - KEYNOTE ARENA)
  // 1. Appears in the CENTER of the screen from the text (0.16 -> 0.28)
  // 2. Holds briefly, then travels diagonally to the Top-Left corner (0.28 -> 0.50)
  // =========================================================================
  const photo1Opacity = useTransform(
    smoothProgress,
    [0.15, 0.22, 0.44, 0.5],
    [0, 1, 1, 0]
  );
  const photo1Scale = useTransform(smoothProgress, [0.15, 0.25, 0.5], [0.3, 1.0, 1.1]);
  const photo1X = useTransform(
    smoothProgress,
    [0.15, 0.28, 0.5],
    ['0vw', '0vw', '-85vw']
  );
  const photo1Y = useTransform(
    smoothProgress,
    [0.15, 0.28, 0.5],
    ['0vh', '0vh', '-72vh']
  );
  const photo1Rotate = useTransform(smoothProgress, [0.15, 0.28, 0.5], [-3, -3, -16]);

  // =========================================================================
  // PICTURE 2 (if2025_2.jpg - STARTUP SHOWDOWN)
  // 1. Appears in the CENTER of the screen from the text (0.50 -> 0.62)
  // 2. Holds briefly, then travels diagonally to the Bottom-Right corner (0.62 -> 0.84)
  // =========================================================================
  const photo2Opacity = useTransform(
    smoothProgress,
    [0.49, 0.56, 0.78, 0.84],
    [0, 1, 1, 0]
  );
  const photo2Scale = useTransform(smoothProgress, [0.49, 0.59, 0.84], [0.3, 1.0, 1.1]);
  const photo2X = useTransform(
    smoothProgress,
    [0.49, 0.62, 0.84],
    ['0vw', '0vw', '85vw']
  );
  const photo2Y = useTransform(
    smoothProgress,
    [0.49, 0.62, 0.84],
    ['0vh', '0vh', '72vh']
  );
  const photo2Rotate = useTransform(smoothProgress, [0.49, 0.62, 0.84], [3, 3, 16]);

  // Gold SVG accent doodles
  const doodle1Scale = useTransform(
    smoothProgress,
    [0.2, 0.26, 0.4, 0.46],
    [0, 1.15, 1, 0]
  );
  const doodle1Opacity = useTransform(
    smoothProgress,
    [0.2, 0.24, 0.4, 0.46],
    [0, 1, 1, 0]
  );

  const doodle2Scale = useTransform(
    smoothProgress,
    [0.54, 0.6, 0.74, 0.8],
    [0, 1.15, 1, 0]
  );
  const doodle2Opacity = useTransform(
    smoothProgress,
    [0.54, 0.58, 0.74, 0.8],
    [0, 1, 1, 0]
  );

  // Bottom scrub bar
  const progressBarWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Helper to split text into characters
  const renderCharacters = (text) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        variants={charVariants}
        className="inline-block will-change-transform"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#0D0704] text-[#F4EFEA]"
    >
      {/* Sticky Viewport Stage (h-screen, sticky top-0, overflow:hidden) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center select-none">
        {/* Background Ambient Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #2A1A13 0%, #160D09 58%, #0D0704 100%)',
          }}
        />

        {/* Ambient Warm Vignette Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-[#E5D9C5]/[0.035] rounded-full blur-3xl pointer-events-none z-0" />

        {/* =========================================================================
            STAGE 1: Centered 3-Line Stacked Heading (Calm & Smooth Mask Reveal)
            Z-Index: 10 (Centered Typography)
           ========================================================================= */}
        <motion.div
          style={{
            opacity: textExitOpacity,
            scale: textExitScale,
          }}
          className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center will-change-transform pointer-events-none"
        >
          {/* 3-Line Stacked Uppercase Heading (Tight leading, no unnecessary space) */}
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tighter text-[#F4EFEA] leading-[0.88] select-none text-center">
            {/* Line 1: YOUR VISION. */}
            <div className="overflow-hidden">
              <motion.div
                variants={lineVariants(0.06)}
                initial="hidden"
                animate={hasEntered ? 'visible' : 'hidden'}
                className="flex justify-center"
              >
                {renderCharacters(LINE_1)}
              </motion.div>
            </div>

            {/* Line 2: YOUR VENTURE. */}
            <div className="overflow-hidden">
              <motion.div
                variants={lineVariants(0.36)}
                initial="hidden"
                animate={hasEntered ? 'visible' : 'hidden'}
                className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#F4EFEA] via-[#E5D9C5] to-[#B09B8C]"
              >
                {renderCharacters(LINE_2)}
              </motion.div>
            </div>

            {/* Line 3: YOUR SUMMIT. */}
            <div className="overflow-hidden">
              <motion.div
                variants={lineVariants(0.66)}
                initial="hidden"
                animate={hasEntered ? 'visible' : 'hidden'}
                className="flex justify-center text-[#F4EFEA] drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
              >
                {renderCharacters(LINE_3)}
              </motion.div>
            </div>
          </h2>
        </motion.div>

        {/* =========================================================================
            STAGE 2: Gold SVG Accent Doodles (Pop In & Out)
           ========================================================================= */}
        {/* Doodle 1: Sparkle Star Cluster (Top Right of Text, active during Photo 1) */}
        <motion.div
          style={{
            scale: doodle1Scale,
            opacity: doodle1Opacity,
          }}
          className="absolute top-[26%] right-[14%] sm:right-[20%] z-25 pointer-events-none will-change-transform"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-14 h-14 sm:w-18 sm:h-18 stroke-[#E5D9C5] fill-none stroke-[3] stroke-linecap-round filter drop-shadow-[0_0_12px_rgba(229,217,197,0.7)]"
          >
            <path d="M50 10 Q50 45 15 50 Q50 50 50 85 Q50 50 85 50 Q50 45 50 10Z" />
            <circle cx="82" cy="22" r="3" fill="#E5D9C5" />
            <circle cx="18" cy="78" r="2.5" fill="#E5D9C5" />
          </svg>
        </motion.div>

        {/* Doodle 2: Hand-drawn Curved Arrow Swoop (Mid-Left, active during Photo 2) */}
        <motion.div
          style={{
            scale: doodle2Scale,
            opacity: doodle2Opacity,
          }}
          className="absolute bottom-[26%] left-[12%] sm:left-[18%] z-25 pointer-events-none will-change-transform"
        >
          <svg
            viewBox="0 0 160 80"
            className="w-24 h-12 sm:w-32 sm:h-16 stroke-[#E5D9C5] fill-none stroke-[3.5] stroke-linecap-round stroke-linejoin-round filter drop-shadow-[0_0_12px_rgba(229,217,197,0.7)]"
          >
            <path d="M10 55 C45 15, 115 15, 145 42" />
            <path d="M128 26 L148 43 L126 53" />
          </svg>
        </motion.div>

        {/* =========================================================================
            STAGE 3: Sequential Picture 1 & Picture 2
            - Picture 1 appears in the CENTER from the text, then travels to Top-Left corner
            - Then Picture 2 appears in the CENTER from the text, then travels to Bottom-Right corner
           ========================================================================= */}

        {/* PICTURE 1: Appears at Center -> Travels to Top-Left Corner */}
        <motion.div
          style={{
            x: photo1X,
            y: photo1Y,
            scale: photo1Scale,
            rotate: photo1Rotate,
            opacity: photo1Opacity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 sm:w-80 md:w-96 aspect-[3/4] will-change-transform pointer-events-none"
        >
          <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-[#52433D]/70 bg-[#160D09] shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
            <Image
              src="/sample-pics/IF2025.jpg"
              alt="Speaker Keynote Session"
              fill
              sizes="(max-width: 768px) 260px, 380px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0704]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1.5 rounded-xl bg-[#160D09]/90 backdrop-blur-md border border-[#52433D]/70 text-[10px] font-bold tracking-widest uppercase text-[#E5D9C5]">
                KEYNOTE ARENA
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#B09B8C]">
                AES 2026
              </span>
            </div>
          </div>
        </motion.div>

        {/* PICTURE 2: Appears at Center -> Travels to Bottom-Right Corner */}
        <motion.div
          style={{
            x: photo2X,
            y: photo2Y,
            scale: photo2Scale,
            rotate: photo2Rotate,
            opacity: photo2Opacity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 sm:w-80 md:w-96 aspect-[3/4] will-change-transform pointer-events-none"
        >
          <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-[#52433D]/70 bg-[#160D09] shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
            <Image
              src="/sample-pics/if2025_2.jpg"
              alt="Live Stage Startup Pitch"
              fill
              sizes="(max-width: 768px) 260px, 380px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0704]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1.5 rounded-xl bg-[#160D09]/90 backdrop-blur-md border border-[#52433D]/70 text-[10px] font-bold tracking-widest uppercase text-[#E5D9C5]">
                STARTUP SHOWDOWN
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#B09B8C]">
                PKR 1.5M+ POOL
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
