'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from '@/components/ui/hover-footer';

// Clean, streamlined navigation links
const FOOTER_LINKS = [
  { label: 'About AES', href: '#about' },
  { label: 'Our Vision', href: '#vision' },
  { label: 'Summit Modules', href: '#modules' },
  { label: 'Registration', href: '#register' },
];

// Official AES Contact Information
const CONTACT_INFO = [
  {
    icon: <Mail size={18} className="text-[#E5D9C5] shrink-0" />,
    text: 'partnerships@aesociety.org',
    href: 'mailto:partnerships@aesociety.org',
  },
  {
    icon: <Phone size={18} className="text-[#E5D9C5] shrink-0" />,
    text: '+92 (51) 844-2026',
    href: 'tel:+92518442026',
  },
  {
    icon: <MapPin size={18} className="text-[#E5D9C5] shrink-0" />,
    text: 'Islamabad, Pakistan',
  },
];

// Verified Social Media Icons (Consistent stroke/fill matching AES branding)
const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg
        className="w-4 h-4 text-inherit"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com',
    icon: (
      <svg
        className="w-3.5 h-3.5 text-inherit"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg
        className="w-4 h-4 text-inherit"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Website',
    href: '/',
    icon: <Globe className="w-4 h-4 text-inherit" aria-hidden="true" />,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0D0704] text-[#F4EFEA] border-t border-[#52433D]/60 pt-16 sm:pt-20 pb-4 overflow-hidden select-none">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E5D9C5]/40 to-transparent pointer-events-none z-10" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-11 w-28 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/aes-logo.png"
                  alt="AES Logo"
                  fill
                  sizes="112px"
                  className="object-contain drop-shadow-[0_2px_12px_rgba(229,217,197,0.35)]"
                />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-[#B09B8C] leading-relaxed max-w-md">
              The premier entrepreneurship summit uniting frontier founders, institutional venture
              capital, and global industry leaders to accelerate market-defining ventures.
            </p>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5D9C5] mb-5">
              Summit
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B09B8C] hover:text-[#F4EFEA] hover:translate-x-0.5 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5D9C5] mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-[#B09B8C]">
              {CONTACT_INFO.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#F4EFEA] transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#52433D]/50 my-6" />

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#9CA3AF] gap-4">
          {/* Social icons in sleek glass badges */}
          <div className="flex items-center space-x-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-[#241712] border border-[#52433D] flex items-center justify-center text-[#E5D9C5] hover:text-white hover:border-[#E5D9C5] hover:bg-[#3A2D28] hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-[0_0_14px_rgba(229,217,197,0.3)]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright: Static 2026 to guarantee stable prerendering in Next.js */}
          <p className="text-center sm:text-right tracking-wide text-[#9CA3AF]">
            &copy; 2026 AES. All rights reserved.
          </p>
        </div>
      </div>

      {/* Monumental Interactive Text Hover Effect Displaying AES */}
      <div className="relative flex justify-center items-center w-full h-44 sm:h-64 md:h-76 lg:h-96 -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24 overflow-hidden z-20 pointer-events-auto">
        <TextHoverEffect text="AES" className="w-full h-full" />
      </div>

      {/* Atmospheric Background Radial Glow */}
      <FooterBackgroundGradient />
    </footer>
  );
}