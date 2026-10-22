'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  Award,
  Shield,
  Star,
  Crown,
  Users,
  Megaphone,
  Gift,
  ChevronRight,
  Sparkles,
  Trophy,
  Percent,
  BadgeCheck,
  Gem,
  ArrowRight,
  ArrowUpRight,
  Mail,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ============================================================================
   DATA
   ========================================================================== */

const REWARD_TIERS = [
  {
    id: 'tier-3',
    milestone: 'Bring 3 Teams',
    teamDiscount: '10% off team registration',
    personalDiscount: '—',
    perks: ['Certificate of Appreciation'],
    icon: Award,
    tier: 'Bronze',
    tierColor: 'text-[#e8dcc6]',
    cardBg: 'bg-[#650d1c]',
    cardBorder: 'border border-[#89192c]',
    iconBoxBg: 'bg-[#701020]',
    ambientGlowBg: 'bg-[radial-gradient(circle,#89192c,transparent)]',
    badgeGlow: 'shadow-[0_0_20px_rgba(137,25,44,0.4)]',
  },
  {
    id: 'tier-4',
    milestone: 'Bring 4 Teams',
    teamDiscount: '10% off team registration',
    personalDiscount: '10% off personal registration',
    perks: [
      'Certificate of Appreciation',
      'Featured recognition post on AES social media',
    ],
    icon: Star,
    tier: 'Silver',
    tierColor: 'text-[#f8eee1]',
    cardBg: 'bg-[#701020]',
    cardBorder: 'border border-[#89192c]',
    iconBoxBg: 'bg-[#89192c]',
    ambientGlowBg: 'bg-[radial-gradient(circle,#701020,transparent)]',
    badgeGlow: 'shadow-[0_0_25px_rgba(112,16,32,0.5)]',
  },
  {
    id: 'tier-5',
    milestone: 'Bring 5 Teams',
    teamDiscount: '15% off team registration',
    personalDiscount: '20% off personal registration',
    perks: [
      'Certificate of Appreciation',
      'Special recognition at Closing Ceremony',
      'Featured recognition post on AES social media',
    ],
    icon: Crown,
    tier: 'Gold',
    tierColor: 'text-[#f1ca7e]',
    cardBg: 'bg-[#89192c]',
    cardBorder: 'border-2 border-[#f1ca7e]/40',
    iconBoxBg: 'bg-[#f1ca7e]',
    ambientGlowBg: 'bg-[radial-gradient(circle,#f1ca7e,transparent)]',
    badgeGlow: 'shadow-[0_0_30px_rgba(241,202,126,0.35)]',
  },
  {
    id: 'tier-8',
    milestone: 'Bring 8+ Teams',
    teamDiscount: '15% off team registration',
    personalDiscount: '30% off personal registration',
    perks: [
      'Certificate of Appreciation',
      'Exclusive Ambassador Shield or special recognition award',
    ],
    icon: Gem,
    tier: 'Diamond',
    tierColor: 'text-[#f1ca7e]',
    cardBg: 'bg-[#5a0d1b]',
    cardBorder: 'border-2 border-[#f1ca7e]/60',
    iconBoxBg: 'bg-[#f1ca7e]',
    ambientGlowBg: 'bg-[radial-gradient(circle,#f1ca7e,transparent)]',
    badgeGlow: 'shadow-[0_0_40px_rgba(241,202,126,0.45)]',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Submit Application',
    description: 'Complete the short ambassador sign-up form and receive your official referral code.',
    icon: BadgeCheck,
  },
  {
    step: '02',
    title: 'Rally Your Campus',
    description: 'Spread the word across your institution and invite student teams to register with your code.',
    icon: Megaphone,
  },
  {
    step: '03',
    title: 'Unlock Rewards',
    description: 'Earn generous registration discounts, personal passes, and honors at the closing ceremony.',
    icon: Gift,
  },
];

/* ============================================================================
   ANIMATION VARIANTS
   ========================================================================== */

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/* ============================================================================
   ANIMATED SECTION WRAPPER
   ========================================================================== */

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================================
   FLOATING PARTICLES COMPONENT (Zero Math.random / 100% Deterministic)
   ========================================================================== */

const PARTICLES = [
  { id: 0, className: 'w-1 h-1 left-[12%] top-[18%]', duration: 9, delay: 0.5 },
  { id: 1, className: 'w-1.5 h-1.5 left-[28%] top-[45%]', duration: 11, delay: 1.2 },
  { id: 2, className: 'w-1 h-1 left-[74%] top-[15%]', duration: 8, delay: 2.1 },
  { id: 3, className: 'w-1 h-1 left-[86%] top-[62%]', duration: 13, delay: 0.8 },
  { id: 4, className: 'w-1.5 h-1.5 left-[42%] top-[82%]', duration: 10, delay: 1.8 },
  { id: 5, className: 'w-1 h-1 left-[65%] top-[38%]', duration: 12, delay: 2.5 },
  { id: 6, className: 'w-1 h-1 left-[18%] top-[72%]', duration: 9, delay: 3.1 },
  { id: 7, className: 'w-1.5 h-1.5 left-[92%] top-[24%]', duration: 14, delay: 0.2 },
  { id: 8, className: 'w-1 h-1 left-[53%] top-[60%]', duration: 8, delay: 1.5 },
  { id: 9, className: 'w-1 h-1 left-[34%] top-[22%]', duration: 11, delay: 2.8 },
  { id: 10, className: 'w-1.5 h-1.5 left-[78%] top-[85%]', duration: 10, delay: 0.9 },
  { id: 11, className: 'w-1 h-1 left-[8%] top-[50%]', duration: 12, delay: 1.7 },
  { id: 12, className: 'w-1 h-1 left-[62%] top-[92%]', duration: 9, delay: 2.3 },
  { id: 13, className: 'w-1.5 h-1.5 left-[22%] top-[33%]', duration: 13, delay: 3.4 },
  { id: 14, className: 'w-1 h-1 left-[84%] top-[42%]', duration: 8, delay: 0.6 },
  { id: 15, className: 'w-1 h-1 left-[48%] top-[10%]', duration: 11, delay: 1.4 },
  { id: 16, className: 'w-1.5 h-1.5 left-[70%] top-[70%]', duration: 10, delay: 2.9 },
  { id: 17, className: 'w-1 h-1 left-[38%] top-[55%]', duration: 12, delay: 0.4 },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full bg-[#f1ca7e]/25 ${p.className}`}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================================
   TIER CARD COMPONENT
   ========================================================================== */

function TierCard({ tier, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const TierIcon = tier.icon;
  const isDiamond = tier.tier === 'Diamond';
  const isGold = tier.tier === 'Gold';

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between ${tier.cardBg} ${tier.cardBorder} ${tier.badgeGlow} hover:shadow-2xl transition-shadow duration-500 overflow-hidden`}
    >
      {/* Ambient glow */}
      <div
        className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${tier.ambientGlowBg}`}
      />

      {/* Diamond special border shimmer */}
      {isDiamond && (
        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(241,202,126,0.2),transparent_70%)] animate-pulse" />
      )}

      {/* Top: Tier badge + Icon */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${isDiamond || isGold ? 'bg-[#f1ca7e]/20 text-[#f1ca7e] border border-[#f1ca7e]/30' : 'bg-[#89192c]/50 text-[#e8dcc6] border border-[#89192c]'}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {tier.tier}
          </div>
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 ${tier.iconBoxBg} ${isDiamond || isGold ? 'text-[#5a0d1b]' : 'text-[#f1ca7e]'}`}
          >
            <TierIcon className="w-6 h-6 stroke-[2]" />
          </div>
        </div>

        {/* Milestone */}
        <h3
          className={`text-xl sm:text-2xl font-black tracking-tight ${tier.tierColor} mb-4`}
        >
          {tier.milestone}
        </h3>

        {/* Discount Stats */}
        <div className="space-y-3 mb-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#701020]/60 border border-[#89192c] flex items-center justify-center shrink-0 mt-0.5">
              <Users className="w-4 h-4 text-[#f1ca7e]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8dcc6]/70">
                Team Discount
              </span>
              <p className="text-sm font-semibold text-[#f8eee1]">{tier.teamDiscount}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#701020]/60 border border-[#89192c] flex items-center justify-center shrink-0 mt-0.5">
              <Percent className="w-4 h-4 text-[#f1ca7e]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8dcc6]/70">
                Personal Discount
              </span>
              <p className="text-sm font-semibold text-[#f8eee1]">
                {tier.personalDiscount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="relative z-10 pt-4 border-t border-[#89192c]/60">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#f1ca7e] mb-2 block">
          Recognition & Perks
        </span>
        <ul className="space-y-2">
          {tier.perks.map((perk, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs sm:text-sm text-[#e8dcc6]"
            >
              <ChevronRight className="w-3.5 h-3.5 text-[#f1ca7e] mt-0.5 shrink-0" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ============================================================================
   HOW IT WORKS STEP
   ========================================================================== */

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const StepIcon = step.icon;

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={scaleInVariants}
      className="group relative flex flex-col items-center text-center"
    >
      {/* Connector line (except last) */}
      {index < HOW_IT_WORKS.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-[#f1ca7e]/50 to-[#89192c]/30" />
      )}

      {/* Step number ring */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative w-24 h-24 rounded-full bg-[#701020] border-2 border-[#89192c] flex items-center justify-center mb-5 shadow-xl shadow-[#5a0d1b]/50 group-hover:border-[#f1ca7e]/60 transition-colors duration-300"
      >
        {/* Ambient halo */}
        <div className="absolute inset-0 rounded-full bg-[#f1ca7e]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <StepIcon className="w-10 h-10 text-[#f1ca7e] relative z-10" />
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#f1ca7e] text-[#5a0d1b] flex items-center justify-center text-xs font-black shadow-lg">
          {step.step}
        </div>
      </motion.div>

      <h3 className="text-lg sm:text-xl font-bold text-[#f8eee1] mb-2 tracking-tight">
        {step.title}
      </h3>
      <p className="text-sm text-[#e8dcc6] max-w-xs leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

/* ============================================================================
   MAIN PAGE
   ========================================================================== */

export default function AmbassadorsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const smoothHeroY = useSpring(heroParallaxY, { stiffness: 80, damping: 25 });

  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] flex flex-col">
      <Navbar />

      {/* ================================================================
          SECTION 1: HERO
          ================================================================ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Radial background atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#89192c_0%,#701020_35%,#5a0d1b_100%)] pointer-events-none" />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Decorative rotating ring */}
        <motion.div
          className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full border border-[#89192c]/30 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#f1ca7e]/10 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />

        {/* Hero Content */}
        <motion.div
          style={{
            y: smoothHeroY,
            opacity: heroOpacity,
            scale: heroScale,
          }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-32 pb-24 will-change-transform"
        >
          {/* Main heading with character stagger */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#f8eee1] leading-[0.95]"
          >
            Become an{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#f1ca7e]">Ambassador</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#e8dcc6] max-w-2xl leading-relaxed"
          >
            Represent the Alpha Entrepreneurship Summit, promote participation across your
            network, and drive team registrations in exchange for{' '}
            <span className="text-[#f1ca7e] font-semibold">tiered discounts</span> and{' '}
            <span className="text-[#f1ca7e] font-semibold">
              exclusive recognition rewards
            </span>
            .
          </motion.p>

          {/* Dual CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4We7WHOgJUSJuBHvzR0a_yoXsS5ZZMtOmVx09mfgyTNUNkZORUE4VVk5V01XUUxZOExGTVRCMkpDQy4u"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between pl-7 pr-2.5 py-2 sm:pl-8 sm:pr-3 sm:py-2.5 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-base sm:text-lg tracking-tight shadow-xl shadow-[#5a0d1b]/40 hover:shadow-[0_0_30px_rgba(248,238,225,0.45)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
            >
              <span>Apply for Ambassador Program</span>
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-4 shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#701020]">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
            <Link
              href="#tiers"
              className="group relative inline-flex items-center justify-between pl-6 pr-2.5 py-2 sm:pl-7 sm:pr-3 sm:py-2.5 rounded-full bg-[#89192c]/50 text-[#f8eee1] border-2 border-[#f1ca7e]/50 hover:border-[#f1ca7e] hover:bg-[#89192c] hover:text-[#f1ca7e] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 ease-out backdrop-blur-md shadow-md hover:shadow-lg hover:shadow-[#5a0d1b]/40 text-base sm:text-lg font-semibold"
            >
              <span>View Rewards</span>
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1ca7e] text-[#5a0d1b] flex items-center justify-center ml-3.5 shrink-0 transition-all duration-300 ease-out group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================================================================
          SECTION 2: HOW IT WORKS
          ================================================================ */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#650d1c] border-t border-[#89192c]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#701020_0%,#650d1c_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Simple Process
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
              How It <span className="text-[#f1ca7e]">Works</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#e8dcc6] leading-relaxed">
              Three simple steps to start earning discounts and exclusive recognition.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <StepCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: REWARD TIERS
          ================================================================ */}
      <section
        id="tiers"
        className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#5a0d1b] border-t border-[#89192c]"
      >
        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f1ca7e]/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Tiered Rewards
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
              Reward <span className="text-[#f1ca7e]">Tiers</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#e8dcc6] leading-relaxed">
              The more teams you bring, the bigger your rewards. Unlock exclusive
              discounts and prestigious recognition at every milestone.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {REWARD_TIERS.map((tier, i) => (
              <TierCard key={tier.id} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: UNIVERSAL BENEFIT
          ================================================================ */}
      <section className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#701020] border-t border-[#89192c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#89192c_0%,#701020_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left: Icon cluster */}
            <AnimatedSection className="shrink-0">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-[#89192c]/60 border-2 border-[#f1ca7e]/30 flex items-center justify-center shadow-2xl shadow-[#5a0d1b]/60 backdrop-blur-md">
                  <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-[#f1ca7e]" />
                </div>
                {/* Orbiting sparkle */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#f1ca7e] flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-4 h-4 text-[#5a0d1b]" />
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Right: Content */}
            <AnimatedSection delay={0.15}>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
                For All Ambassadors
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#f8eee1]">
                Universal Benefit
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] leading-relaxed max-w-xl">
                All participating brand ambassadors receive{' '}
                <span className="text-[#f1ca7e] font-semibold">
                  recognition at the AES closing ceremony
                </span>{' '}
                for their outstanding contribution to the summit&apos;s success —
                regardless of tier.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f1ca7e] text-[#5a0d1b] flex items-center justify-center shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-[#f8eee1]">
                  General Acknowledgment at Closing Ceremony
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: CONTACT & APPLY CTA
          ================================================================ */}
      <section
        id="apply"
        className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#5a0d1b] border-t border-[#89192c]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,#89192c_0%,#701020_40%,#5a0d1b_100%)] pointer-events-none" />

        {/* Floating particles */}
        <FloatingParticles />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Join the Network
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
              Ready to <span className="text-[#f1ca7e]">Represent</span>?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] leading-relaxed max-w-xl mx-auto">
              Apply now to become an AES Brand Ambassador. Represent the summit, promote
              participation, and earn exclusive rewards.
            </p>
          </AnimatedSection>

          {/* CTA Button */}
          <AnimatedSection delay={0.2} className="mt-10">
            <a
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4We7WHOgJUSJuBHvzR0a_yoXsS5ZZMtOmVx09mfgyTNUNkZORUE4VVk5V01XUUxZOExGTVRCMkpDQy4u"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between pl-8 pr-3 py-3 sm:pl-9 sm:pr-3.5 sm:py-3.5 text-base sm:text-lg font-bold rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] hover:shadow-[0_0_35px_rgba(248,238,225,0.55)] hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 ease-out shadow-2xl shadow-[#5a0d1b]/60 cursor-pointer"
            >
              <span>Apply for Ambassador Program</span>
              <span className="w-10 h-10 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-4 shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#701020]">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.35} className="mt-16">
            <div className="bg-[#701020]/60 border border-[#89192c] rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-[#f8eee1] mb-4">
                Contact Information
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:ambassadors@aes2026.com"
                  className="group flex items-center gap-3 text-[#e8dcc6] hover:text-[#f1ca7e] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#89192c]/60 border border-[#89192c] flex items-center justify-center group-hover:bg-[#89192c] transition-colors duration-300">
                    <Mail className="w-4 h-4 text-[#f1ca7e]" />
                  </div>
                  <span className="text-sm font-medium">ambassadors@aes2026.com</span>
                </a>
                <a
                  href="https://instagram.com/aes_summit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[#e8dcc6] hover:text-[#f1ca7e] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#89192c]/60 border border-[#89192c] flex items-center justify-center group-hover:bg-[#89192c] transition-colors duration-300">
                    <InstagramIcon className="w-4 h-4 text-[#f1ca7e]" />
                  </div>
                  <span className="text-sm font-medium">@aes_summit</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
