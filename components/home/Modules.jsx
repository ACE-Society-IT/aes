'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
  InvestomaniaArt,
  DefendEmpireArt,
  MarketMonopolyArt,
  VentureVerseArt,
  ViralVelocityArt,
} from './ModuleArtworks';

/* ─────────────────────────────────────────────────────────────
   5 Curated Modules (Clean, Minimal, Non-Congested)
   ───────────────────────────────────────────────────────────── */

const MODULES = [
  {
    id: 'investomania',
    num: '01',
    category: 'Finance & Markets',
    title: 'Investomania',
    tagline: 'Master the high-pressure trading floor.',
    description:
      'Trade real-time equities on the Pakistan Stock Exchange, construct multi-asset hedge portfolios, and navigate global digital asset shocks.',
    tags: ['3 Rounds', 'PSX Equities', 'Hedge Fund Simulation'],
    Art: InvestomaniaArt,
    cardBg: 'bg-[#5a0d1b]/92 backdrop-blur-xl',
    textColor: 'text-[#f8eee1]',
    taglineColor: 'text-[#f1ca7e]',
    descColor: 'text-[#e8dcc6]',
    borderStyle: 'border-[#89192c]/80 shadow-[0_20px_60px_rgba(90,13,27,0.7)]',
    pillBg: 'bg-[#701020]/80 backdrop-blur-md text-[#f1ca7e] border border-[#f1ca7e]/25',
    accentColor: '#f1ca7e',
  },
  {
    id: 'defend-the-empire',
    num: '02',
    category: 'Crisis Leadership',
    title: 'Defend the Empire',
    tagline: 'Boardroom triage under intense public scrutiny.',
    description:
      'Confront an unscripted corporate emergency. Triage internal operations, defend your firm before aggressive mock journalists, and reverse critical cash bleeds.',
    tags: ['3 Rounds', 'Mock Press Conference', 'Financial Triage'],
    Art: DefendEmpireArt,
    cardBg: 'bg-[#650d1c]/92 backdrop-blur-xl',
    textColor: 'text-[#f8eee1]',
    taglineColor: 'text-[#f1ca7e]',
    descColor: 'text-[#e8dcc6]',
    borderStyle: 'border-[#89192c]/80 shadow-[0_20px_60px_rgba(90,13,27,0.7)]',
    pillBg: 'bg-[#5a0d1b]/80 backdrop-blur-md text-[#f1ca7e] border border-[#f1ca7e]/25',
    accentColor: '#f1ca7e',
  },
  {
    id: 'market-monopoly',
    num: '03',
    category: 'Mergers & Acquisitions',
    title: 'Market Monopoly',
    tagline: 'High-stakes property bidding and hostile takeovers.',
    description:
      'Build a commercial dynasty across Karachi’s prime districts. Bid on commercial utilities, negotiate aggressive mergers, and balance high-risk debt leverage.',
    tags: ['2 Rounds', 'Commercial Auctions', 'M&A Strategy'],
    Art: MarketMonopolyArt,
    cardBg: 'bg-[#e8dcc6]/92 backdrop-blur-xl',
    textColor: 'text-[#5a0d1b]',
    taglineColor: 'text-[#701020]',
    descColor: 'text-[#650d1c]',
    borderStyle: 'border-[#701020]/30 shadow-[0_20px_60px_rgba(90,13,27,0.35)]',
    pillBg: 'bg-[#f8eee1]/80 backdrop-blur-md text-[#701020] border border-[#701020]/25',
    accentColor: '#701020',
  },
  {
    id: 'venture-verse',
    num: '04',
    category: 'Venture Capital',
    title: 'Venture Verse',
    tagline: 'Pitch to real investors. Defend your model.',
    description:
      'Pitch an original startup to seasoned venture capital partners. Justify your unit economics, defend market defensibility, and navigate unexpected operational curveballs.',
    tags: ['2 Rounds', 'Shark Pitch Arena', 'VC Cross-Exam'],
    Art: VentureVerseArt,
    cardBg: 'bg-[#701020]/92 backdrop-blur-xl',
    textColor: 'text-[#f8eee1]',
    taglineColor: 'text-[#f1ca7e]',
    descColor: 'text-[#e8dcc6]',
    borderStyle: 'border-[#f1ca7e]/35 shadow-[0_20px_60px_rgba(90,13,27,0.75)]',
    pillBg: 'bg-[#5a0d1b]/80 backdrop-blur-md text-[#f1ca7e] border border-[#f1ca7e]/25',
    accentColor: '#f1ca7e',
  },
  {
    id: 'viral-velocity',
    num: '05',
    category: 'Brand & Growth',
    title: 'Viral Velocity',
    tagline: 'Create viral culture. Activate real consumer footfall.',
    description:
      'Ignite a brand from nothing. Build a viral digital media presence, model a paid growth budget, and build a physical pop-up booth on campus to convert real crowds.',
    tags: ['3 Rounds', 'Guerrilla Activation', 'Live Campus Stalls'],
    Art: ViralVelocityArt,
    cardBg: 'bg-[#5a0d1b]/92 backdrop-blur-xl',
    textColor: 'text-[#f8eee1]',
    taglineColor: 'text-[#f1ca7e]',
    descColor: 'text-[#e8dcc6]',
    borderStyle: 'border-[#f1ca7e]/40 shadow-[0_20px_60px_rgba(90,13,27,0.75)]',
    pillBg: 'bg-[#701020]/80 backdrop-blur-md text-[#f1ca7e] border border-[#f1ca7e]/30',
    accentColor: '#f1ca7e',
  },
];

/* ─────────────────────────────────────────────────────────────
   Individual Stacking Card Component
   ───────────────────────────────────────────────────────────── */
function StackingCard({ item, index }) {
  const Art = item.Art;

  return (
    <div
      className="sticky top-20 sm:top-24 md:top-28 w-full flex items-center justify-center pointer-events-none mb-12 sm:mb-20 md:mb-28"
      style={{ zIndex: index + 1 }}
    >
      <div
        className={cn(
          'group pointer-events-auto w-full max-w-4xl lg:max-w-5xl rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-12 border shadow-2xl transition-all duration-300 relative overflow-hidden backdrop-blur-xl',
          item.cardBg,
          item.borderStyle,
          item.textColor
        )}
      >
        {/* Subtle Glass Sheen Top Edge */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* Subtle Watermark Number in background */}
        <div className="absolute right-6 -bottom-6 text-8xl sm:text-9xl md:text-[14rem] font-black opacity-[0.04] pointer-events-none select-none font-mono">
          {item.num}
        </div>

        {/* Frameless Module SVG Artwork in Card Background */}
        <div className="absolute right-0 bottom-0 top-0 w-3/4 sm:w-2/3 md:w-1/2 flex items-center justify-end pointer-events-none select-none overflow-hidden opacity-20 sm:opacity-25 md:opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out">
          <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 -mr-4 sm:-mr-8 md:-mr-10 -mb-4 sm:-mb-6 md:mb-0 flex items-center justify-center">
            <Art />
          </div>
        </div>

        {/* Editorial Content (Foreground, 100% Legible) */}
        <div className="relative z-10 flex flex-col justify-center max-w-xl lg:max-w-2xl">
          {/* Index & Category Row */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xs sm:text-sm font-mono font-extrabold tracking-widest uppercase opacity-75">
              {item.num} / 05
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-90">
              {item.category}
            </span>
          </div>

          {/* Display Title */}
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
            {item.title}
          </h3>

          {/* Crisp 1-Line Hook */}
          <p className={cn('mt-1.5 text-xs sm:text-sm md:text-base font-bold', item.taglineColor)}>
            {item.tagline}
          </p>

          {/* 2-Line Punchy Description */}
          <p className={cn('mt-3 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl', item.descColor)}>
            {item.description}
          </p>

          {/* 3 Minimal Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {item.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className={cn(
                  'px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide transition-colors',
                  item.pillBg
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Single Clean Action Link */}
          <div className="mt-6 pt-5 border-t border-current/15">
            <a
              href="/aes-delegate-guide.pdf"
              download="AES-Delegate-Guide-2026.pdf"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold hover:underline underline-offset-4 tracking-wide group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" focusable="false" />
              <span>Download Delegate Guide (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Modules Section (Preserves Smooth 3D Stacking Scroll)
   ───────────────────────────────────────────────────────────── */
export default function Modules() {
  return (
    <section
      id="modules"
      className="relative z-20 w-full bg-[#f8eee1] text-[#5a0d1b] select-none"
    >
      {/* Intro Header (Visible before cards stack, animating on scroll up & down) */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="pt-20 sm:pt-28 md:pt-36 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
          <span className="text-[#701020]">Summit</span>{' '}
          <span className="text-[#F1CA7E] drop-shadow-[0_1px_2px_rgba(90,13,27,0.3)]">Modules</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#650d1c] font-normal leading-relaxed max-w-xl mx-auto">
          Scroll through our premier arenas. Designed to test real business instinct under real constraints.
        </p>
      </motion.div>

      {/* 5 Stacking Cards Deck in Smooth Sticky Flow */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 sm:pb-44">
        {MODULES.map((item, idx) => (
          <StackingCard
            key={item.id}
            item={item}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
