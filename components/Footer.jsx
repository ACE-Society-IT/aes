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
const CONTACT_INFO = {
  venue: 'Alpha College Karachi',
  presidents: [
    { name: 'Mansoor Moiz', phone: '0335 7555253', tel: 'tel:03357555253' },
    { name: 'Zoya Ehtasham', phone: '0332 5175032', tel: 'tel:03325175032' },
  ],
  generalSecretary: {
    name: 'Bareerah Ahmed',
    phone: '0336 0081714',
    tel: 'tel:03360081714',
  },
  socials: {
    instagram: '@aes_summit',
    instagramHref: 'https://instagram.com/aes_summit',
  },
};

// Verified Social Media Icons strictly matching DESIGN-RULES.md
const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/aes_summit',
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
    name: 'Website',
    href: '/',
    icon: <Globe className="w-4 h-4 text-inherit" aria-hidden="true" />,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#5a0d1b] text-[#f8eee1] border-t border-[#89192c] pt-16 sm:pt-20 pb-4 overflow-hidden select-none">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#f1ca7e]/40 to-transparent pointer-events-none z-10" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-11 w-28 transition-transform duration-300 group-hover:scale-105">
                <Image
                  loading="eager"
                  src="/aes-logo.png"
                  alt="AES Logo"
                  fill
                  sizes="112px"
                  className="object-contain drop-shadow-[0_2px_12px_rgba(241,202,126,0.35)]"
                />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-[#e8dcc6] leading-relaxed max-w-md">
              The premier entrepreneurship summit uniting frontier founders, institutional
              venture capital, and global industry leaders to accelerate market-defining
              ventures.
            </p>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f1ca7e] mb-5">
              Summit
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8dcc6] hover:text-[#f8eee1] hover:translate-x-0.5 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f1ca7e] mb-5">
              Contact & Venue
            </h4>
            <div className="space-y-4 text-sm text-[#e8dcc6]">
              {/* Venue */}
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#f1ca7e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#f1ca7e] block">
                    Venue
                  </span>
                  <span className="text-sm text-[#f8eee1] font-medium">{CONTACT_INFO.venue}</span>
                </div>
              </div>

              {/* Presidents */}
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#f1ca7e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#f1ca7e] block">
                    Presidents
                  </span>
                  <div className="space-y-1.5 mt-1">
                    {CONTACT_INFO.presidents.map((p) => (
                      <div key={p.name} className="flex items-center gap-2 flex-wrap">
                        <span className="text-[#e8dcc6] text-xs sm:text-sm">{p.name}:</span>
                        <a
                          href={p.tel}
                          className="text-[#f8eee1] hover:text-[#f1ca7e] transition-colors font-medium text-xs sm:text-sm"
                        >
                          {p.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* General Secretary */}
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#f1ca7e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#f1ca7e] block">
                    General Secretary
                  </span>
                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    <span className="text-[#e8dcc6] text-xs sm:text-sm">
                      {CONTACT_INFO.generalSecretary.name}:
                    </span>
                    <a
                      href={CONTACT_INFO.generalSecretary.tel}
                      className="text-[#f8eee1] hover:text-[#f1ca7e] transition-colors font-medium text-xs sm:text-sm"
                    >
                      {CONTACT_INFO.generalSecretary.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#f1ca7e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#f1ca7e] block">
                    Official Inquiries
                  </span>
                  <a
                    href={CONTACT_INFO.socials.instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#f8eee1] hover:text-[#f1ca7e] transition-colors font-medium text-xs sm:text-sm block mt-0.5"
                  >
                    Instagram: <span className="text-[#f1ca7e]">{CONTACT_INFO.socials.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#89192c] my-6" />

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#e8dcc6] gap-4">
          {/* Social icons in sleek glass badges */}
          <div className="flex items-center space-x-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-[#701020] border border-[#89192c] flex items-center justify-center text-[#f1ca7e] hover:text-[#5a0d1b] hover:border-[#f1ca7e] hover:bg-[#f1ca7e] hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-[0_0_14px_rgba(241,202,126,0.4)]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center sm:text-right tracking-wide text-[#e8dcc6]">
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
