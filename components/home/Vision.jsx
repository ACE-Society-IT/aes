'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────
   Simple Elegant Wavy SVG Background
   Soft layered organic wave vector art inspired by warm sand dunes
   ───────────────────────────────────────────────────────────── */
function WavyBackground({ id }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none rounded-[inherit]">
      <svg
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-35 group-hover:opacity-55 transition-opacity duration-700 ease-out"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`wave-g1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f1ca7e" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#e8dcc6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#701020" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id={`wave-g2-${id}`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#89192c" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#f1ca7e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#701020" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id={`wave-g3-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#701020" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#89192c" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f1ca7e" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Layer 1: Ambient soft high wave */}
        <path
          d="M0 160 C 140 120, 260 210, 380 160 C 430 135, 470 150, 500 160 L 500 350 L 0 350 Z"
          fill={`url(#wave-g1-${id})`}
        />
        {/* Layer 2: Mid-level dune curve */}
        <path
          d="M0 220 C 120 185, 230 260, 340 215 C 410 185, 460 225, 500 230 L 500 350 L 0 350 Z"
          fill={`url(#wave-g2-${id})`}
        />
        {/* Layer 3: Foreground deep contrast wave */}
        <path
          d="M0 270 C 150 240, 280 300, 390 265 C 440 250, 480 275, 500 280 L 500 350 L 0 350 Z"
          fill={`url(#wave-g3-${id})`}
        />
      </svg>
    </div>
  );
}

const VISION_CARDS = [
  {
    id: 'vibrant-ecosystem',
    title: 'Vibrant Ecosystem',
    description:
      'Connect with ambitious student founders, creative innovators, and experienced mentors in a collaborative, high-energy environment.',
    tagline: 'The collaborative epicenter uniting Karachi’s most driven young minds.',
    overview:
      'AES 2026 convenes high-school, collegiate, and early-stage startup innovators from across Pakistan into a singular, high-octane collaborative environment. Rather than working in isolation, delegates form cross-disciplinary teams, challenge conventional business models, and brainstorm disruptive solutions under real-time feedback from veteran startup operators.',
    focusAreas: [
      'Cross-Campus Founder Nexus: Connect with complementary skill sets—technical builders, financial analysts, and marketing strategists.',
      'Peer-to-Peer Problem Solving: Tackle real market inefficiencies through collective intelligence and structured sprint methodologies.',
      'Mentor Office Hours: Direct 1-on-1 access to seasoned startup founders, Alpha alumni, and ecosystem leaders.',
    ],
    takeaways: [
      'Curated directory of ambitious student co-founders and collaborators.',
      'Real-time pressure-tested teamwork dynamics essential for future ventures.',
      'Continuous community access via the post-summit AES Alumni Network.',
    ],
    timeline: 'Ongoing across Days 1, 2, and 3 (November 13–15, 2026)',
    icon: (
      <svg
        role="img"
        aria-labelledby="vis-eco-title vis-eco-desc"
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        focusable="false"
      >
        <title id="vis-eco-title">Vibrant Ecosystem Network</title>
        <desc id="vis-eco-desc">Triad of interconnected founder silhouettes linked by innovation network conduits and a central nexus node.</desc>
        <circle cx="32" cy="32" r="4.5" />
        <circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="3 3" opacity="0.6" />
        <circle cx="32" cy="10" r="5" />
        <path d="M22 24 C22 19 26 17 32 17 C38 17 42 19 42 24 C42 25.5 40.5 26 39 26 L25 26 C23.5 26 22 25.5 22 24 Z" />
        <circle cx="12" cy="42" r="4.5" />
        <path d="M4 54 C4 49 8 47.5 13 47.5 C17.5 47.5 21 49 21 54 C21 55.5 19.5 56 18 56 L6.5 56 C5 56 4 55.5 4 54 Z" />
        <circle cx="52" cy="42" r="4.5" />
        <path d="M43 54 C43 49 46.5 47.5 51 47.5 C56 47.5 60 49 60 54 C60 55.5 59 56 57.5 56 L46 56 C44.5 56 43 55.5 43 54 Z" />
        <line x1="28" y1="26" x2="18" y2="46" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
        <line x1="36" y1="26" x2="46" y2="46" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
        <line x1="22" y1="52" x2="42" y2="52" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
        <circle cx="23" cy="36" r="2" />
        <circle cx="41" cy="36" r="2" />
        <circle cx="32" cy="52" r="2" />
      </svg>
    ),
  },
  {
    id: 'investor-access',
    title: 'Investor Access',
    description:
      'Pitch directly to investors and experienced founders who can guide and back your ideas.',
    tagline: 'Direct exposure to angel syndicates, venture capitalists, and seed funds.',
    overview:
      'Bridging the critical gap between visionary ideas and capital deployment, the Investor Access pillar provides participants with a rare, unfiltered stage to pitch directly to active angel investors, early-stage funds, and family offices looking to back next-gen talent.',
    focusAreas: [
      'Real Venture Scrutiny: Experience authentic due diligence, term sheet critiques, and valuation debates.',
      'Pitch Deck Reviews: Receive live, actionable feedback on financial viability, unit economics, and go-to-market strategies.',
      'Seed Fund Introductions: Connect with angel syndicates actively deploying capital into youth-led ventures.',
    ],
    takeaways: [
      'High-stakes pitch presentation experience in front of real investment committees.',
      'Actionable feedback on your startup’s financial model, TAM/SAM/SOM, and moat.',
      'Direct introduction opportunities for promising early-stage concepts.',
    ],
    timeline: 'Day 3 Pitch Showcase & Day 2 Evaluation Windows',
    icon: (
      <svg
        role="img"
        aria-labelledby="vis-inv-title vis-inv-desc"
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        focusable="false"
      >
        <title id="vis-inv-title">Investor Access Capital</title>
        <desc id="vis-inv-desc">Outstretched investor palm offering an ascending capital growth coin with venture yield arrows.</desc>
        <circle cx="32" cy="18" r="11" />
        <circle cx="32" cy="18" r="9" fill="#701020" />
        <path d="M32 11 L37 17 H34 V24 H30 V17 H27 Z" fill="currentColor" />
        <path d="M48 10 L50 14 L54 16 L50 18 L48 22 L46 18 L42 16 L46 14 Z" opacity="0.85" />
        <circle cx="16" cy="14" r="1.5" />
        <circle cx="18" cy="22" r="1" />
        <circle cx="47" cy="28" r="1.5" />
        <path d="M6 46 C6 43 9 41 14 41 L25 41 C27 41 29 42 30 43.5 L36 50 C37 51 38.5 51.5 40 51.5 L56 51.5 C58 51.5 59.5 53 59.5 55 C59.5 57 58 58.5 56 58.5 L38 58.5 C36 58.5 34 57.5 33 56 L29 51 L19 51 L15 58.5 L6 58.5 Z" />
        <path d="M35 44 C37 42 41 41 45 41 L53 41 C54.5 41 55.5 42 55.5 43.5 C55.5 45 54.5 46 53 46 L43 46 C40.5 46 38 45 35 44 Z" />
      </svg>
    ),
  },
  {
    id: 'guest-keynotes',
    title: 'Guest Keynotes',
    description:
      'Learn practical business lessons from company leaders and successful entrepreneurs.',
    tagline: 'Unvarnished truths and strategic playbooks from industry pioneers.',
    overview:
      'No generic speeches—our keynote sessions bring top chief executives, unicorn founders, and seasoned venture builders to share the raw realities of scaling enterprises in volatile economic environments. Learn from genuine case studies of triumphs, near-failures, and strategic pivots.',
    focusAreas: [
      'Macro Trends & Emerging Markets: Insights into supply chain resilience, digital currencies, and AI-driven business models.',
      'Founder War Stories: Candid discussions on founder burnout, equity distribution, product-market fit, and team leadership.',
      'Interactive Audience Q&A: Delegates hold the mic to ask tough, unfiltered questions directly to executive leaders.',
    ],
    takeaways: [
      'Modern managerial frameworks you can apply directly to simulation modules.',
      'Strategic perspectives on navigating Pakistan’s economic and regulatory landscape.',
      'Exclusive keynote summaries and recommended reading lists from guest speakers.',
    ],
    timeline: 'Opening Ceremony (Day 1, 2:30 PM) & Daily Keynote Spotlights',
    icon: (
      <svg
        role="img"
        aria-labelledby="vis-key-title vis-key-desc"
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        focusable="false"
      >
        <title id="vis-key-title">Executive Keynotes Stage</title>
        <desc id="vis-key-desc">Keynote speaker delivering visionary address behind an executive conference lectern with microphones.</desc>
        <circle cx="32" cy="13" r="6" />
        <path d="M22 28 C22 23 26 21 32 21 C38 21 42 23 42 28 C42 30 41 31 39 31 L25 31 C23 31 22 30 22 28 Z" />
        <path d="M25 32 C25 25 28 24 30 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
        <circle cx="30" cy="24" r="1.5" />
        <path d="M16 16 C12 20 12 26 16 30" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" opacity="0.65" />
        <path d="M48 16 C52 20 52 26 48 30" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" opacity="0.65" />
        <polygon points="17,32 47,32 44,36 20,36" />
        <polygon points="21,36 43,36 40,55 24,55" />
        <polygon points="32,41 33.5,44.5 37,45 34.5,47.5 35,51 32,49 29,51 29.5,47.5 27,45 30.5,44.5" fill="#701020" />
        <rect x="16" y="55" width="32" height="4" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'conferences',
    title: 'Conferences',
    description:
      'Engage in high-impact keynote sessions, executive panel discussions, and summit masterclasses led by visionary market pioneers.',
    tagline: 'High-level panel symposiums exploring global markets, fintech, and venture growth.',
    overview:
      'The Conferences pillar brings together thought leaders, industry regulators, venture capitalists, and academic titans for rigorous, debate-style panel conferences. Delegates gain multifaceted perspectives on policy shifts, technological disruption, and sustainable corporate scalability.',
    focusAreas: [
      'Executive Panel Debates: Fiery debates on traditional enterprise vs. agile digital native startups.',
      'Fintech & Market Innovation: Deep dives into decentralized finance, cross-border payments, and venture funding trends.',
      'SME Resilience & Scaling: Strategies for navigating currency volatility, customer acquisition costs, and margin preservation.',
    ],
    takeaways: [
      'A panoramic understanding of macro-financial forces shaping regional commerce.',
      'Direct exposure to policy makers, corporate directors, and institutional investors.',
      'Sharpened debate and analytical capabilities tested against executive panelists.',
    ],
    timeline: 'Day 2 & Day 3 Main Auditorium Symposium Sessions',
    icon: (
      <svg
        role="img"
        aria-labelledby="vis-conf-title vis-conf-desc"
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        focusable="false"
      >
        <title id="vis-conf-title">Executive Conferences</title>
        <desc id="vis-conf-desc">Grand executive conference symposium with presentation display, seated delegates, and summit panel.</desc>
        <rect x="14" y="6" width="36" height="22" rx="2.5" />
        <rect x="16.5" y="8.5" width="31" height="17" rx="1.5" fill="#701020" />
        <path d="M20 21 L26 15 L32 18 L42 11" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="43,10 40,11 42,14" />
        <rect x="22" y="27" width="20" height="2" />
        <polygon points="8,40 56,40 52,48 12,48" />
        <circle cx="20" cy="34" r="3.5" />
        <path d="M14 40 C14 36.5 16.5 35 20 35 C23.5 35 26 36.5 26 40 Z" />
        <circle cx="32" cy="33" r="4" />
        <path d="M25 40 C25 35.5 28 34 32 34 C36 34 39 35.5 39 40 Z" />
        <circle cx="44" cy="34" r="3.5" />
        <path d="M38 40 C38 36.5 40.5 35 44 35 C47.5 35 50 36.5 50 40 Z" />
        <rect x="24" y="48" width="16" height="9" rx="1" />
        <rect x="16" y="57" width="32" height="3" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'pitch-showcase-arena',
    title: 'Pitch Showcase Arena',
    description:
      'Present your business plan on stage, answer judges’ questions, and earn summit awards.',
    tagline: 'The grand stage where breakthrough ideas compete for seed awards and summit honors.',
    overview:
      'The culminating event of AES 2026. Finalist teams take to the main amphitheater stage to deliver high-intensity pitches under strict countdown timers, fielding aggressive cross-examination from an esteemed judging panel of venture capitalists and corporate sponsors.',
    focusAreas: [
      'Strict Time-Bound Pitching: 5-minute timed presentations followed by 3 minutes of rapid-fire Q&A.',
      'Multidimensional Scoring Matrix: Evaluated on innovation, financial feasibility, prototype readiness, and team conviction.',
      'Summit Awards & Cash Grants: Compete for flagship summit trophies, seed capital grants, and incubator fast-tracks.',
    ],
    takeaways: [
      'Unrivaled public speaking and high-pressure presentation confidence on a professional stage.',
      'Comprehensive video recording of your team’s pitch for your portfolio.',
      'Summit certificates, awards, and direct sponsor recruitment opportunities.',
    ],
    timeline: 'Day 3 Grand Finale & Awards (November 15, 2026)',
    icon: (
      <svg
        role="img"
        aria-labelledby="vis-pit-title vis-pit-desc"
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        focusable="false"
      >
        <title id="vis-pit-title">Pitch Showcase Arena Trophy</title>
        <desc id="vis-pit-desc">Grand summit championship trophy with victory handles, star crest, stage spotlights, and awards podium.</desc>
        <polygon points="4,6 14,6 24,30 18,30" opacity="0.25" />
        <polygon points="60,6 50,6 40,30 46,30" opacity="0.25" />
        <circle cx="9" cy="6" r="2.5" />
        <circle cx="55" cy="6" r="2.5" />
        <polygon points="32,7 33.5,10.5 37,11 34.5,13.5 35,17 32,15 29,17 29.5,13.5 27,11 30.5,10.5" />
        <path d="M19 22 C13 22 13 32 20 33 L21 30 C16 29 16 24 20 24 Z" />
        <path d="M45 22 C51 22 51 32 44 33 L43 30 C48 29 48 24 44 24 Z" />
        <path d="M20 18 H44 V26 C44 33 38 38 32 38 C26 38 20 33 20 26 Z" />
        <circle cx="32" cy="27" r="3" fill="#701020" />
        <circle cx="32" cy="27" r="1.5" />
        <rect x="29.5" y="38" width="5" height="7" />
        <polygon points="26,45 38,45 40,51 24,51" />
        <rect x="18" y="51" width="28" height="4" rx="1" />
        <rect x="12" y="55" width="40" height="4.5" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'networking-gala',
    title: 'Networking & Gala Dinner',
    description:
      'Meet other ambitious students, build your network, and celebrate at the closing gala.',
    tagline: 'Forge lifelong bonds, celebrate collective triumphs, and toast to the future.',
    overview:
      'Business is built on relationships. The Networking & Gala Dinner is the crown jewel social evening of the summit. In an elegant setting at Alpha College, delegates, keynote speakers, judges, and executive council members gather for an evening of celebration, fine dining, and meaningful conversation.',
    focusAreas: [
      'Executive Networking Lounge: Unstructured, high-value conversations with mentors, executives, and fellow delegates.',
      'Closing Awards Ceremony: Recognition of outstanding delegates, winning simulation teams, and best campus delegations.',
      'Celebratory Dinner & Entertainment: A premium culinary experience with ambient entertainment and photo booths.',
    ],
    takeaways: [
      'Enduring professional relationships and personal friendships that last well beyond the summit.',
      'Direct exchange of contacts with industry guests and potential employers or co-founders.',
      'Official summit ceremony photos and commemorative delegate pins.',
    ],
    timeline: 'Day 3 Evening (November 15, 6:30 PM Ceremony & 8:30 PM Gala Dinner)',
    icon: (
      <svg
        role="img"
        aria-labelledby="vis-gal-title vis-gal-desc"
        viewBox="0 0 64 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-8 sm:h-8"
        focusable="false"
      >
        <title id="vis-gal-title">Networking & Gala Dinner</title>
        <desc id="vis-gal-desc">Pair of celebratory champagne flutes clinking in a toast with gala effervescence bubbles and sparkle stars.</desc>
        <polygon points="32,6 33.5,10.5 38,12 33.5,13.5 32,18 30.5,13.5 26,12 30.5,10.5" />
        <circle cx="16" cy="14" r="1.5" opacity="0.8" />
        <circle cx="48" cy="14" r="1.5" opacity="0.8" />
        <circle cx="32" cy="23" r="1.5" opacity="0.9" />
        <circle cx="28" cy="19" r="1" opacity="0.7" />
        <circle cx="36" cy="19" r="1" opacity="0.7" />
        <g transform="rotate(14 26 38)">
          <path d="M21 16 H31 V28 C31 33 27 36 26 36 C25 36 21 33 21 28 Z" />
          <ellipse cx="26" cy="22" rx="4" ry="1.5" fill="#701020" />
          <rect x="24.5" y="36" width="3" height="15" rx="1" />
          <ellipse cx="26" cy="52" rx="8" ry="2.5" />
        </g>
        <g transform="rotate(-14 38 38)">
          <path d="M33 16 H43 V28 C43 33 39 36 38 36 C37 36 33 33 33 28 Z" />
          <ellipse cx="38" cy="22" rx="4" ry="1.5" fill="#701020" />
          <rect x="36.5" y="36" width="3" height="15" rx="1" />
          <ellipse cx="38" cy="52" rx="8" ry="2.5" />
        </g>
        <path d="M8 58 Q 32 63 56 58" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

export default function Vision() {
  const [selectedPillar, setSelectedPillar] = useState(null);

  // Close modal with Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setSelectedPillar(null);
    }
  }, []);

  useEffect(() => {
    if (selectedPillar) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPillar, handleKeyDown]);

  const currentIndex = selectedPillar
    ? VISION_CARDS.findIndex((c) => c.id === selectedPillar.id)
    : -1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedPillar(VISION_CARDS[currentIndex - 1]);
    } else {
      setSelectedPillar(VISION_CARDS[VISION_CARDS.length - 1]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < VISION_CARDS.length - 1) {
      setSelectedPillar(VISION_CARDS[currentIndex + 1]);
    } else {
      setSelectedPillar(VISION_CARDS[0]);
    }
  };

  return (
    <section
      id="vision"
      className="relative z-30 w-full bg-[#f8eee1] py-12 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]/15 rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.35)] -mt-8 sm:-mt-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with scroll lazy loading on scroll up & down */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-left sm:text-center mx-auto mb-8 sm:mb-14 md:mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020]">
            Summit Pillars
          </span>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#5a0d1b]">
            Our Vision
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-[#650d1c] leading-relaxed">
            Empowering the next generation of youth entrepreneurs through practical experience,
            expert mentorship, and direct access to investors. Click any pillar to explore in-depth details.
          </p>
        </motion.div>

        {/* 6 Feature Grid with interactive cards animating on scroll up & down */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {VISION_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setSelectedPillar(card)}
              className="group relative overflow-hidden bg-gradient-to-br from-[#fbf5eb]/95 via-[#e8dcc6]/90 to-[#dfcfb5]/85 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border-2 border-[#89192c]/20 hover:border-[#701020] shadow-[0_8px_30px_rgba(90,13,27,0.06)] hover:shadow-[0_20px_45px_rgba(90,13,27,0.2)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#701020]"
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={`Explore ${card.title} pillar details`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPillar(card);
                }
              }}
            >
              {/* Glassmorphic Top Edge Highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              {/* Simple Wavy SVG in Card Background */}
              <WavyBackground id={card.id} />

              <div className="relative z-10">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#701020] text-[#f1ca7e] shadow-md border-2 border-[#89192c] flex items-center justify-center shrink-0 mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#5a0d1b] group-hover:rotate-2 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5a0d1b] tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-[#650d1c]">
                  {card.description}
                </p>
              </div>

              <div className="relative z-10 mt-5 sm:mt-7 pt-4 sm:pt-5 border-t-2 border-[#89192c]/15 flex items-center justify-between text-xs sm:text-sm font-bold text-[#701020] group-hover:text-[#5a0d1b] transition-colors">
                <span className="group-hover:underline underline-offset-4">Explore Pillar</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#701020] text-[#f1ca7e] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1 group-hover:bg-[#5a0d1b]">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Dialog for In-Depth Pillar Exploration */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedPillar(null)}
              className="fixed inset-0 bg-[#5a0d1b]/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Card Content */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-pillar-title"
              aria-describedby="modal-pillar-overview"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden w-full max-w-3xl bg-[#e8dcc6] text-[#5a0d1b] rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#701020] shadow-[0_25px_70px_rgba(90,13,27,0.55)] p-5 sm:p-8 md:p-10 z-10 my-auto max-h-[92vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Simple Wavy SVG in Modal Background */}
              <WavyBackground id={`modal-${selectedPillar.id}`} />

              {/* Top Bar with Badge, Pillar Counter & Close Button */}
              <div className="relative z-10 flex items-center justify-between gap-3 border-b-2 border-[#89192c]/15 pb-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#701020] text-[#f1ca7e] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Pillar {currentIndex + 1} of {VISION_CARDS.length}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#89192c] hidden sm:inline">
                    Alpha Entrepreneurship Summit
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPillar(null)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#701020]/10 hover:bg-[#701020] text-[#701020] hover:text-[#f1ca7e] flex items-center justify-center font-bold text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#701020]"
                  aria-label="Close details modal"
                >
                  ✕
                </button>
              </div>

              {/* Header: Icon + Title + Tagline */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#701020] text-[#f1ca7e] border-2 border-[#89192c] flex items-center justify-center shrink-0 shadow-lg">
                  {selectedPillar.icon}
                </div>
                <div>
                  <h3
                    id="modal-pillar-title"
                    className="text-xl sm:text-3xl font-extrabold text-[#5a0d1b] tracking-tight"
                  >
                    {selectedPillar.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-[#89192c]">
                    {selectedPillar.tagline}
                  </p>
                </div>
              </div>

              {/* Detailed Overview */}
              <div className="relative z-10 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#701020] mb-2">
                  Detailed Overview
                </h4>
                <p
                  id="modal-pillar-overview"
                  className="text-sm sm:text-base leading-relaxed text-[#650d1c] bg-[#f8eee1]/90 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#89192c]/20 shadow-sm"
                >
                  {selectedPillar.overview}
                </p>
              </div>

              {/* Two-Column Grid: Focus Areas & Takeaways */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {/* Key Focus Highlights */}
                <div className="bg-[#f8eee1]/75 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#89192c]/15 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#701020] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#701020]" />
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#650d1c]">
                    {selectedPillar.focusAreas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#89192c] font-bold shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Concrete Takeaways */}
                <div className="bg-[#f8eee1]/75 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#89192c]/15 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#701020] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#701020]" />
                    What You Gain
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#650d1c]">
                    {selectedPillar.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#89192c] font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Indicator */}
              <div className="relative z-10 mb-6 px-4 py-3 rounded-xl bg-[#701020]/10 backdrop-blur-md border border-[#89192c]/20 flex items-center gap-3 text-xs sm:text-sm text-[#5a0d1b] font-medium">
                <span className="text-base sm:text-lg">📅</span>
                <span>
                  <strong>Summit Schedule:</strong> {selectedPillar.timeline}
                </span>
              </div>

              {/* Modal Footer: Prev/Next & Action CTAs */}
              <div className="relative z-10 border-t-2 border-[#89192c]/15 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Navigation Between Pillars */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-3.5 py-2 rounded-xl bg-[#701020] hover:bg-[#5a0d1b] text-[#f1ca7e] text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-3.5 py-2 rounded-xl bg-[#701020] hover:bg-[#5a0d1b] text-[#f1ca7e] text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors"
                  >
                    Next →
                  </button>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <Link
                    href="/schedule"
                    onClick={() => setSelectedPillar(null)}
                    className="px-4 py-2 rounded-xl border-2 border-[#701020] text-[#701020] hover:bg-[#701020] hover:text-[#f1ca7e] text-xs sm:text-sm font-bold transition-colors text-center"
                  >
                    View Schedule
                  </Link>
                  <a
                    href="https://forms.gle/cGVgw5TpvpU9AXZx5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#f1ca7e] text-[#5a0d1b] hover:bg-[#e8dcc6] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all text-center"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
