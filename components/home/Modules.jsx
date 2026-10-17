'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Rocket,
  Cpu,
  Briefcase,
  TrendingUp,
  Leaf,
  KeyRound,
  DollarSign,
  Users,
  Trophy,
  Zap,
  ShieldCheck,
  Target,
  Layers, Lock, Clock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 6 Flagship Modules for AES Summit 2026
 * Pure icon-driven dashboards with zero photos.
 * Strictly adheres to DESIGN-RULES.md 7-color palette:
 * #5a0d1b, #650d1c, #701020, #89192c, #f8eee1, #e8dcc6, #f1ca7e
 */
const MODULES_DATA = [
  {
    id: 'venture-sprint',
    number: '01',
    tag: 'Module 01 · Pitch Arena',
    title: 'The Venture Sprint',
    subtitle: 'High-Stakes Seed & Pre-Series Pitch Arena',
    description:
      'Elite early-stage startups pitch live before top-tier institutional VCs, angel syndicates, and sovereign allocators for direct term sheets and equity-free grants.',
    actionText: 'Enter Venture Arena',
    href: '#register',
    heroIcon: Rocket,
    features: [
      { icon: DollarSign, text: 'PKR 750K Winner Term Sheet & Equity-Free Grant' },
      { icon: Users, text: '40+ Institutional VCs & Accredited Angel Syndicates' },
      { icon: Trophy, text: 'Direct Pipeline to Global Acceleration Programs' },
    ],
    stats: [
      { label: 'Grant Pool', value: 'PKR 750K' },
      { label: 'Pitch Duration', value: '10 Mins' },
    ],
    badgeText: '3 Rounds · Closed-Door Deliberation',
    status: 'Live Pitch Arena',
    theme: {
      // Light 1: Alabaster Cream Card
      cardBg: 'bg-[#f8eee1]',
      cardBorder: 'border-[#e8dcc6]',
      titleColor: 'text-[#5a0d1b]',
      subtitleColor: 'text-[#701020]',
      descColor: 'text-[#650d1c]',
      tagBg: 'bg-[#e8dcc6]/60 text-[#701020] border-[#89192c]/20',
      bulletIconColor: 'text-[#701020]',
      bulletTextColor: 'text-[#5a0d1b]',
      btnClasses:
        'bg-[#701020] text-[#f8eee1] hover:bg-[#5a0d1b] border border-[#f1ca7e]/30 shadow-md shadow-[#5a0d1b]/20',
      rightFrameBg: 'bg-[#e8dcc6]/50 border-[#89192c]/15',
      iconBoxBg: 'bg-[#701020] text-[#f1ca7e] border border-[#89192c]',
      statusBg: 'bg-[#f8eee1] text-[#701020] border-[#89192c]/20',
      statCardBg: 'bg-[#f8eee1] border-[#89192c]/15',
      statValColor: 'text-[#5a0d1b]',
      statLabelColor: 'text-[#650d1c]',
      footerPillBg: 'bg-[#f8eee1] text-[#701020] border-[#89192c]/20',
      pulseDot: 'bg-[#701020]',
    },
  },
  {
    id: 'ai-hackathon',
    number: '02',
    tag: 'Module 02 · Autonomous Agents',
    title: 'AI Frontier Hackathon',
    subtitle: '36-Hour Autonomous Agent Challenge',
    description:
      'Engineers and AI researchers collaborate under real-time constraints to architect autonomous agents, fine-tuned foundational models, and high-throughput enterprise pipelines.',
    actionText: 'Review Hackathon Track',
    href: '#register',
    heroIcon: Cpu,
    features: [
      { icon: Cpu, text: 'Multi-Agent Orchestration & Enterprise Workflows' },
      { icon: Zap, text: 'GPU Compute Credits & API Cloud Endpoints Provided' },
      { icon: ShieldCheck, text: 'Evaluated on Latency, Autonomy & Architecture' },
    ],
    stats: [
      { label: 'Non-Stop Sprint', value: '36 Hours' },
      { label: 'Champion Award', value: 'PKR 350K' },
    ],
    badgeText: 'Cloud Compute Access · On-Site Mentorship',
    status: '36-Hour Sprint',
    theme: {
      // Light 2: Warm Parchment Card
      cardBg: 'bg-[#e8dcc6]',
      cardBorder: 'border-[#89192c]/20',
      titleColor: 'text-[#5a0d1b]',
      subtitleColor: 'text-[#701020]',
      descColor: 'text-[#650d1c]',
      tagBg: 'bg-[#f8eee1] text-[#701020] border-[#89192c]/20',
      bulletIconColor: 'text-[#701020]',
      bulletTextColor: 'text-[#5a0d1b]',
      btnClasses:
        'bg-[#701020] text-[#f8eee1] hover:bg-[#5a0d1b] border border-[#f1ca7e]/30 shadow-md shadow-[#5a0d1b]/20',
      rightFrameBg: 'bg-[#f8eee1]/70 border-[#89192c]/20',
      iconBoxBg: 'bg-[#701020] text-[#f1ca7e] border border-[#89192c]',
      statusBg: 'bg-[#e8dcc6] text-[#701020] border-[#89192c]/20',
      statCardBg: 'bg-[#e8dcc6] border-[#89192c]/20',
      statValColor: 'text-[#5a0d1b]',
      statLabelColor: 'text-[#650d1c]',
      footerPillBg: 'bg-[#e8dcc6] text-[#701020] border-[#89192c]/20',
      pulseDot: 'bg-[#701020]',
    },
  },
  {
    id: 'case-crack',
    number: '03',
    tag: 'Module 03 · Strategy & PE',
    title: 'Corporate Case Crack',
    subtitle: 'High-Impact Market Turnaround Simulation',
    description:
      'Dissect high-stakes enterprise bottlenecks, private equity restructuring scenarios, and international expansion roadmaps evaluated by Tier-1 management consultants.',
    actionText: 'Download Case Brief',
    href: '#register',
    heroIcon: Briefcase,
    features: [
      { icon: Briefcase, text: 'Private Equity Buyout & Turnaround Scenarios' },
      { icon: Target, text: 'Direct Evaluation by Former McKinsey & Bain Partners' },
      { icon: Layers, text: 'Executive Fellowship & Placement Opportunities' },
    ],
    stats: [
      { label: 'Consultant Rubric', value: 'Tier-1' },
      { label: 'Award Pool', value: 'PKR 250K' },
    ],
    badgeText: 'Chatham House Defense · 15-Min Board Q&A',
    status: 'PE Simulation',
    theme: {
      // Accent: Imperial Gold Card
      cardBg: 'bg-[#f1ca7e]',
      cardBorder: 'border-[#701020]/30 shadow-[#5a0d1b]/25',
      titleColor: 'text-[#5a0d1b]',
      subtitleColor: 'text-[#5a0d1b]',
      descColor: 'text-[#650d1c]',
      tagBg: 'bg-[#f8eee1] text-[#5a0d1b] border-[#5a0d1b]/20',
      bulletIconColor: 'text-[#5a0d1b]',
      bulletTextColor: 'text-[#5a0d1b]',
      btnClasses:
        'bg-[#5a0d1b] text-[#f1ca7e] hover:bg-[#701020] border border-[#5a0d1b] shadow-md shadow-[#5a0d1b]/30',
      rightFrameBg: 'bg-[#5a0d1b]/10 border-[#5a0d1b]/20',
      iconBoxBg: 'bg-[#5a0d1b] text-[#f1ca7e] border border-[#701020]',
      statusBg: 'bg-[#f8eee1] text-[#5a0d1b] border-[#5a0d1b]/20',
      statCardBg: 'bg-[#f8eee1] border-[#5a0d1b]/20',
      statValColor: 'text-[#5a0d1b]',
      statLabelColor: 'text-[#650d1c]',
      footerPillBg: 'bg-[#f8eee1] text-[#5a0d1b] border-[#5a0d1b]/20',
      pulseDot: 'bg-[#5a0d1b]',
    },
  },
  {
    id: 'brand-growth',
    number: '04',
    tag: 'Module 04 · Guerrilla Scale',
    title: 'Brand X & Growth Engine',
    subtitle: 'Guerrilla Product-Market Acceleration',
    description:
      'Build end-to-end user acquisition loops, digital conversion funnels, and narrative positioning designed to achieve exponential velocity in crowded markets.',
    actionText: 'Explore Growth Track',
    href: '#register',
    heroIcon: TrendingUp,
    features: [
      { icon: TrendingUp, text: 'Algorithmic Distribution & Guerrilla Campaigns' },
      { icon: Zap, text: 'CAC-to-LTV Funnel Architecture Under Budget Caps' },
      { icon: Users, text: 'Judged by High-Growth CMOs & Venture Operators' },
    ],
    stats: [
      { label: 'Scale Velocity', value: '10x' },
      { label: 'Grant Pool', value: 'PKR 200K' },
    ],
    badgeText: 'Real-World Conversion Metrics & Attribution',
    status: 'Growth Sprint',
    theme: {
      // Dark 4: Ruby Velvet Card
      cardBg: 'bg-[#89192c]',
      cardBorder: 'border-[#f1ca7e]/30 shadow-[#5a0d1b]/40',
      titleColor: 'text-[#f8eee1]',
      subtitleColor: 'text-[#f1ca7e]',
      descColor: 'text-[#e8dcc6]',
      tagBg: 'bg-[#701020] text-[#f1ca7e] border-[#f1ca7e]/30',
      bulletIconColor: 'text-[#f1ca7e]',
      bulletTextColor: 'text-[#f8eee1]',
      btnClasses:
        'bg-[#f1ca7e] text-[#5a0d1b] hover:bg-[#f8eee1] border border-[#f1ca7e] shadow-md shadow-[#5a0d1b]/40',
      rightFrameBg: 'bg-[#701020]/75 border-[#89192c]',
      iconBoxBg: 'bg-[#f1ca7e] text-[#5a0d1b] border border-[#f1ca7e]',
      statusBg: 'bg-[#89192c] text-[#f1ca7e] border-[#f1ca7e]/30',
      statCardBg: 'bg-[#89192c] border-[#f1ca7e]/20',
      statValColor: 'text-[#f8eee1]',
      statLabelColor: 'text-[#e8dcc6]',
      footerPillBg: 'bg-[#89192c] text-[#f1ca7e] border-[#f1ca7e]/20',
      pulseDot: 'bg-[#f1ca7e]',
    },
  },
  {
    id: 'ecoventure',
    number: '05',
    tag: 'Module 05 · Clean Impact',
    title: 'EcoVenture Track',
    subtitle: 'Scalable Climate & Circular Economy Tech',
    description:
      'Empowering founders building climate intelligence, clean industrial technology, and circular infrastructure to unlock sustainable global impact and green capital.',
    actionText: 'Discover Track Specs',
    href: '#register',
    heroIcon: Leaf,
    features: [
      { icon: Leaf, text: 'Circular Material Science & Industrial Decarbonization' },
      { icon: ShieldCheck, text: 'Carbon Offset Intelligence & Measurement Frameworks' },
      { icon: DollarSign, text: 'Direct Pipeline to International Green Impact Funds' },
    ],
    stats: [
      { label: 'Impact Standard', value: 'ESG' },
      { label: 'Clean Tech Grant', value: 'PKR 200K' },
    ],
    badgeText: 'Global Climate Alliance Partnership Network',
    status: 'Green Tech Track',
    theme: {
      // Dark 3: Royal Crimson Card
      cardBg: 'bg-[#701020]',
      cardBorder: 'border-[#89192c] shadow-[#5a0d1b]/50',
      titleColor: 'text-[#f8eee1]',
      subtitleColor: 'text-[#f1ca7e]',
      descColor: 'text-[#e8dcc6]',
      tagBg: 'bg-[#5a0d1b] text-[#f1ca7e] border-[#89192c]',
      bulletIconColor: 'text-[#f1ca7e]',
      bulletTextColor: 'text-[#f8eee1]',
      btnClasses:
        'bg-[#f1ca7e] text-[#5a0d1b] hover:bg-[#f8eee1] border border-[#f1ca7e] shadow-md shadow-[#5a0d1b]/40',
      rightFrameBg: 'bg-[#5a0d1b]/80 border-[#89192c]',
      iconBoxBg: 'bg-[#f1ca7e] text-[#5a0d1b] border border-[#f1ca7e]',
      statusBg: 'bg-[#701020] text-[#f1ca7e] border-[#89192c]',
      statCardBg: 'bg-[#701020] border-[#89192c]',
      statValColor: 'text-[#f8eee1]',
      statLabelColor: 'text-[#e8dcc6]',
      footerPillBg: 'bg-[#701020] text-[#f1ca7e] border-[#89192c]',
      pulseDot: 'bg-[#f1ca7e]',
    },
  },
  {
    id: 'deal-room',
    number: '06',
    tag: 'Module 06 · Invite-Only',
    title: 'The Executive Deal Room',
    subtitle: 'Private LP Receptions & Co-Investment Circles',
    description:
      'An invite-only Chatham House rule sanctuary for founders, LP institutional allocators, and enterprise partners orchestrating strategic co-investments and private syndications.',
    actionText: 'Request Deal Room Access',
    href: '#register',
    heroIcon: KeyRound,
    features: [
      { icon: KeyRound, text: 'Private Accredited LP & GP Co-Investment Circles' },
      { icon: Lock, text: 'Strict Chatham House Confidentiality & Protocol' },
      { icon: Users, text: 'Curated Direct Deal Syndication & Secondary Sales' },
    ],
    stats: [
      { label: 'Managing Partners', value: '40+' },
      { label: 'Curated Access', value: 'Invite Only' },
    ],
    badgeText: 'Accredited Allocators & Sovereign Partners',
    status: 'Chatham House Sanctuary',
    theme: {
      // Dark 1: Abyssal Oxblood Crown Card
      cardBg: 'bg-[#5a0d1b]',
      cardBorder: 'border-2 border-[#f1ca7e]/60 shadow-[0_30px_70px_rgba(90,13,27,0.85)]',
      titleColor: 'text-[#f8eee1]',
      subtitleColor: 'text-[#f1ca7e]',
      descColor: 'text-[#e8dcc6]',
      tagBg: 'bg-[#701020] text-[#f1ca7e] border-[#f1ca7e]/40',
      bulletIconColor: 'text-[#f1ca7e]',
      bulletTextColor: 'text-[#f8eee1]',
      btnClasses:
        'bg-[#f1ca7e] text-[#5a0d1b] hover:bg-[#f8eee1] border border-[#f1ca7e] shadow-md shadow-[#5a0d1b]/50',
      rightFrameBg: 'bg-[#701020]/90 border-[#f1ca7e]/30',
      iconBoxBg: 'bg-[#f1ca7e] text-[#5a0d1b] border border-[#f1ca7e]',
      statusBg: 'bg-[#5a0d1b] text-[#f1ca7e] border-[#f1ca7e]/40',
      statCardBg: 'bg-[#5a0d1b] border-[#89192c]',
      statValColor: 'text-[#f8eee1]',
      statLabelColor: 'text-[#e8dcc6]',
      footerPillBg: 'bg-[#5a0d1b] text-[#f1ca7e] border-[#f1ca7e]/30',
      pulseDot: 'bg-[#f1ca7e]',
    },
  },
];

/**
 * Individual Stacking Card Component
 * - Sticky Viewport Pinning: Sticks at top: calc(10vh + index * 26px)
 * - Incremental Top Offset: Leaving top edge of earlier cards visible
 * - Scale Reduction: Smooth 3D pyramid cascade
 */
function StackCard({ module, index, totalCards, scrollYProgress }) {
  const HeroIcon = module.heroIcon;
  const startProgress = (index + 0.4) / totalCards;
  const targetScale = 1 - (totalCards - index) * 0.032;

  const scale = useTransform(scrollYProgress, [startProgress, 1], [1, targetScale]);

  return (
    <div
      className="sticky min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"
      style={{
        top: `calc(9vh + ${index * 26}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className={cn(
          'pointer-events-auto w-full max-w-4xl lg:max-w-5xl rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-8 shadow-2xl border transition-shadow duration-300',
          module.theme.cardBg,
          module.theme.cardBorder
        )}
      >
        {/* Left Column (~52%): Typography, Badges & Interactive Features */}
        <div className="flex flex-col justify-between w-full md:w-[52%] pr-0 md:pr-4">
          <div>
            {/* Eyebrow & Number Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className={cn(
                  'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border',
                  module.theme.tagBg
                )}
              >
                {module.tag}
              </span>
              <span
                className={cn(
                  'text-xs font-extrabold tracking-widest uppercase',
                  module.theme.subtitleColor
                )}
              >
                {module.subtitle}
              </span>
            </div>

            {/* Main Headline */}
            <h3
              className={cn(
                'text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3',
                module.theme.titleColor
              )}
            >
              {module.title}
            </h3>

            {/* Description */}
            <p
              className={cn(
                'text-sm sm:text-base leading-relaxed mb-6 font-normal',
                module.theme.descColor
              )}
            >
              {module.description}
            </p>

            {/* 3 Icon Feature Bullets */}
            <div className="space-y-3 mb-8">
              {module.features.map((feat, fIdx) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div
                      className={cn(
                        'w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5',
                        module.theme.bulletIconColor
                      )}
                    >
                      <FeatIcon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <span
                      className={cn(
                        'text-xs sm:text-sm font-semibold leading-snug',
                        module.theme.bulletTextColor
                      )}
                    >
                      {feat.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-2">
            <Link
              href={module.href}
              className={cn(
                'inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]',
                module.theme.btnClasses
              )}
            >
              <span>{module.actionText}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Right Column (~48%): Inset Icon & Stats Showcase (No Photos) */}
        <div
          className={cn(
            'w-full md:w-[48%] rounded-2xl p-5 sm:p-6 flex flex-col justify-between border mt-4 md:mt-0',
            module.theme.rightFrameBg
          )}
        >
          {/* Top Row: Hero Icon Emblem & Status Pill */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div
              className={cn(
                'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105',
                module.theme.iconBoxBg
              )}
            >
              <HeroIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
            </div>

            <div
              className={cn(
                'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border shadow-sm',
                module.theme.statusBg
              )}
            >
              <span className={cn('w-2 h-2 rounded-full animate-pulse', module.theme.pulseDot)} />
              <span>{module.status}</span>
            </div>
          </div>

          {/* Center Callout: 2 Key Stat Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 my-auto">
            {module.stats.map((st, sIdx) => (
              <div
                key={sIdx}
                className={cn(
                  'rounded-xl p-3 sm:p-4 border flex flex-col justify-center shadow-sm',
                  module.theme.statCardBg
                )}
              >
                <div
                  className={cn(
                    'text-lg sm:text-xl md:text-2xl font-black tracking-tight',
                    module.theme.statValColor
                  )}
                >
                  {st.value}
                </div>
                <div
                  className={cn(
                    'text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-0.5',
                    module.theme.statLabelColor
                  )}
                >
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card: Live Spec & Security Pill */}
          <div
            className={cn(
              'mt-6 px-4 py-3 rounded-xl border flex items-center justify-between gap-3 text-[11px] sm:text-xs font-semibold shadow-sm',
              module.theme.footerPillBg
            )}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{module.badgeText}</span>
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
 * Completely revised into a full Stacking Cards experience.
 * Features 6 high-contrast layered cards, incremental top offset, and rich icon dashboards.
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
      {/* Ambient Radial Spotlight strictly following DESIGN-RULES.md */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60 bg-[radial-gradient(circle_at_50%_15%,#89192c_0%,#701020_45%,#5a0d1b_90%)]" />

      {/* Decorative Warm Vignette Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-[#f1ca7e]/[0.04] rounded-full blur-3xl pointer-events-none z-0" />

      {/* Lead-in Header */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow badge matching DESIGN-RULES.md */}
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
          Summit Challenges
        </span>

        {/* Section Heading */}
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
          Flagship <span className="text-[#f1ca7e]">Modules</span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#e8dcc6] leading-relaxed">
          Six high-velocity challenge arenas designed to test founders, engineers, and
          strategists. Scroll through the deck to explore competition formats, grant pools,
          and venture evaluation tracks.
        </p>

        {/* Quick Stats Pill */}
        <div className="mt-8 flex items-center gap-4 bg-[#701020]/90 border border-[#89192c] rounded-2xl p-4 backdrop-blur-sm shadow-md">
          <div className="border-r border-[#89192c] pr-4">
            <div className="text-2xl font-black text-[#f1ca7e]">6</div>
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
