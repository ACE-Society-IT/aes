'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────
   AES 2026 Summit Track — Minimalist, High-Impact Dataset
   ───────────────────────────────────────────────────────────── */

const DAYS = [
  {
    id: 'day-01',
    dayNumber: '01',
    date: 'Nov 13, 2026',
    weekday: 'Friday',
    headline: 'Inauguration & Opening Heats',
    sessions: [
      {
        time: '2:00 PM – 2:30 PM',
        tag: 'Check-in',
        title: 'Registrations',
        subtitle: 'Delegate entry, badge check, and welcome kits',
        venue: 'Alpha College Registration Foyer',
      },
      {
        time: '2:30 PM – 3:15 PM',
        tag: 'Ceremony',
        title: 'Opening Ceremony',
        subtitle: 'Presidential keynote address and summit rules reveal',
        venue: 'Grand Auditorium',
      },
      {
        time: '3:30 PM – 5:00 PM',
        tag: 'Simulation',
        title: 'Venture Verse',
        subtitle: 'Round 1: Startup ideation, problem validation, and initial pitch',
        venue: 'Venture Arena',
      },
      {
        time: '5:00 PM – 6:30 PM',
        tag: 'Simulation',
        title: 'Defend The Empire',
        subtitle: 'Round 1: Rapid crisis response and board strategy defense',
        venue: 'War Room Wing',
      },
      {
        time: '6:30 PM – 7:30 PM',
        tag: 'Simulation',
        title: 'Investomania',
        subtitle: 'Round 1: Market simulation open and high-stakes equity trading',
        venue: 'Trading Floor',
      },
    ],
  },
  {
    id: 'day-02',
    dayNumber: '02',
    date: 'Nov 14, 2026',
    weekday: 'Saturday',
    headline: 'Creative Sprints & Core Battles',
    sessions: [
      {
        time: '12:30 PM – 1:00 PM',
        tag: 'Check-in',
        title: 'Registration',
        subtitle: 'Delegate check-in and briefing for Day 2 simulations',
        venue: 'Assembly Grounds',
      },
      {
        time: '1:00 PM – 2:30 PM',
        tag: 'Simulation',
        title: 'Viral Velocity',
        subtitle: 'Round 1: Digital brand creation and live guerrilla stunts',
        venue: 'Media & Creative Lab',
      },
      {
        time: '2:30 PM – 3:00 PM',
        tag: 'Break',
        title: 'Break',
        subtitle: 'Networking recess, founder huddles, and refreshments',
        venue: 'Executive Courtyard',
      },
      {
        time: '3:00 PM – 5:00 PM',
        tag: 'Simulation',
        title: 'Defend The Empire',
        subtitle: 'Round 2: Hostile takeover simulation and curveball negotiations',
        venue: 'War Room Wing',
      },
      {
        time: '5:00 PM – 6:30 PM',
        tag: 'Simulation',
        title: 'Investomania',
        subtitle: 'Round 2: High-volatility macro trading and derivative shockwaves',
        venue: 'Trading Floor',
      },
      {
        time: '6:30 PM – 8:30 PM',
        tag: 'Simulation',
        title: 'Market Monopoly',
        subtitle: 'Round 1: Asset acquisition, property auctions, and empire expansion',
        venue: 'Monopoly Floor',
      },
    ],
  },
  {
    id: 'day-03',
    dayNumber: '03',
    date: 'Nov 15, 2026',
    weekday: 'Sunday',
    headline: 'Championship Finals & Grand Gala',
    sessions: [
      {
        time: '8:30 AM – 9:00 AM',
        tag: 'Check-in',
        title: 'Registration',
        subtitle: 'Finals day registration, roll call, and briefing',
        venue: 'Assembly Grounds',
      },
      {
        time: '9:00 AM – 11:00 AM',
        tag: 'Simulation',
        title: 'Viral Velocity',
        subtitle: 'Finals: Live consumer engagement and campaign judging',
        venue: 'Campus Square',
      },
      {
        time: '11:00 AM – 12:30 PM',
        tag: 'Simulation',
        title: 'Venture Verse',
        subtitle: 'Grand Finale: Shark Tank-style pitches to angel investors',
        venue: 'Grand Stage',
      },
      {
        time: '12:30 PM – 1:30 PM',
        tag: 'Break',
        title: 'Break',
        subtitle: 'Midday prayer recess and luncheon',
        venue: 'Dining Pavilion',
      },
      {
        time: '1:30 PM – 2:30 PM',
        tag: 'Simulation',
        title: 'Defend The Empire',
        subtitle: 'Final Siege: Ultimate crisis resolution and leadership tribunal',
        venue: 'War Room Wing',
      },
      {
        time: '2:30 PM – 4:30 PM',
        tag: 'Simulation',
        title: 'Market Monopoly',
        subtitle: 'Finals: Mega-mergers, debt settlements, and total market conquest',
        venue: 'Monopoly Floor',
      },
      {
        time: '4:30 PM – 6:30 PM',
        tag: 'Simulation',
        title: 'Investomania',
        subtitle: 'Final Bell: Closing portfolio audit and valuation showdown',
        venue: 'Trading Floor',
      },
      {
        time: '6:30 PM – 8:30 PM',
        tag: 'Ceremony',
        title: 'Closing Ceremony',
        subtitle: 'Winner announcements, awards distribution, and executive addresses',
        venue: 'Grand Auditorium',
      },
      {
        time: '8:30 PM – 9:30 PM',
        tag: 'Gala',
        title: 'Dinner',
        subtitle: 'Executive gala dinner, celebratory banquet, and socials',
        venue: 'Banquet Hall & Executive Lawn',
      },
    ],
  },
];

export default function Schedule() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const activeDay = DAYS[activeDayIdx];

  return (
    <section
      id="schedule"
      className="relative z-30 w-full bg-[#5a0d1b] text-[#f8eee1] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]/50 select-none overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#f1ca7e]/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#701020]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Clean, Non-Congested Header with scroll lazy loading on scroll up & down */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            <span className="text-[#f8eee1]">The </span>
            <span className="text-[#e0485c]">Summit</span>{' '}
            <span className="text-[#f1ca7e]">Track</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#e8dcc6] font-normal leading-relaxed">
            Three days of keynotes, high-stakes heats, and the grand closing gala at Alpha College.
          </p>
        </motion.div>

        {/* Minimal 3-Day Tabs */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 rounded-2xl bg-[#701020]/40 border border-[#89192c]/40 mb-10 max-w-xl mx-auto">
          {DAYS.map((day, idx) => {
            const isActive = idx === activeDayIdx;
            return (
              <button
                key={day.id}
                type="button"
                onClick={() => setActiveDayIdx(idx)}
                className={cn(
                  'relative py-2.5 sm:py-3 px-3 rounded-xl text-center transition-all duration-300 cursor-pointer',
                  isActive
                    ? 'bg-[#f1ca7e] text-[#5a0d1b] font-extrabold shadow-md'
                    : 'text-[#e8dcc6] hover:text-[#f8eee1] hover:bg-[#701020]/60 font-semibold'
                )}
              >
                <div className="text-xs sm:text-sm tracking-tight">
                  Day {day.dayNumber}
                </div>
                <div className="text-[10px] uppercase tracking-wider opacity-80 mt-0.5">
                  {day.weekday}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Day Headline */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#89192c]/30">
          <div>
            <div className="text-xs font-bold text-[#f1ca7e] uppercase tracking-widest">
              {activeDay.date}
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#f8eee1] mt-0.5">
              {activeDay.headline}
            </div>
          </div>
          <div className="text-xs font-bold text-[#e8dcc6]/70">
            {activeDay.sessions.length} Milestones
          </div>
        </div>

        {/* Clean, Non-Congested Sessions List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-2.5 sm:space-y-3"
          >
            {activeDay.sessions.map((session, sIdx) => {
              const isCeremonyOrGala = session.tag === 'Ceremony' || session.tag === 'Gala';
              const isBreak = session.tag === 'Break';
              const isSimulation = session.tag === 'Simulation';

              return (
                <div
                  key={sIdx}
                  className={cn(
                    'group p-3.5 sm:p-4.5 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4',
                    isCeremonyOrGala
                      ? 'bg-[#701020]/50 hover:bg-[#701020]/80 border-[#f1ca7e]/30 hover:border-[#f1ca7e]/60 shadow-sm'
                      : isBreak
                      ? 'bg-[#5a0d1b]/60 hover:bg-[#5a0d1b]/90 border-[#89192c]/30'
                      : 'bg-[#701020]/30 hover:bg-[#701020]/70 border-[#89192c]/35 hover:border-[#f1ca7e]/40'
                  )}
                >
                  {/* Left: Time & Category Tag */}
                  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                    <span className="text-xs sm:text-sm font-black text-[#f1ca7e] font-mono tracking-tight whitespace-nowrap min-w-[135px]">
                      {session.time}
                    </span>
                    <span
                      className={cn(
                        'px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider whitespace-nowrap',
                        isCeremonyOrGala
                          ? 'bg-[#f1ca7e]/15 text-[#f1ca7e] border-[#f1ca7e]/40'
                          : isSimulation
                          ? 'bg-[#5a0d1b] text-[#f8eee1] border-[#89192c]'
                          : isBreak
                          ? 'bg-[#701020]/40 text-[#e8dcc6] border-[#89192c]/40'
                          : 'bg-[#5a0d1b] text-[#e8dcc6] border-[#89192c]/60'
                      )}
                    >
                      {session.tag}
                    </span>
                  </div>

                  {/* Middle: Title, Subtitle & Venue */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      <h3 className="text-sm sm:text-base font-bold text-[#f8eee1] group-hover:text-[#f1ca7e] transition-colors truncate">
                        {session.title}
                      </h3>
                      {session.subtitle && (
                        <span className="text-xs text-[#e8dcc6]/75 truncate hidden sm:inline">
                          — {session.subtitle}
                        </span>
                      )}
                    </div>
                    {session.subtitle && (
                      <p className="text-xs text-[#e8dcc6]/75 truncate sm:hidden mt-0.5">
                        {session.subtitle}
                      </p>
                    )}
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#e8dcc6]/70 mt-1">
                      <MapPin className="w-3 h-3 text-[#f1ca7e] shrink-0" aria-hidden="true" focusable="false" />
                      <span className="truncate">{session.venue}</span>
                    </div>
                  </div>

                  {/* Right: Subtle Indicator */}
                  <div className="hidden md:flex self-center shrink-0 text-[#f1ca7e]/30 group-hover:text-[#f1ca7e] transition-colors">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" focusable="false" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Clean Bottom Download Row */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#89192c]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e8dcc6]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f1ca7e]" />
            <span>Alpha College Karachi · November 13–15, 2026</span>
          </div>

          <a
            href="/aes-delegate-guide.pdf"
            download="AES-2026-Schedule.pdf"
            className="inline-flex items-center gap-1.5 text-[#f1ca7e] hover:text-[#f8eee1] font-bold tracking-wide transition-colors underline-offset-4 hover:underline"
          >
            <span>Download PDF Itinerary</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </section>
  );
}
