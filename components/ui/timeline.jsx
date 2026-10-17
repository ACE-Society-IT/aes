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

// Default AES Summit Schedule Datasets
export const defaultTopJourneyData = [
  {
    id: 'day1-morning',
    year: 'Day 01',
    month: '02:00 PM - 03:15 PM',
    content: 'Summit Inauguration & Student Registration',
  },
  {
    id: 'day1-afternoon',
    year: 'Day 01',
    month: '03:30 PM - 07:30 PM',
    content: 'Venture Verse , Defend The Empire & Investomania',
  },
  {
    id: 'day2-afternoon',
    year: 'Day 02',
    month: '01:00 PM - 08:30 PM',
    content: 'Viral Velocity , Defend The Empire , Investomania & Market Monopoly ',
  },
  {
    id: 'day3-afternoon',
    year: 'Day 03',
    month: '09:00 AM - 08:30 PM',
    content:
      'The Finale Rounds of Venture Verse , Viral Velocity , Defend The Empire , Investomania & Market Monopoly ',
  },
];

export const defaultBottomJourneyData = [
  {
    id: 'day1-evening',
    year: 'Day 01',
    month: '07:30 PM',
    content: 'Day 1 Conclusion',
  },
  {
    id: 'day2-evening',
    year: 'Day 02',
    month: '08:30 PM',
    content: 'Day 2 Conclusion',
  },
  {
    id: 'day3-evening',
    year: 'Day 03',
    month: '06:30 PM - 09:30 PM',
    content: 'Closing Ceremony and Dinner',
  },
];

export default function Timeline({
  id = 'schedule',
  title = 'Summit Itinerary',
  periodLabel = 'Nov 07 — 09, 2026',
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
      const section = sectionRef.current;
      if (!section) return;

      const isMobile = window.innerWidth < 600;
      const slidePercent = isMobile ? -57 : -65;
      const lineWidth = isMobile ? '65%' : '98%';
      const lineStart = isMobile ? 'top 30%' : 'top 25%';
      const slideEnd = isMobile ? '82% 50%' : '92% bottom';
      const lineEnd = isMobile ? '80% 50%' : '92% bottom';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: slideEnd,
          scrub: true,
        },
        defaults: {
          ease: 'none',
        },
      });

      tl.fromTo(wholeSliderRef.current, { xPercent: 0 }, { xPercent: slidePercent });

      if (reducedMotion) {
        gsap.set('.journey-line', { width: lineWidth });
        return;
      }

      gsap.to('.journey-line', {
        width: lineWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: lineStart,
          end: lineEnd,
          scrub: true,
        },
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef }
  );

  useGSAP(
    () => {
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

      // Set initial hidden states for stems, dots and text
      items.forEach((item) => {
        gsap.set(`.jl-${item.id}`, {
          scaleY: 0,
          transformOrigin: item._isTop ? 'top top' : 'top top',
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
            type: 'chars, words, lines',
            mask: 'lines',
          });

          descriptionSplits[item.id] = new SplitText(`.description-${item.id}`, {
            type: 'chars, words, lines',
            mask: 'lines',
          });
        } catch {
          // Fallback if DOM element is not yet ready
        }
      });

      const createItemTimeline = (item, startPos, endPos) => {
        const lineSelector = `.jl-${item.id}`;
        const dotSelector = `.jd-${item.id}`;
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
          .to(lineSelector, {
            scaleY: 1,
            duration: normalizedDuration * 0.4,
          })
          .to(
            dotSelector,
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

      // Interleaved positions so top/bottom items animate together
      const positions =
        window.innerWidth < 600
          ? [
              [18, 28],
              [22, 32],
              [30, 40],
              [34, 44],
              [44, 54],
              [48, 58],
              [58, 68],
            ]
          : [
              [6, 22],
              [10, 26],
              [20, 36],
              [24, 40],
              [38, 54],
              [42, 58],
              [56, 72],
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
      className="h-[200vw] max-[600px]:h-[400vh] w-full relative select-none bg-[#f8eee1] text-[#5a0d1b]"
    >
      {/* Warm ambient background glow for light mode */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_30%,#f8eee1_0%,#e8dcc6_60%,#f8eee1_100%)] opacity-60" />

      <div className="h-screen w-full sticky top-[0%] pt-[10%] overflow-hidden max-[600px]:top-[5%] relative z-10">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[30vw] w-[240vw] items-center gap-[5vw] px-[5vw] max-[600px]:h-[80vh] max-[600px]:w-[800vw] max-[600px]:px-[7vw]"
        >
          {/* Main Visual Monument */}
          <div className="h-full w-[30vw] overflow-hidden rounded-[1.25vw] max-[600px]:h-[65vw] max-[600px]:w-[85vw] max-[600px]:rounded-[4vw] border border-[#e8dcc6] shadow-xl relative group shrink-0 bg-[#e8dcc6]/40">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 600px) 85vw, 30vw"
              draggable={false}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle ambient vignette on visual */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5a0d1b]/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1.5 rounded-xl bg-[#f8eee1]/95 backdrop-blur-md border border-[#e8dcc6] text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#5a0d1b] shadow-sm">
                AES MAIN STAGE
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#f8eee1] drop-shadow-md">
                2026 SUMMIT
              </span>
            </div>
          </div>

          <div className="relative h-full w-full">
            {/* ═══ Center Track Line with Guide Rail & Endcaps ═══ */}
            <div className="w-full absolute left-0 top-[50%] -translate-y-1/2 flex items-center h-fit pointer-events-none z-20">
              {/* Background guide rail in #e8dcc6 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#e8dcc6] rounded-full" />

              <div className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0 relative z-10 bg-[#701020] shadow-[0_0_10px_rgba(112,16,32,0.2)]" />
              <div className="h-[2px] w-[0%] rounded-full journey-line relative z-10 bg-[#701020] shadow-[0_0_8px_rgba(112,16,32,0.2)]" />
              <div className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0 relative z-10 bg-[#701020] shadow-[0_0_10px_rgba(112,16,32,0.2)]" />
            </div>

            {/* ═══ Top Half: Content above center line ═══ */}
            <div className="flex h-1/2 w-full items-stretch justify-start gap-[.5vw]">
              <div className="h-full w-[20%] pt-[2vw] max-[600px]:h-fit max-[600px]:pt-[5vw]">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020] block mb-2">
                  Timeline
                </span>
                <h2 className="w-[85%] text-[3vw] font-bold tracking-tight leading-[0.95] max-[600px]:text-[8.5vw] text-[#5a0d1b]">
                  {title}
                </h2>
              </div>

              <div className="w-full flex h-full gap-x-[15vw] max-[600px]:gap-x-[40vw]">
                {topData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[30vw] px-[3vw] flex flex-col max-[600px]:w-[70vw] max-[600px]:px-[7vw]"
                  >
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-start pt-[1vw]">
                      <h4
                        className={`title-${item.id} text-[2.5vw] font-bold tracking-tight leading-none max-[600px]:text-[6.4vw] text-[#5a0d1b]`}
                      >
                        <span className="text-[#5a0d1b]">{item.year}</span>{' '}
                        <span className="text-[1.2vw] sm:text-base font-semibold text-[#701020]">
                          {item.month}
                        </span>
                      </h4>
                      <p
                        className={`description-${item.id} mt-[0.6vw] w-[90%] text-[1.4vw] leading-[1.3] max-[600px]:w-[90%] max-[600px]:text-[4.8vw] text-[#650d1c]`}
                      >
                        {item.content}
                      </p>
                    </div>

                    {/* Stem + Dot */}
                    <div className="relative w-0 flex flex-col items-center pointer-events-none h-[40%]">
                      <div
                        className={`w-px flex-1 jl-${item.id} bg-[#701020] origin-top`}
                      />
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] aspect-square rounded-full shrink-0 jd-${item.id} bg-[#701020] shadow-[0_0_10px_rgba(112,16,32,0.2)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ Bottom Half: Content below center line ═══ */}
            <div className="h-1/2 flex items-stretch justify-start w-full">
              <div className="w-[34%] pt-[2vw] max-[600px]:pt-[5vw] max-[600px]:w-[30%] h-full">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020] block mb-2">
                  Summit Dates
                </span>
                <p className="text-[1.65vw] font-bold leading-none max-[600px]:text-[4.2vw] text-[#5a0d1b]">
                  {periodLabel}
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[20vw] ml-[7vw] max-[600px]:gap-x-[40vw] max-[600px]:ml-[7vw]">
                {bottomData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[25vw] px-[3vw] flex flex-col max-[600px]:w-[70vw] max-[600px]:px-[7vw]"
                  >
                    {/* Dot + Stem */}
                    <div className="relative w-0 flex flex-col items-center pointer-events-none h-[40%]">
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] aspect-square rounded-full shrink-0 jd-${item.id} bg-[#701020] shadow-[0_0_10px_rgba(112,16,32,0.2)]`}
                      />
                      <div
                        className={`w-px flex-1 jl-${item.id} bg-[#701020] origin-top`}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-end pb-[1vw]">
                      <h4
                        className={`title-${item.id} text-[2.5vw] font-bold tracking-tight leading-none max-[600px]:text-[6.4vw] text-[#5a0d1b]`}
                      >
                        <span className="text-[#5a0d1b]">{item.year}</span>{' '}
                        <span className="text-[1.2vw] sm:text-base font-semibold text-[#701020]">
                          {item.month}
                        </span>
                      </h4>
                      <p
                        className={`description-${item.id} mt-[0.6vw] w-[90%] text-[1.4vw] leading-[1.3] max-[600px]:w-[90%] max-[600px]:text-[4.8vw] text-[#650d1c]`}
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
