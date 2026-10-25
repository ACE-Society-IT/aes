'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function LinkedInIcon({ className = 'w-3.5 h-3.5' }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Official Silhouette Vectors (extracted from summit assets)
   ───────────────────────────────────────────────────────────── */
const MALE_SILHOUETTE_PATH =
  'M 687.0 923.0 C 659.9 946.5 628.0 958.4 592.0 958.4 C 554.1 958.4 521.6 946.6 495.3 923.2 C 479.4 909.0 470.6 894.6 467.8 889.4 L 470.2 851.2 C 509.3 874.7 552.0 887.9 591.5 887.9 C 631.7 887.9 674.7 874.8 713.7 851.4 L 716.1 889.1 C 712.8 894.5 703.3 908.9 687.0 923.0 Z M 376.6 723.8 C 362.1 694.1 354.8 663.2 354.8 632.1 L 354.8 612.9 C 354.8 609.2 352.5 605.8 349.1 604.2 C 347.9 603.6 346.5 603.4 345.2 603.4 C 342.9 603.4 340.7 604.2 338.9 605.8 C 336.0 608.3 332.2 609.8 328.3 609.8 C 319.5 609.8 312.3 602.6 312.3 593.8 C 312.3 581.3 309.6 571.1 307.3 562.0 C 305.2 554.4 303.5 547.7 303.5 540.6 C 303.5 528.4 313.4 518.4 325.6 518.4 C 329.4 518.4 333.0 519.3 336.2 521.1 C 339.5 522.9 343.6 522.6 346.6 520.4 C 349.6 518.1 351.0 514.3 350.1 510.7 C 343.7 482.0 349.7 450.7 366.2 426.8 C 384.2 400.6 415.2 383.3 446.9 381.4 C 478.1 379.6 509.9 391.7 540.6 403.4 C 579.3 418.2 619.4 433.4 660.7 422.6 C 671.7 419.8 682.0 415.2 691.9 410.7 C 704.8 405.0 717.0 399.5 729.8 398.1 C 749.9 395.8 766.7 404.2 777.4 411.7 C 791.7 421.8 803.8 436.5 811.5 453.1 C 820.1 472.0 825.1 494.4 827.0 523.8 C 827.2 527.9 830.1 531.3 834.1 532.4 C 838.0 533.4 842.2 531.9 844.5 528.4 C 848.6 522.2 855.5 518.4 863.0 518.4 C 875.2 518.4 885.2 528.4 885.2 540.6 C 885.2 547.7 883.4 554.4 881.4 562.0 C 879.0 571.1 876.3 581.3 876.3 593.8 C 876.3 602.6 869.1 609.8 860.3 609.8 C 854.4 609.8 849.0 606.5 846.2 601.3 C 844.1 597.4 839.7 595.5 835.5 596.5 C 831.2 597.6 828.2 601.4 828.2 605.8 L 828.2 632.1 C 828.2 663.3 821.0 694.2 806.8 723.8 C 793.6 751.6 774.8 776.9 751.2 799.3 C 705.0 842.8 645.3 868.8 591.5 868.8 C 538.8 868.8 479.6 842.8 433.0 799.3 C 409.4 777.1 389.9 751.0 376.6 723.8 Z M 1004.2 1003.9 L 796.5 912.2 L 735.0 885.0 L 732.1 839.4 C 743.3 831.5 754.1 822.7 764.3 813.2 C 789.6 789.2 809.7 761.9 824.1 732.1 C 839.5 699.8 847.3 666.2 847.3 632.1 L 847.3 626.4 C 851.4 628.0 855.8 628.8 860.3 628.8 C 879.6 628.8 895.4 613.1 895.4 593.8 C 895.4 583.7 897.5 575.6 899.8 566.9 C 902.0 558.7 904.2 550.2 904.2 540.6 C 904.2 527.6 898.2 515.9 888.7 508.4 C 924.1 307.7 824.2 187.9 716.1 174.3 C 522.0 149.8 381.9 163.3 381.9 243.5 C 381.9 268.7 398.8 284.1 404.2 288.4 C 382.2 283.0 286.3 265.4 286.3 366.6 C 286.3 407.7 295.4 464.7 304.7 505.1 C 292.6 512.3 284.4 525.5 284.4 540.6 C 284.4 550.2 286.6 558.7 288.8 566.9 C 291.1 575.6 293.3 583.7 293.3 593.8 C 293.3 613.1 309.0 628.8 328.3 628.8 C 330.8 628.8 333.3 628.6 335.7 628.1 L 335.7 632.1 C 335.7 666.1 343.7 699.8 359.4 732.1 C 373.9 761.9 394.3 789.2 420.0 813.2 C 430.1 822.6 440.8 831.3 451.8 839.1 L 449.0 885.0 L 387.4 912.2 L 179.7 1003.9 C 145.6 1018.9 123.5 1052.8 123.5 1090.1 L 123.5 1258.2 C 123.5 1282.8 143.5 1302.7 168.0 1302.7 L 1015.9 1302.7 C 1040.4 1302.7 1060.4 1282.8 1060.4 1258.2 L 1060.4 1090.1 C 1060.4 1052.8 1038.3 1018.9 1004.2 1003.9 Z';

const FEMALE_SILHOUETTE_PATH =
  'M 1660.8 1104.0 L 1759.1 969.8 C 1760.3 968.1 1761.0 966.2 1761.0 964.1 L 1761.0 900.7 C 1771.5 904.3 1788.3 911.0 1806.6 922.6 C 1841.5 944.5 1885.1 985.4 1901.9 1058.1 L 1812.5 1023.0 C 1809.8 1022.0 1806.8 1022.2 1804.3 1023.6 L 1660.8 1104.0 Z M 1493.3 900.7 L 1493.3 961.7 C 1493.3 963.7 1493.9 965.6 1495.1 967.3 L 1594.1 1104.3 L 1449.9 1023.6 C 1448.5 1022.8 1446.9 1022.4 1445.3 1022.4 C 1444.1 1022.4 1442.9 1022.6 1441.8 1023.0 L 1352.3 1058.1 C 1369.2 985.4 1412.8 944.5 1447.6 922.6 C 1466 911.0 1482.7 904.3 1493.3 900.7 Z M 1844.1 664.8 C 1844.1 693.8 1837.4 722.4 1824.2 749.9 C 1811.9 775.7 1794.5 799.3 1772.5 820.0 C 1729.7 860.4 1674.3 884.6 1624.3 884.6 C 1575.4 884.6 1520.4 860.4 1477.2 820.0 C 1455.3 799.4 1437.1 775.2 1424.8 749.9 C 1411.3 722.3 1404.5 693.7 1404.5 664.7 C 1404.5 664.5 1404.4 640.7 1404.7 611.1 C 1462.2 602.1 1517.8 581.0 1565.9 549.8 C 1614.8 518.1 1653.7 477.5 1678.9 432.1 C 1732.7 432.6 1768.4 439.9 1794.2 455.8 C 1827.0 475.9 1842.9 511.1 1842.9 563.4 C 1842.9 563.4 1842.9 563.5 1842.9 563.5 L 1844.1 640.4 L 1844.1 664.8 Z M 1627.2 1117.5 L 1512.4 958.6 L 1512.4 870.1 C 1548.5 891.6 1587.8 903.6 1624.3 903.6 C 1663.0 903.6 1704.5 890.6 1741.9 867.5 L 1741.9 961.0 L 1627.2 1117.5 Z M 2026.0 1009.0 L 1946.3 973.9 L 1946.3 973.9 C 1927.1 924.5 1910.1 835.2 1910.1 679.3 C 1910.1 587.4 1928.4 547.5 1916.4 468.7 C 1906.1 401.1 1867.8 337.7 1815.0 293.7 C 1763.6 251.0 1691.2 230.3 1627.1 249.4 L 1627.1 249.4 C 1563.1 230.3 1490.7 251.0 1439.3 293.7 C 1386.5 337.7 1348.2 401.1 1337.9 468.7 C 1325.8 547.5 1344.1 587.4 1344.1 679.3 C 1344.1 835.2 1327.1 924.5 1308.0 973.9 L 1308 973.9 L 1228.3 1009.0 C 1197.6 1022.6 1177.8 1053.0 1177.8 1086.6 L 1177.8 1267.8 C 1177.8 1287.1 1193.4 1302.7 1212.7 1302.7 L 2041.5 1302.7 C 2060.8 1302.7 2076.5 1287.1 2076.5 1267.8 L 2076.5 1086.6 C 2076.5 1053.0 2056.7 1022.6 2026.0 1009.0 Z';

/**
 * Editorial Lithograph Portrait Plate
 * Renders executive vector silhouette in fine luxury duotone with atmospheric depth
 */
function ExecutivePortraitPlate({ gender, name, index, department, id }) {
  const safeSlug = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const titleId = `exec-avatar-${safeSlug}-title`;
  const descId = `exec-avatar-${safeSlug}-desc`;
  const gradId = `exec-grad-${id}`;
  const isFemale = gender === 'female';

  return (
    <div className="relative w-full aspect-[4/4.7] sm:aspect-[4/5] bg-gradient-to-b from-[#38060f] via-[#260309] to-[#170206] rounded-xl sm:rounded-2xl overflow-hidden border border-[#89192c]/50 group-hover:border-[#f1ca7e]/60 transition-colors duration-500 flex flex-col justify-between p-4 sm:p-5 select-none shadow-inner">
      {/* Subtle architectural radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(241,202,126,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(23,2,6,0.85)_100%)] pointer-events-none" />

      {/* Top Editorial Index & Department Stamp */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="font-mono text-xs sm:text-[13px] font-bold tracking-widest text-[#f1ca7e]">
          {index}
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#e8dcc6]/80 px-2.5 py-0.5 rounded border border-[#89192c]/60 bg-[#5a0d1b]/60 backdrop-blur-sm">
          {department}
        </span>
      </div>

      {/* Center Lithographic Silhouette Vector */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-2">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle warm halo */}
          <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[radial-gradient(circle,rgba(241,202,126,0.15)_0%,rgba(137,25,44,0.25)_50%,transparent_75%)] pointer-events-none blur-xl" />

          <svg
            viewBox={isFemale ? '1137 150 980 1225' : '102 120 980 1225'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby={`${titleId} ${descId}`}
            className="w-full h-full max-h-[210px] sm:max-h-[250px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out group-hover:scale-[1.03] opacity-95 group-hover:opacity-100"
          >
            <title id={titleId}>{`${name} Portrait Silhouette`}</title>
            <desc id={descId}>
              {`Official vector portrait silhouette for ${name}, AES 2026 executive council.`}
            </desc>

            <path
              d={isFemale ? FEMALE_SILHOUETTE_PATH : MALE_SILHOUETTE_PATH}
              fill={`url(#${gradId})`}
              fillRule="evenodd"
              clipRule="evenodd"
            />
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8eee1" />
                <stop offset="60%" stopColor="#f1ca7e" />
                <stop offset="100%" stopColor="#c79951" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bottom Architectural Seal */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#89192c]/40 text-[9px] tracking-[0.25em] uppercase text-[#e8dcc6]/60 font-mono">
        <span>ALPHA AES</span>
        <span>COUNCIL · 2026</span>
      </div>
    </div>
  );
}

const EXECUTIVES = [
  {
    id: 'mansoor-moiz',
    index: '01',
    name: 'Mansoor Moiz',
    gender: 'male',
    role: 'Chief Executive Officer (CEO)',
    department: 'Executive Stewardship',
    badge: 'Executive Leadership',
    linkedin: 'https://www.linkedin.com/in/mansoor-moiz/',
    bio: 'As CEO, I focus on driving ACE’s vision, aligning teams toward shared goals, and building meaningful partnerships. I aim to foster a spirit of entrepreneurship, encourage innovative thinking, and create opportunities that connect students with the business world. Through strategic direction, collaboration, and effective execution, my goal is to deliver a summit that promotes practical learning, inspires new ideas, and creates a lasting impact on every participant.',
  },
  {
    id: 'zoya-ehtasham',
    index: '02',
    name: 'Zoya Ehtasham',
    gender: 'female',
    role: 'Chief Financial Officer (CFO)',
    department: 'Fiscal Stewardship',
    badge: 'Financial Governance',
    linkedin: null,
    bio: 'As CFO, I oversee financial strategy, resource allocation, and budget governance for AES. My priority is ensuring fiscal discipline, securing key sponsorships, and maximizing value across all summit modules to provide delegates and partners with a seamless, world-class experience.',
  },
  {
    id: 'bareerah-ahmed',
    index: '03',
    name: 'Bareerah Ahmed',
    gender: 'female',
    role: 'Chief Communication Officer (CCO)',
    department: 'External Relations',
    badge: 'Communications & Outreach',
    linkedin: 'https://www.linkedin.com/in/bareerah-ahmed-ba1493423?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Chief Communication Officer, I aim to expand AES’s reach through strategic outreach, meaningful networking, and impactful partnerships. I’ll build strong connections with stakeholders and ensure seamless communication that strengthens the summit’s presence and impact.',
  },
  {
    id: 'ayaan-japanwalla',
    index: '04',
    name: 'Ayaan Japanwalla',
    gender: 'male',
    role: 'Marketing Director',
    department: 'Brand Architecture',
    badge: 'Brand & Growth Strategy',
    linkedin: 'https://www.linkedin.com/in/ayaanjapanwalla',
    bio: 'As Marketing Director, I aim to bring AES to life through creative campaigns, engaging content, and strategic promotion. My focus is on building a strong brand presence, generating excitement, and connecting with our audience to make AES a memorable and impactful experience.',
  },
  {
    id: 'ayan-khurrum',
    index: '05',
    name: 'Ayan Khurrum',
    gender: 'male',
    role: 'Module Director',
    department: 'Academic & Simulation',
    badge: 'Competition Design',
    linkedin: 'https://www.linkedin.com/in/ayan-khurram-3bb4b4424?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Module Director, I aim to turn entrepreneurial ideas into meaningful experiences through strategic planning, creative thinking, and effective team leadership. I’ll focus on fostering innovation, encouraging collaboration, and ensuring seamless execution to deliver an engaging and impactful summit experience for every participant involved.',
  },
  {
    id: 'ahmed-shahid',
    index: '06',
    name: 'Ahmed Shahid',
    gender: 'male',
    role: 'Operating Director',
    department: 'Logistics & Deployment',
    badge: 'Operations & Logistics',
    linkedin: 'https://www.linkedin.com/in/ahmed-shahid-2326582aa?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Operating Director, my goal is to make sure everything runs smoothly and efficiently while keeping the team motivated and focused. I believe in good planning, clear communication, and working together to get things done. I’m ready to take responsibility, solve problems, and make sure we deliver the best possible AES experience for everyone involved.',
  },
];

export default function ExecutivesPage() {
  return (
    <main className="min-h-screen bg-[#2c040b] text-[#f8eee1] flex flex-col font-sans selection:bg-[#f1ca7e] selection:text-[#5a0d1b] relative overflow-x-hidden">
      <Navbar />

      {/* ── Fixed Editorial Background Texture & Lighting ── */}
      <div
        className="fixed inset-0 bg-[linear-gradient(to_right,rgba(241,202,126,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(241,202,126,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(137,25,44,0.32)_0%,rgba(44,4,11,0.92)_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL MASTHEAD & HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-32 sm:pt-40 md:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Issue Bar */}
          <div className="flex items-center justify-between border-y border-[#89192c]/50 py-2.5 px-1 sm:px-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#e8dcc6]/70 mb-8 sm:mb-12">
            <span>EST. 2026 · ALPHA COLLEGE</span>
            <span className="hidden sm:inline text-[#f1ca7e]">EXECUTIVE COUNCIL ROSTER</span>
            <span>VOL. 01 / GOVERNANCE</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Minimal Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f1ca7e]/40 bg-[#5a0d1b]/60 text-[#f1ca7e] text-[11px] font-bold uppercase tracking-[0.28em] shadow-sm mb-5">
              <Sparkles className="w-3 h-3 text-[#f1ca7e]" />
              Leadership Council
            </div>

            {/* Editorial Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#f8eee1] leading-[0.92]">
              The Executive{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f1ca7e] via-[#f8eee1] to-[#f1ca7e]">
                Council
              </span>
            </h1>

            {/* Lead Curatorial Foreword */}
            <p className="mt-5 sm:mt-7 text-sm sm:text-lg md:text-xl text-[#e8dcc6] max-w-2xl mx-auto font-normal leading-relaxed">
              Six directors. Five competitive arenas. One shared institutional mission. The executive leadership stewarding Pakistan’s premier youth entrepreneurship summit.
            </p>
          </motion.div>

          {/* Minimalist Editorial Datum Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 sm:mt-16 border-y border-[#89192c]/50 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 md:divide-x divide-[#89192c]/40"
          >
            <div className="text-center sm:text-left px-3 sm:px-5">
              <span className="block text-2xl sm:text-4xl font-black text-[#f1ca7e] font-mono">06</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8dcc6]/90 block mt-1">
                Core Directors
              </span>
              <span className="text-[10px] text-[#e8dcc6]/50 block mt-0.5">Autonomous Portfolios</span>
            </div>

            <div className="text-center sm:text-left px-3 sm:px-5 pt-4 sm:pt-0">
              <span className="block text-2xl sm:text-4xl font-black text-[#f8eee1] font-mono">05</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8dcc6]/90 block mt-1">
                Summit Tracks
              </span>
              <span className="text-[10px] text-[#e8dcc6]/50 block mt-0.5">Simulation Arenas</span>
            </div>

            <div className="text-center sm:text-left px-3 sm:px-5 pt-4 sm:pt-0">
              <span className="block text-2xl sm:text-4xl font-black text-[#f1ca7e] font-mono">100%</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8dcc6]/90 block mt-1">
                Student-Led
              </span>
              <span className="text-[10px] text-[#e8dcc6]/50 block mt-0.5">Alpha College Karachi</span>
            </div>

            <div className="text-center sm:text-left px-3 sm:px-5 pt-4 sm:pt-0">
              <span className="block text-2xl sm:text-4xl font-black text-[#f8eee1] font-mono">NOV 13–15</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8dcc6]/90 block mt-1">
                Three-Day Summit
              </span>
              <span className="text-[10px] text-[#e8dcc6]/50 block mt-0.5">Alpha College Campus</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. EXECUTIVE DOSSIER GRID (EDITORIAL PROFILES)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Subhead */}
          <div className="flex items-center justify-between pb-6 border-b border-[#89192c]/50 mb-10">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#f1ca7e]">
                01 — DIRECTORS DOSSIER
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#f8eee1] tracking-tight mt-1">
                Executive Roster
              </h2>
            </div>
            <span className="text-xs font-mono text-[#e8dcc6]/60 hidden sm:inline">
              ALPHA ENTREPRENEURSHIP SUMMIT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EXECUTIVES.map((exec, index) => (
              <motion.article
                key={exec.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-between bg-[#38060f]/60 hover:bg-[#420a14]/90 border border-[#89192c]/50 hover:border-[#f1ca7e]/60 transition-all duration-500 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-xl shadow-[#1f0207]/80 hover:shadow-[0_16px_40px_rgba(90,13,27,0.7)]"
              >
                <div>
                  {/* Portrait Plate */}
                  <ExecutivePortraitPlate
                    gender={exec.gender}
                    name={exec.name}
                    index={exec.index}
                    department={exec.department}
                    id={exec.id}
                  />

                  {/* Identification */}
                  <div className="mt-5">
                    <h3 className="text-xl sm:text-2xl font-black text-[#f8eee1] tracking-tight group-hover:text-[#f1ca7e] transition-colors duration-300">
                      {exec.name}
                    </h3>

                    <p className="mt-1 text-xs sm:text-[13px] font-bold text-[#f1ca7e] uppercase tracking-[0.14em]">
                      {exec.role}
                    </p>

                    <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#e8dcc6]/60 tracking-wider uppercase">
                      {exec.badge}
                    </p>
                  </div>

                  {/* Editorial Perspective / Bio Statement */}
                  <blockquote className="mt-4 pt-4 border-t border-[#89192c]/40 relative">
                    <p className="text-xs sm:text-[13px] text-[#e8dcc6]/90 leading-relaxed font-normal italic">
                      “{exec.bio}”
                    </p>
                  </blockquote>
                </div>

                {/* Minimalist Action Link */}
                <div className="mt-6 pt-4 border-t border-[#89192c]/40">
                  {exec.linkedin ? (
                    <a
                      href={exec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-[#89192c]/60 bg-[#4a0a14]/60 hover:bg-[#5a0d1b] hover:border-[#f1ca7e]/70 text-[#f8eee1] hover:text-[#f1ca7e] transition-all duration-300 text-xs font-bold tracking-wider uppercase"
                      aria-label={`Connect with ${exec.name} on LinkedIn`}
                    >
                      <span className="flex items-center gap-2">
                        <LinkedInIcon className="w-3.5 h-3.5 text-[#f1ca7e]" />
                        <span>LinkedIn Dossier</span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#f1ca7e] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl border border-[#89192c]/40 bg-[#260309]/50 text-[#e8dcc6]/60 text-xs font-semibold tracking-wider uppercase gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#f1ca7e]/60" />
                      <span>Executive Council Board</span>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PRINCIPLES OF STEWARDSHIP (EDITORIAL PILLARS)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]/50 bg-[#220207]/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#89192c]/50 gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#f1ca7e]">
                02 — INSTITUTIONAL GOVERNANCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#f8eee1] tracking-tight mt-1">
                Pillars of Stewardship
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#e8dcc6]/70 max-w-md font-normal leading-relaxed">
              AES operates under uncompromising standards of simulation fidelity, fiscal accountability, and delegate care.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="border-l-2 border-[#f1ca7e]/60 pl-5">
              <span className="font-mono text-xs text-[#f1ca7e] font-bold">01 / ARCHITECTURE</span>
              <h3 className="text-lg font-black text-[#f8eee1] mt-2 tracking-tight">Rigorous Simulation</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#e8dcc6]/80 leading-relaxed font-normal">
                Every heat, crisis room, and bidding floor is engineered to replicate live market pressures, testing true business instinct under realistic constraints.
              </p>
            </div>

            <div className="border-l-2 border-[#89192c] pl-5">
              <span className="font-mono text-xs text-[#f1ca7e] font-bold">02 / GOVERNANCE</span>
              <h3 className="text-lg font-black text-[#f8eee1] mt-2 tracking-tight">Fiscal & Operating Precision</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#e8dcc6]/80 leading-relaxed font-normal">
                Uncompromising logistics, transparent sponsorship allocation, and dedicated team stewards ensuring every delegate experiences summit excellence.
              </p>
            </div>

            <div className="border-l-2 border-[#f1ca7e]/60 pl-5">
              <span className="font-mono text-xs text-[#f1ca7e] font-bold">03 / EMPOWERMENT</span>
              <h3 className="text-lg font-black text-[#f8eee1] mt-2 tracking-tight">Youth Leadership Network</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#e8dcc6]/80 leading-relaxed font-normal">
                Creating a persistent ecosystem connecting Pakistan&apos;s most ambitious student entrepreneurs with industry mentors, angels, and corporate leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CLOSING EDITORIAL CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]/50 bg-[#1c0205]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#f1ca7e]">
            03 — SUMMIT INVITATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#f8eee1] tracking-tight mt-2">
            Step Onto the Summit Arena
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#e8dcc6] max-w-xl mx-auto leading-relaxed font-normal">
            Whether commanding trading floors in Market Monopoly or defending corporate empires, the executive council invites you to test your limits.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.gle/cGVgw5TpvpU9AXZx5"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between pl-7 pr-2.5 py-3 rounded-xl bg-[#f1ca7e] hover:bg-[#f8eee1] text-[#5a0d1b] font-bold text-sm tracking-tight shadow-xl shadow-[#1f0207]/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
            >
              <span>Register as Delegate</span>
              <span className="w-7 h-7 rounded-lg bg-[#5a0d1b] text-[#f1ca7e] flex items-center justify-center ml-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </a>

            <Link
              href="/modules"
              className="group inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#89192c] hover:border-[#f1ca7e]/60 bg-[#420a14]/60 hover:bg-[#5a0d1b] text-[#f8eee1] hover:text-[#f1ca7e] text-sm font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              <span>Explore 5 Modules</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}