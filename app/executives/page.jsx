'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles,
  Shield,
  Crown,
  Users,
  Compass,
  ArrowRight,
  Clock,
  Briefcase,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ============================================================================
   STATIC DETERMINISTIC PARTICLES (Zero Math.random for Next.js 16 Prerender)
   ========================================================================== */
const PARTICLES = [
  { id: 0, className: 'w-1 h-1 left-[14%] top-[22%]', duration: 9, delay: 0.4 },
  { id: 1, className: 'w-1.5 h-1.5 left-[26%] top-[50%]', duration: 11, delay: 1.1 },
  { id: 2, className: 'w-1 h-1 left-[72%] top-[18%]', duration: 8, delay: 1.8 },
  { id: 3, className: 'w-1 h-1 left-[84%] top-[65%]', duration: 13, delay: 0.7 },
  { id: 4, className: 'w-1.5 h-1.5 left-[45%] top-[78%]', duration: 10, delay: 1.6 },
  { id: 5, className: 'w-1 h-1 left-[68%] top-[34%]', duration: 12, delay: 2.2 },
  { id: 6, className: 'w-1 h-1 left-[16%] top-[76%]', duration: 9, delay: 2.9 },
  { id: 7, className: 'w-1.5 h-1.5 left-[90%] top-[28%]', duration: 14, delay: 0.3 },
  { id: 8, className: 'w-0.5 h-0.5 left-[50%] top-[58%]', duration: 8, delay: 1.3 },
  { id: 9, className: 'w-1 h-1 left-[32%] top-[26%]', duration: 11, delay: 2.6 },
  { id: 10, className: 'w-1.5 h-1.5 left-[76%] top-[82%]', duration: 10, delay: 0.8 },
  { id: 11, className: 'w-1 h-1 left-[10%] top-[48%]', duration: 12, delay: 1.5 },
];

/* ============================================================================
   TEASER PILLARS
   ========================================================================== */
const COUNCIL_PILLARS = [
  {
    icon: Crown,
    role: 'Patron & Advisory Board',
    description: 'Founding directors and collegiate patrons establishing the overarching charter for AES 2026.',
    badge: 'Under Seal',
  },
  {
    icon: Briefcase,
    role: 'Executive Directorate',
    description: 'Student leaders and operations heads orchestrating 5 competitive arenas and nationwide delegations.',
    badge: 'Finalizing Roster',
  },
  {
    icon: Compass,
    role: 'Strategic Partnerships',
    description: 'Corporate liaisons and venture relations connecting startups with institutional investors.',
    badge: 'Announcing Soon',
  },
];

/* ============================================================================
   ANIMATION VARIANTS
   ========================================================================== */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 35 },
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

export default function ExecutivesPage() {
  const teaserRef = useRef(null);
  const isTeaserInView = useInView(teaserRef, { once: true, margin: '-60px' });

  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] flex flex-col justify-between overflow-hidden">
      <Navbar />

      {/* ================================================================
          HERO & COMING SOON BANNER
          ================================================================ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-36 pb-24 overflow-hidden">
        {/* Radial background atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#89192c_0%,#701020_35%,#5a0d1b_100%)] pointer-events-none" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className={`absolute rounded-full bg-[#f1ca7e]/25 ${p.className}`}
              animate={{
                y: [0, -26, 0],
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

        {/* Rotating luxury orbital rings */}
        <motion.div
          className="absolute w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] rounded-full border border-[#89192c]/35 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#f1ca7e]/15 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        />

        {/* Ambient spotlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#f1ca7e]/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#701020]/90 border border-[#89192c] backdrop-blur-md mb-6 shadow-lg shadow-[#5a0d1b]/40"
          >
            <Clock className="w-4 h-4 text-[#f1ca7e]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Official Reveal Pending
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#f8eee1] leading-[0.95]"
          >
            Executive{' '}
            <span className="text-[#f1ca7e]">Council</span>
          </motion.h1>

          {/* Coming Soon Luxury Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#89192c]/60 border border-[#f1ca7e]/40 shadow-[0_0_25px_rgba(241,202,126,0.25)] backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#f1ca7e]" />
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-[#f1ca7e]">
              Coming Soon
            </span>
            <Sparkles className="w-4 h-4 text-[#f1ca7e]" />
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#e8dcc6] max-w-2xl leading-relaxed"
          >
            The distinguished student leaders, executive directors, and collegiate patrons
            steering the <span className="text-[#f1ca7e] font-semibold">Alpha Entrepreneurship Summit 2026</span> are
            currently preparing for their official induction and public unveiling.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full bg-[#f1ca7e] text-[#5a0d1b] hover:bg-[#f8eee1] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#5a0d1b]/50"
            >
              Return Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ambassadors"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium rounded-full bg-[#89192c]/40 text-[#f8eee1] border border-[#f1ca7e]/40 hover:border-[#f1ca7e]/70 hover:bg-[#89192c] hover:text-[#f1ca7e] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
            >
              Explore Ambassadors
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          PREVIEW PILLARS CARDS
          ================================================================ */}
      <section
        ref={teaserRef}
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#650d1c] border-t border-[#89192c]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#701020_0%,#650d1c_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isTeaserInView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Governance & Structure
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#f8eee1]">
              Council <span className="text-[#f1ca7e]">Divisions</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#e8dcc6] max-w-lg mx-auto leading-relaxed">
              Full board profiles, officer portfolios, and executive contacts will be announced prior to summit registrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COUNCIL_PILLARS.map((pillar, i) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.role}
                  custom={i}
                  initial="hidden"
                  animate={isTeaserInView ? 'visible' : 'hidden'}
                  variants={fadeUpVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl p-6 sm:p-7 bg-[#701020]/75 border border-[#89192c] hover:border-[#f1ca7e]/60 transition-all duration-300 shadow-xl shadow-[#5a0d1b]/40 backdrop-blur-md flex flex-col justify-between"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#f1ca7e]/40 group-hover:via-[#f1ca7e] to-transparent rounded-full transition-colors" />

                  <div>
                    {/* Top Row: Icon + Status */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#89192c] border border-[#f1ca7e]/30 flex items-center justify-center text-[#f1ca7e] shadow-md group-hover:bg-[#5a0d1b] transition-colors">
                        <PillarIcon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#5a0d1b] text-[#f1ca7e] border border-[#89192c]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f1ca7e] animate-pulse" />
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#f8eee1] tracking-tight mb-2.5">
                      {pillar.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e8dcc6] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#89192c]/50 flex items-center justify-between text-xs font-semibold text-[#f1ca7e]">
                    <span>AES 2026 Leadership</span>
                    <Shield className="w-3.5 h-3.5 opacity-70" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}