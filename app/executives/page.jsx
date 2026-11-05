'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
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
    // Outer wrapper is never transformed -> stable ScrollTrigger measurements
    <div data-pill-wrap className="shrink-0">
      <div
        data-pill
        className="relative h-[clamp(390px,42vw,580px)] w-[clamp(280px,30vw,420px)] overflow-hidden rounded-full bg-linear-to-br from-[#5a0d1b] via-[#701020] to-[#89192c] shadow-2xl shadow-[#5a0d1b]/25 will-change-transform"
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
          // Photos with backgrounds: oversized (118%) so the -15% drift never
          // exposes the pill floor. Anchored to the top to keep faces in frame.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            data-pill-img
            src={member.image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-x-0 top-0 h-[118%] w-full object-cover object-[50%_20%] will-change-transform"
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
      className={`w-full max-w-md text-center ${
        alignRight ? 'md:text-right' : 'md:text-left'
      }`}
    >
      <h3
        data-reveal
        className="font-display text-[clamp(3rem,5.5vw,5.25rem)] font-normal uppercase leading-[0.88] tracking-[-0.02em] text-[#5a0d1b]"
      >
        <span className="block">{member.firstName}</span>
        <span className="block">{member.lastName}</span>
      </h3>

      <p
        data-reveal
        className="mb-6 mt-[0.35rem] font-display text-[clamp(1.25rem,2vw,1.85rem)] uppercase leading-none text-[#5a0d1b]"
      >
        {member.role}
      </p>

      <ul
        data-reveal
        className="font-condensed text-[1rem] leading-[1.45] text-[#5a0d1b] md:text-[1.05rem]"
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
        className="my-4 font-condensed text-[1.1rem] text-[#5a0d1b]"
      >
        -
      </p>

      <div data-reveal className="font-condensed text-[1.1rem] leading-snug">
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
            className="block lowercase text-[#89192c] transition-opacity duration-300 ease-out hover:opacity-70"
          >
            {member.email}
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-[#5a0d1b] underline decoration-2 underline-offset-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:opacity-70 motion-reduce:transition-none motion-reduce:hover:transform-none"
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

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        /* ---- Giant "TEAM" watermark: drifts upper-middle -> lower-middle ---- */
        gsap.fromTo(
          '[data-team-watermark]',
          { y: () => -window.innerHeight * 0.22 },
          {
            y: () => window.innerHeight * 0.22,
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

        /* ---- Per-member pill + cutout parallax ---- */
        gsap.utils.toArray('[data-team-row]').forEach((row) => {
          const wrap = row.querySelector('[data-pill-wrap]');
          const pill = row.querySelector('[data-pill]');
          const img = row.querySelector('[data-pill-img]');
          const reveals = row.querySelectorAll('[data-reveal]');

          // Cutout rises from below the capsule mask, then drifts slightly up.
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrap,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1,
            },
          });
          tl.fromTo(
            img,
            { yPercent: 100 },
            { yPercent: 0, ease: 'none', duration: 0.45 }
          ).to(img, { yPercent: -15, ease: 'none', duration: 0.55 });

          // Weightless drift on the pill itself.
          gsap.fromTo(
            pill,
            { y: 60 },
            {
              y: -60,
              ease: 'none',
              scrollTrigger: {
                trigger: wrap,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );

          // Gentle text entrance.
          gsap.from(reveals, {
            y: 32,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: row,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          });
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
      className="relative overflow-x-clip bg-[#f8eee1] bg-[linear-gradient(to_right,#89192c1f_1px,transparent_1px),linear-gradient(to_bottom,#89192c1f_1px,transparent_1px)] bg-[length:40px_40px]"
    >
      {/* Giant sticky "TEAM" watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <span
            data-team-watermark
            className="block select-none font-display text-[clamp(10rem,30vw,18rem)] font-normal uppercase leading-[0.8] text-[#e8dcc6] will-change-transform"
          >
            Executives
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-[14vh] md:px-12">
        <h2 id="team-intro-heading" className="sr-only">
          Meet the Executive Team
        </h2>

        {TEAM.map((member, index) => {
          const isOdd = index % 2 === 0; // 1st, 3rd, 5th... (1-based)
          return (
            <article
              key={`${member.image}-${index}`}
              data-team-row
              className="mb-[12vh] flex flex-col items-center gap-10 last:mb-0 md:mb-[16vh] md:flex-row md:justify-between md:gap-16"
            >
              <div className={isOdd ? 'md:order-1' : 'md:order-2'}>
                <PillPortrait member={member} />
              </div>
              <div
                className={`flex w-full justify-center ${
                  isOdd ? 'md:order-2 md:justify-end' : 'md:order-1 md:justify-start'
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
