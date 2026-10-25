'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Shield,
  Star,
  Crown,
  Users,
  Megaphone,
  Gift,
  Trophy,
  Sparkles,
  BadgeCheck,
  Gem,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
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
   OFFICIAL DATA — EXTRACTED DIRECTLY FROM AES DELEGATE GUIDE (PAGES 20–22)
   Zero assumptions. 100% verified summit facts.
   ========================================================================== */

const OFFICIAL_TIERS = [
  {
    id: 'tier-3',
    milestone: 'Bring 3 Teams',
    teamsRequired: '3 Teams',
    teamDiscount: '10% off team registration',
    personalDiscount: 'Standard entry',
    perks: ['Official Certificate of Appreciation'],
    tag: 'Starter Tier',
    badge: 'Bronze',
    icon: Award,
    popular: false,
  },
  {
    id: 'tier-4',
    milestone: 'Bring 4 Teams',
    teamsRequired: '4 Teams',
    teamDiscount: '10% off team registration',
    personalDiscount: '10% off personal registration',
    perks: [
      'Official Certificate of Appreciation',
      'Featured recognition post on AES social media',
    ],
    tag: 'Growth Tier',
    badge: 'Silver',
    icon: Star,
    popular: false,
  },
  {
    id: 'tier-5',
    milestone: 'Bring 5 Teams',
    teamsRequired: '5 Teams',
    teamDiscount: '15% off team registration',
    personalDiscount: '20% off personal registration',
    perks: [
      'Official Certificate of Appreciation',
      'Special recognition at the Closing Ceremony',
      'Featured recognition post on AES social media',
    ],
    tag: 'Most Popular',
    badge: 'Gold',
    icon: Crown,
    popular: true,
  },
  {
    id: 'tier-8',
    milestone: 'Bring 8 or More Teams',
    teamsRequired: '8+ Teams',
    teamDiscount: '15% off team registration',
    personalDiscount: '30% off personal registration',
    perks: [
      'Official Certificate of Appreciation',
      'Exclusive Ambassador Shield or special recognition award',
    ],
    tag: 'Premier Leadership',
    badge: 'Shield Honor',
    icon: Gem,
    popular: false,
  },
];

const PROGRAM_PILLARS = [
  {
    title: 'Campus Representation',
    description:
      'Serve as the official AES 2026 liaison across your school, college, or university campus. Champion youth entrepreneurship and direct prospective delegates to the summit handbook.',
    icon: Megaphone,
  },
  {
    title: 'Delegation Mobilization',
    description:
      'Encourage student teams to compete in the 5 flagship modules: Investomania, Defend The Empire, Market Monopoly, Venture Verse, and Viral Velocity.',
    icon: Users,
  },
  {
    title: 'Tiered Reward Unlocks',
    description:
      'Enable your teams to claim 10%–15% registration discounts while unlocking personal waivers of up to 30%, social spotlight posts, and official summit awards.',
    icon: Trophy,
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Submit Application',
    description:
      'Complete the official AES Ambassador registration form on Microsoft Forms with your campus details and contact information.',
    icon: BadgeCheck,
  },
  {
    step: '02',
    title: 'Promote & Mobilize Teams',
    description:
      'Spread awareness across your institution, share module briefs, and guide student competitors through team registration.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Unlock Rewards & Stage Honors',
    description:
      'Your teams receive guaranteed fee reductions, and you receive personal registration waivers, certificates, and closing ceremony recognition.',
    icon: Gift,
  },
];

const OFFICIAL_CONTACTS = [
  {
    role: 'Presidents',
    name: 'Mansoor Moiz',
    phone: '0335 7555253',
    cleanPhone: '+923357555253',
  },
  {
    role: 'Presidents',
    name: 'Zoya Ehtasham',
    phone: '0332 5175032',
    cleanPhone: '+923325175032',
  },
  {
    role: 'General Secretary',
    name: 'Bareerah Ahmed',
    phone: '0336 0081714',
    cleanPhone: '+923360081714',
  },
];

const APPLICATION_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4We7WHOgJUSJuBHvzR0a_yoXsS5ZZMtOmVx09mfgyTNUNkZORUE4VVk5V01XUUxZOExGTVRCMkpDQy4u';

export default function AmbassadorsPage() {
  return (
    <main className="min-h-screen bg-[#fffdfa] text-[#5a0d1b] flex flex-col font-sans selection:bg-[#701020] selection:text-[#f1ca7e]">
      <Navbar />

      {/* =====================================================================
          SECTION 1: HERO [WHITE / LIGHT SECTION]
          ===================================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#fffdfa] via-[#fbf5eb] to-[#f4ebe1] pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]/15 overflow-hidden">
        {/* Subtle background ambient waves */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30">
          <svg
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120 C 320 220, 680 80, 1040 180 C 1240 230, 1380 160, 1440 140 L 1440 400 L 0 400 Z"
              fill="url(#hero-light-wave)"
            />
            <defs>
              <linearGradient id="hero-light-wave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1ca7e" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#e8dcc6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#701020" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#701020] text-[#f1ca7e] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-md shadow-[#701020]/20 border border-[#89192c]">
              <Sparkles className="w-3.5 h-3.5 text-[#f1ca7e]" />
              <span>Official AES Ambassador Program · Alpha College Karachi</span>
            </div>
          </motion.div>

          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#5a0d1b] leading-[1.05]"
            >
              Want to Represent{' '}
              <span className="text-[#89192c] underline decoration-[#f1ca7e] decoration-wavy decoration-2 underline-offset-8">
                Innovation?
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-[#701020]"
            >
              Become an AES Brand Ambassador
            </motion.h2>

            {/* Official Mandate Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-[#650d1c] max-w-3xl mx-auto leading-relaxed"
            >
              Represent Pakistan&apos;s premier youth entrepreneurship summit at your campus.
              Promote participation, encourage teams to register, and unlock exclusive team discounts
              and personal recognition rewards as published in the official AES Delegate Guide.
            </motion.p>

            {/* Summit Date & Location Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#701020]"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#89192c]/20 shadow-sm">
                <Calendar className="w-4 h-4 text-[#89192c]" />
                November 13 – 15, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#89192c]/20 shadow-sm">
                <MapPin className="w-4 h-4 text-[#89192c]" />
                Alpha College, Karachi
              </span>
            </motion.div>

            {/* Call-To-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-between pl-7 pr-2.5 py-3 sm:pl-8 sm:pr-3 sm:py-3.5 rounded-full bg-[#701020] hover:bg-[#5a0d1b] text-[#f1ca7e] font-bold text-base sm:text-lg tracking-tight shadow-xl shadow-[#701020]/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#701020]"
              >
                <span>Apply as Brand Ambassador</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1ca7e] text-[#5a0d1b] flex items-center justify-center ml-4 shrink-0 transition-all duration-300 ease-out group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </span>
              </a>

              <Link
                href="#tiers"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white hover:bg-[#fbf5eb] text-[#5a0d1b] border-2 border-[#89192c]/30 hover:border-[#701020] text-base sm:text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>View Reward Tiers</span>
              </Link>
            </motion.div>

            {/* Official Artwork Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-12 relative max-w-sm sm:max-w-md mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#701020] shadow-[0_20px_50px_rgba(90,13,27,0.25)] bg-[#5a0d1b]">
                <Image
                  src="/ambassadors-og.jpg"
                  alt="Want To Represent Innovation? Become An AES Brand Ambassador"
                  width={460}
                  height={460}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: MISSION & RESPONSIBILITIES [RED / BURGUNDY SECTION]
          ===================================================================== */}
      <section className="relative w-full bg-[#5a0d1b] text-[#f8eee1] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c] overflow-hidden">
        {/* Radial atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#701020_0%,#5a0d1b_75%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Get Recognised · The AES Ambassador Mission
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
              Lead the Entrepreneurial Movement
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] leading-relaxed">
              As an official AES Brand Ambassador, you are the front-line ambassador connecting
              passionate students to Pakistan&apos;s most competitive business simulation summit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PROGRAM_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#701020]/70 border-2 border-[#89192c] hover:border-[#f1ca7e] backdrop-blur-xl shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#89192c] text-[#f1ca7e] border border-[#f1ca7e]/40 flex items-center justify-center shrink-0 mb-5 shadow-md">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#f8eee1] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#e8dcc6] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#89192c] flex items-center text-xs font-semibold text-[#f1ca7e]">
                    <span>Official Role Requirement</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: OFFICIAL REWARD TIERS [WHITE / LIGHT SECTION]
          ===================================================================== */}
      <section
        id="tiers"
        className="relative w-full bg-gradient-to-b from-[#fbf5eb] via-[#fffdfa] to-[#f4ebe1] text-[#5a0d1b] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]/15"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020]">
              Delegate Guide Page 21 Policy
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#5a0d1b]">
              Ambassador Rewards
            </h2>
            <p className="mt-2 text-xl font-bold text-[#89192c]">
              Bring More Teams, Unlock More
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#650d1c] leading-relaxed">
              Every reward below is published in the official summit delegate handbook. Unlock
              higher registration fee reductions for your teams, personal fee discounts, and exclusive awards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {OFFICIAL_TIERS.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                    tier.popular
                      ? 'bg-white border-3 border-[#701020] shadow-[0_15px_40px_rgba(90,13,27,0.18)] ring-2 ring-[#f1ca7e]'
                      : 'bg-[#fbf5eb]/90 border-2 border-[#89192c]/20 hover:border-[#701020] shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#701020] text-[#f1ca7e] text-xs font-bold uppercase tracking-wider">
                        {tier.teamsRequired}
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-wide text-[#89192c]">
                        {tier.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#701020] text-[#f1ca7e] border border-[#89192c] flex items-center justify-center mb-5 shadow-md">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h3 className="text-2xl font-black text-[#5a0d1b] tracking-tight">
                      {tier.milestone}
                    </h3>

                    {/* Discounts Box */}
                    <div className="mt-5 space-y-3 p-4 rounded-xl bg-white border border-[#89192c]/15">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#701020] block">
                          Team Benefit
                        </span>
                        <span className="text-base font-extrabold text-[#5a0d1b] block">
                          {tier.teamDiscount}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#701020] block">
                          Personal Benefit
                        </span>
                        <span className="text-base font-extrabold text-[#5a0d1b] block">
                          {tier.personalDiscount}
                        </span>
                      </div>
                    </div>

                    {/* Perks List */}
                    <div className="mt-5 space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#701020] block">
                        Included Honors:
                      </span>
                      {tier.perks.map((perk) => (
                        <div key={perk} className="flex items-start gap-2 text-xs sm:text-sm text-[#650d1c]">
                          <CheckCircle2 className="w-4 h-4 text-[#701020] shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-6 pt-5 border-t border-[#89192c]/15">
                    <a
                      href={APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full bg-[#701020] hover:bg-[#5a0d1b] text-[#f1ca7e] font-bold text-xs sm:text-sm transition-colors shadow-sm"
                    >
                      <span>Claim Milestone</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 stroke-[2.2]" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: HOW IT WORKS [RED / BURGUNDY SECTION]
          ===================================================================== */}
      <section className="relative w-full bg-[#5a0d1b] text-[#f8eee1] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#701020_0%,#5a0d1b_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Pathway to Representation
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
              How It Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] leading-relaxed">
              Three straightforward steps from application submission to stage recognition at the closing gala.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative rounded-2xl sm:rounded-3xl p-7 sm:p-8 bg-[#701020]/60 border-2 border-[#89192c] hover:border-[#f1ca7e] backdrop-blur-xl shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-[#f1ca7e] font-mono">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#89192c] text-[#f1ca7e] border border-[#f1ca7e]/40 flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8eee1] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#e8dcc6] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: GUARANTEED RECOGNITION POLICY [WHITE / LIGHT SECTION]
          ===================================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#ffffff] via-[#fffdfa] to-[#f8eee1] text-[#5a0d1b] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]/15">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020]">
              Universal Guarantee
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#5a0d1b]">
              Every Ambassador Is Acknowledged
            </h2>
          </motion.div>

          {/* Official Delegate Guide Callout Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#fbf5eb] via-[#f5ebdb] to-[#ede0cc] border-3 border-[#701020] shadow-[0_20px_50px_rgba(90,13,27,0.12)] relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#701020] text-[#f1ca7e] flex items-center justify-center shrink-0 shadow-xl border-2 border-[#89192c]">
                <Trophy className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#89192c] block mb-2">
                  Official Statement · AES Delegate Guide Page 21
                </span>
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#5a0d1b] leading-snug">
                  &ldquo;All brand ambassadors will be acknowledged at the AES closing ceremony for their contribution to the summit&apos;s success.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm sm:text-base text-[#650d1c] leading-relaxed">
                  Regardless of the milestone reached, your dedication to driving participation and
                  championing entrepreneurship will be officially commended in front of competing
                  delegates, institutional faculty, and executive keynote judges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: OFFICIAL CONTACTS & APPLICATION CTA [RED / BURGUNDY SECTION]
          ===================================================================== */}
      <section
        id="apply"
        className="relative w-full bg-[#5a0d1b] text-[#f8eee1] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,#701020_0%,#5a0d1b_65%,#420a13_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Official Executive Direct Line
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
              Ready to Represent Innovation?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] max-w-2xl mx-auto leading-relaxed">
              Step forward as a recognized student leader. Submit your application today and join the
              national ambassador delegation for AES 2026.
            </p>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex justify-center"
          >
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between pl-8 pr-3 py-3.5 sm:pl-10 sm:pr-4 sm:py-4 text-base sm:text-xl font-bold rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] shadow-2xl shadow-[#000]/50 hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
            >
              <span>Submit Ambassador Application</span>
              <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-5 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#701020]">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </span>
            </a>
          </motion.div>

          {/* Official Contacts (Delegate Guide Page 22) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-16 text-left max-w-4xl mx-auto"
          >
            <div className="bg-[#701020]/70 border-2 border-[#89192c] rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#89192c]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8eee1]">
                    Official Summit Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e8dcc6]">
                    Direct executive council contacts as published on Page 22 of the AES Delegate Guide
                  </p>
                </div>

                <a
                  href="https://instagram.com/aes_summit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#89192c]/60 hover:bg-[#89192c] text-[#f1ca7e] border border-[#f1ca7e]/30 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#f1ca7e]" />
                  <span>@aes_summit</span>
                </a>
              </div>

              {/* Contacts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {OFFICIAL_CONTACTS.map((contact) => (
                  <div
                    key={contact.name}
                    className="p-4 rounded-2xl bg-[#5a0d1b]/60 border border-[#89192c] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#f1ca7e] block">
                        {contact.role}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#f8eee1] block mt-1">
                        {contact.name}
                      </span>
                    </div>

                    <a
                      href={`tel:${contact.cleanPhone}`}
                      className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#e8dcc6] hover:text-[#f1ca7e] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#f1ca7e]" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
