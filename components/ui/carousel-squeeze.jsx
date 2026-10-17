'use client';

import React, {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Prevent SSR layout effect warning in Next.js
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/* -------------------------------------------------------------------------- */
/*                                  geometry                                  */
/* -------------------------------------------------------------------------- */

const size = (value) => (typeof value === 'number' ? `${value}px` : value);

const clamp = (value, low, high) => Math.max(low, Math.min(high, value));

/**
 * The row is four columns and a tail of slats, and it is a strip that slides
 * rather than a ring that turns.
 */
const SHARES = [-0.06, 0.61, 0.3, 0.15];

/** The hovered column takes more room. */
const STRETCHED = [0, 0.71, 0.4, 0.25];

/** Its neighbours give a little up to pay for it. */
const SQUEEZED = [-0.12, 0.59, 0.28, 0.13];

/* -------------------------------------------------------------------------- */
/*                                    hooks                                   */
/* -------------------------------------------------------------------------- */

/** True while the user prefers reduced motion. */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener('change', read);
    return () => query.removeEventListener('change', read);
  }, []);

  return reduced;
}

/* -------------------------------------------------------------------------- */
/*                                 component                                  */
/* -------------------------------------------------------------------------- */

/**
 * SqueezeCarousel (Pure JSX for Next.js)
 * A carousel that gives one active panel the room and squeezes remaining cards into slats.
 * Strictly adheres to DESIGN-RULES.md 7 colors (#5a0d1b, #650d1c, #701020, #89192c, #f8eee1, #e8dcc6, #f1ca7e).
 */
export function SqueezeCarousel({
  slides = [],
  defaultIndex = 0,
  onIndexChange,
  height = 'clamp(240px, 34cqi, 400px)',
  slatWidth = 8,
  slatGap = 8,
  gap = 16,
  radius = 12,
  duration = 900,
  hoverGrow = true,
  autoplay = false,
  interval = 6000,
  controls = true,
  accent = 'var(--sq-accent, var(--primary, #f1ca7e))',
  accentForeground = 'var(--sq-accent-foreground, var(--primary-foreground, #5a0d1b))',
  label = 'Featured',
  panelClassName,
  className,
  style,
  ...props
}) {
  const count = slides ? slides.length : 0;
  const wrap = useCallback(
    (i) => (count > 0 ? ((i % count) + count) % count : 0),
    [count]
  );

  // Four columns plus a tail of slats. Fewer slides, shorter tail.
  const slats = clamp(count - 4, 1, 3);
  const visible = 4 + slats;

  const reduced = useReducedMotion();
  const ms = reduced ? 0 : duration;

  const ids = useId();
  const seed = useRef(0);
  const strip = useRef(null);

  /* --- the strip -------------------------------------------------------- */

  const [cards, setCards] = useState(() =>
    Array.from({ length: visible }, (_, p) => ({
      key: `init-${p}`,
      slide: wrap(defaultIndex + p),
    }))
  );
  const [column, setColumn] = useState(0);
  const columnRef = useRef(0);
  const forward = useRef(true);
  const [slid, setSlid] = useState(0);
  const [still, setStill] = useState(false);
  const [hover, setHover] = useState(-1);

  const open = cards[-column]?.slide ?? defaultIndex;
  const timers = useRef([]);

  useEffect(() => {
    const activeTimers = timers.current;
    return () => activeTimers.forEach(clearTimeout);
  }, []);

  const settle = useCallback(() => {
    setCards((stripCards) =>
      forward.current ? stripCards.slice(-visible) : stripCards.slice(0, visible)
    );
    columnRef.current = 0;
    setColumn(0);
    setSlid(0);
    setStill(true);
  }, [visible]);

  useIsomorphicLayoutEffect(() => {
    if (!still) return;
    const id = requestAnimationFrame(() => setStill(false));
    return () => cancelAnimationFrame(id);
  }, [still]);

  const step = useCallback(
    (by) => {
      if (count < 2 || by === 0) return;

      timers.current.forEach(clearTimeout);
      timers.current = [];
      forward.current = by > 0;

      if (by > 0) {
        setCards((stripCards) => [
          ...stripCards,
          ...Array.from({ length: by }, (_, k) => ({
            key: seed.current++,
            slide: wrap(stripCards[stripCards.length - 1].slide + 1 + k),
          })),
        ]);
        columnRef.current -= by;
        setColumn(columnRef.current);
        setSlid((s) => s - by);
      } else {
        setCards((stripCards) => [
          ...Array.from({ length: -by }, (_, k) => ({
            key: seed.current++,
            slide: wrap(stripCards[0].slide - (-by - k)),
          })),
          ...stripCards,
        ]);
        setSlid((s) => s + by);
        setStill(true);
        timers.current.push(window.setTimeout(() => setSlid(0), 0));
      }

      timers.current.push(window.setTimeout(settle, ms + 20));
    },
    [count, ms, settle, wrap]
  );

  useEffect(() => {
    onIndexChange?.(open);
  }, [open, onIndexChange]);

  /* --- autoplay --------------------------------------------------------- */

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused || reduced || count < 2) return;
    const timer = window.setTimeout(() => step(1), interval);
    return () => clearTimeout(timer);
  }, [autoplay, paused, reduced, count, open, interval, step]);

  /* --- keyboard --------------------------------------------------------- */

  const onKeyDown = (event) => {
    const moves = { ArrowRight: 1, ArrowLeft: -1 };
    const by = moves[event.key];
    if (by === undefined) return;
    event.preventDefault();
    step(by);
  };

  if (!count || !slides || slides.length === 0) return null;

  /* --- render ----------------------------------------------------------- */

  const slat = size(slatWidth);
  const shares = hoverGrow && hover >= 0 && hover <= 3 && !reduced ? null : SHARES;

  const shareOf = (col) => {
    if (shares) return SHARES[col];
    return hover === col ? STRETCHED[col] : SQUEEZED[col];
  };

  const widthOf = (col) => {
    if (col < 0 || col > 3) return slat;
    if (col === 0) return `calc(var(--sq-hero) + var(--sq-room) * ${shareOf(0)})`;
    return `calc(var(--sq-room) * ${shareOf(col)})`;
  };

  const vars = {
    '--sq-h': size(height),
    '--sq-gap': size(gap),
    '--sq-slat-gap': size(slatGap),
    '--sq-radius': size(radius),
    '--sq-ms': `${ms}ms`,
    '--sq-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
    '--sq-fill': accent,
    '--sq-on-fill': accentForeground,
    '--sq-hero': 'calc(var(--sq-h) * 16 / 9)',
    '--sq-room': `max(0px, calc(100cqi - var(--sq-hero) - ${
      slats
    } * var(--sq-slat-gap) - 3 * var(--sq-gap) - ${slats} * ${slat}))`,
  };

  const move = `translateX(calc(${slid} * (${slat} + var(--sq-gap))))`;

  return (
    <div
      className={cn('@container flex w-full flex-col', className)}
      style={{
        containerType: 'inline-size',
        fontFamily: 'var(--font-geist-sans), "Geist", system-ui, sans-serif',
        ...vars,
        ...style,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setHover(-1);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      {...props}
    >
      {controls && count > 1 && (
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f1ca7e] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#e8dcc6]">
              {count} Modules Active
            </span>
          </div>
          <div className="flex justify-end gap-2">
            <Arrow back label="Previous" onClick={() => step(-1)} />
            <Arrow label="Next" onClick={() => step(1)} />
          </div>
        </div>
      )}

      <div className="w-full overflow-hidden" style={{ height: 'var(--sq-h)' }}>
        <div
          ref={strip}
          role="tablist"
          aria-label={label}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="flex h-full w-max"
          style={{
            transform: move,
            transition: still ? 'none' : `transform var(--sq-ms) var(--sq-ease)`,
          }}
        >
          {cards.map((card, place) => {
            const col = place + column;
            const slide = slides[card.slide];
            if (!slide) return null;
            const front = col === 0;

            return (
              <button
                key={card.key}
                type="button"
                role="tab"
                id={`${ids}-tab-${card.key}`}
                aria-selected={front}
                aria-controls={`${ids}-panel`}
                aria-label={slide.title}
                tabIndex={front ? 0 : -1}
                onMouseMove={() => hoverGrow && setHover(col)}
                onClick={() => col > 0 && step(col)}
                className={cn(
                  'relative isolate h-full shrink-0 cursor-pointer overflow-hidden bg-[#5a0d1b] p-0 border border-[#89192c]',
                  'outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                  'focus-visible:ring-[#f1ca7e] focus-visible:ring-offset-[#5a0d1b]',
                  panelClassName
                )}
                style={{
                  width: widthOf(col),
                  marginLeft:
                    place === 0 ? 0 : col < 4 ? 'var(--sq-gap)' : 'var(--sq-slat-gap)',
                  borderRadius: `min(var(--sq-radius), calc(${widthOf(col)} / 2))`,
                  transitionProperty: 'width, margin-left',
                  transitionDuration: still ? '0s' : 'var(--sq-ms)',
                  transitionTimingFunction: 'var(--sq-ease)',
                }}
              >
                <Picture slide={slide} />

                {slide.overlay && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end p-4 pt-16 @lg:p-6 @lg:pt-20 bg-gradient-to-t from-[#5a0d1b]/95 via-[#5a0d1b]/45 to-transparent"
                    style={{
                      opacity: front ? 1 : 0,
                      transition: `opacity var(--sq-ms) var(--sq-ease)`,
                    }}
                  >
                    {slide.overlay}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={`${ids}-panel`}
        role="tabpanel"
        aria-live="polite"
        className="mt-6 grid @xl:mt-7"
      >
        {slides.map((slide, i) => {
          if (!slide) return null;
          const shown = i === open;

          return (
            <div
              key={slide.id ?? i}
              aria-hidden={!shown}
              className={cn(
                'col-start-1 row-start-1 flex flex-col gap-4',
                '@xl:flex-row @xl:items-start @xl:justify-between @xl:gap-10'
              )}
              style={{
                opacity: shown ? 1 : 0,
                visibility: shown ? 'visible' : 'hidden',
                pointerEvents: shown ? 'auto' : 'none',
                transition: `opacity var(--sq-ms) var(--sq-ease), visibility var(--sq-ms)`,
              }}
            >
              <p className="max-w-[48rem] text-[15px] leading-[1.65] text-balance @lg:text-[17px]">
                <span className="font-semibold text-[#f8eee1]">{slide.title}</span>{' '}
                {slide.description && (
                  <span className="text-[#e8dcc6]">{slide.description}</span>
                )}
              </p>

              {slide.action && <Action slide={slide} shown={shown} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   pieces                                   */
/* -------------------------------------------------------------------------- */

/**
 * Next.js Image component wrapper.
 * Kept at a fixed 16:9 box centered via negative translateX, avoiding mid-slide layout jumps.
 */
function Picture({ slide }) {
  const box = {
    width: 'var(--sq-hero)',
    minWidth: '100%',
  };

  if (slide.image) {
    return (
      <div
        className="absolute inset-y-0 left-1/2 h-full -translate-x-1/2 overflow-hidden pointer-events-none"
        style={box}
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt || slide.title || 'Module preview'}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1200px"
          className="object-cover select-none"
          priority={false}
        />
      </div>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="absolute inset-y-0 left-1/2 -translate-x-1/2"
      style={{ background: slide.background, ...box }}
    />
  );
}

function Arrow({ back = false, label, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        'grid size-9 cursor-pointer place-items-center rounded-lg',
        'bg-[#f1ca7e] text-[#5a0d1b] font-bold',
        'transition-all duration-300 hover:scale-105 hover:bg-[#f8eee1] active:scale-95 outline-none',
        'focus-visible:ring-2 focus-visible:ring-[#f1ca7e]',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-[#5a0d1b] border border-[#89192c] shadow-sm'
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d={
            back
              ? 'M9.6 2.6 5.1 7.1h9.1v1.8H5.1l4.5 4.5-1.2 1.2-6-6L1.8 8l.6-.6 6-6 1.2 1.2Z'
              : 'M6.4 2.6l4.5 4.5H1.8v1.8h9.1l-4.5 4.5 1.2 1.2 6-6 .6-.6-.6-.6-6-6-1.2 1.2Z'
          }
        />
      </svg>
    </button>
  );
}

function Action({ slide, shown }) {
  const inside = (
    <>
      <span>{slide.action}</span>
      <svg
        width="8"
        height="10"
        viewBox="0 0 6 9"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/sq-action:translate-x-1"
      >
        <path
          d="M1.2 1 4.7 4.5 1.2 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  const dress = cn(
    'group/sq-action inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full',
    'bg-[#f1ca7e] px-5 py-2.5 text-sm font-semibold text-[#5a0d1b]',
    'transition-all duration-300 hover:bg-[#f8eee1] hover:scale-[1.03] active:scale-[0.98] outline-none',
    'focus-visible:ring-2 focus-visible:ring-[#f1ca7e]',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-[#5a0d1b] shadow-md shadow-[#5a0d1b]/30'
  );

  if (slide.href) {
    return (
      <a
        href={slide.href}
        target={slide.target}
        rel={slide.target === '_blank' ? 'noreferrer' : undefined}
        tabIndex={shown ? 0 : -1}
        onClick={slide.onAction}
        className={dress}
      >
        {inside}
      </a>
    );
  }

  return (
    <button
      type="button"
      tabIndex={shown ? 0 : -1}
      onClick={slide.onAction}
      className={dress}
    >
      {inside}
    </button>
  );
}

export default SqueezeCarousel;
