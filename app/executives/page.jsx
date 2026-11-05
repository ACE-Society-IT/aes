'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Team roster rendered in the scroll-driven "Team Intro" section.
 *
 * - `cutout: true`  -> transparent PNG cutout, rendered at 90% width / contain
 *                      at the bottom of the pill (Goodway-style).
 * - `cutout: false` -> regular photo with its own background, rendered as a
 *                      full-bleed cover image so the pill never shows hard edges.
 *
 * TODO: Replace placeholder roles, favourites, contacts and LinkedIn URLs with
 * verified details. Entries using stock photos (eb*, ex*) are placeholders.
 */
const TEAM = [
  {
    firstName: 'Mansoor',
    lastName: 'Moiz',
    role: 'Executive Council',
    image: '/executives/mansoor-moiz.png',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Bareerah',
    lastName: 'Ahmed',
    role: 'Executive Council',
    image: '/executives/bareerah-ahmed.png',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Ayaan',
    lastName: 'Japanwalla',
    role: 'Executive Council',
    image: '/executives/ayaan-japanwalla.jpg',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Executive',
    lastName: 'Member',
    role: 'Executive Board',
    image: '/executives/eb1.webp',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Executive',
    lastName: 'Member',
    role: 'Executive Board',
    image: '/executives/eb2.jpg',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Executive',
    lastName: 'Member',
    role: 'Executive Council',
    image: '/executives/exe3.jpg',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Executive',
    lastName: 'Member',
    role: 'Executive Council',
    image: '/executives/ex4.jpg',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Executive',
    lastName: 'Member',
    role: 'Executive Council',
    image: '/executives/ex1.jpg',
    cutout: false,
    favorites: [
      ['Favourite Film', 'TBA'],
      ['Favourite Song', 'TBA'],
      ['Favourite Series', 'TBA'],
    ],
    phone: null,
    email: null,
    linkedin: '#',
  },
];

/* -------------------------------------------------------------------------- */
/*                               Pill portrait                                */
/* -------------------------------------------------------------------------- */

function PillPortrait({ member }) {
  const alt = `${member.firstName} ${member.lastName}, ${member.role}`;

  return (
    // Mobile: width clamp(140px, 40vw, 165px) and tall ~1:2.6 stadium height clamp(380px, 50vh, 440px).
    // Desktop (md+): width clamp(280px, 30vw, 420px) and height clamp(390px, 42vw, 580px).
    <div
      data-pill-wrap
      className="flex h-[clamp(380px,50vh,440px)] w-[clamp(140px,40vw,165px)] shrink-0 items-center justify-center md:h-[clamp(390px,42vw,580px)] md:w-[clamp(280px,30vw,420px)]"
    >
      <div
        data-pill
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-[#5a0d1b] via-[#701020] to-[#89192c] shadow-2xl shadow-[#5a0d1b]/25 will-change-[height,transform]"
      >
        {/* Soft radial glow for depth (bottom-right richer mid-tone) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,#89192c_0%,transparent_65%)]"
        />

        {member.cutout ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            data-pill-img
            src={member.image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-x-0 bottom-0 mx-auto h-auto w-[90%] object-contain will-change-transform"
          />
        ) : (
          // Oversized height (118% of full pill height) anchored at top so:
          // - At yPercent: 75 (mobile entry), the top ~80% of the capsule is visibly empty.
          // - At yPercent: 0 (viewport center), the portrait fills the capsule cleanly.
          // - At yPercent: -15 (exit drift), the bottom of the pill never exposes a gap.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            data-pill-img
            src={member.image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-x-0 top-0 h-[calc(clamp(380px,50vh,440px)*1.18)] w-full shrink-0 object-cover object-[50%_20%] will-change-transform md:h-[calc(clamp(390px,42vw,580px)*1.18)]"
          />
        )}

        {/* Inner hairline rim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[#f1ca7e]/20"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Text block                                 */
/* -------------------------------------------------------------------------- */

function MemberInfo({ member, alignRight }) {
  return (
    <div
      className={`flex w-full max-w-md flex-col justify-center ${
        alignRight ? 'text-right' : 'text-left'
      }`}
    >
      <h3
        data-reveal
        className="font-display text-[clamp(2.15rem,8.5vw,3.1rem)] font-normal uppercase leading-[0.88] tracking-[-0.02em] text-[#5a0d1b] md:text-[clamp(3rem,5.5vw,5.25rem)]"
      >
        <span className="block">{member.firstName}</span>
        <span className="block">{member.lastName}</span>
      </h3>

      <p
        data-reveal
        className="mb-4 mt-1.5 font-display text-[clamp(1rem,3.8vw,1.3rem)] uppercase leading-[0.95] text-[#5a0d1b] md:mb-6 md:mt-[0.35rem] md:text-[clamp(1.25rem,2vw,1.85rem)] md:leading-none"
      >
        {member.role}
      </p>

      <ul
        data-reveal
        className="font-condensed text-[0.85rem] leading-[1.4] text-[#5a0d1b] sm:text-[0.95rem] md:text-[1.05rem] md:leading-[1.45]"
      >
        {member.favorites.map(([label, value]) => (
          <li key={label}>
            <span className="font-semibold">{label}:</span> {value}
          </li>
        ))}
      </ul>

      <p
        data-reveal
        aria-hidden="true"
        className="my-2.5 font-condensed text-[0.95rem] text-[#5a0d1b] md:my-4 md:text-[1.1rem]"
      >
        -
      </p>

      <div
        data-reveal
        className="font-condensed text-[0.9rem] leading-snug sm:text-[1rem] md:text-[1.1rem]"
      >
        {member.phone && (
          <a
            href={`tel:${member.phone.replace(/\s+/g, '')}`}
            className="block text-[#89192c] transition-opacity duration-300 ease-out hover:opacity-70"
          >
            {member.phone}
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="block break-all lowercase text-[#89192c] transition-opacity duration-300 ease-out hover:opacity-70"
          >
            {member.email}
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-block font-semibold text-[#5a0d1b] underline decoration-2 underline-offset-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:opacity-70 motion-reduce:transition-none motion-reduce:hover:transform-none md:mt-2"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Scroll-driven Team section                        */
/* -------------------------------------------------------------------------- */

function TeamIntro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* ==================================================================== */
      /* MOBILE (max-width: 768px):                                           */
      /* - Fixed "EXECUTIVES" watermark in background                         */
      /* - Single-card viewport cadence                                       */
      /* - Cutout portrait scrub: yPercent 75 -> 0 (at center) -> -15 (exit)  */
      /* ==================================================================== */
      mm.add('(max-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        const rows = gsap.utils.toArray('[data-team-row]');

        rows.forEach((row) => {
          const wrap = row.querySelector('[data-pill-wrap]');
          const img = row.querySelector('[data-pill-img]');

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrap,
              start: 'top 95%',
              end: 'bottom top',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Phase 1 ("top 95%" -> "center center"): Cutout rises from pushed-down
          // initial state (yPercent: 75, leaving top half of capsule empty) to 0.
          // Phase 2 ("center center" -> "bottom top"): Continues subtle upward
          // exit drift to yPercent: -15 as the row leaves the top of the screen.
          tl.fromTo(
            img,
            { yPercent: 75 },
            { yPercent: 0, ease: 'none', duration: 0.5 }
          ).to(img, {
            yPercent: -15,
            ease: 'none',
            duration: 0.5,
          });
        });
      });

      /* ==================================================================== */
      /* DESKTOP (min-width: 769px):                                          */
      /* - Watermark vertical scrub                                           */
      /* - Circle-to-pill evolution + portrait scrub + text entrance          */
      /* ==================================================================== */
      mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '[data-team-watermark]',
          { y: () => -window.innerHeight * 0.1 },
          {
            y: () => window.innerHeight * 0.2,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );

        const rows = gsap.utils.toArray('[data-team-row]');

        rows.forEach((row, index) => {
          const wrap = row.querySelector('[data-pill-wrap]');
          const pill = row.querySelector('[data-pill]');
          const img = row.querySelector('[data-pill-img]');
          const reveals = row.querySelectorAll('[data-reveal]');

          const isFirstRow = index === 0;

          // 1. Evolve the image container from a 1:1 circle (height === width)
          //    into its full vertical stadium pill height on scroll.
          gsap.fromTo(
            pill,
            {
              height: () => wrap.offsetWidth,
            },
            {
              height: () => wrap.offsetHeight,
              ease: 'none',
              scrollTrigger: {
                trigger: wrap,
                start: isFirstRow ? 'top top+=140' : 'top 92%',
                end: isFirstRow ? 'bottom 35%' : 'center 48%',
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            }
          );

          // 2. Scrub the portrait inside the evolving capsule.
          gsap.fromTo(
            img,
            { yPercent: 18, scale: 1.08 },
            {
              yPercent: -12,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: wrap,
                start: isFirstRow ? 'top top+=140' : 'top 92%',
                end: 'bottom 15%',
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );

          // 3. Subtle weightless vertical parallax on the capsule itself.
          gsap.fromTo(
            pill,
            { y: isFirstRow ? 0 : 36 },
            {
              y: -36,
              ease: 'none',
              scrollTrigger: {
                trigger: wrap,
                start: isFirstRow ? 'top top+=140' : 'top bottom',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );

          // 4. Gentle text entrance.
          if (!isFirstRow) {
            gsap.from(reveals, {
              y: 28,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.07,
              scrollTrigger: {
                trigger: row,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            });
          }
        });
      });
    }, section);

    // Re-measure once fonts / images have settled.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert(); // kills every ScrollTrigger / tween / matchMedia created above
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="team-intro-heading"
      className="relative overflow-x-clip bg-[#f8eee1] bg-[linear-gradient(to_right,#89192c1f_1px,transparent_1px),linear-gradient(to_bottom,#89192c1f_1px,transparent_1px)] bg-[length:40px_40px] [clip-path:inset(0)]"
    >
      {/* Giant "EXECUTIVES" background watermark:
          - Fixed in the background on mobile (clipped cleanly to this section via clip-path).
          - Scrubbed vertically via GSAP on desktop.
          - Top padding clears the fixed Navbar so it is never hidden at initial load. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden pt-16 md:pt-24"
      >
        <span
          data-team-watermark
          className="block select-none font-display text-[clamp(4.25rem,18.5vw,18rem)] font-normal uppercase leading-[0.8] text-[#e8dcc6] will-change-transform"
        >
          Executives
        </span>
      </div>

      {/* Top padding clears the fixed Navbar on initial load. */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 pb-20 pt-24 sm:px-6 sm:pt-32 md:px-12 md:pb-[16vh] md:pt-40">
        <h2 id="team-intro-heading" className="sr-only">
          Meet the Executive Team
        </h2>

        {TEAM.map((member, index) => {
          const isOdd = index % 2 === 0; // 1st, 3rd, 5th... (1-based)
          return (
            <article
              key={`${member.image}-${index}`}
              data-team-row
              className="mb-[30vh] flex min-h-[86vh] flex-row items-center justify-between gap-3 last:mb-0 sm:gap-5 md:mb-[16vh] md:min-h-0 md:gap-16"
            >
              {/* Alternating two-column order on both mobile and desktop (~40% Pill / ~60% Text on mobile):
                  - Odd (1st, 3rd, 5th...): Image on left (order-1), right-aligned text on right (order-2)
                  - Even (2nd, 4th, 6th...): Left-aligned text on left (order-1), image on right (order-2) */}
              <div className={isOdd ? 'order-1' : 'order-2'}>
                <PillPortrait member={member} />
              </div>

              <div
                className={`flex basis-[58%] md:basis-auto md:flex-1 ${
                  isOdd ? 'order-2 justify-end' : 'order-1 justify-start'
                }`}
              >
                <MemberInfo member={member} alignRight={isOdd} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function ExecutivesPage() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#5a0d1b] text-[#f8eee1]">
      <Navbar />
      <TeamIntro />
      <Footer />
    </main>
  );
}
