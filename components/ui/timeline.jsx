'use client';

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from 'react';
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
      scope && typeof scope === 'object' && 'current' in scope
        ? scope.current
        : scope;
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
    month: '09:00 AM',
    content: 'Summit Inauguration & Global Keynotes: Setting the Frontier Agenda',
  },
  {
    id: 'day1-afternoon',
    year: 'Day 01',
    month: '02:30 PM',
    content: 'The Venture Sprint: Seed & Pre-Series Pitch Arena with Institutional VCs',
  },
  {
    id: 'day2-afternoon',
    year: 'Day 02',
    month: '01:30 PM',
    content: 'AI Frontier Hackathon Sprint & Tactical Engineering Masterclasses',
  },
  {
    id: 'day3-afternoon',
    year: 'Day 03',
    month: '03:00 PM',
    content: 'The Executive Deal Room: Private LP Receptions & Co-Investment Circles',
  },
];

export const defaultBottomJourneyData = [
  {
    id: 'day1-evening',
    year: 'Day 01',
    month: '06:30 PM',
    content: 'Angel Syndicate Fireside & Closed-Door Founder Mixer',
  },
  {
    id: 'day2-evening',
    year: 'Day 02',
    month: '05:00 PM',
    content: 'Corporate Case Crack Turnaround Defense before Managing Partners',
  },
  {
    id: 'day3-evening',
    year: 'Day 03',
    month: '07:30 PM',
    content: 'PKR 1.5M+ Prize Distribution, Grand Gala & Global Networking',
  },
];

export default function Timeline({
  id = 'schedule',
  title = 'Summit Itinerary',
  periodLabel = 'Nov 07 — 09, 2026',
  textColor = '#382A24',
  mutedTextColor = '#4B5563',
  activeColor = '#2B1E18',
  backgroundColor = '#F5F2EB',
  accentColor = '#B09B8C',
  borderColor = '#EBE6DC',
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

  const sectionStyle = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle = {
    backgroundColor: activeColor,
    boxShadow: `0 0 10px ${activeColor}33`,
  };
  const mutedTextStyle = {
    color: mutedTextColor,
  };

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

      tl.fromTo(
        wholeSliderRef.current,
        { xPercent: 0 },
        { xPercent: slidePercent }
      );

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
        // Top items: stem grows downward from top to center line
        // Bottom items: stem grows downward from center line to bottom
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
              [18, 28], [22, 32],
              [30, 40], [34, 44],
              [44, 54], [48, 58],
              [58, 68],
            ]
          : [
              [6, 22], [10, 26],
              [20, 36], [24, 40],
              [38, 54], [42, 58],
              [56, 72],
            ];

      items.forEach((item, index) => {
        const [startPos, endPos] = positions[index] || [
          6 + index * 8,
          22 + index * 8,
        ];
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
      className="h-[200vw] max-[600px]:h-[400vh] w-full relative select-none"
      style={sectionStyle}
    >
      {/* Warm ambient background glow for light mode */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, #FFFFFF 0%, #F5F2EB 60%, #EFEBE1 100%)',
          opacity: 0.6,
        }}
      />

      <div className="h-screen w-full sticky top-[0%] pt-[10%] overflow-hidden max-[600px]:top-[5%] relative z-10">
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[30vw] w-[240vw] items-center gap-[5vw] px-[5vw] max-[600px]:h-[80vh] max-[600px]:w-[800vw] max-[600px]:px-[7vw]"
        >
          {/* Main Visual Monument */}
          <div className="h-full w-[30vw] overflow-hidden rounded-[1.25vw] max-[600px]:h-[65vw] max-[600px]:w-[85vw] max-[600px]:rounded-[4vw] border border-[#EBE6DC] shadow-xl relative group shrink-0 bg-white">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 600px) 85vw, 30vw"
              draggable={false}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle ambient vignette on visual */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#281A14]/35 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#EBE6DC] text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#2B1E18] shadow-sm">
                AES MAIN STAGE
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F4EFEA] drop-shadow-md">
                2026 SUMMIT
              </span>
            </div>
          </div>

          <div className="relative h-full w-full">
            {/* ═══ Center Track Line with Guide Rail & Glowing Endcaps ═══ */}
            <div className="w-full absolute left-0 top-[50%] -translate-y-1/2 flex items-center h-fit pointer-events-none z-20">
              {/* Subtle background guide rail in #EBE6DC */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#EBE6DC] rounded-full" />

              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0 relative z-10"
                style={activeStyle}
              />
              <div
                className="h-[2px] w-[0%] rounded-full journey-line relative z-10"
                style={{ backgroundColor: activeColor, boxShadow: `0 0 8px ${activeColor}33` }}
              />
              <div
                className="h-[.8vw] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shrink-0 relative z-10"
                style={activeStyle}
              />
            </div>

            {/* ═══ Top Half: Content above center line ═══
                 Layout: stem hangs from content down to center line
                 Structure per item (top to bottom):
                   - Text content (year/month + description)
                   - Vertical stem line (grows downward)
                   - Dot (anchored at bottom, touching center line)
            */}
            <div className="flex h-1/2 w-full items-stretch justify-start gap-[.5vw]">
              <div className="h-full w-[20%] pt-[2vw] max-[600px]:h-fit max-[600px]:pt-[5vw]">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B09B8C] block mb-2">
                  Timeline
                </span>
                <h2 className="w-[85%] text-[3vw] font-bold tracking-tight leading-[0.95] max-[600px]:text-[8.5vw] text-[#382A24]">
                  {title}
                </h2>
              </div>

              <div className="w-full flex h-full gap-x-[15vw] max-[600px]:gap-x-[40vw]">
                {topData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[30vw] px-[3vw] flex flex-col max-[600px]:w-[70vw] max-[600px]:px-[7vw]"
                  >
                    {/* Text Content — pushed to top */}
                    <div className="flex-1 flex flex-col justify-start pt-[1vw]">
                      <h4
                        className={`title-${item.id} text-[2.5vw] font-bold tracking-tight leading-none max-[600px]:text-[6.4vw] text-[#2B1E18]`}
                      >
                        <span className="text-[#2B1E18]">{item.year}</span>{' '}
                        <span className="text-[1.2vw] sm:text-base font-semibold text-[#B09B8C]">
                          {item.month}
                        </span>
                      </h4>
                      <p
                        className={`description-${item.id} mt-[0.6vw] w-[90%] text-[1.4vw] leading-[1.3] max-[600px]:w-[90%] max-[600px]:text-[4.8vw] text-[#4B5563]`}
                      >
                        {item.content}
                      </p>
                    </div>

                    {/* Stem + Dot — anchored at bottom, connecting to center line */}
                    <div className="relative w-0 flex flex-col items-center pointer-events-none" style={{ height: '40%' }}>
                      <div
                        className={`w-px flex-1 jl-${item.id}`}
                        style={{ backgroundColor: activeColor, transformOrigin: 'top' }}
                      />
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] aspect-square rounded-full shrink-0 jd-${item.id}`}
                        style={activeStyle}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ Bottom Half: Content below center line ═══
                 Layout: stem drops from center line down to content
                 Structure per item (top to bottom):
                   - Dot (anchored at top, touching center line)
                   - Vertical stem line (grows downward)
                   - Text content (year/month + description)
            */}
            <div className="h-1/2 flex items-stretch justify-start w-full">
              <div className="w-[34%] pt-[2vw] max-[600px]:pt-[5vw] max-[600px]:w-[30%] h-full">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B09B8C] block mb-2">
                  Summit Dates
                </span>
                <p
                  className="text-[1.65vw] font-bold leading-none max-[600px]:text-[4.2vw] text-[#382A24]"
                >
                  {periodLabel}
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[20vw] ml-[7vw] max-[600px]:gap-x-[40vw] max-[600px]:ml-[7vw]">
                {bottomData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[25vw] px-[3vw] flex flex-col max-[600px]:w-[70vw] max-[600px]:px-[7vw]"
                  >
                    {/* Dot + Stem — anchored at top, connecting from center line */}
                    <div className="relative w-0 flex flex-col items-center pointer-events-none" style={{ height: '40%' }}>
                      <div
                        className={`size-[1vw] max-[600px]:size-[2.5vw] aspect-square rounded-full shrink-0 jd-${item.id}`}
                        style={activeStyle}
                      />
                      <div
                        className={`w-px flex-1 jl-${item.id}`}
                        style={{ backgroundColor: activeColor, transformOrigin: 'top' }}
                      />
                    </div>

                    {/* Text Content — pushed to bottom */}
                    <div className="flex-1 flex flex-col justify-end pb-[1vw]">
                      <h4
                        className={`title-${item.id} text-[2.5vw] font-bold tracking-tight leading-none max-[600px]:text-[6.4vw] text-[#2B1E18]`}
                      >
                        <span className="text-[#2B1E18]">{item.year}</span>{' '}
                        <span className="text-[1.2vw] sm:text-base font-semibold text-[#B09B8C]">
                          {item.month}
                        </span>
                      </h4>
                      <p
                        className={`description-${item.id} mt-[0.6vw] w-[90%] text-[1.4vw] leading-[1.3] max-[600px]:w-[90%] max-[600px]:text-[4.8vw] text-[#4B5563]`}
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
