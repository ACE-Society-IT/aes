'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MouseStreakWrapper from './MouseStreakWrapper';

const SUMMIT_DATES = [
  { day: 'FRIDAY', date: '13', month: 'NOV' },
  { day: 'SATURDAY', date: '14', month: 'NOV' },
  { day: 'SUNDAY', date: '15', month: 'NOV' },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MouseStreakWrapper className="pt-42 sm:pt-50 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Main Center Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* AES Monument Logo Centerpiece with Dynamic Ascent, Perspective Scaling & Fade */}
        <div
          className="relative group mb-5 flex flex-col items-center justify-center will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.35}px, 0) scale(${Math.max(0.86, 1 - scrollY * 0.00045)})`,
            opacity: Math.max(0, 1 - scrollY / 520),
          }}
        >
          {/* Ambient Backlight Halo */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#E5D9C5]/10 via-[#2E1D16]/50 to-[#E5D9C5]/10 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Logo Image */}
          <div className="relative w-44 sm:w-52 md:w-60 h-20 sm:h-24 md:h-28 transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/aes-logo.png"
              alt="AES - Alpha Entrepreneurship Summit"
              fill
              sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 240px"
              priority
              loading="eager"
              className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)]"
            />
          </div>

          <span className="mt-2 text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#B09B8C]">
            Alpha Entrepreneurship Summit
          </span>
        </div>

        {/* Subtitle Description with Upward Parallax & Fade */}
        <p
          className="mt-2 text-base sm:text-lg md:text-xl text-[#B09B8C] max-w-2xl font-normal leading-relaxed will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.22}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 440),
          }}
        >
          Three days of visionary discourse, high-stakes venture showcases, and
          curated networking with top founders, venture partners, and pioneers.
        </p>

        {/* 3 Highlighted Dates with Upward Parallax & Fade */}
        <div
          className="mt-7 sm:mt-9 flex flex-col items-center w-full will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.14}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 380),
          }}
        >
          <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-[#9CA3AF] mb-2.5">
            Official Summit Dates
          </div>

          <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4">
            {SUMMIT_DATES.map((item) => (
              <div
                key={item.date}
                className="group relative w-18 sm:w-22 h-20 sm:h-24 rounded-xl bg-[#241712]/90 backdrop-blur-md border border-[#443027] hover:border-[#E5D9C5]/70 hover:bg-[#322019] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col items-center justify-center cursor-default p-2"
              >
                {/* Subtle top indicator highlight */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#E5D9C5]/40 group-hover:via-[#E5D9C5] to-transparent rounded-full transition-colors" />

                {/* Weekday Micro-label */}
                <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-[#9CA3AF] uppercase">
                  {item.day}
                </span>

                {/* Date Highlight */}
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F4EFEA] group-hover:text-[#E5D9C5] transition-colors leading-tight my-0.5 tracking-tight">
                  {item.date}
                </span>

                {/* Month Label */}
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#E5D9C5]">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons with Gentle Upward Parallax */}
        <div
          className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.08}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 340),
          }}
        >
          {/* Primary Action: Register */}
          <Link
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full bg-white text-[#160D09] hover:bg-[#E5D9C5] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5]"
          >
            Register Now
          </Link>

          {/* Secondary Action: Become an Ambassador */}
          <Link
            href="#ambassador"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-[#241712]/90 text-[#F4EFEA] border border-[#443027] hover:border-[#E5D9C5]/60 hover:bg-[#322019] hover:text-[#E5D9C5] transition-all duration-200 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5]"
          >
            Become an Ambassador
          </Link>
        </div>
      </div>
    </MouseStreakWrapper>
  );
}