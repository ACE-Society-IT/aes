'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Vision', href: '#vision' },
  { name: 'Partners', href: '#partners' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140C08]/92 backdrop-blur-md border-b border-[#3A241B]/80 shadow-xl shadow-black/40 py-3'
          : 'bg-[#140C08]/40 backdrop-blur-sm border-b border-[#3A241B]/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5] rounded-lg p-1"
            aria-label="AES Home"
          >
            <div className="relative h-9 w-16 sm:h-10 sm:w-20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aes-logo.png"
                alt="AES Logo"
                fill
                priority
                className="object-contain drop-shadow-[0_2px_8px_rgba(229,217,197,0.25)]"
              />
            </div>
           
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#F4EFEA]/85 hover:text-[#E5D9C5] transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5D9C5] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action: Dates Pill & CTA */}
          <div className="hidden sm:flex items-center gap-3.5">
          
            {/* Primary CTA */}
            <Link
              href="#register"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full bg-white text-[#160D09] hover:bg-[#E5D9C5] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-md shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E5D9C5]"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#F4EFEA] hover:text-[#E5D9C5] hover:bg-[#241712]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#3A241B]/80 bg-[#140C08]/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#F4EFEA] hover:bg-[#241712] hover:text-[#E5D9C5] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#3A241B]/60 flex flex-col gap-3">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#241712]/90 border border-[#443027] text-xs font-medium text-[#E5D9C5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5] animate-pulse" />
              <span>NOV 13 – 15, 2026</span>
            </div>
            <Link
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold rounded-full bg-white text-[#160D09] hover:bg-[#E5D9C5] transition-colors shadow-md"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}