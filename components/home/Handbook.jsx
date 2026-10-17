'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Handbook() {
  return (
    <section
      id="handbook"
      className="relative z-30 w-full bg-[#F5F2EB] text-[#2B1E18] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#EBE6DC] rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] -mt-10 overflow-hidden select-none"
    >
      {/* Ambient Warm Backlight Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#EBE6DC]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#E8E1D5]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#B09B8C]/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-[#EBE6DC] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(43,30,24,0.08)] overflow-hidden"
        >
          {/* Subtle warm ambient glows inside card */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-[#F5F2EB] to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#F5F2EB]/60 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: 3D Book Cover Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-60 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(43,30,24,0.18)] border border-[#EBE6DC] group">
                <Image
                  src="/aes-handbook-cover.jpg"
                  alt="AES 2026 Delegate Guide Cover"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  priority
                />
                {/* Book spine shadow */}
                <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
                {/* Diagonal glossy sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>

            {/* Right: Content & Action */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow Tag */}
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#8C6D58] mb-3">
                AES 2026 · DELEGATE GUIDE
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#382A24] leading-[1.08]">
                Read the delegate guide <br className="hidden sm:inline" />
                before the summit.
              </h2>

              {/* 2-Column Bullet List with Top/Bottom Borders */}
              <div className="mt-7 mb-8 py-6 border-y border-[#EBE6DC] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {/* Left Column Bullets */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#8C6D58] shrink-0 mt-2" />
                    <span className="text-sm sm:text-[15px] font-medium text-[#4B5563] leading-snug">
                      The three-day schedule
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#8C6D58] shrink-0 mt-2" />
                    <span className="text-sm sm:text-[15px] font-medium text-[#4B5563] leading-snug">
                      Submission deadlines before the summit
                    </span>
                  </div>
                </div>

                {/* Right Column Bullets */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#8C6D58] shrink-0 mt-2" />
                    <span className="text-sm sm:text-[15px] font-medium text-[#4B5563] leading-snug">
                      Every module and round, and how it is judged
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#8C6D58] shrink-0 mt-2" />
                    <span className="text-sm sm:text-[15px] font-medium text-[#4B5563] leading-snug">
                      Dress code, what to bring and the code of conduct
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Row: CTA Button + File Specs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <a
                  href="/AES-Handbook-2026.pdf"
                  download="AES-Handbook-2026.pdf"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base bg-[#2B1E18] text-[#F5F2EB] hover:bg-[#382A24] shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                  aria-label="Download the delegate guide"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download the delegate guide</span>
                </a>

                <span className="text-xs sm:text-[13px] font-semibold text-[#7A6A60] tracking-wider uppercase">
                  PDF · 36 PAGES · 12.8 MB
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
