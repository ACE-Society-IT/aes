'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

/**
 * Clean navigation links matching AES Summit information architecture
 */
const NAV_LINKS = [
  { name: 'Executives', href: '/executives' },
  { name: 'Ambassadors', href: '/ambassadors' },
  { name: 'Modules', href: '/modules' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'FAQs', href: '/faq' },
];

/**
 * MorphingScrollNavbar
 *
 * Implements a bulky, substantial 3-State Morphing Navbar with pure CSS transitions and React scroll hooks:
 * - 1. Top Scroll Progress Bar (0% to 100% scaleX tracking scroll position, origin-left, duration-75)
 * - 2. Scroll State Detection Hook (isAtTop, 10px delta threshold for scrollDirection, scrollProgress)
 * - 3. Navbar 3-State Morphing Architecture:
 *      * State A (At Rest, isAtTop === true): Broad substantial pill with border, glassmorphism, and shadow
 *      * State B (Scrolling Down): Solid compact floating pill with border-2 and deep shadow
 *      * State C (Scrolling Up): Expanded floating glassmorphic pill with generous padding
 * - 4. Pill CTA Button featuring circular arrow disc (matching design reference)
 */
export function MorphingScrollNavbar() {
  const pathname = usePathname();
  const [scrollState, setScrollState] = useState({
    isAtTop: true,
    scrollDirection: 'up',
    scrollProgress: 0,
  });
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    // Initialize scroll position on mount
    lastScrollYRef.current = window.scrollY;

    let ticking = false;

    const updateScrollMetrics = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollHeight > 0 ? Math.min(1, Math.max(0, currentScrollY / scrollHeight)) : 0;
      const isTop = currentScrollY < 40;

      const diff = currentScrollY - lastScrollYRef.current;
      let newDirection = scrollState.scrollDirection;

      // 10px delta threshold so tiny trackpad jitters don't flicker the state
      if (Math.abs(diff) >= 10) {
        newDirection = diff > 0 ? 'down' : 'up';
        lastScrollYRef.current = currentScrollY;
      }

      setScrollState((prev) => {
        if (
          prev.isAtTop !== isTop ||
          prev.scrollDirection !== newDirection ||
          Math.abs(prev.scrollProgress - progress) > 0.001
        ) {
          return {
            isAtTop: isTop,
            scrollDirection: newDirection,
            scrollProgress: progress,
          };
        }
        return prev;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollMetrics);
        ticking = true;
      }
    };

    // Run once on mount
    updateScrollMetrics();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [scrollState.scrollDirection]);

  const isActive = (href) => {
    if (pathname === href) return true;
    if (href === '/faq' && pathname === '/faqs') return true;
    return false;
  };

  const { isAtTop, scrollDirection, scrollProgress } = scrollState;
  const isScrollingDown = !isAtTop && scrollDirection === 'down';

  // 3-State Morphing Navbar Classes with added bulk and presence
  let navLayoutClasses =
    'pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ';

  if (isAtTop) {
    // State A — At Rest: Broad, bulky, fully rounded capsule container
    navLayoutClasses +=
      'w-full max-w-6xl rounded-full bg-[#5a0d1b]/90 backdrop-blur-xl border-2 border-[#89192c] px-6 sm:px-8 py-3 sm:py-3.5 shadow-2xl shadow-[#5a0d1b]/70';
  } else if (isScrollingDown) {
    // State B — Scrolling Down: Thick, chunky floating capsule
    navLayoutClasses +=
      'w-auto max-w-fit rounded-full bg-[#5a0d1b]/95 backdrop-blur-2xl border-2 border-[#89192c] shadow-[0_16px_50px_rgba(90,13,27,0.85)] px-5 sm:px-6 py-2.5 sm:py-3 gap-5';
  } else {
    // State C — Scrolling Up: Substantial expanded floating glassmorphic pill
    navLayoutClasses +=
      'w-full max-w-5xl rounded-full bg-[#5a0d1b]/95 backdrop-blur-2xl border-2 border-[#89192c] shadow-[0_20px_60px_rgba(90,13,27,0.9)] px-6 sm:px-8 py-3 sm:py-3.5 gap-6';
  }

  const isLinksCollapsed = isScrollingDown;

  return (
    <>
      {/* 1. Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#f1ca7e] transition-transform duration-75 origin-left will-change-transform shadow-[0_0_12px_rgba(241,202,126,0.9)]"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* 3. Navbar 3-State Morphing Architecture */}
      <div className="fixed top-4 sm:top-5 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pointer-events-none">
        <nav className={navLayoutClasses} aria-label="Main Navigation">
          {/* Left Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e] rounded-full shrink-0"
            aria-label="AES Home"
          >
            <div className="relative h-8 w-18 sm:h-10 sm:w-22 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aes-logo.png"
                alt="AES Logo"
                fill
                sizes="(max-width: 640px) 72px, 88px"
                priority
                loading="eager"
                className="object-contain drop-shadow-[0_2px_10px_rgba(241,202,126,0.35)]"
              />
            </div>
          </Link>

          {/* Center Nav Links */}
          <div
            className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isLinksCollapsed
                ? 'max-w-0 opacity-0 overflow-hidden px-0 mx-0 pointer-events-none gap-0'
                : 'max-w-[640px] opacity-100 overflow-hidden px-3 mx-auto pointer-events-auto gap-1 sm:gap-2'
            }`}
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-[15px] font-semibold tracking-wide transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e] ${
                    active
                      ? 'bg-[#f1ca7e] text-[#5a0d1b] font-bold shadow-md shadow-[#5a0d1b]/30'
                      : 'text-[#e8dcc6] hover:text-[#f8eee1] hover:bg-[#89192c]/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Secondary Action: Become an Ambassador */}
            <a
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4We7WHOgJUSJuBHvzR0a_yoXsS5ZZMtOmVx09mfgyTNUNkZORUE4VVk5V01XUUxZOExGTVRCMkpDQy4u"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full border-2 border-[#f1ca7e]/40 bg-[#89192c]/50 hover:bg-[#89192c] hover:border-[#f1ca7e] text-[#f8eee1] hover:text-[#f1ca7e] hover:shadow-lg hover:shadow-[#5a0d1b]/50 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 ease-out whitespace-nowrap overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
              aria-label="Become an Ambassador"
            >
              <span className="hidden sm:inline">Become an&nbsp;</span>
              <span>Ambassador</span>
            </a>

            {/* Primary Action: Register Now (Designed exactly like reference image) */}
            <a
              href="https://forms.gle/cGVgw5TpvpU9AXZx5"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-xs sm:text-sm tracking-tight shadow-lg shadow-[#5a0d1b]/40 hover:shadow-[0_0_24px_rgba(248,238,225,0.5)] hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 ease-out whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
              aria-label="Register for AES 2026"
            >
              <span>Register Now</span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-2.5 sm:ml-3 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:bg-[#701020]">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MorphingScrollNavbar;
