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
 * Each portrait is rendered as a tall vertical photograph (1000x2800 / 1:2.8
 * aspect ratio) inside `.pill-mask`.
 */
const TEAM = [
  {
    firstName: 'Mansoor',
    lastName: 'Moiz',
    role: 'Executive Council',
    image: '/executives/male.jpg',
    favorites: 'Chairman Executive Officer Of Alpha Entrepreneurship summit 2026.',
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Zoya',
    lastName: 'Ehtisham',
    role: 'Executive Council',
    image: '/executives/female.jpg',
    favorites: 'Chief Financial Officer of Alpha Entrepreneurship summit 2026.',
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Bareerah',
    lastName: 'Ahmed',
    role: 'Executive Council',
    image: '/executives/female.jpg',
    favorites: 'Executive Director of Alpha Entrepreneurship summit 2026.',
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Ayaan',
    lastName: 'Japanwalla',
    role: 'Executive Council',
    image: '/executives/male.jpg',
    favorites: 'Media and Marketing Director at Alpha Entrepreneurship summit 2026.',
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Ayan',
    lastName: 'Khurram',
    role: 'Executive Council',
    image: '/executives/male.jpg',
    favorites: 'Module Director at Alpha Entrepreneurship summit 2026.',
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Zobia',
    lastName: 'Khan',
    role: 'Executive Council',
    image: '/executives/female.jpg',
    favorites: 'Director of Communication at Alpha Entrepreneurship summit 2026.',
    phone: null,
    email: null,
    linkedin: '#',
  },
  {
    firstName: 'Ahmed',
    lastName: 'Shahid',
    role: 'Executive Council',
    image: '/executives/male.jpg',
    favorites: 'Director of Operation at Alpha Entrepreneurship summit 2026.',
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
    // Outer wrapper reserves the taller final stadium dimensions so ScrollTrigger
    // measurements stay stable while `[data-pill]` evolves from a 1:1 circle to a tall capsule.
    <div
      data-pill-wrap
      className="flex h-[clamp(440px,62vh,520px)] w-[clamp(145px,40vw,175px)] shrink-0 items-center justify-center md:h-[clamp(580px,76vh,760px)] md:w-[clamp(270px,24vw,350px)]"
    >
      <div
        data-pill
        className="pill-mask relative h-full w-full overflow-hidden rounded-full will-change-[height,transform]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-pill-img
          src={member.image}
          alt={alt}
          width={1000}
          height={2800}
          loading="lazy"
          decoding="async"
          className="tall-parallax-img pointer-events-none absolute top-0 left-0 aspect-[1000/2800] h-[calc(clamp(440px,62vh,520px)*1.85)] min-h-[185%] w-full object-cover object-center will-change-transform md:h-[calc(clamp(580px,76vh,760px)*1.85)]"
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
      className={`member-info flex w-full max-w-md flex-col justify-center ${
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
        <li>{member.favorites}</li>
      </ul>

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
      /* - Tall image window pan (1000x2800): yPercent 0 (top) -> -45 (bottom)*/
      /* ==================================================================== */
      mm.add('(max-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray('.team-card').forEach((card) => {
          const img = card.querySelector('.tall-parallax-img');
          if (!img) return;

          gsap.fromTo(
            img,
            { yPercent: 0 },
            {
              yPercent: -45,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      });

      /* ==================================================================== */
      /* DESKTOP (min-width: 769px):                                          */
      /* - Each row pins ("on hold") at the center of the viewport while:     */
      /*   1) `.pill-mask` evolves from a 1:1 circle to the full tall         */
      /*      stadium capsule, and                                            */
      /*   2) `.tall-parallax-img` pans vertically (yPercent: 0 -> -45)       */
      /*      within the 1000x2800 image height.                              */
      /* - Then releases the pin to scroll to the next executive.             */
      /* ==================================================================== */
      mm.add('(min-width: 769px) and (prefers-reduced-motion: no-preference)', () => {
        const rows = gsap.utils.toArray('.team-card');

        rows.forEach((row, index) => {
          const wrap = row.querySelector('[data-pill-wrap]');
          const pill = row.querySelector('[data-pill]');
          const img = row.querySelector('.tall-parallax-img');
          const reveals = row.querySelectorAll('[data-reveal]');

          const isFirstRow = index === 0;

          // Hold the row in the center of the screen while the circle transforms
          // into the taller final capsule and scrolls within the 1000x2800 image.
          const pinTl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: 'center center',
              end: '+=380',
              pin: true,
              pinSpacing: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          pinTl
            .fromTo(
              pill,
              { height: () => wrap.offsetWidth },
              { height: () => wrap.offsetHeight, ease: 'none', duration: 1 },
              0
            )
            .fromTo(
              img,
              { yPercent: 0 },
              { yPercent: -45, ease: 'none', duration: 1 },
              0
            );

          // Gentle text entrance as each subsequent row approaches the center stage.
          if (!isFirstRow) {
            gsap.from(reveals, {
              y: 28,
              opacity: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.07,
              scrollTrigger: {
                trigger: row,
                start: 'top 78%',
                toggleActions: 'play none none reverse',
              },
            });
          }
        });

        // Created after the pinned rows so `end: 'bottom bottom'` includes all pinSpacing.
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
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 pb-20 pt-24 sm:px-6 sm:pt-32 md:px-12 md:pb-[16vh] md:pt-28">
        <h2 id="team-intro-heading" className="sr-only">
          Meet the Executive Team
        </h2>

        {TEAM.map((member, index) => {
          const isOdd = index % 2 === 0; // 1st, 3rd, 5th... (1-based)
          return (
            <article
              key={`${member.image}-${index}`}
              data-team-row
              className="team-card mb-[30vh] flex min-h-[86vh] flex-row items-center justify-between gap-3 last:mb-0 sm:gap-5 md:mb-[14vh] md:min-h-[78vh] md:gap-16"
            >
              {/* Alternating two-column order on both mobile and desktop:
                  - Odd (1st, 3rd, 5th...): Pill Mask on left (order-1), right-aligned text on right (order-2)
                  - Even (2nd, 4th, 6th...): Left-aligned text on left (order-1), Pill Mask on right (order-2) */}
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
