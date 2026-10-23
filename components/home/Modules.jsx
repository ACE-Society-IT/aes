'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────
   Custom-Made Simple Emojis (Vector Scalable & Themed)
   ───────────────────────────────────────────────────────────── */

// 1. Investomania: 📈 Bull Market Stock Chart & Profit Arrow
function CustomEmojiInvestomania({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      {/* Background soft circle */}
      <circle cx="24" cy="24" r="22" fill="#f1ca7e" fillOpacity="0.2" />
      {/* Grid lines */}
      <path d="M10 38H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <path d="M10 10V38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      {/* Chart bars */}
      <rect x="14" y="26" width="4" height="12" rx="1.5" fill="currentColor" opacity="0.5" />
      <rect x="22" y="20" width="4" height="18" rx="1.5" fill="currentColor" opacity="0.7" />
      <rect x="30" y="14" width="4" height="24" rx="1.5" fill="currentColor" />
      {/* Trendline Arrow */}
      <path
        d="M14 26L22 18L28 22L36 10"
        stroke="#f1ca7e"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29 10H36V17" stroke="#f1ca7e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 2. Defend the Empire: 🛡️ Gilded Imperial Crisis Shield
function CustomEmojiDefendEmpire({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="22" fill="#f1ca7e" fillOpacity="0.2" />
      {/* Outer Shield */}
      <path
        d="M24 8L36 13V22C36 31 29 37 24 40C19 37 12 31 12 22V13L24 8Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M24 8L36 13V22C36 31 29 37 24 40C19 37 12 31 12 22V13L24 8Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      {/* Inner Emblem Star/Cross */}
      <path
        d="M24 16V32M16 24H32"
        stroke="#f1ca7e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3.5" fill="#f1ca7e" />
    </svg>
  );
}

// 3. Market Monopoly: 🏛️ Imperial Property & Banking Columns
function CustomEmojiMarketMonopoly({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="22" fill="#5a0d1b" fillOpacity="0.15" />
      {/* Roof pediment */}
      <path d="M10 18L24 10L38 18H10Z" fill="currentColor" />
      {/* Architrave */}
      <rect x="8" y="19" width="32" height="3" rx="1" fill="currentColor" opacity="0.8" />
      {/* 4 Classical Columns */}
      <rect x="12" y="24" width="4" height="12" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="19" y="24" width="4" height="12" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="25" y="24" width="4" height="12" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="32" y="24" width="4" height="12" rx="1.5" fill="currentColor" opacity="0.9" />
      {/* Base Foundation */}
      <rect x="8" y="37" width="32" height="4" rx="1.5" fill="currentColor" />
    </svg>
  );
}

// 4. Venture Verse: 🚀 Orbital Startup Rocket
function CustomEmojiVentureVerse({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="22" fill="#f1ca7e" fillOpacity="0.2" />
      {/* Thruster Flame */}
      <path
        d="M17 31L13 38L20 34"
        fill="#f1ca7e"
        opacity="0.8"
      />
      {/* Rocket Body */}
      <path
        d="M33 11C28 11 20 18 18 24C16 26 15 28 15 28L20 33C20 33 22 32 24 30C30 28 37 20 37 15L33 11Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Left Fin */}
      <path d="M18 24L11 25L14 30L17 29" fill="#f1ca7e" />
      {/* Right Fin */}
      <path d="M24 30L25 37L30 34L29 31" fill="#f1ca7e" />
      {/* Porthole Window */}
      <circle cx="28" cy="20" r="3" fill="#f8eee1" />
      {/* Orbit Sparkle */}
      <path d="M38 8L39 12L43 13L39 14L38 18L37 14L33 13L37 12L38 8Z" fill="#f1ca7e" />
    </svg>
  );
}

// 5. Viral Velocity: ⚡ Viral Speed Lightning Bolt
function CustomEmojiViralVelocity({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="22" fill="#f1ca7e" fillOpacity="0.2" />
      {/* Dynamic Lightning Bolt */}
      <path
        d="M27 8L14 26H24L21 40L34 22H24L27 8Z"
        fill="#f1ca7e"
      />
      <path
        d="M27 8L14 26H24L21 40L34 22H24L27 8Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Energy Sparkle */}
      <circle cx="34" cy="14" r="2" fill="#f1ca7e" />
      <circle cx="12" cy="34" r="1.5" fill="#f1ca7e" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   5 Official Modules Data with Custom Simple Emojis
   ───────────────────────────────────────────────────────────── */
const MODULES_DATA = [
  {
    id: 'investomania',
    number: '01',
    tag: 'Module 01',
    emojiSymbol: '📈',
    title: 'Investomania',
    roundsLabel: '3 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2', 'ROUND 3'],
    description:
      "Teams trade shares in Pakistan's stock market to build and manage a portfolio, then transition into a future digital economy as hedge funds managing digital assets and international markets. The final round shifts focus to wealth preservation, restructuring portfolios and navigating changing tax policies.",
    EmojiComponent: CustomEmojiInvestomania,
    stats: [
      { label: 'Market Arena', value: 'PSX to Web3' },
      { label: 'Portfolio Role', value: 'Hedge Fund' },
    ],
    badgeText: 'Portfolio Strategy & Wealth Preservation',
    status: 'Stock & Digital Asset Arena',
    theme: {
      cardBg: 'bg-[#f8eee1]',
      cardBorder: 'border border-[#e8dcc6]',
      titleColor: 'text-[#5a0d1b]',
      roundsSubtitleColor: 'text-[#701020]',
      descColor: 'text-[#650d1c]',
      tagBg: 'bg-[#e8dcc6]/70 text-[#701020] border border-[#89192c]/20',
      roundActive: 'bg-[#701020] text-[#f8eee1] border border-[#701020]',
      roundInactive: 'bg-transparent text-[#701020] border border-[#701020]/60',
      rightFrameBg: 'bg-[#e8dcc6]/60 border border-[#89192c]/15',
      iconBoxBg: 'bg-[#701020] text-[#f1ca7e] border border-[#89192c]',
      statusBg: 'bg-[#f8eee1] text-[#701020] border border-[#89192c]/20',
      statCardBg: 'bg-[#f8eee1] border border-[#89192c]/15',
      statValColor: 'text-[#5a0d1b]',
      statLabelColor: 'text-[#650d1c]',
      footerPillBg: 'bg-[#f8eee1] text-[#701020] border border-[#89192c]/20',
      pulseDot: 'bg-[#701020]',
    },
  },
  {
    id: 'defend-the-empire',
    number: '02',
    tag: 'Module 02',
    emojiSymbol: '🛡️',
    title: 'Defend the Empire',
    roundsLabel: '3 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2', 'ROUND 3'],
    description:
      'Teams navigate a corporate crisis through a three-part simulation. They must develop an internal response plan to protect employee well-being, defend their strategies in a mock shareholder meeting, manage public backlash via a mock press conference, and make strategic financial decisions to combat declining cash flow.',
    EmojiComponent: CustomEmojiDefendEmpire,
    stats: [
      { label: 'Simulation Type', value: 'Corporate Crisis' },
      { label: 'Defense Round', value: 'Mock Press Conf' },
    ],
    badgeText: 'Crisis Management & Strategic Recovery',
    status: 'Crisis Control Track',
    theme: {
      cardBg: 'bg-[#e8dcc6]',
      cardBorder: 'border border-[#89192c]/25',
      titleColor: 'text-[#5a0d1b]',
      roundsSubtitleColor: 'text-[#701020]',
      descColor: 'text-[#650d1c]',
      tagBg: 'bg-[#f8eee1] text-[#701020] border border-[#89192c]/20',
      roundActive: 'bg-[#701020] text-[#f8eee1] border border-[#701020]',
      roundInactive: 'bg-transparent text-[#701020] border border-[#701020]/60',
      rightFrameBg: 'bg-[#f8eee1]/75 border border-[#89192c]/20',
      iconBoxBg: 'bg-[#701020] text-[#f1ca7e] border border-[#89192c]',
      statusBg: 'bg-[#e8dcc6] text-[#701020] border border-[#89192c]/20',
      statCardBg: 'bg-[#e8dcc6] border border-[#89192c]/20',
      statValColor: 'text-[#5a0d1b]',
      statLabelColor: 'text-[#650d1c]',
      footerPillBg: 'bg-[#e8dcc6] text-[#701020] border border-[#89192c]/20',
      pulseDot: 'bg-[#701020]',
    },
  },
  {
    id: 'market-monopoly',
    number: '03',
    tag: 'Module 03',
    emojiSymbol: '🏛️',
    title: 'Market Monopoly',
    roundsLabel: '2 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2'],
    description:
      'Teams compete to build business empires by bidding on Karachi-inspired properties and utilities within a limited budget. They must manage cash flow, negotiate mergers with other teams, upgrade properties, and settle rental obligations while balancing the risks of bank financing.',
    EmojiComponent: CustomEmojiMarketMonopoly,
    stats: [
      { label: 'Property Hub', value: 'Karachi Auctions' },
      { label: 'Strategic Play', value: 'Mergers & Risk' },
    ],
    badgeText: 'Property Upgrades & Rental Management',
    status: 'Real Estate & Mergers',
    theme: {
      cardBg: 'bg-[#f1ca7e]',
      cardBorder: 'border border-[#701020]/30 shadow-2xl',
      titleColor: 'text-[#5a0d1b]',
      roundsSubtitleColor: 'text-[#5a0d1b]',
      descColor: 'text-[#5a0d1b]/90',
      tagBg: 'bg-[#f8eee1] text-[#5a0d1b] border border-[#5a0d1b]/20',
      roundActive: 'bg-[#5a0d1b] text-[#f1ca7e] border border-[#5a0d1b]',
      roundInactive: 'bg-transparent text-[#5a0d1b] border border-[#5a0d1b]/60',
      rightFrameBg: 'bg-[#5a0d1b]/10 border border-[#5a0d1b]/20',
      iconBoxBg: 'bg-[#5a0d1b] text-[#f1ca7e] border border-[#701020]',
      statusBg: 'bg-[#f8eee1] text-[#5a0d1b] border border-[#5a0d1b]/20',
      statCardBg: 'bg-[#f8eee1] border border-[#5a0d1b]/20',
      statValColor: 'text-[#5a0d1b]',
      statLabelColor: 'text-[#650d1c]',
      footerPillBg: 'bg-[#f8eee1] text-[#5a0d1b] border border-[#5a0d1b]/20',
      pulseDot: 'bg-[#5a0d1b]',
    },
  },
  {
    id: 'venture-verse',
    number: '04',
    tag: 'Module 04',
    emojiSymbol: '🚀',
    title: 'Venture Verse',
    roundsLabel: '2 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2'],
    description:
      "Teams develop an original business concept addressing a real-world problem and pitch it to a panel of judges acting as investors. Participants must demonstrate their venture's viability, competitive advantage, and growth strategy while defending their decisions during a Q&A and an unexpected business crisis.",
    EmojiComponent: CustomEmojiVentureVerse,
    stats: [
      { label: 'Pitch Format', value: 'Investor Panel' },
      { label: 'Evaluation', value: 'Crisis Q&A' },
    ],
    badgeText: 'Viability, Advantage & Growth Defense',
    status: 'Shark Pitch Arena',
    theme: {
      cardBg: 'bg-[#89192c]',
      cardBorder: 'border border-[#f1ca7e]/35 shadow-2xl',
      titleColor: 'text-[#f8eee1]',
      roundsSubtitleColor: 'text-[#f1ca7e]',
      descColor: 'text-[#e8dcc6]',
      tagBg: 'bg-[#701020] text-[#f1ca7e] border border-[#f1ca7e]/30',
      roundActive: 'bg-[#f1ca7e] text-[#5a0d1b] border border-[#f1ca7e]',
      roundInactive: 'bg-transparent text-[#f1ca7e] border border-[#f1ca7e]/60',
      rightFrameBg: 'bg-[#701020] border border-[#89192c]',
      iconBoxBg: 'bg-[#f1ca7e] text-[#5a0d1b] border border-[#f1ca7e]',
      statusBg: 'bg-[#89192c] text-[#f1ca7e] border border-[#f1ca7e]/30',
      statCardBg: 'bg-[#89192c] border border-[#f1ca7e]/20',
      statValColor: 'text-[#f8eee1]',
      statLabelColor: 'text-[#e8dcc6]',
      footerPillBg: 'bg-[#89192c] text-[#f1ca7e] border border-[#f1ca7e]/20',
      pulseDot: 'bg-[#f1ca7e]',
    },
  },
  {
    id: 'viral-velocity',
    number: '05',
    tag: 'Module 05',
    emojiSymbol: '⚡',
    title: 'Viral Velocity',
    roundsLabel: '3 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2', 'ROUND 3'],
    description:
      "Teams are assigned a brand to bring to life across three rounds. They must first establish the brand's Instagram presence through creative content, then develop a comprehensive marketing campaign with a specified budget, and finally create a physical stall featuring a product prototype to engage with consumers in a real-world setting.",
    EmojiComponent: CustomEmojiViralVelocity,
    stats: [
      { label: 'Digital Channel', value: 'Instagram Growth' },
      { label: 'Physical Stall', value: 'Live Prototype' },
    ],
    badgeText: 'Marketing Budget & Consumer Engagement',
    status: 'Brand Growth & Activation',
    theme: {
      cardBg: 'bg-[#5a0d1b]',
      cardBorder: 'border-2 border-[#f1ca7e]/60 shadow-[0_25px_60px_rgba(90,13,27,0.85)]',
      titleColor: 'text-[#f8eee1]',
      roundsSubtitleColor: 'text-[#f1ca7e]',
      descColor: 'text-[#e8dcc6]',
      tagBg: 'bg-[#701020] text-[#f1ca7e] border border-[#f1ca7e]/40',
      roundActive: 'bg-[#f1ca7e] text-[#5a0d1b] border border-[#f1ca7e]',
      roundInactive: 'bg-transparent text-[#f1ca7e] border border-[#f1ca7e]/60',
      rightFrameBg: 'bg-[#701020] border border-[#f1ca7e]/30',
      iconBoxBg: 'bg-[#f1ca7e] text-[#5a0d1b] border border-[#f1ca7e]',
      statusBg: 'bg-[#5a0d1b] text-[#f1ca7e] border border-[#f1ca7e]/40',
      statCardBg: 'bg-[#5a0d1b] border border-[#89192c]',
      statValColor: 'text-[#f8eee1]',
      statLabelColor: 'text-[#e8dcc6]',
      footerPillBg: 'bg-[#5a0d1b] text-[#f1ca7e] border border-[#f1ca7e]/30',
      pulseDot: 'bg-[#f1ca7e]',
    },
  },
];

/* ─────────────────────────────────────────────────────────────
   Individual Stacking Card (Retains 3D Scroll Stacking Animation)
   ───────────────────────────────────────────────────────────── */
function StackCard({ module, index, totalCards, scrollYProgress }) {
  const startProgress = index / totalCards;
  const endProgress = Math.min(1, (index + 1.2) / totalCards);
  const targetScale = 1 - (totalCards - index - 1) * 0.03;

  const scale = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [1, targetScale]
  );

  const EmojiComponent = module.EmojiComponent;

  return (
    <div
      className="sticky top-0 h-screen w-full flex items-center justify-center pt-14 sm:pt-20 px-3.5 sm:px-6 lg:px-8 pointer-events-none"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          y: index * 12,
        }}
        className={cn(
          'pointer-events-auto will-change-transform w-full max-w-5xl lg:max-w-6xl rounded-[28px] sm:rounded-[38px] p-4 sm:p-7 md:p-9 lg:p-10 flex flex-col md:flex-row items-stretch justify-between gap-4 sm:gap-6 md:gap-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] max-h-[84vh] md:max-h-none overflow-y-auto md:overflow-visible',
          module.theme.cardBg,
          module.theme.cardBorder
        )}
      >
        {/* Left Column (~55%): Header, Slanted Badges, Title & Description */}
        <div className="flex flex-col justify-between w-full md:w-[55%] pr-0 md:pr-3">
          <div>
            {/* Top Row: Tag with Emoji + Rounds Subtitle */}
            <div className="flex items-center gap-2.5 mb-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
                  module.theme.tagBg
                )}
              >
                <span className="text-sm">{module.emojiSymbol}</span>
                <span>{module.tag}</span>
              </span>
              <span
                className={cn(
                  'text-xs font-extrabold tracking-widest uppercase',
                  module.theme.roundsSubtitleColor
                )}
              >
                {module.roundsLabel}
              </span>
            </div>

            {/* Slanted Parallelogram Round Badges */}
            <div className="flex items-center gap-2 sm:gap-3 my-2 sm:my-3">
              {module.roundsList.map((roundName, rIdx) => {
                const isActive = rIdx === 0;
                return (
                  <div
                    key={rIdx}
                    className={cn(
                      'transform -skew-x-12 px-3 sm:px-4 py-1 sm:py-1.5 transition-all duration-300',
                      isActive ? module.theme.roundActive : module.theme.roundInactive
                    )}
                  >
                    <span className="block transform skew-x-12 text-[10px] sm:text-xs font-black tracking-wider uppercase select-none">
                      {roundName}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Title with Emoji */}
            <h3
              className={cn(
                'text-xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-2 sm:mb-3 flex items-center gap-2.5',
                module.theme.titleColor
              )}
            >
              <span>{module.title}</span>
            </h3>

            {/* Description */}
            <p
              className={cn(
                'text-xs sm:text-[14px] md:text-base leading-relaxed font-normal',
                module.theme.descColor
              )}
            >
              {module.description}
            </p>
          </div>
        </div>

        {/* Right Column (~45%): Custom Emoji Showcase Dashboard */}
        <div
          className={cn(
            'w-full md:w-[45%] rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between border mt-2 md:mt-0',
            module.theme.rightFrameBg
          )}
        >
          {/* Top Row: Custom Simple Emoji Box & Status Pill */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div
              className={cn(
                'w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-md p-1.5',
                module.theme.iconBoxBg
              )}
            >
              <EmojiComponent className="w-10 h-10 sm:w-11 sm:h-11" />
            </div>

            <div
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border shadow-sm',
                module.theme.statusBg
              )}
            >
              <span
                className={cn(
                  'w-2 h-2 rounded-full animate-pulse',
                  module.theme.pulseDot
                )}
              />
              <span>{module.status}</span>
            </div>
          </div>

          {/* Center: 2 Key Stat Cards */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 my-auto">
            {module.stats.map((st, sIdx) => (
              <div
                key={sIdx}
                className={cn(
                  'rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border flex flex-col justify-center shadow-sm',
                  module.theme.statCardBg
                )}
              >
                <div
                  className={cn(
                    'text-base sm:text-xl font-black tracking-tight leading-tight',
                    module.theme.statValColor
                  )}
                >
                  {st.value}
                </div>
                <div
                  className={cn(
                    'text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mt-0.5 opacity-80',
                    module.theme.statLabelColor
                  )}
                >
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card: Round Intelligence Spec Pill */}
          <div
            className={cn(
              'mt-3 px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border flex items-center justify-between gap-2 text-[11px] sm:text-xs font-semibold shadow-sm',
              module.theme.footerPillBg
            )}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{module.badgeText}</span>
            </div>
            <Clock className="w-3.5 h-3.5 shrink-0 opacity-70" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Modules Overview Section (Retains 3D Scroll Stacking Animation)
   ───────────────────────────────────────────────────────────── */
export default function Modules() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="modules"
      ref={containerRef}
      className="relative z-30 w-full bg-[#f8eee1] text-[#5a0d1b] border-t border-[#89192c]/15 rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.35)] -mt-8 sm:-mt-10 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Lead-in Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto pt-10 sm:pt-16 md:pt-28 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020]">
          Competitive Tracks
        </span>

        <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#5a0d1b]">
          Module <span className="text-[#89192c]">Overview</span>
        </h2>

        <p className="mt-2 max-w-2xl text-xs sm:text-base md:text-lg text-[#650d1c] leading-relaxed">
          Five flagship competitive tracks designed to test portfolio strategy, corporate crisis control, property bidding, venture pitching, and guerrilla brand growth.
        </p>
      </motion.div>

      {/* 3D Stacking Cards Deck Track (Preserves Stacking Scroll Animation) */}
      <div className="relative w-full pb-16 sm:pb-24 md:pb-32">
        {MODULES_DATA.map((module, index) => (
          <StackCard
            key={module.id}
            module={module}
            index={index}
            totalCards={MODULES_DATA.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
