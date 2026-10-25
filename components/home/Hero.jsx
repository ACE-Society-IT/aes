'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
    <MouseStreakWrapper className="pt-24 sm:pt-36 md:pt-48 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Main Center Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* AES Monument Logo Centerpiece with Dynamic Ascent, Perspective Scaling & Fade */}
        <div
          className="relative group mb-4 sm:mb-6 md:mb-8 flex flex-col items-center justify-center will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.35}px, 0) scale(${Math.max(0.86, 1 - scrollY * 0.00045)})`,
            opacity: Math.max(0, 1 - scrollY / 520),
          }}
        >
          {/* Ambient Backlight Halo */}
          <div className="absolute -inset-8 sm:-inset-14 bg-gradient-to-r from-[#f1ca7e]/20 via-[#89192c]/50 to-[#f1ca7e]/20 rounded-full blur-2xl sm:blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Logo Image */}
          <div className="relative w-48 sm:w-72 md:w-96 lg:w-[440px] h-24 sm:h-36 md:h-48 lg:h-[220px] transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/aes-logo.png"
              alt="AES - Alpha Entrepreneurship Summit"
              fill
              sizes="(max-width: 640px) 192px, (max-width: 768px) 288px, (max-width: 1024px) 384px, 440px"
              priority
              loading="eager"
              className="object-contain drop-shadow-[0_14px_32px_rgba(90,13,27,0.9)]"
            />
          </div>

          <h1 className="mt-3 sm:mt-5 md:mt-6 text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[0.18em] sm:tracking-[0.28em] md:tracking-[0.32em] uppercase text-[#f1ca7e] drop-shadow-[0_4px_20px_rgba(241,202,126,0.35)]">
            Alpha Entrepreneurship Summit
          </h1>
        </div>

        {/* Subtitle Description with Upward Parallax & Fade */}
        <p
          className="mt-2.5 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-xl text-[#e8dcc6] max-w-2xl font-normal leading-relaxed will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.22}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 440),
          }}
        >
          Pakistan’s 3-day youth entrepreneurship summit at Alpha College Karachi.
          Compete in business simulations, pitch your startup ideas, and connect with fellow founders.
        </p>

        {/* 3 Highlighted Dates with Upward Parallax & Fade */}
        <div
          className="mt-5 sm:mt-7 md:mt-9 flex flex-col items-center w-full will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.14}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 380),
          }}
        >
          <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-[#f1ca7e] mb-2 sm:mb-2.5">
            Official Summit Dates
          </div>

          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            {SUMMIT_DATES.map((item) => (
              <div
                key={item.date}
                className="group relative w-16 sm:w-20 md:w-22 h-18 sm:h-22 md:h-24 rounded-xl bg-[#701020]/80 backdrop-blur-md border border-[#89192c] hover:border-[#f1ca7e]/80 hover:bg-[#89192c] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#5a0d1b]/60 flex flex-col items-center justify-center cursor-default p-1.5 sm:p-2"
              >
                {/* Subtle top indicator highlight */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#f1ca7e]/40 group-hover:via-[#f1ca7e] to-transparent rounded-full transition-colors duration-300" />

                {/* Weekday Micro-label */}
                <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-[#e8dcc6] uppercase transition-colors duration-300 group-hover:text-[#f8eee1]">
                  {item.day}
                </span>

                {/* Date Highlight */}
                <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#f8eee1] group-hover:text-[#f1ca7e] transition-all duration-300 leading-tight my-0.5 tracking-tight group-hover:scale-110 transform">
                  {item.date}
                </span>

                {/* Month Label */}
                <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-[#f1ca7e]">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons with Reference Capsule Style */}
        <div
          className="mt-6 sm:mt-9 md:mt-11 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full justify-center will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.08}px, 0)`,
            opacity: Math.max(0, 1 - scrollY / 340),
          }}
        >
          {/* Primary Action: Register Now */}
          <a
            href="https://forms.gle/cGVgw5TpvpU9AXZx5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-between pl-6 pr-2 py-2 sm:pl-8 sm:pr-3 sm:py-2.5 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-sm sm:text-lg tracking-tight shadow-2xl shadow-[#5a0d1b]/60 hover:shadow-[0_0_35px_rgba(248,238,225,0.45)] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]"
          >
            <span>Register Now</span>
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-3 sm:ml-4 shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#701020]">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          {/* Secondary Action: Become an Ambassador */}
          <a
            href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4We7WHOgJUSJuBHvzR0a_yoXsS5ZZMtOmVx09mfgyTNUNkZORUE4VVk5V01XUUxZOExGTVRCMkpDQy4u"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-between pl-6 pr-2.5 py-2 sm:pl-7 sm:pr-3 sm:py-2.5 rounded-full bg-[#89192c]/50 text-[#f8eee1] border-2 border-[#f1ca7e]/50 hover:border-[#f1ca7e] hover:bg-[#89192c] hover:text-[#f1ca7e] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 ease-out backdrop-blur-md shadow-xl shadow-[#5a0d1b]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e] text-base sm:text-lg font-semibold"
          >
            <span>Become an Ambassador</span>
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1ca7e] text-[#5a0d1b] flex items-center justify-center ml-3.5 shrink-0 transition-all duration-300 ease-out group-hover:scale-110">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </MouseStreakWrapper>
  );
}