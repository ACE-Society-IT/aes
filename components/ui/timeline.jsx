'use client';

import React, { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// SSR-safe layout effect
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function useGSAP(callback, options) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef(null);
  const cleanupRef = useRef(undefined);

  useIsomorphicLayoutEffect(() => {
    const el =
      scope && typeof scope === 'object' && 'current' in scope ? scope.current : scope;
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === 'function' ? ret : undefined;
  }, deps);
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(callback) {
  if (typeof window === 'undefined') return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener('change', callback);
  return () => mediaQueryList.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );
}

// Default AES Summit Schedule Datasets (Authentic 3-Day Schedule from Delegate Guide)
export const defaultTopJourneyData = [
  {
    id: 'day1-opening',
    year: 'Day 01',
    month: '02:00 PM - 03:15 PM',
    content: 'Summit Inauguration, Delegate Registration & Grand Opening Ceremony',
  },
  {
    id: 'day2-morning',
    year: 'Day 02',
    month: '12:30 PM - 03:00 PM',
    content: 'Assembly, Gate Check-in, Viral Velocity (Round 1) & Midday Break',
  },
  {
    id: 'day3-morning',
    year: 'Day 03',
    month: '08:30 AM - 01:30 PM',
    content: 'Viral Velocity & Venture Verse Finales, Followed by Lunch Break',
  },
  {
    id: 'day3-closing',
    year: 'Day 03',
    month: '06:30 PM - 09:30 PM',
    content: 'Grand Closing Ceremony, Awards Distribution & Formal Gala Dinner',
  },
];

export const defaultBottomJourneyData = [
  {
    id: 'day1-rounds',
    year: 'Day 01',
    month: '03:30 PM - 07:30 PM',
    content: 'Venture Verse (R1), Defend The Empire (R1) & Investomania (R1)',
  },
  {
    id: 'day2-rounds',
    year: 'Day 02',
    month: '03:00 PM - 08:30 PM',
    content: 'Defend The Empire (R2), Investomania (R2) & Market Monopoly (R1)',
  },
  {
    id: 'day3-finals',
    year: 'Day 03',
    month: '01:30 PM - 06:30 PM',
    content: 'Championship Finales: Defend The Empire, Market Monopoly & Investomania',
  },
];

export const ALL_TIMELINE_EVENTS = [
  {
    id: 'd1-opening',
    day: 'Day 01',
    time: '02:00 PM — 03:15 PM',
    title: 'Summit Inauguration & Grand Opening',
    description: 'Delegate check-in, opening keynote address, and briefing on the five competitive modules.',
    badge: 'Opening Session',
  },
  {
    id: 'd1-rounds',
    day: 'Day 01',
    time: '03:30 PM — 07:30 PM',
    title: 'Round 1: Preliminary Module Battles',
    description: 'First competitive rounds across Venture Verse, Defend The Empire, and Investomania.',
    badge: 'Module Rounds',
  },
  {
    id: 'd2-morning',
    day: 'Day 02',
    time: '12:30 PM — 03:00 PM',
    title: 'Assembly & Creative Challenges',
    description: 'Gate entry, morning check-ins, Viral Velocity Round 1, and strategic deliberation break.',
    badge: 'Creative Round',
  },
  {
    id: 'd2-rounds',
    day: 'Day 02',
    time: '03:00 PM — 08:30 PM',
    title: 'Round 2: Semi-Finals & Market Monopoly',
    description: 'High-stakes semi-finals in Defend The Empire & Investomania, plus Market Monopoly Round 1.',
    badge: 'Semi-Finals',
  },
  {
    id: 'd3-morning',
    day: 'Day 03',
    time: '08:30 AM — 01:30 PM',
    title: 'Morning Finals & Pitch Decks',
    description: 'Viral Velocity and Venture Verse championship pitches, followed by networking lunch.',
    badge: 'Championship Pitch',
  },
  {
    id: 'd3-finals',
    day: 'Day 03',
    time: '01:30 PM — 06:30 PM',
    title: 'Grand Championship Showdowns',
    description: 'Final showdowns in Defend The Empire, Market Monopoly, and Investomania.',
    badge: 'Final Showdown',
  },
  {
    id: 'd3-closing',
    day: 'Day 03',
    time: '06:30 PM — 09:30 PM',
    title: 'Awards Ceremony & Formal Gala Dinner',
    description: 'Presentation of official summit trophies, executive addresses, and celebration gala dinner.',
    badge: 'Grand Gala',
  },
];

export default function Timeline({
  id = 'schedule',
  title = 'Summit Track',
  periodLabel = 'Nov 13 — Nov 15, 2026',
  textColor = '#5a0d1b',
  mutedTextColor = '#650d1c',
  activeColor = '#701020',
  backgroundColor = '#f8eee1',
  accentColor = '#f1ca7e',
  borderColor = '#e8dcc6',
  imageUrl = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  imageAlt = 'AES Summit Grand Conference Hall',
  duration,
  scrollDuration = 1.2,
  topData = defaultTopJourneyData,
  bottomData = defaultBottomJourneyData,
}) {
  const sectionRef = useRef(null);
  const wholeSliderRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  // Interleave top and bottom items chronologically for animation ordering
  const allJourneyItems = (() => {
    const merged = [];
    let ti = 0;
    let bi = 0;
    while (ti < topData.length || bi < bottomData.length) {
      if (ti < topData.length) merged.push({ ...topData[ti], _isTop: true });
      if (bi < bottomData.length) merged.push({ ...bottomData[bi], _isTop: false });
      ti++;
      bi++;
    }
    return merged;
  })();

  useGSAP(
    () => {
      // Guard: On mobile screens (< 768px), we use native vertical timeline.
      if (typeof window === 'undefined' || window.innerWidth < 768) return;

      const section = sectionRef.current;
      if (!section) return;

      const slidePercent = -58;
      const lineWidth = '96%';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '92% bottom',
          scrub: 1,
          snap: {
            snapTo: [0, 0.48, 1],
            duration: { min: 0.25, max: 0.6 },
            delay: 0.1,
            ease: 'power1.inOut',
          },
        },
        defaults: {
          ease: 'power1.inOut',
        },
      });

      tl.to(wholeSliderRef.current, { xPercent: 0, duration: 1 })
        .to(wholeSliderRef.current, { xPercent: slidePercent * 0.48, duration: 2.2 })
        .to(wholeSliderRef.current, { xPercent: slidePercent * 0.48, duration: 1.6 })
        .to(wholeSliderRef.current, { xPercent: slidePercent, duration: 2.2 })
        .to(wholeSliderRef.current, { xPercent: slidePercent, duration: 1.2 });

      if (reducedMotion) {
        gsap.set('.journey-line', { width: lineWidth });
        return;
      }

      gsap.to('.journey-line', {
        width: lineWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 25%',
          end: '92% bottom',
          scrub: 1,
        },
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef }
  );

  useGSAP(
    () => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return;

      const section = sectionRef.current;
      if (!section) return;

      const items = allJourneyItems;

      if (reducedMotion) {
        items.forEach((item) => {
          gsap.set(`.jl-${item.id}`, { scaleY: 1 });
          gsap.set(`.jd-${item.id}`, { scale: 1 });
          gsap.set(`.title-${item.id}`, { opacity: 1, clearProps: 'transform' });
          gsap.set(`.description-${item.id}`, {
            opacity: 1,
            clearProps: 'transform',
          });
        });
        return;
      }

      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, {
          scaleY: 0,
          transformOrigin: 'top top',
        });
        gsap.set(`.jd-${item.id}`, { scale: 0 });
        gsap.set(`.title-${item.id}`, { opacity: 1 });
        gsap.set(`.description-${item.id}`, { opacity: 1 });
      });

      const titleSplits = {};
      const descriptionSplits = {};

      items.forEach((item) => {
        try {
          titleSplits[item.id] = new SplitText(`.title-${item.id}`, {
            type: 'lines',
            mask: 'lines',
          });
          descriptionSplits[item.id] = new SplitText(`.description-${item.id}`, {
            type: 'lines',
            mask: 'lines',
          });
        } catch {
          // Fallback if SplitText is unavailable
        }
      });

      const createItemTimeline = (item, startPos, endPos) => {
        const titleLines =
          titleSplits[item.id]?.lines?.length > 0
            ? titleSplits[item.id].lines
            : `.title-${item.id}`;
        const descriptionLines =
          descriptionSplits[item.id]?.lines?.length > 0
            ? descriptionSplits[item.id].lines
            : `.description-${item.id}`;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `${startPos}% 30%`,
            end: `${endPos}% 50%`,
            scrub: true,
          },
        });

        timeline
          .to(`.jl-${item.id}`, {
            scaleY: 1,
            duration: normalizedDuration * 0.4,
          })
          .to(
            `.jd-${item.id}`,
            {
              scale: 1,
              duration: normalizedDuration * 0.4,
            },
            '<'
          )
          .fromTo(
            titleLines,
            { y: 80 },
            {
              y: 0,
              delay: -0.8 * normalizedDuration,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: 'power2.out',
            }
          )
          .fromTo(
            descriptionLines,
            { y: 80 },
            {
              y: 0,
              duration: normalizedDuration,
              stagger: 0.02,
              ease: 'power2.out',
            },
            '<'
          );

        return timeline;
      };

      const positions = [
        [6, 18],
        [9, 21],
        [30, 42],
        [34, 46],
        [58, 70],
        [62, 74],
        [70, 84],
      ];

      items.forEach((item, index) => {
        const [startPos, endPos] = positions[index] || [6 + index * 8, 22 + index * 8];
        createItemTimeline(item, startPos, endPos);
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        Object.values(titleSplits).forEach((split) => split?.revert?.());
        Object.values(descriptionSplits).forEach((split) => split?.revert?.());
        window.removeEventListener('resize', handleResize);
      };
    },
    { dependencies: [normalizedDuration, reducedMotion], scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      className="w-full relative select-none bg-[#5a0d1b] text-[#f8eee1]"
    >
      {/* Warm ambient background glow */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_30%,#701020_0%,#5a0d1b_75%)] opacity-80" />

      {/* ═════════════════════════════════════════════════
          1. MOBILE VIEW (< 768px): Clean Vertical Timeline (Less Bulk)
          ═════════════════════════════════════════════════ */}
      <div className="block md:hidden relative z-10 px-4 py-8 sm:py-12">
        <div className="mb-6 text-center">
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#701020] border border-[#89192c] text-[10px] font-bold tracking-[0.25em] text-[#f1ca7e] uppercase mb-1.5 shadow-sm">
            Summit Schedule
          </span>
          <h2 className="text-2xl font-black text-[#f8eee1] tracking-tight">
            {title}
          </h2>
          <p className="mt-1 text-[11px] font-semibold text-[#f1ca7e]">
            {periodLabel} · Alpha College Karachi
          </p>
        </div>

        {/* Vertical Journey Track */}
        <div className="relative pl-5 border-l-2 border-[#89192c] flex flex-col gap-4 ml-2">
          {ALL_TIMELINE_EVENTS.map((event) => (
            <div key={event.id} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#f1ca7e] border-2 border-[#5a0d1b] shadow-[0_0_8px_rgba(241,202,126,0.6)]" />

              {/* Event Card */}
              <div className="rounded-xl border border-[#89192c] bg-[#701020]/80 backdrop-blur-md p-3.5 shadow-md shadow-[#5a0d1b]/50 hover:border-[#f1ca7e]/60 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-[#5a0d1b] text-[#f1ca7e] text-[9px] font-bold uppercase tracking-wider border border-[#89192c]">
                    {event.day}
                  </span>
                  <span className="text-[10px] font-bold text-[#f1ca7e]">
                    {event.time}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#f8eee1] tracking-tight">
                  {event.title}
                </h3>

                <p className="mt-1 text-[11px] text-[#e8dcc6] leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-2 pt-1.5 border-t border-[#89192c]/60 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#f1ca7e]">
                    {event.badge}
                  </span>
                  <span className="text-[9px] font-medium text-[#e8dcc6]/70">
                    Official AES Itinerary
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════
          2. DESKTOP VIEW (>= 768px): Silky Horizontal Scrub
          ═════════════════════════════════════════════════ */}
      <div className="hidden md:block h-[220vw] w-full relative">
        <div className="h-screen w-full sticky top-0 pt-[8%] overflow-hidden relative z-10">
          <div
            ref={wholeSliderRef}
            className="mr-[2vw] flex h-[30vw] w-[210vw] items-center gap-[4vw] px-[5vw]"
          >
            {/* Header Station (Replacing Stock Photo Monument) */}
            <div className="h-full w-[26vw] flex flex-col justify-between p-8 rounded-3xl border-2 border-[#89192c] bg-[#701020]/90 shadow-2xl shrink-0 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#f1ca7e]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e] block mb-3">
                  Summit Itinerary
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#f8eee1] leading-[0.95] tracking-tight">
                  {title}
                </h2>
                <p className="mt-4 text-sm text-[#e8dcc6] leading-relaxed font-medium">
                  Experience three intensive days of entrepreneurship, competitive masterclasses, and executive mentorship.
                </p>
              </div>

              <div className="pt-6 border-t border-[#89192c]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f1ca7e]">
                    Dates
                  </span>
                  <span className="text-xs font-black text-[#f8eee1]">
                    {periodLabel}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f1ca7e]">
                    Venue
                  </span>
                  <span className="text-xs font-black text-[#f8eee1]">
                    Alpha College Karachi
                  </span>
                </div>
              </div>
            </div>

            {/* Horizontal Timeline Track */}
            <div className="relative h-full w-full">
              {/* Center Track Line */}
              <div className="w-full absolute left-0 top-[50%] -translate-y-1/2 flex items-center h-fit pointer-events-none z-20">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#89192c] rounded-full" />
                <div className="h-[.8vw] w-[.8vw] rounded-full shrink-0 relative z-10 bg-[#f1ca7e] shadow-[0_0_10px_rgba(241,202,126,0.6)]" />
                <div className="h-[2px] w-[0%] rounded-full journey-line relative z-10 bg-[#f1ca7e] shadow-[0_0_8px_rgba(241,202,126,0.5)]" />
                <div className="h-[.8vw] w-[.8vw] rounded-full shrink-0 relative z-10 bg-[#f1ca7e] shadow-[0_0_10px_rgba(241,202,126,0.6)]" />
              </div>

              {/* Top Half */}
              <div className="flex h-1/2 w-full items-stretch justify-start gap-[12vw]">
                {topData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[26vw] px-[2vw] flex flex-col"
                  >
                    <div className="flex-1 flex flex-col justify-start pt-[1vw]">
                      <h4
                        className={`title-${item.id} text-[2.2vw] font-black tracking-tight leading-none text-[#f8eee1]`}
                      >
                        <span>{item.year}</span>{' '}
                        <span className="text-sm font-bold text-[#f1ca7e] block mt-1">
                          {item.month}
                        </span>
                      </h4>
                      <p
                        className={`description-${item.id} mt-[0.6vw] w-[95%] text-[1.1vw] leading-[1.35] text-[#e8dcc6] font-medium`}
                      >
                        {item.content}
                      </p>
                    </div>

                    {/* Stem + Dot */}
                    <div className="relative w-0 flex flex-col items-center pointer-events-none h-[35%]">
                      <div className={`w-px flex-1 jl-${item.id} bg-[#f1ca7e] origin-top`} />
                      <div
                        className={`size-[0.9vw] aspect-square rounded-full shrink-0 jd-${item.id} bg-[#f1ca7e] shadow-[0_0_10px_rgba(241,202,126,0.5)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Half */}
              <div className="h-1/2 flex items-stretch justify-start w-full gap-[12vw] ml-[8vw]">
                {bottomData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[26vw] px-[2vw] flex flex-col"
                  >
                    {/* Dot + Stem */}
                    <div className="relative w-0 flex flex-col items-center pointer-events-none h-[35%]">
                      <div
                        className={`size-[0.9vw] aspect-square rounded-full shrink-0 jd-${item.id} bg-[#f1ca7e] shadow-[0_0_10px_rgba(241,202,126,0.5)]`}
                      />
                      <div className={`w-px flex-1 jl-${item.id} bg-[#f1ca7e] origin-top`} />
                    </div>

                    <div className="flex-1 flex flex-col justify-end pb-[1vw]">
                      <h4
                        className={`title-${item.id} text-[2.2vw] font-black tracking-tight leading-none text-[#f8eee1]`}
                      >
                        <span>{item.year}</span>{' '}
                        <span className="text-sm font-bold text-[#f1ca7e] block mt-1">
                          {item.month}
                        </span>
                      </h4>
                      <p
                        className={`description-${item.id} mt-[0.6vw] w-[95%] text-[1.1vw] leading-[1.35] text-[#e8dcc6] font-medium`}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
