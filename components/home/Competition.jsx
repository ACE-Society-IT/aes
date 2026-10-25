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
 * AES 2026 - High-Impact Scroll-Driven Showcase Section
 * "YOUR VISION. YOUR VENTURE. YOUR SUMMIT."
 *
 * Flow:
 * 1. Screen enters with calm mask-revealed display typography.
 * 2. Picture 1 appears in the CENTER from the text, scales up, then travels diagonally to Top-Left.
 * 3. Picture 2 appears in the CENTER from the text, scales up, then travels diagonally to Bottom-Right.
 * 4. Calibrated scroll height (no trailing empty void before Modules slides in).
 */

const LINE_1 = 'YOUR VISION.';
const LINE_2 = 'YOUR VENTURE.';
const LINE_3 = 'YOUR SUMMIT.';

// Smooth character animation variants
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

  // Scroll tracking within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Inertia spring smoothing for scrub
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Calm text reveal as user enters
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.01 && !hasEntered) {
      setHasEntered(true);
    } else if (latest <= 0.002 && hasEntered) {
      setHasEntered(false);
    }
  });

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      if (scrollYProgress.get() > 0.01) {
        setHasEntered(true);
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, [scrollYProgress]);

  // Heading stays visible during photos, then gently scales into the incoming section
  const textScale = useTransform(smoothProgress, [0.85, 1.0], [1, 0.96]);

  // =========================================================================
  // PICTURE 1 (IF2025.jpg - KEYNOTE ARENA)
  // Appears at center (0.10 -> 0.24) and travels to Top-Left (0.24 -> 0.52)
  // =========================================================================
  const photo1Opacity = useTransform(
    smoothProgress,
    [0.08, 0.18, 0.48, 0.56],
    [0, 1, 1, 0]
  );
  const photo1Scale = useTransform(smoothProgress, [0.08, 0.22, 0.52], [0.3, 1.0, 1.1]);
  const photo1X = useTransform(
    smoothProgress,
    [0.08, 0.24, 0.52],
    ['0vw', '0vw', '-75vw']
  );
  const photo1Y = useTransform(
    smoothProgress,
    [0.08, 0.24, 0.52],
    ['0vh', '0vh', '-65vh']
  );
  const photo1Rotate = useTransform(smoothProgress, [0.08, 0.24, 0.52], [-3, -3, -15]);

  // =========================================================================
  // PICTURE 2 (if2025_2.jpg - STARTUP SHOWDOWN)
  // Appears at center (0.50 -> 0.64) and travels to Bottom-Right (0.64 -> 0.95)
  // Right as it completes at ~0.95-1.0, Modules immediately glides in!
  // Zero empty scroll void!
  // =========================================================================
  const photo2Opacity = useTransform(
    smoothProgress,
    [0.48, 0.58, 0.88, 0.98],
    [0, 1, 1, 0]
  );
  const photo2Scale = useTransform(smoothProgress, [0.48, 0.62, 0.95], [0.3, 1.0, 1.1]);
  const photo2X = useTransform(
    smoothProgress,
    [0.48, 0.64, 0.95],
    ['0vw', '0vw', '75vw']
  );
  const photo2Y = useTransform(
    smoothProgress,
    [0.48, 0.64, 0.95],
    ['0vh', '0vh', '65vh']
  );
  const photo2Rotate = useTransform(smoothProgress, [0.48, 0.64, 0.95], [3, 3, 15]);

  // Gold SVG accent doodles
  const doodle1Scale = useTransform(
    smoothProgress,
    [0.15, 0.22, 0.42, 0.5],
    [0, 1.15, 1, 0]
  );
  const doodle1Opacity = useTransform(
    smoothProgress,
    [0.15, 0.2, 0.42, 0.5],
    [0, 1, 1, 0]
  );

  const doodle2Scale = useTransform(
    smoothProgress,
    [0.55, 0.62, 0.82, 0.9],
    [0, 1.15, 1, 0]
  );
  const doodle2Opacity = useTransform(
    smoothProgress,
    [0.55, 0.6, 0.82, 0.9],
    [0, 1, 1, 0]
  );

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
      className="relative z-20 w-full h-[220vh] md:h-[300vh] bg-[#5a0d1b] text-[#f8eee1] select-none"
    >
      {/* Sticky Viewport Stage: Locks during the photo choreography */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center select-none">
        {/* Background Ambient Atmosphere */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,#89192c_0%,#701020_45%,#5a0d1b_100%)]" />

        {/* Ambient Warm Vignette Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-[#f1ca7e]/[0.05] rounded-full blur-3xl pointer-events-none z-0" />

        {/* Centered 3-Line Stacked Heading (Calm & Smooth Mask Reveal) */}
        <motion.div
          style={{
            scale: textScale,
          }}
          className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center will-change-transform pointer-events-none"
        >
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tighter text-[#f8eee1] leading-[0.92] sm:leading-[0.88] select-none text-center">
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
                className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#f8eee1] via-[#f1ca7e] to-[#e8dcc6]"
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
                className="flex justify-center text-[#f8eee1] drop-shadow-[0_15px_35px_rgba(90,13,27,0.95)]"
              >
                {renderCharacters(LINE_3)}
              </motion.div>
            </div>
          </h2>
        </motion.div>

        {/* Gold SVG Accent Doodles */}
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
            className="w-14 h-14 sm:w-18 sm:h-18 stroke-[#f1ca7e] fill-none stroke-[3] stroke-linecap-round filter drop-shadow-[0_0_12px_rgba(241,202,126,0.7)]"
          >
            <path d="M50 10 Q50 45 15 50 Q50 50 50 85 Q50 50 85 50 Q50 45 50 10Z" />
            <circle cx="82" cy="22" r="3" fill="#f1ca7e" />
            <circle cx="18" cy="78" r="2.5" fill="#f1ca7e" />
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
            className="w-24 h-12 sm:w-32 sm:h-16 stroke-[#f1ca7e] fill-none stroke-[3.5] stroke-linecap-round stroke-linejoin-round filter drop-shadow-[0_0_12px_rgba(241,202,126,0.7)]"
          >
            <path d="M10 55 C45 15, 115 15, 145 42" />
            <path d="M128 26 L148 43 L126 53" />
          </svg>
        </motion.div>

        {/* =========================================================================
            STAGE 3: Sequential Picture 1 & Picture 2
            - Picture 1 appears in the CENTER from text -> travels to Top-Left
            - Then Picture 2 appears in the CENTER from text -> travels to Bottom-Right
           ========================================================================= */}

        {/* PICTURE 1: Keynote Arena */}
        <motion.div
          style={{
            x: photo1X,
            y: photo1Y,
            scale: photo1Scale,
            rotate: photo1Rotate,
            opacity: photo1Opacity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-56 sm:w-76 md:w-96 aspect-[3/4] will-change-transform pointer-events-none"
        >
          <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-[#89192c] bg-[#5a0d1b] shadow-[0_30px_70px_rgba(90,13,27,0.95)]">
            <Image
              src="/sample-pics/IF2025.jpg"
              alt="Speaker Keynote Session"
              fill
              sizes="(max-width: 768px) 260px, 380px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0d1b]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1.5 rounded-xl bg-[#701020]/90 backdrop-blur-md border border-[#89192c] text-[10px] font-bold tracking-widest uppercase text-[#f1ca7e]">
                KEYNOTE ARENA
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#e8dcc6]">
                AES 2026
              </span>
            </div>
          </div>
        </motion.div>

        {/* PICTURE 2: Startup Showdown */}
        <motion.div
          style={{
            x: photo2X,
            y: photo2Y,
            scale: photo2Scale,
            rotate: photo2Rotate,
            opacity: photo2Opacity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-56 sm:w-76 md:w-96 aspect-[3/4] will-change-transform pointer-events-none"
        >
          <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-[#89192c] bg-[#5a0d1b] shadow-[0_30px_70px_rgba(90,13,27,0.95)]">
            <Image
              src="/sample-pics/if2025_2.jpg"
              alt="Live Stage Startup Pitch"
              fill
              sizes="(max-width: 768px) 260px, 380px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0d1b]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1.5 rounded-xl bg-[#701020]/90 backdrop-blur-md border border-[#89192c] text-[10px] font-bold tracking-widest uppercase text-[#f1ca7e]">
                STARTUP SHOWDOWN
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#e8dcc6]">
                AES 2026
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
