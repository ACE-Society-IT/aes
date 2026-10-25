'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Star,
  Crown,
  Users,
  Megaphone,
  Gift,
  Trophy,
  BadgeCheck,
  Gem,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Calendar,
  MapPin,
  Building2,
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
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ============================================================================
   OFFICIAL DATA — EXTRACTED DIRECTLY FROM AES DELEGATE GUIDE (PAGES 20–22)
   100% verified summit facts. Zero assumptions.
   ========================================================================== */

const OFFICIAL_TIERS = [
  {
    id: 'tier-3',
    milestone: 'Bring 3 Teams',
    teamsRequired: '3 Teams',
    teamDiscount: '10% off team registration',
    personalDiscount: 'Standard entry',
    perks: ['Certificate of Appreciation', 'Closing Ceremony acknowledgment'],
    tag: 'Tier 1',
    badge: 'Bronze',
    icon: Award,
    featured: false,
  },
  {
    id: 'tier-4',
    milestone: 'Bring 4 Teams',
    teamsRequired: '4 Teams',
    teamDiscount: '10% off team registration',
    personalDiscount: '10% off personal registration',
    perks: [
      'Certificate of Appreciation',
      'Featured recognition post on AES social media',
      'Closing Ceremony acknowledgment',
    ],
    tag: 'Tier 2',
    badge: 'Silver',
    icon: Star,
    featured: false,
  },
  {
    id: 'tier-5',
    milestone: 'Bring 5 Teams',
    teamsRequired: '5 Teams',
    teamDiscount: '15% off team registration',
    personalDiscount: '20% off personal registration',
    perks: [
      'Certificate of Appreciation',
      'Special recognition at the Closing Ceremony',
      'Featured recognition post on AES social media',
    ],
    tag: 'Tier 3 · Most Popular',
    badge: 'Gold',
    icon: Crown,
    featured: true,
  },
  {
    id: 'tier-8',
    milestone: 'Bring 8 or More Teams',
    teamsRequired: '8+ Teams',
    teamDiscount: '15% off team registration',
    personalDiscount: '30% off personal registration',
    perks: [
      'Certificate of Appreciation',
      'Exclusive Ambassador Shield or special recognition award',
      'Closing Ceremony executive acknowledgment',
    ],
    tag: 'Tier 4 · Executive Honor',
    badge: 'Shield Honor',
    icon: Gem,
    featured: false,
  },
];

const PROGRAM_PILLARS = [
  {
    title: 'Institutional Representation',
    description:
      'Serve as the designated AES 2026 ambassador across your school, college, or university network. Distribute official module handbooks and brief prospective delegations.',
    icon: Megaphone,
  },
  {
    title: 'Delegation Mobilization',
    description:
      'Encourage and coordinate student competitor teams across the 5 flagship modules: Investomania, Defend The Empire, Market Monopoly, Venture Verse, and Viral Velocity.',
    icon: Users,
  },
  {
    title: 'Discount & Honor Coordination',
    description:
      'Ensure your delegations reference your ambassador credentials to receive their 10%–15% registration reduction and unlock your personal milestone rewards.',
    icon: Trophy,
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Submit Application',
    description:
      'Complete the official AES Ambassador form on Microsoft Forms with your institutional affiliation and contact credentials.',
    icon: BadgeCheck,
  },
  {
    step: '02',
    title: 'Mobilize Campus Teams',
    description:
      'Circulate summit information across your network and guide interested student competitors through team module selection.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Receive Discounts & Ceremony Honors',
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
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] flex flex-col font-sans selection:bg-[#f1ca7e] selection:text-[#5a0d1b]">
      <Navbar />

      {/* =====================================================================
          SECTION 1: HERO [RED / BURGUNDY SECTION]
          ===================================================================== */}
      <section className="relative w-full bg-[#5a0d1b] text-[#f8eee1] pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]">
        {/* Subtle executive radial shading */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#701020_0%,#5a0d1b_75%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Column: Headline and Mission Statement */}
            <div className="lg:col-span-7 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f8eee1] leading-[1.12]"
              >
                Want to Represent{' '}
                <span className="text-[#f1ca7e]">Innovation?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-2.5 sm:mt-3 text-lg sm:text-2xl font-bold text-[#e8dcc6] tracking-tight"
              >
                Become an AES Brand Ambassador
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#e8dcc6]/90 leading-relaxed max-w-2xl"
              >
                The AES Brand Ambassador Program invites motivated individuals to represent the
                summit, promote participation, and encourage student teams to register. Ambassadors
                unlock exclusive rewards and registration discounts based on the number of teams
                they bring to AES.
              </motion.p>

              {/* Key Summit Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#89192c] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
              >
                <div className="p-2.5 sm:p-0 rounded-lg bg-[#701020]/40 sm:bg-transparent border border-[#89192c]/40 sm:border-0">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#f1ca7e] uppercase tracking-wider block">
                    Dates
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#f8eee1] flex items-center gap-1.5 mt-1">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f1ca7e] shrink-0" />
                    Nov 13 – 15, 2026
                  </span>
                </div>
                <div className="p-2.5 sm:p-0 rounded-lg bg-[#701020]/40 sm:bg-transparent border border-[#89192c]/40 sm:border-0">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#f1ca7e] uppercase tracking-wider block">
                    Venue
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#f8eee1] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f1ca7e] shrink-0" />
                    Alpha College, Karachi
                  </span>
                </div>
                <div className="p-2.5 sm:p-0 rounded-lg bg-[#701020]/40 sm:bg-transparent border border-[#89192c]/40 sm:border-0">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#f1ca7e] uppercase tracking-wider block">
                    Governing Body
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#f8eee1] flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f1ca7e] shrink-0" />
                    ACE Society
                  </span>
                </div>
              </motion.div>

              {/* Primary Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              >
                <a
                  href={APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between sm:justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-sm sm:text-base shadow-xl transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Apply for Ambassador Program</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <Link
                  href="#tiers"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#701020] hover:bg-[#89192c] text-[#f8eee1] border border-[#89192c] text-sm sm:text-base font-semibold transition-all duration-200 text-center"
                >
                  <span>View Reward Structure</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Clean Poster Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center mt-2 lg:mt-0"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] rounded-2xl overflow-hidden border-2 border-[#89192c] shadow-2xl bg-[#5a0d1b]">
                <Image
                  src="/ambassadors-og.jpg"
                  alt="Official AES Brand Ambassador Announcement"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: FRAMEWORK & RESPONSIBILITIES [LIGHT YELLOW / CREAM GRADIENT]
          ===================================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#fffbf2] via-[#f7eed9] to-[#efe2c7] text-[#5a0d1b] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]/15">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#701020] block">
              Program Framework
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-[#5a0d1b]">
              Ambassador Responsibilities
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-[#650d1c] leading-relaxed">
              Official ambassadors operate as the summit&apos;s campus leaders, responsible for
              communicating competition guidelines and assembling qualified teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {PROGRAM_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl p-5 sm:p-7 md:p-8 bg-white/85 backdrop-blur-sm border border-[#89192c]/20 hover:border-[#701020] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#701020] text-[#f1ca7e] flex items-center justify-center mb-4 sm:mb-5 shadow-sm">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-bold text-[#89192c] uppercase tracking-wider block mb-1">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#5a0d1b] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#650d1c] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: OFFICIAL REWARD TIERS [RED / BURGUNDY SECTION]
          ===================================================================== */}
      <section
        id="tiers"
        className="relative w-full bg-[#5a0d1b] text-[#f8eee1] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e] block">
              Official Delegate Guide Policy · Page 21
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#f8eee1]">
              Ambassador Rewards
            </h2>
            <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-[#f1ca7e]">
              Bring More Teams, Unlock More
            </p>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#e8dcc6] leading-relaxed">
              Discounts and recognition awards are determined by confirmed institutional team
              registrations as published in the official summit delegate handbook.
            </p>
          </div>

          {/* 4 Clean Executive Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {OFFICIAL_TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between transition-all duration-200 ${
                    tier.featured
                      ? 'bg-[#701020] border-2 border-[#f1ca7e] shadow-xl'
                      : 'bg-[#650d1c]/80 border border-[#89192c]'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-[#5a0d1b] text-[#f1ca7e] text-xs font-bold uppercase tracking-wider border border-[#89192c]">
                        {tier.teamsRequired}
                      </span>
                      <span className="text-xs font-semibold text-[#f1ca7e]/90 uppercase tracking-wide">
                        {tier.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#5a0d1b] text-[#f1ca7e] border border-[#89192c] flex items-center justify-center mb-4 sm:mb-5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#f8eee1] tracking-tight">
                      {tier.milestone}
                    </h3>

                    {/* Discount Details Box */}
                    <div className="mt-4 sm:mt-5 space-y-2.5 p-3.5 sm:p-4 rounded-xl bg-[#5a0d1b]/70 border border-[#89192c]">
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#f1ca7e] uppercase tracking-wider block">
                          Team Benefit
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#f8eee1] block mt-0.5">
                          {tier.teamDiscount}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-[#89192c]">
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#f1ca7e] uppercase tracking-wider block">
                          Personal Benefit
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#f8eee1] block mt-0.5">
                          {tier.personalDiscount}
                        </span>
                      </div>
                    </div>

                    {/* Included Perks */}
                    <div className="mt-4 sm:mt-5 space-y-2">
                      <span className="text-xs font-bold text-[#f1ca7e] uppercase tracking-wider block">
                        Included Recognition:
                      </span>
                      {tier.perks.map((perk) => (
                        <div key={perk} className="flex items-start gap-2 text-xs sm:text-sm text-[#e8dcc6]">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f1ca7e] shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#89192c]">
                    <a
                      href={APPLICATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-xs sm:text-sm transition-colors"
                    >
                      <span>Claim This Milestone</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tabular Comparison with Mobile Smooth Scroll Hint */}
          <div className="mt-10 sm:mt-14">
            <div className="flex items-center justify-between text-xs text-[#e8dcc6]/80 mb-2 sm:hidden px-1">
              <span>Swipe table horizontally to compare →</span>
            </div>
            <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-[#89192c] bg-[#701020]/60 -mx-2 sm:mx-0">
              <table className="w-full text-left text-xs sm:text-sm text-[#e8dcc6] min-w-[560px]">
                <thead className="bg-[#5a0d1b] text-[#f1ca7e] uppercase font-bold tracking-wider text-[10px] sm:text-[11px] border-b border-[#89192c]">
                  <tr>
                    <th scope="col" className="py-3 px-3.5 sm:px-6">Milestone</th>
                    <th scope="col" className="py-3 px-3.5 sm:px-6">Team Discount</th>
                    <th scope="col" className="py-3 px-3.5 sm:px-6">Personal Registration</th>
                    <th scope="col" className="py-3 px-3.5 sm:px-6">Certification & Awards</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#89192c]">
                  {OFFICIAL_TIERS.map((tier) => (
                    <tr key={`row-${tier.id}`} className="hover:bg-[#89192c]/30">
                      <td className="py-3 px-3.5 sm:px-6 font-bold text-[#f8eee1] whitespace-nowrap">
                        {tier.teamsRequired}
                      </td>
                      <td className="py-3 px-3.5 sm:px-6 font-semibold text-[#f1ca7e]">
                        {tier.teamDiscount}
                      </td>
                      <td className="py-3 px-3.5 sm:px-6">
                        {tier.personalDiscount}
                      </td>
                      <td className="py-3 px-3.5 sm:px-6">
                        {tier.perks.join(' · ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: OPERATIONAL PROCESS [LIGHT YELLOW / CREAM GRADIENT]
          ===================================================================== */}
      <section className="relative w-full bg-gradient-to-b from-[#fffbf2] via-[#f7eed9] to-[#efe2c7] text-[#5a0d1b] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]/15">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#701020] block">
              Administrative Process
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-[#5a0d1b]">
              How the Program Operates
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-[#650d1c] leading-relaxed">
              A transparent, three-stage workflow from application submission to closing ceremony honors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-2xl p-5 sm:p-7 md:p-8 bg-white/85 backdrop-blur-sm border border-[#89192c]/20 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <span className="text-2xl sm:text-3xl font-black text-[#701020] font-mono">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-[#701020] text-[#f1ca7e] flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#5a0d1b] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm md:text-base text-[#650d1c] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: UNIVERSAL RECOGNITION GUARANTEE [RED / BURGUNDY SECTION]
          ===================================================================== */}
      <section className="relative w-full bg-[#5a0d1b] text-[#f8eee1] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#89192c]">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 bg-[#701020] border-2 border-[#89192c] shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f1ca7e] block mb-2 sm:mb-3">
              Official Delegate Guide Policy Statement · Page 21
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#f8eee1] leading-snug">
              &ldquo;All brand ambassadors will be acknowledged at the AES closing ceremony for their
              contribution to the summit&apos;s success.&rdquo;
            </blockquote>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-[#e8dcc6] leading-relaxed max-w-3xl">
              Regardless of the milestone unlocked, every appointed ambassador who actively represents
              the summit and mobilizes delegations will be formally recognized in front of attending
              participants, keynote jury members, and the institutional leadership of Alpha College Karachi.
            </p>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#89192c] flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-[#f1ca7e]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f1ca7e] shrink-0" />
                Official Certificate of Appreciation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f1ca7e] shrink-0" />
                Day 3 Closing Ceremony Stage Mention
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f1ca7e] shrink-0" />
                Alumni Network Standing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: OFFICIAL CONTACTS & APPLICATION [LIGHT YELLOW / CREAM GRADIENT]
          ===================================================================== */}
      <section
        id="apply"
        className="relative w-full bg-gradient-to-b from-[#fffbf2] via-[#f7eed9] to-[#efe2c7] text-[#5a0d1b] py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#701020] block">
              Application & Inquiries
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#5a0d1b]">
              Submit Your Ambassador Application
            </h2>
            <p className="mt-3 text-xs sm:text-base md:text-lg text-[#650d1c] leading-relaxed">
              Applications are reviewed continuously by the Executive Council. Once submitted, your
              candidacy will be evaluated and an onboarding briefing will follow.
            </p>

            {/* Primary Action Button */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between sm:justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#701020] hover:bg-[#5a0d1b] text-[#f1ca7e] font-bold text-sm sm:text-base shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span>Submit Application via Microsoft Forms</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Official Contacts Box (From Page 22 of the Guide) */}
          <div className="mt-12 sm:mt-16 text-left max-w-4xl mx-auto rounded-2xl p-5 sm:p-7 md:p-8 bg-white/85 backdrop-blur-sm border border-[#89192c]/20 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#89192c]/15">
              <div>
                <h3 className="text-base sm:text-xl font-bold text-[#5a0d1b]">
                  Official Summit Contact Information
                </h3>
                <p className="text-xs text-[#650d1c] mt-0.5">
                  Executive Council direct lines as published on Page 22 of the AES Delegate Guide
                </p>
              </div>

              <a
                href="https://instagram.com/aes_summit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#701020] text-[#701020] hover:text-[#f1ca7e] border border-[#89192c]/30 text-xs font-semibold transition-colors shadow-sm self-start sm:self-auto"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@aes_summit</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 pt-5 sm:pt-6">
              {OFFICIAL_CONTACTS.map((contact) => (
                <div
                  key={contact.name}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-[#89192c]/15 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#701020] block">
                      {contact.role}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#5a0d1b] block mt-0.5">
                      {contact.name}
                    </span>
                  </div>

                  <a
                    href={`tel:${contact.cleanPhone}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#89192c] hover:text-[#5a0d1b] transition-colors py-1.5 px-2.5 rounded-lg bg-[#fff8ed] border border-[#89192c]/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#701020]" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
