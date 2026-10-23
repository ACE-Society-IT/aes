'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Minimalist AES 2026 Summit Schedule Dataset (Concise & Punchy)
   ───────────────────────────────────────────────────────────── */
const SCHEDULE_DAYS = [
  {
    id: 'day-1',
    dayIndex: 0,
    number: '01',
    label: 'Day 01',
    date: 'Nov 13, 2026',
    weekday: 'Friday',
    focus: 'Inauguration & Preliminary Heats',
    milestones: [
      { time: '02:00 PM', title: 'Summit Inauguration & Keynote Address', stage: 'Main Stage', tag: 'Keynote' },
      { time: '03:15 PM', title: 'Module Orientations & Rules Briefing', stage: 'Assembly Grounds', tag: 'Orientation' },
      { time: '03:30 PM', title: 'Round 1: Preliminary Module Heats', stage: 'Simulation Wings', tag: 'Module Heats' },
      { time: '07:30 PM', title: 'Day One Debrief & Founder Circles', stage: 'Executive Lawn', tag: 'Networking' },
    ],
  },
  {
    id: 'day-2',
    dayIndex: 1,
    number: '02',
    label: 'Day 02',
    date: 'Nov 14, 2026',
    weekday: 'Saturday',
    focus: 'Creative Sprints & Semi-Finals',
    milestones: [
      { time: '12:30 PM', title: 'Delegate Check-in & Day Briefing', stage: 'Amphitheatre', tag: 'Briefing' },
      { time: '01:15 PM', title: 'Viral Velocity: Guerrilla Brand Campaign', stage: 'Media Studio', tag: 'Creative Sprint' },
      { time: '03:00 PM', title: 'Round 2: Corporate Simulations & Semi-Finals', stage: 'Simulation Wings', tag: 'Semi-Finals' },
      { time: '06:00 PM', title: 'Pitch Deck Strategy & Investor Clinics', stage: 'Mentorship Pavilion', tag: 'Mentorship' },
    ],
  },
  {
    id: 'day-3',
    dayIndex: 2,
    number: '03',
    label: 'Day 03',
    date: 'Nov 15, 2026',
    weekday: 'Sunday',
    focus: 'Championship Finals & Gala',
    milestones: [
      { time: '08:30 AM', title: 'Grand Finals: Venture Verse Pitches', stage: 'Main Stage', tag: 'Championship' },
      { time: '01:30 PM', title: 'Executive Luncheon & Partner Booths', stage: 'Dining Pavilion', tag: 'Luncheon' },
      { time: '02:30 PM', title: 'Grand Finals: Defend The Empire & Monopoly', stage: 'Grand Hall', tag: 'Final Showdown' },
      { time: '06:30 PM', title: 'Awards Ceremony & Grand Gala Dinner', stage: 'Grand Ballroom', tag: 'Formal Gala' },
    ],
  },
];

const slideVariants = {
  enter: (direction) => ({
    y: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    y: direction < 0 ? 30 : -30,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Schedule() {
  const containerRef = useRef(null);
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [prevDayIdx, setPrevDayIdx] = useState(0);
  const [dayProgress, setDayProgress] = useState(0);

  // Pinned scroll mechanics: Container is 240vh on mobile, 320vh on desktop
  // The page won't leave this section until all 3 days are scrolled through!
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map scroll progress [0, 1] into 3 distinct day zones
    let targetIdx = 0;
    let localProgress = 0;

    if (latest < 0.33) {
      targetIdx = 0;
      localProgress = latest / 0.33;
    } else if (latest < 0.67) {
      targetIdx = 1;
      localProgress = (latest - 0.33) / 0.34;
    } else {
      targetIdx = 2;
      localProgress = Math.min(1, (latest - 0.67) / 0.33);
    }

    if (targetIdx !== activeDayIdx) {
      setPrevDayIdx(activeDayIdx);
      setActiveDayIdx(targetIdx);
    }
    setDayProgress(localProgress);
  });

  const direction = activeDayIdx >= prevDayIdx ? 1 : -1;
  const activeDay = SCHEDULE_DAYS[activeDayIdx];

  // Manual jump by clicking tab: scrolls smoothly to that percentage in the container
  const handleTabClick = (idx) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const startTop = scrollTop + rect.top;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;

    let targetScroll = startTop;
    if (idx === 1) targetScroll = startTop + totalHeight * 0.45;
    if (idx === 2) targetScroll = startTop + totalHeight * 0.85;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="schedule"
      ref={containerRef}
      className="relative z-30 w-full h-[240vh] md:h-[320vh] bg-[#5a0d1b] text-[#f8eee1] border-t-2 border-[#89192c] rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.6)] -mt-8 sm:-mt-10 select-none"
    >
      {/* Sticky Viewport Stage: Locks in place until all days are fully scrolled */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Subtle Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#f1ca7e]/30 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 left-10 w-96 h-96 bg-[#701020]/35 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -translate-y-1/2 right-10 w-96 h-96 bg-[#89192c]/25 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full relative z-10 py-4">
          {/* Header & Scroll Status */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#89192c]/35 pb-4 sm:pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e] mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Scroll Itinerary · AES 2026</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#f8eee1]">
                Summit <span className="text-[#f1ca7e]">Schedule</span>
              </h2>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-[#f1ca7e] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#f1ca7e] animate-pulse" />
              <span>Scroll down to navigate days ({activeDayIdx + 1}/3)</span>
            </div>
          </div>

          {/* 3 Day Nav Tabs with Interactive Progress Fill */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
            {SCHEDULE_DAYS.map((day, idx) => {
              const isActive = idx === activeDayIdx;
              const isPast = idx < activeDayIdx;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => handleTabClick(idx)}
                  className={`relative rounded-2xl p-2.5 sm:p-4 text-left border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-[#701020] border-[#f1ca7e] shadow-lg shadow-[#5a0d1b]'
                      : 'bg-[#5a0d1b]/70 border-[#89192c]/50 hover:bg-[#701020]/40'
                  }`}
                >
                  {/* Progress Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#89192c]">
                    <div
                      className="h-full bg-[#f1ca7e] transition-all duration-100 ease-linear"
                      style={{
                        width: isActive ? `${dayProgress * 100}%` : isPast ? '100%' : '0%',
                      }}
                    />
                  </div>

                  <div className="flex items-baseline justify-between gap-1">
                    <span
                      className={`text-sm sm:text-xl font-black tracking-tight ${
                        isActive ? 'text-[#f1ca7e]' : 'text-[#e8dcc6]'
                      }`}
                    >
                      {day.label}
                    </span>
                    <span className="text-[9px] sm:text-xs font-semibold text-[#e8dcc6]/75 uppercase">
                      {day.weekday}
                    </span>
                  </div>

                  <div className="mt-0.5 text-[10px] sm:text-xs font-medium text-[#f8eee1]/90 truncate">
                    {day.focus}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Day Milestones (Less Informative, Highly Professional) */}
          <div className="mt-4 sm:mt-6 relative overflow-hidden min-h-[220px] sm:min-h-[270px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeDay.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-2 sm:space-y-2.5"
              >
                {activeDay.milestones.map((item, mIdx) => (
                  <div
                    key={mIdx}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 px-3.5 py-2.5 sm:px-4 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#701020]/40 hover:bg-[#701020]/80 border border-[#89192c]/40 hover:border-[#f1ca7e]/50 transition-all duration-200"
                  >
                    {/* Time + Title Row */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#5a0d1b] border border-[#89192c] text-[11px] sm:text-xs font-black text-[#f1ca7e] tabular-nums shrink-0">
                        {item.time}
                      </span>

                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#f8eee1] group-hover:text-[#f1ca7e] transition-colors truncate">
                        {item.title}
                      </h3>
                    </div>

                    {/* Stage & Tag Row */}
                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 text-[10px] sm:text-xs">
                      <span className="inline-flex items-center gap-1 text-[#e8dcc6] font-medium">
                        <MapPin className="w-3 h-3 text-[#f1ca7e]" />
                        <span>{item.stage}</span>
                      </span>

                      <span className="px-2 py-0.5 rounded-full bg-[#5a0d1b]/80 border border-[#89192c] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#f1ca7e]">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Footer Stamp */}
          <div className="mt-4 sm:mt-6 pt-3 border-t border-[#89192c]/30 flex items-center justify-between text-[10px] sm:text-xs text-[#e8dcc6]">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#f1ca7e]" />
              <span>Nov 13–15, 2026 · Alpha College Karachi</span>
            </div>

            <a
              href="/aes-delegate-guide.pdf"
              download="AES-Schedule-2026.pdf"
              className="text-[#f1ca7e] hover:text-[#f8eee1] font-bold transition-colors underline-offset-4 hover:underline"
            >
              Guidebook (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
