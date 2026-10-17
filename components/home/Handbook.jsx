'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FileText,
  Scale,
  Shirt,
  ShieldCheck,
  FileDown,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   4 SUMMIT POINTERS (Edit text and titles below)
   ───────────────────────────────────────────────────────────── */
const HANDBOOK_POINTERS = [
  {
    number: '01',
    icon: FileText,
    title: 'Tournament Tracks & Rules',
    tag: 'REGULATIONS',
    description:
      'Detailed overview of the competitive modules, eligibility requirements, stage presentation timings, team sizes, and final submission deliverables.',
  },
  {
    number: '02',
    icon: Scale,
    title: 'Evaluation & Scoring Matrix',
    tag: 'CRITERIA',
    description:
      'Comprehensive scoring criteria utilized by VC and industry judges: Market Validation (25%), Financials (25%), Tech Moat (20%), and Live Q&A Defense (30%).',
  },
  {
    number: '03',
    icon: Shirt,
    title: 'Official Summit Dress Code',
    tag: 'DRESS CODE',
    description:
      'Western Business Formal for keynote arenas and pitch rounds, Smart Executive Casual for workshops & hackathons, and Black Tie Optional for the Gala Night.',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Check-In, Badges & Protocol',
    tag: 'LOGISTICS',
    description:
      'Accredited venue access, mandatory delegate badge policy, IP ownership protections, and Chatham House rules across closed-door investor roundtables.',
  },
];

export default function Handbook() {
  

  return (
    <section
      id="handbook"
      className="relative w-full bg-[#0D0704] text-[#F4EFEA] border-t border-[#52433D]/60 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* ─────────────────────────────────────────────
          Ambient Warm Backlight Glows
          ───────────────────────────────────────────── */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#38251D]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2E1D16]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E5D9C5]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─────────────────────────────────────────────
            Section Header
            ───────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F4EFEA]"
          >
            Tournament <span className="text-[#E5D9C5]">Handbook</span> & Guidelines
          </motion.h2>
        </div>

        {/* ─────────────────────────────────────────────
            Main Content Grid (Book Showcase + 4 Pointers)
            ───────────────────────────────────────────── */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ──────────────────────────────────────────
              LEFT: 3D Book Cover & Download Card (5 Cols)
              ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* The Dossier Showcase Box */}
            <div className="w-full max-w-md rounded-3xl bg-[#160D09]/90 border border-[#52433D]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative group overflow-hidden">
              {/* Subtle top spotlight shine */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-44 bg-gradient-to-b from-[#E5D9C5]/15 to-transparent blur-2xl pointer-events-none" />

              {/* Book Mockup Frame */}
              <div className="relative mx-auto w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-[#52433D] transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
                <Image
                  src="/aes-handbook-cover.jpg"
                  alt="AES 2026 Official Tournament Handbook Cover"
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover"
                  priority
                />

                {/* Realistic book spine shadow on the left */}
                <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
                {/* Glossy sheen reflection overlay across diagonal */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60 pointer-events-none" />

                {/* Top Corner Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0D0704]/80 backdrop-blur-md border border-[#E5D9C5]/30 text-[9px] font-bold tracking-widest uppercase text-[#E5D9C5]">
                  OFFICIAL PDF
                </div>
              </div>

              {/* Document Metadata Details */}
              <div className="mt-7 text-center">
                <h3 className="text-xl font-bold text-[#F4EFEA] tracking-tight">
                  AES Summit Delegate Dossier
                </h3>
                <p className="mt-1 text-xs text-[#B09B8C]">
                  Version 2.4 • Published October 2026 • 36 Illustrated Pages
                </p>

                {/* Quick Spec Pills */}
                <div className="mt-4 flex items-center justify-center gap-2 flex-wrap text-[11px] font-medium text-[#B09B8C]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#3A2D28]/70 border border-[#52433D]/60">
                    PDF Document
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#3A2D28]/70 border border-[#52433D]/60">
                    12.8 MB
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#3A2D28]/70 border border-[#52433D]/60">
                    English (Full)
                  </span>
                </div>
              </div>

              {/* ──────────────────────────────────────────
                  DOWNLOAD PDF BUTTON (High-Impact CTA)
                  ────────────────────────────────────────── */}
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href="/AES-Handbook-2026.pdf"
                  download="AES-Handbook-2026.pdf"
                  className="w-full relative group/btn flex items-center justify-center gap-3 py-3.5 px-6 rounded-full font-bold text-sm tracking-wide bg-white text-[#1E1410] hover:bg-[#E5D9C5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg cursor-pointer"
                  aria-label="Download Official AES Tournament Handbook"
                >
                  <FileDown className="w-4 h-4 text-[#1E1410] transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                  <span>Download Handbook (PDF)</span>
                </a>

                <p className="text-[11px] text-center text-[#B09B8C]/80">
                  Free instant download for all registered and prospective summit delegates.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ──────────────────────────────────────────
              RIGHT: 4 Clean Pointers (7 Cols)
              ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HANDBOOK_POINTERS.map((pointer, idx) => {
                const IconComponent = pointer.icon;
                return (
                  <motion.div
                    key={pointer.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="group p-5 sm:p-6 rounded-2xl bg-[#160D09]/90 border border-[#52433D]/70 hover:border-[#E5D9C5]/60 hover:bg-[#1E130E] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Number + Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-[#E5D9C5]">
                            {pointer.number}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-[#3A2D28]/80 border border-[#52433D] flex items-center justify-center text-[#E5D9C5] transition-transform duration-300 group-hover:scale-110">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>
                        <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#0D0704] text-[#B09B8C] border border-[#52433D]/50">
                          {pointer.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base font-bold text-[#F4EFEA] group-hover:text-[#E5D9C5] transition-colors duration-200">
                        {pointer.title}
                      </h4>

                      {/* Description */}
                      <p className="mt-2.5 text-xs sm:text-sm text-[#B09B8C] leading-relaxed">
                        {pointer.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
