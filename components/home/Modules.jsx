'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  TrendingUp,
  DollarSign,
  Globe2,
  ShieldAlert,
  Users,
  Flame,
  Building2,
  Landmark,
  Layers,
  Rocket,
  Lightbulb,
  Zap,
  Megaphone,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 5 Official Modules for AES Summit 2026
 * Pure icon-driven dashboards with zero photos & zero buttons.
 * Features slanted parallelogram round indicators (matching screenshot).
 * Strictly adheres to DESIGN-RULES.md 7-color palette:
 * #5a0d1b, #650d1c, #701020, #89192c, #f8eee1, #e8dcc6, #f1ca7e
 */
const MODULES_DATA = [
  {
    id: 'investomania',
    number: '01',
    tag: 'Module 01',
    title: 'Investomania',
    roundsLabel: '3 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2', 'ROUND 3'],
    description:
      "Teams trade shares in Pakistan's stock market to build and manage a portfolio, then transition into a future digital economy as hedge funds managing digital assets and international markets. The final round shifts focus to wealth preservation, restructuring portfolios and navigating changing tax policies.",
    heroIcon: TrendingUp,
    stats: [
      { label: 'Market Arena', value: 'PSX to Web3' },
      { label: 'Portfolio Role', value: 'Hedge Fund' },
    ],
    badgeText: 'Wealth Preservation & Tax Navigations',
    status: 'Stock & Digital Asset Arena',
    theme: {
      // Light 1: Alabaster Cream Card
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
    title: 'Defend the Empire',
    roundsLabel: '3 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2', 'ROUND 3'],
    description:
      'Teams navigate a corporate crisis through a three-part simulation. They must develop an internal response plan to protect employee well-being, defend their strategies in a mock shareholder meeting, manage public backlash via a mock press conference, and make strategic financial decisions to combat declining cash flow.',
    heroIcon: ShieldAlert,
    stats: [
      { label: 'Simulation Type', value: 'Corporate Crisis' },
      { label: 'Defense Round', value: 'Mock Press Conf' },
    ],
    badgeText: 'Internal Response & Cash Flow Recovery',
    status: 'Crisis Control Track',
    theme: {
      // Light 2: Warm Parchment Card
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
    title: 'Market Monopoly',
    roundsLabel: '2 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2'],
    description:
      'Teams compete to build business empires by bidding on Karachi-inspired properties and utilities within a limited budget. They must manage cash flow, negotiate mergers with other teams, upgrade properties, and settle rental obligations while balancing the risks of bank financing.',
    heroIcon: Landmark,
    stats: [
      { label: 'Property Hub', value: 'Karachi Auctions' },
      { label: 'Strategic Play', value: 'Mergers & Risk' },
    ],
    badgeText: 'Property Upgrades & Rental Management',
    status: 'Real Estate & Mergers',
    theme: {
      // Accent: Imperial Gold Card
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
    title: 'Venture Verse',
    roundsLabel: '2 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2'],
    description:
      "Teams develop an original business concept addressing a real-world problem and pitch it to a panel of judges acting as investors. Participants must demonstrate their venture's viability, competitive advantage, and growth strategy while defending their decisions during a Q&A and an unexpected business crisis.",
    heroIcon: Rocket,
    stats: [
      { label: 'Pitch Format', value: 'Investor Panel' },
      { label: 'Evaluation', value: 'Crisis Q&A' },
    ],
    badgeText: 'Viability, Advantage & Growth Defense',
    status: 'Shark Pitch Arena',
    theme: {
      // Dark 4: Ruby Velvet Card
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
    title: 'Viral Velocity',
    roundsLabel: '3 Rounds',
    roundsList: ['ROUND 1', 'ROUND 2', 'ROUND 3'],
    description:
      'Teams are assigned a brand to bring to life across three rounds. They must first establish the brand’s Instagram presence through creative content, then develop a comprehensive marketing campaign with a specified budget, and finally create a physical stall featuring a product prototype to engage with consumers in a real-world setting.',
    heroIcon: Zap,
    stats: [
      { label: 'Digital Channel', value: 'Instagram Growth' },
      { label: 'Physical Stall', value: 'Live Prototype' },
    ],
    badgeText: 'Marketing Budget & Consumer Engagement',
    status: 'Brand Growth & Activation',
    theme: {
      // Dark 1: Abyssal Oxblood Crown Card (Matches Screenshot 2 perfectly!)
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

/**
 * Individual Stacking Card Component
 * - Centered in viewport: Positioned comfortably so the whole card is visible on screen
 * - Incremental top offset creates clean cascading top edges
 * - Linear scale transform provides 3D depth without scroll lag
 */
function StackCard({ module, index, totalCards, scrollYProgress }) {
  const HeroIcon = module.heroIcon;

  // Lightweight hardware-accelerated scale transform
  const startProgress = index / totalCards;
  const endProgress = Math.min(1, (index + 1.2) / totalCards);
  const targetScale = 1 - (totalCards - index - 1) * 0.03;

  const scale = useTransform(scrollYProgress, [startProgress, endProgress], [1, targetScale]);

  return (
    <div
      className="sticky h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"
      style={{
        // Balanced center-weighted sticky offset so cards never get clipped at the bottom
        top: `calc(13vh + ${index * 22}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className={cn(
          'pointer-events-auto will-change-transform w-full max-w-4xl lg:max-w-5xl rounded-3xl p-6 sm:p-8 md:p-9 flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 shadow-2xl',
          module.theme.cardBg,
          module.theme.cardBorder
        )}
      >
        {/* Left Column (~54%): Module Overview, Slanted Round Badges & Description */}
        <div className="flex flex-col justify-between w-full md:w-[54%] pr-0 md:pr-4">
          <div>
            {/* Top Row: Module Tag & Total Rounds */}
            <div className="flex items-center gap-3 mb-2.5">
              <span
                className={cn(
                  'inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider',
                  module.theme.tagBg
                )}
              >
                {module.tag}
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

            {/* Slanted Parallelogram Round Badges (Exact match to Screenshot 2) */}
            <div className="flex items-center gap-2 sm:gap-2.5 my-3">
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

            {/* Title */}
            <h3
              className={cn(
                'text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3',
                module.theme.titleColor
              )}
            >
              {module.title}
            </h3>

            {/* Exact Official Description */}
            <p
              className={cn(
                'text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal',
                module.theme.descColor
              )}
            >
              {module.description}
            </p>
          </div>
        </div>

        {/* Right Column (~46%): Pure Icon Dashboard & Round Intelligence (No Photos, No Buttons) */}
        <div
          className={cn(
            'w-full md:w-[46%] rounded-2xl p-5 sm:p-6 flex flex-col justify-between border mt-2 md:mt-0',
            module.theme.rightFrameBg
          )}
        >
          {/* Top Row: Emblem Hero Icon & Track Status */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div
              className={cn(
                'w-13 h-13 sm:w-15 sm:h-15 rounded-2xl flex items-center justify-center shadow-md',
                module.theme.iconBoxBg
              )}
            >
              <HeroIcon className="w-7 h-7 stroke-[2.2]" />
            </div>

            <div
              className={cn(
                'inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border shadow-sm',
                module.theme.statusBg
              )}
            >
              <span className={cn('w-2 h-2 rounded-full animate-pulse', module.theme.pulseDot)} />
              <span>{module.status}</span>
            </div>
          </div>

          {/* Center: 2 Key Stat Cards */}
          <div className="grid grid-cols-2 gap-3 my-auto">
            {module.stats.map((st, sIdx) => (
              <div
                key={sIdx}
                className={cn(
                  'rounded-xl p-3 sm:p-3.5 border flex flex-col justify-center shadow-sm',
                  module.theme.statCardBg
                )}
              >
                <div
                  className={cn(
                    'text-base sm:text-lg md:text-xl font-black tracking-tight leading-tight',
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
              'mt-4 px-3.5 py-2.5 rounded-xl border flex items-center justify-between gap-3 text-[11px] sm:text-xs font-semibold shadow-sm',
              module.theme.footerPillBg
            )}
          >
            <div className="flex items-center gap-2 min-w-0">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="truncate">{module.badgeText}</span>
            </div>
            <Clock className="w-3.5 h-3.5 shrink-0 opacity-70" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Modules Section
 * - Zero Scroll Lag: No backdrop filters, lightweight transform execution, optimized will-change.
 * - Perfectly Centered Sticky Cards: Cards lock fully into the center of the viewport without clipping.
 * - Official 5 Modules Content & Slanted Round Badges (Screenshot 2).
 * - Strictly follows DESIGN-RULES.md (7 core colors).
 */
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
      className="relative w-full bg-[#5a0d1b] text-[#f8eee1] border-t border-[#89192c]"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60 bg-[radial-gradient(circle_at_50%_15%,#89192c_0%,#701020_45%,#5a0d1b_90%)]" />

      {/* Decorative Vignette Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-[#f1ca7e]/[0.04] rounded-full blur-3xl pointer-events-none z-0" />

      {/* Lead-in Header */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 sm:pt-32 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
          Summit Challenges
        </span>

        {/* Section Heading */}
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
          Module <span className="text-[#f1ca7e]">Overview</span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#e8dcc6] leading-relaxed">
          Five flagship competitive tracks designed to test portfolio strategy, corporate crisis control,
          property bidding, venture pitching, and guerrilla brand growth.
        </p>

        {/* Quick Stats Pill */}
        <div className="mt-8 flex items-center gap-4 bg-[#701020]/90 border border-[#89192c] rounded-2xl p-4 shadow-md">
          <div className="border-r border-[#89192c] pr-4">
            <div className="text-2xl font-black text-[#f1ca7e]">5</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#e8dcc6]">
              Arenas
            </div>
          </div>
          <div className="border-r border-[#89192c] pr-4">
            <div className="text-2xl font-black text-[#f8eee1]">1.5M+</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#e8dcc6]">
              Prize Pool
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#f1ca7e]">40+</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#e8dcc6]">
              VC Judges
            </div>
          </div>
        </div>
      </div>

      {/* 3D Stacking Cards Deck Track */}
      <div className="relative w-full pb-32">
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
