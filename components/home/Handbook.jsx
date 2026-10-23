'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Handbook() {
  return (
    <section
      id="handbook"
      className="relative z-30 w-full bg-[#f8eee1] text-[#5a0d1b] py-10 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]/15 rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.35)] -mt-8 sm:-mt-10 overflow-hidden select-none"
    >
      {/* Ambient Warm Backlight Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#e8dcc6]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#e8dcc6]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#89192c]/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[24px] sm:rounded-[36px] bg-[#e8dcc6]/60 border border-[#e8dcc6] p-4 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(90,13,27,0.08)] overflow-hidden"
        >
          {/* Subtle warm ambient glows inside card */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-[#f8eee1] to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#f8eee1]/60 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Official Document Card (Non-AI Vector Design) */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-56 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(90,13,27,0.3)] border-2 border-[#f1ca7e]/50 bg-gradient-to-br from-[#701020] via-[#5a0d1b] to-[#420a13] p-5 sm:p-7 flex flex-col justify-between text-center select-none group hover:scale-[1.02] transition-transform duration-300">
                {/* Decorative border frame */}
                <div className="absolute inset-2 border border-[#f1ca7e]/20 rounded-xl pointer-events-none" />

                {/* Top: Monogram & Heading */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#5a0d1b] border-2 border-[#f1ca7e] p-2 sm:p-2.5 flex items-center justify-center shadow-lg mb-2 sm:mb-3">
                    <Image
                      src="/aes-logo.png"
                      alt="AES Emblem"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
                    Official Publication
                  </span>
                  <div className="h-0.5 w-12 bg-[#f1ca7e]/40 my-1.5 sm:my-2" />
                </div>

                {/* Center: Title & Subtitle */}
                <div className="relative z-10 my-auto py-1 sm:py-2">
                  <h3 className="text-lg sm:text-2xl font-black text-[#f8eee1] tracking-tight leading-tight">
                    AES 2026
                  </h3>
                  <p className="text-[11px] sm:text-sm font-semibold text-[#f1ca7e] uppercase tracking-widest mt-0.5 sm:mt-1">
                    Delegate Handbook
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#e8dcc6] mt-1.5 sm:mt-2 leading-relaxed">
                    Alpha College Karachi<br />
                    November 13–15, 2026
                  </p>
                </div>

                {/* Bottom: Format Chip */}
                <div className="relative z-10 pt-2 border-t border-[#f1ca7e]/20 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#f8eee1]/90">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f1ca7e]" />
                    <span>21 Pages</span>
                  </span>
                  <span className="text-[#f1ca7e] uppercase tracking-wider font-bold">
                    PDF · 6.2 MB
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Content & Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Eyebrow Tag */}
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#701020] mb-2 sm:mb-3">
                AES 2026 · DELEGATE GUIDE
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#5a0d1b] leading-[1.1]">
                Read the delegate guide <br className="hidden sm:inline" />
                before the summit.
              </h2>

              {/* 2-Column Bullet List with Top/Bottom Borders */}
              <div className="mt-4 sm:mt-7 mb-5 sm:mb-8 py-3.5 sm:py-6 border-y border-[#89192c]/15 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 sm:gap-y-4">
                {/* Left Column Bullets */}
                <div className="space-y-2.5 sm:space-y-4">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#701020] shrink-0 mt-2" />
                    <span className="text-xs sm:text-[15px] font-medium text-[#650d1c] leading-snug">
                      The three-day schedule
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#701020] shrink-0 mt-2" />
                    <span className="text-xs sm:text-[15px] font-medium text-[#650d1c] leading-snug">
                      Submission deadlines before the summit
                    </span>
                  </div>
                </div>

                {/* Right Column Bullets */}
                <div className="space-y-2.5 sm:space-y-4">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#701020] shrink-0 mt-2" />
                    <span className="text-xs sm:text-[15px] font-medium text-[#650d1c] leading-snug">
                      Every module and round, and how it is judged
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#701020] shrink-0 mt-2" />
                    <span className="text-xs sm:text-[15px] font-medium text-[#650d1c] leading-snug">
                      Dress code, what to bring and the code of conduct
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Row: CTA Buttons + File Specs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <a
                  href="/aes-delegate-guide.pdf"
                  download="AES-Delegate-Guide-2026.pdf"
                  className="group relative inline-flex items-center justify-between pl-7 pr-2.5 py-2.5 sm:pl-8 sm:pr-3 sm:py-3 rounded-full bg-[#5a0d1b] hover:bg-[#701020] text-[#f8eee1] font-bold text-sm sm:text-base tracking-tight shadow-xl shadow-[#5a0d1b]/40 hover:shadow-[0_0_28px_rgba(90,13,27,0.5)] hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 ease-out cursor-pointer"
                  aria-label="Download the official delegate guide PDF"
                >
                  <span>Download Delegate Guide</span>
                  <span className="w-8 h-8 rounded-full bg-[#f1ca7e] text-[#5a0d1b] flex items-center justify-center ml-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Download className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </a>

                <a
                  href="/aes-delegate-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-[#89192c]/40 hover:border-[#701020] bg-[#f8eee1] hover:bg-[#e8dcc6] text-[#5a0d1b] font-bold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span>Read Online (PDF)</span>
                </a>

                <span className="text-xs sm:text-[13px] font-semibold text-[#650d1c] tracking-wider uppercase">
                  PDF · 21 PAGES · 6.2 MB
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
