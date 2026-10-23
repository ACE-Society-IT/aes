'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   AES 2026 - High-Impact Summit Showcase
   "YOUR VISION. YOUR VENTURE. YOUR SUMMIT."
   No sticky scroll hijacking · No empty trailing void beneath
   ───────────────────────────────────────────────────────────── */

export default function Competition() {
  return (
    <section
      id="competition"
      className="relative z-20 w-full bg-[#5a0d1b] text-[#f8eee1] py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Background Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,#89192c_0%,#701020_45%,#5a0d1b_100%)]" />

      {/* Ambient Warm Glow Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-[#f1ca7e]/[0.06] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#89192c]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#701020]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#701020] border border-[#89192c] text-[#f1ca7e] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-4 sm:mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flagship Arena · AES 2026</span>
        </motion.div>

        {/* 3-Line Stacked Display Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-[#f8eee1] leading-[0.94] select-none">
            {/* Line 1: YOUR VISION. */}
            <span className="block text-[#f8eee1]">
              YOUR VISION.
            </span>

            {/* Line 2: YOUR VENTURE. */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f8eee1] via-[#f1ca7e] to-[#e8dcc6] my-1 sm:my-2">
              YOUR VENTURE.
            </span>

            {/* Line 3: YOUR SUMMIT. */}
            <span className="block text-[#f8eee1] drop-shadow-[0_15px_35px_rgba(90,13,27,0.95)]">
              YOUR SUMMIT.
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-xs sm:text-base text-[#e8dcc6] leading-relaxed">
            Where Pakistan&apos;s most ambitious student founders, corporate leaders, and venture investors converge for three days of competitive simulations.
          </p>
        </motion.div>

        {/* Two Showcase Feature Photo Cards (Clean, Responsive, No Empty Spacer) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl mt-8 sm:mt-12 md:mt-14">
          {/* PHOTO 1: KEYNOTE ARENA */}
          <motion.div
            initial={{ opacity: 0, y: 28, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#89192c] hover:border-[#f1ca7e]/60 bg-[#701020] shadow-[0_20px_50px_rgba(90,13,27,0.8)] aspect-[4/3] sm:aspect-[3/4] transition-all duration-300"
          >
            <Image
              src="/sample-pics/IF2025.jpg"
              alt="Speaker Keynote Session"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0d1b] via-[#5a0d1b]/30 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#701020]/90 backdrop-blur-md border border-[#89192c] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#f1ca7e]">
                KEYNOTE ARENA
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#e8dcc6]">
                Alpha College Karachi
              </span>
            </div>
          </motion.div>

          {/* PHOTO 2: STARTUP SHOWDOWN */}
          <motion.div
            initial={{ opacity: 0, y: 28, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#89192c] hover:border-[#f1ca7e]/60 bg-[#701020] shadow-[0_20px_50px_rgba(90,13,27,0.8)] aspect-[4/3] sm:aspect-[3/4] transition-all duration-300"
          >
            <Image
              src="/sample-pics/if2025_2.jpg"
              alt="Live Stage Startup Pitch"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0d1b] via-[#5a0d1b]/30 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#701020]/90 backdrop-blur-md border border-[#89192c] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#f1ca7e]">
                STARTUP SHOWDOWN
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#e8dcc6]">
                AES 2026 Finals
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
