'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Calendar, Layers, Users, HelpCircle, Home } from 'lucide-react';

/**
 * Clean navigation links matching AES Summit information architecture
 */
const NAV_LINKS = [
  { name: 'Home', href: '/', icon: Home, subtitle: 'Summit Overview' },
  { name: 'Schedule', href: '/schedule', icon: Calendar, subtitle: 'Nov 13 — 15, 2026' },
  { name: 'Modules', href: '/modules', icon: Layers, subtitle: '5 Flagship Tracks' },
  { name: 'Executives', href: '/executives', icon: Users, subtitle: 'Leadership Council' },
  { name: 'FAQs', href: '/faq', icon: HelpCircle, subtitle: 'Summit Queries' },
];

export function MorphingScrollNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState({
    isAtTop: true,
    scrollDirection: 'up',
    scrollProgress: 0,
  });
  const lastScrollYRef = useRef(0);

  // Track pathname changes to close mobile drawer
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
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

  // Desktop 3-State Morphing Navbar Classes
  let desktopNavClasses =
    'pointer-events-auto hidden md:flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ';

  if (isAtTop) {
    desktopNavClasses +=
      'w-full max-w-6xl rounded-full bg-[#5a0d1b]/92 backdrop-blur-xl border-2 border-[#89192c] px-6 sm:px-8 py-3 sm:py-3.5 shadow-2xl shadow-[#5a0d1b]/70';
  } else if (isScrollingDown) {
    desktopNavClasses +=
      'w-auto max-w-fit rounded-full bg-[#5a0d1b]/95 backdrop-blur-2xl border-2 border-[#89192c] shadow-[0_16px_50px_rgba(90,13,27,0.85)] px-5 sm:px-6 py-2.5 sm:py-3 gap-5';
  } else {
    desktopNavClasses +=
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

      {/* Main Navbar Container */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
        {/* ═══ DESKTOP NAVBAR ═══ */}
        <nav className={desktopNavClasses} aria-label="Desktop Navigation">
          {/* Brand Logo */}
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
                sizes="88px"
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
            {NAV_LINKS.filter((link) => link.href !== '/').map((link) => {
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
            <Link
              href="/ambassadors"
              className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full border-2 border-[#f1ca7e]/40 bg-[#89192c]/50 hover:bg-[#89192c] hover:border-[#f1ca7e] text-[#f8eee1] hover:text-[#f1ca7e] hover:shadow-lg hover:shadow-[#5a0d1b]/50 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 ease-out whitespace-nowrap overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
              aria-label="Ambassador Program"
            >
              <span>Ambassador</span>
            </Link>

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

        {/* ═══ MOBILE NAVBAR PILL ═══ */}
        <nav
          className="pointer-events-auto flex md:hidden items-center justify-between w-full max-w-md rounded-full bg-[#5a0d1b]/95 backdrop-blur-2xl border-2 border-[#89192c] px-4 py-2.5 shadow-[0_12px_40px_rgba(90,13,27,0.85)]"
          aria-label="Mobile Navigation"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e] rounded-full shrink-0"
            aria-label="AES Home"
          >
            <div className="relative h-7 w-16">
              <Image
                src="/aes-logo.png"
                alt="AES Logo"
                fill
                sizes="64px"
                priority
                loading="eager"
                className="object-contain drop-shadow-[0_2px_8px_rgba(241,202,126,0.35)]"
              />
            </div>
          </Link>

          {/* Quick Actions & Menu Toggle Button */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/ambassadors"
              className="inline-flex items-center justify-center px-2.5 sm:px-3 py-1.5 rounded-full border border-[#f1ca7e]/40 bg-[#89192c]/50 hover:bg-[#89192c] text-[#f8eee1] hover:text-[#f1ca7e] font-semibold text-xs tracking-tight transition-colors"
              aria-label="Ambassador Program"
            >
              <span>Ambassador</span>
            </Link>

            <a
              href="https://forms.gle/cGVgw5TpvpU9AXZx5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-xs tracking-tight shadow-md transition-colors"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]" />
            </a>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="w-9 h-9 rounded-full bg-[#701020] border border-[#89192c] text-[#f8eee1] hover:text-[#f1ca7e] hover:border-[#f1ca7e]/60 flex items-center justify-center active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.2]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.2]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ═══ MOBILE FULL DRAWER / SHEET ═══ */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[#5a0d1b]/98 backdrop-blur-2xl px-6 pt-6 pb-8 overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Ambient Top Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(241,202,126,0.15),transparent_70%)] pointer-events-none" />

          {/* Header Bar inside Drawer */}
          <div className="relative z-10 flex items-center justify-between pb-6 border-b border-[#89192c]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 focus:outline-none"
            >
              <div className="relative h-9 w-20">
                <Image
                  src="/aes-logo.png"
                  alt="AES Logo"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-xs font-black tracking-widest text-[#f1ca7e] uppercase block">
                  AES 2026
                </span>
                <span className="text-[10px] text-[#e8dcc6] tracking-wider uppercase block">
                  Summit Portal
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-[#701020] border-2 border-[#89192c] text-[#f8eee1] hover:text-[#f1ca7e] flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Links List */}
          <div className="relative z-10 my-auto py-6 flex flex-col gap-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#f1ca7e] uppercase mb-2">
              Navigation Menu
            </span>

            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200 ${
                    active
                      ? 'bg-[#701020] border-[#f1ca7e] text-[#f1ca7e] shadow-lg shadow-[#5a0d1b]/80'
                      : 'bg-[#650d1c]/60 border-[#89192c]/70 text-[#f8eee1] hover:bg-[#701020] hover:text-[#f1ca7e] hover:border-[#f1ca7e]/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        active
                          ? 'bg-[#f1ca7e] text-[#5a0d1b]'
                          : 'bg-[#701020] text-[#f1ca7e] border border-[#89192c]'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="font-bold text-base block">{link.name}</span>
                      <span className="text-xs text-[#e8dcc6] block">{link.subtitle}</span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      active ? 'text-[#f1ca7e] translate-x-0.5 -translate-y-0.5' : 'text-[#e8dcc6]'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Bottom CTAs inside Drawer */}
          <div className="relative z-10 pt-6 border-t border-[#89192c] flex flex-col gap-3">
            <a
              href="https://forms.gle/cGVgw5TpvpU9AXZx5"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-between w-full pl-6 pr-2 py-3 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-base tracking-tight shadow-xl transition-all"
            >
              <span>Register for Summit</span>
              <span className="w-8 h-8 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-3 shrink-0">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </span>
            </a>

            <Link
              href="/ambassadors"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#701020] border-2 border-[#89192c] hover:border-[#f1ca7e] text-[#f8eee1] hover:text-[#f1ca7e] font-semibold text-sm transition-all"
            >
              <span>Ambassador Program</span>
            </Link>

            <p className="text-center text-[11px] text-[#e8dcc6] mt-2">
              Alpha Entrepreneurship Summit 2026 · Alpha College Karachi
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MorphingScrollNavbar;

