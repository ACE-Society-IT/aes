'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Shield, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MouseStreakWrapper from '@/components/home/MouseStreakWrapper';

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

const EXECUTIVES = [
  {
    id: 'mansoor-moiz',
    index: '01',
    name: 'Mansoor Moiz',
    gender: 'male',
    role: 'Chief Executive Officer (CEO)',
    badge: 'Executive Leadership',
    department: 'Leadership',
    linkedin: 'https://www.linkedin.com/in/mansoor-moiz/',
    bio: 'As CEO, I focus on driving ACE’s vision, aligning teams toward shared goals, and building meaningful partnerships. I aim to foster a spirit of entrepreneurship, encourage innovative thinking, and create opportunities that connect students with the business world. Through strategic direction, collaboration, and effective execution, my goal is to deliver a summit that promotes practical learning, inspires new ideas, and creates a lasting impact on every participant.',
  },
  {
    id: 'zoya-ehtasham',
    index: '02',
    name: 'Zoya Ehtasham',
    gender: 'female',
    role: 'Chief Financial Officer (CFO)',
    badge: 'Financial Governance',
    department: 'Finance',
    linkedin: null,
    bio: 'As CFO, I oversee financial strategy, resource allocation, and budget governance for AES. My priority is ensuring fiscal discipline, securing key sponsorships, and maximizing value across all summit modules to provide delegates and partners with a seamless, world-class experience.',
  },
  {
    id: 'bareerah-ahmed',
    index: '03',
    name: 'Bareerah Ahmed',
    gender: 'female',
    role: 'Chief Communication Officer (CCO)',
    badge: 'Communications & Outreach',
    department: 'Communications',
    linkedin: 'https://www.linkedin.com/in/bareerah-ahmed-ba1493423?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Chief Communication Officer, I aim to expand AES’s reach through strategic outreach, meaningful networking, and impactful partnerships. I’ll build strong connections with stakeholders and ensure seamless communication that strengthens the summit’s presence and impact.',
  },
  {
    id: 'ayaan-japanwalla',
    index: '04',
    name: 'Ayaan Japanwalla',
    gender: 'male',
    role: 'Marketing Director',
    badge: 'Brand & Growth Strategy',
    department: 'Marketing',
    linkedin: 'https://www.linkedin.com/in/ayaanjapanwalla',
    bio: 'As Marketing Director, I aim to bring AES to life through creative campaigns, engaging content, and strategic promotion. My focus is on building a strong brand presence, generating excitement, and connecting with our audience to make AES a memorable and impactful experience.',
  },
  {
    id: 'ayan-khurrum',
    index: '05',
    name: 'Ayan Khurrum',
    gender: 'male',
    role: 'Module Director',
    badge: 'Competition Design',
    department: 'Academics',
    linkedin: 'https://www.linkedin.com/in/ayan-khurram-3bb4b4424?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Module Director, I aim to turn entrepreneurial ideas into meaningful experiences through strategic planning, creative thinking, and effective team leadership. I’ll focus on fostering innovation, encouraging collaboration, and ensuring seamless execution to deliver an engaging and impactful summit experience for every participant involved.',
  },
  {
    id: 'ahmed-shahid',
    index: '06',
    name: 'Ahmed Shahid',
    gender: 'male',
    role: 'Operating Director',
    badge: 'Operations & Logistics',
    department: 'Operations',
    linkedin: 'https://www.linkedin.com/in/ahmed-shahid-2326582aa?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Operating Director, my goal is to make sure everything runs smoothly and efficiently while keeping the team motivated and focused. I believe in good planning, clear communication, and working together to get things done. I’m ready to take responsibility, solve problems, and make sure we deliver the best possible AES experience for everyone involved.',
  },
];

/* ─────────────────────────────────────────────────────────────
   Executive Accordion Item (Matching /faq UI Design Exactly)
   ───────────────────────────────────────────────────────────── */
function ExecutiveAccordionItem({ exec, index, isOpen, onToggle }) {
  const safeSlug = exec.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const titleId = `exec-title-${safeSlug}`;
  const descId = `exec-desc-${safeSlug}`;
  const gradId = `exec-grad-${exec.id}`;
  const isFemale = exec.gender === 'female';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className={`
          group relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ease-out hover:scale-[1.01] backdrop-blur-xl
          ${
            isOpen
              ? 'bg-[#701020]/90 border-[#f1ca7e] shadow-[0_12px_40px_rgba(241,202,126,0.2)]'
              : 'bg-[#5a0d1b]/70 border-[#89192c]/80 hover:border-[#f1ca7e]/60 hover:bg-[#701020]/60 shadow-xl shadow-[#5a0d1b]/50'
          }
        `}
      >
        {/* Glass Sheen Top Edge */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

        {/* Question / Executive Header Button */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-8 sm:py-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5a0d1b] rounded-3xl active:scale-[0.99] transition-transform duration-200"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">
            {/* Index Number Disc */}
            <span
              className={`
                w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-black tabular-nums shrink-0 transition-colors duration-300
                ${
                  isOpen
                    ? 'bg-[#f1ca7e] text-[#5a0d1b]'
                    : 'bg-[#701020] text-[#f1ca7e] group-hover:bg-[#89192c]'
                }
              `}
            >
              {exec.index}
            </span>

            {/* Executive Name & Role Preview */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span
                  className={`
                    text-sm sm:text-lg font-bold tracking-tight transition-colors duration-300 leading-snug
                    ${isOpen ? 'text-[#f8eee1]' : 'text-[#e8dcc6] group-hover:text-[#f8eee1]'}
                  `}
                >
                  {exec.name}
                </span>

                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-[#f1ca7e]/40 bg-[#5a0d1b]/80 text-[#f1ca7e]">
                  {exec.department}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#f1ca7e] tracking-wide mt-0.5 truncate">
                {exec.role}
              </p>
            </div>
          </div>

          {/* Chevron in Circular Disc (Matching FAQ) */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
              isOpen
                ? 'bg-[#5a0d1b] border-[#f1ca7e]/60 text-[#f1ca7e]'
                : 'bg-[#701020] border-[#89192c] text-[#e8dcc6] group-hover:border-[#f1ca7e]/60 group-hover:text-[#f1ca7e]'
            }`}
          >
            <ChevronDown className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 transition-colors duration-300" />
          </motion.div>
        </button>

        {/* Answer / Detail Panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3, delay: 0.05 },
              }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-5 sm:px-8 sm:pb-7">
                {/* Subtle horizontal gradient divider matching FAQ */}
                <div className="h-px w-full bg-gradient-to-r from-[#89192c] via-[#89192c]/40 to-transparent mb-5" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                  {/* Left Silhouette Portrait Frame */}
                  <div className="sm:col-span-4 flex justify-center sm:justify-start">
                    <div className="relative w-36 sm:w-40 aspect-[4/4.8] rounded-2xl overflow-hidden border-2 border-[#89192c] bg-gradient-to-b from-[#701020] via-[#5a0d1b] to-[#420a13] p-3 shadow-xl flex flex-col justify-between items-center select-none">
                      {/* Subtle backplate halo */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(241,202,126,0.18),transparent_70%)] pointer-events-none" />

                      {/* Header Stamp */}
                      <div className="relative z-10 w-full flex items-center justify-between text-[9px] font-mono tracking-widest text-[#f1ca7e] uppercase">
                        <span>AES · 2026</span>
                        <span>{exec.department}</span>
                      </div>

                      {/* Vector Silhouette */}
                      <div className="relative z-10 w-full flex-1 flex items-center justify-center py-1">
                        <svg
                          viewBox={isFemale ? '1137 150 980 1225' : '102 120 980 1225'}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-labelledby={`${titleId} ${descId}`}
                          className="w-full h-full max-h-[140px] sm:max-h-[155px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                        >
                          <title id={titleId}>{`${exec.name} Portrait`}</title>
                          <desc id={descId}>{`Official silhouette vector portrait for ${exec.name}.`}</desc>
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

                      {/* Bottom Footer Monogram */}
                      <div className="relative z-10 w-full text-center text-[9px] font-bold tracking-[0.2em] uppercase text-[#e8dcc6]/70 border-t border-[#89192c]/50 pt-1">
                        {exec.badge}
                      </div>
                    </div>
                  </div>

                  {/* Right Statement + LinkedIn Action */}
                  <div className="sm:col-span-8 flex flex-col justify-between">
                    <div className="bg-[#5a0d1b]/70 border border-[#89192c] rounded-2xl p-4 sm:p-5 shadow-inner">
                      <span className="text-xl text-[#f1ca7e] font-serif leading-none block mb-1">“</span>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#e8dcc6] italic font-normal">
                        {exec.bio}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
                      {exec.linkedin ? (
                        <a
                          href={exec.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-xs tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-[#5a0d1b]/50"
                        >
                          <span className="flex items-center gap-1.5">
                            <LinkedInIcon className="w-3.5 h-3.5 text-[#5a0d1b]" />
                            <span>Connect on LinkedIn</span>
                          </span>
                          <span className="w-6 h-6 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center transition-transform duration-300 group-hover/link:scale-110">
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#89192c]/40 border border-[#89192c] text-[#e8dcc6] text-xs font-semibold">
                          <Shield className="w-3.5 h-3.5 text-[#f1ca7e]" />
                          <span>Executive Council Board</span>
                        </div>
                      )}

                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#e8dcc6]/60">
                        AES · ALPHA COLLEGE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Executive Page Main Component (Direct /faq layout matching)
   ───────────────────────────────────────────────────────────── */
export default function ExecutivesPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] flex flex-col justify-between selection:bg-[#f1ca7e] selection:text-[#5a0d1b] overflow-x-hidden">
      <Navbar />

      {/* Main Section using MouseStreakWrapper (Identical to Faqs.jsx) */}
      <MouseStreakWrapper
        id="executives"
        fadeOnScroll={false}
        className="w-full text-[#f8eee1] pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]/50"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Two-Column Layout: Header Left + Accordion Right (Identical to Faqs.jsx) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
            {/* Left Column — Section Header (Sticky) */}
            <motion.div
              className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
                Leadership Council
              </span>

              <h1 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f8eee1]">
                Executive <span className="text-[#f1ca7e]">Council</span>
                <br />
                Roster
              </h1>

              <p className="mt-2 sm:mt-5 text-xs sm:text-base md:text-lg text-[#e8dcc6] leading-relaxed max-w-md">
                Meet the visionary directors, builders, and strategists leading the Alpha Entrepreneurship Summit 2026 at Alpha College Karachi.
              </p>

              {/* Council Highlights Card */}
              <div className="mt-6 sm:mt-8 space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#701020]/60 border border-[#89192c] backdrop-blur-sm shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#5a0d1b] border border-[#f1ca7e]/40 flex items-center justify-center text-[#f1ca7e] font-black text-sm shrink-0">
                    06
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f8eee1] block">
                      Core Directors
                    </span>
                    <span className="text-[11px] text-[#e8dcc6]/80 block">
                      Autonomous Summit Portfolios
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#701020]/60 border border-[#89192c] backdrop-blur-sm shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#5a0d1b] border border-[#f1ca7e]/40 flex items-center justify-center text-[#f1ca7e] font-black text-sm shrink-0">
                    05
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f8eee1] block">
                      Flagship Modules
                    </span>
                    <span className="text-[11px] text-[#e8dcc6]/80 block">
                      High-Stakes Simulations
                    </span>
                  </div>
                </div>
              </div>

              {/* Delegate Action Button */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-[#89192c]">
                <a
                  href="https://forms.gle/cGVgw5TpvpU9AXZx5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-between w-full pl-5 pr-2 py-2.5 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-xs sm:text-sm tracking-tight shadow-lg shadow-[#5a0d1b]/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Register for AES 2026</span>
                  <span className="w-7 h-7 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-2.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right Column — Accordion List (Identical to Faqs.jsx) */}
            <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-3.5">
              {EXECUTIVES.map((exec, i) => (
                <ExecutiveAccordionItem
                  key={exec.id}
                  exec={exec}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </MouseStreakWrapper>

      <Footer />
    </main>
  );
}