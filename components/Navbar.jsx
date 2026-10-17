'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Navigation links matching AES Summit information architecture
 */
const NAV_LINKS = [
  { name: 'Executives', href: '/executives' },
  { name: 'Ambassador’s', href: '/ambassadors' },
  { name: 'Modules', href: '#modules' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'FAQ’s', href: '#faqs' },
];

/**
 * MorphingScrollNavbar
 *
 * Implements a 3-State Morphing Navbar with pure CSS transitions and React scroll hooks:
 * - 1. Top Scroll Progress Bar (0% to 100% scaleX tracking scroll position, origin-left, duration-75)
 * - 2. Scroll State Detection Hook (isAtTop, 10px delta threshold for scrollDirection, scrollProgress)
 * - 3. Navbar 3-State Morphing Architecture:
 *      * State A (At Rest, isAtTop === true): Full-width max-w-6xl transparent container, spaced out
 *      * State B (Scrolling Down): Compresses into tight floating pill (max-w-fit, rounded-full, glassmorphic),
 *        center links container collapses smoothly (max-w-0 opacity-0 overflow-hidden)
 *      * State C (Scrolling Up): Stays as floating glassmorphic pill, expanding smoothly (max-w-4xl),
 *        center links container expands back open before reaching top (max-w-[600px] opacity-100)
 * - 4. Inner Elements & Active Link Pill: whitespace-nowrap, active link pill (bg-[#f1ca7e] text-[#5a0d1b] rounded-full),
 *      remaining links in text-[#e8dcc6], compact dark/light pills for Ambassador + Register CTA buttons.
 *
 * Adheres strictly to project DESIGN-RULES.md (7 core colors: #5a0d1b, #650d1c, #701020, #89192c, #f8eee1, #e8dcc6, #f1ca7e).
 */
export function MorphingScrollNavbar() {
  const [scrollState, setScrollState] = useState({
    isAtTop: true,
    scrollDirection: 'up',
    scrollProgress: 0,
  });
  const [activeHref, setActiveHref] = useState('#about');
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

  // Section highlight detection as user scrolls down page
  useEffect(() => {
    const handleSectionDetection = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveHref(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleSectionDetection, {
      passive: true,
    });
    return () => window.removeEventListener('scroll', handleSectionDetection);
  }, []);

  const { isAtTop, scrollDirection, scrollProgress } = scrollState;
  const isScrollingDown = !isAtTop && scrollDirection === 'down';

  // 3-State Morphing Navbar Classes
  // State A: At Rest (isAtTop)
  // State B: Scrolling Down (!isAtTop && scrollDirection === 'down')
  // State C: Scrolling Up (!isAtTop && scrollDirection === 'up')
  let navLayoutClasses =
    'pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ';

  if (isAtTop) {
    // State A — At Rest
    navLayoutClasses +=
      'w-full max-w-6xl bg-transparent border border-transparent px-6 py-3 rounded-none shadow-none';
  } else if (isScrollingDown) {
    // State B — Scrolling Down: tight floating pill
    navLayoutClasses +=
      'w-auto max-w-fit rounded-full bg-[#5a0d1b]/85 backdrop-blur-md border border-[#89192c] shadow-2xl px-4 py-2 gap-4';
  } else {
    // State C — Scrolling Up: expanding floating glassmorphic pill
    navLayoutClasses +=
      'w-full max-w-4xl rounded-full bg-[#5a0d1b]/85 backdrop-blur-md border border-[#89192c] shadow-2xl px-5 py-2 gap-6';
  }

  // Center Nav Links collapsing mechanics:
  // In State B, collapses smoothly: max-w-0 opacity-0 overflow-hidden px-0 mx-0 pointer-events-none
  // In State A & C, expanded: max-w-[600px] opacity-100 overflow-hidden px-2 pointer-events-auto
  const isLinksCollapsed = isScrollingDown;

  return (
    <>
      {/* 1. Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-[#f1ca7e] transition-transform duration-75 origin-left will-change-transform shadow-[0_0_8px_rgba(241,202,126,0.7)]"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* 3. Navbar 3-State Morphing Architecture */}
      <div className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav className={navLayoutClasses} aria-label="Main Navigation">
          {/* Left Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e] rounded-full shrink-0"
            aria-label="AES Home"
          >
            <div className="relative h-7 w-14 sm:h-8 sm:w-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aes-logo.png"
                alt="AES Logo"
                fill
                sizes="(max-width: 640px) 56px, 64px"
                priority
                loading="eager"
                className="object-contain drop-shadow-[0_2px_8px_rgba(241,202,126,0.25)]"
              />
            </div>
          </Link>

          {/* Center Nav Links (Collapses smoothly in State B, expands in State A & C) */}
          <div
            className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isLinksCollapsed
                ? 'max-w-0 opacity-0 overflow-hidden px-0 mx-0 pointer-events-none gap-0'
                : 'max-w-[600px] opacity-100 overflow-hidden px-2 mx-auto pointer-events-auto gap-1 sm:gap-2'
            }`}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e] ${
                    isActive
                      ? 'bg-[#f1ca7e] text-[#5a0d1b] font-semibold shadow-sm'
                      : 'text-[#e8dcc6] hover:text-[#f8eee1]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Buttons (Become a Brand Ambassador + Register) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Secondary Action: Become a Brand Ambassador */}
            <Link
              href="/ambassadors"
              className="inline-flex items-center justify-center px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full border border-[#f1ca7e]/40 bg-[#89192c]/40 hover:bg-[#89192c] hover:border-[#f1ca7e]/70 text-[#f8eee1] hover:text-[#f1ca7e] transition-all duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
              aria-label="Become a Brand Ambassador"
            >
              <span className="hidden sm:inline">Become &nbsp;</span>
              <span> Brand Ambassador</span>
            </Link>

            {/* Primary Action: Register */}
            <Link
              href="#register"
              className="inline-flex items-center justify-center px-4 py-1 sm:px-5 sm:py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-[#f1ca7e] text-[#5a0d1b] hover:bg-[#f8eee1] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md shadow-[#5a0d1b]/40 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
              aria-label="Register for AES 2026"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default MorphingScrollNavbar;
