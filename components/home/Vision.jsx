'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VISION_CARDS = [
  {
    title: 'Vibrant Ecosystem',
    description:
      'Connect with ambitious student founders, creative innovators, and experienced mentors in a collaborative, high-energy environment.',
    icon: (
      <svg className="w-6 h-6 stroke-[#f1ca7e]" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
      </svg>
    ),
  },
  {
    title: 'Venture Capital Access',
    description:
      'Gain direct access to angel investors and seed funds ready to review pitches, offer funding, and support breakthrough ventures.',
    icon: (
      <svg className="w-6 h-6 stroke-[#f1ca7e]" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 8v2m0-8c-1.11 0-2.08.402-2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Executive Keynotes',
    description:
      'Hear candid stories, strategies, and industry lessons directly from Pakistan’s top company executives and pioneering startup leaders.',
    icon: (
      <svg className="w-6 h-6 stroke-[#f1ca7e]" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    title: 'Tactical Masterclasses',
    description:
      'Attend interactive workshops on product development, growth marketing, unit economics, and AI-driven business tools.',
    icon: (
      <svg className="w-6 h-6 stroke-[#f1ca7e]" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Pitch Showcase Arena',
    description:
      'Compete on the grand stage, defend your business model against tough questions, and win substantial prizes and recognition.',
    icon: (
      <svg className="w-6 h-6 stroke-[#f1ca7e]" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Networking & Gala Dinner',
    description:
      'Unwind at formal evening events crafted to help delegates make lifelong friends, find co-founders, and build lasting professional ties.',
    icon: (
      <svg className="w-6 h-6 stroke-[#f1ca7e]" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative z-30 w-full bg-[#f8eee1] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]/15 rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.35)] -mt-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with scroll lazy loading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-left sm:text-center mx-auto mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020]">
            Summit Pillars
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#5a0d1b]">
            Our Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#650d1c] leading-relaxed">
            Empowering the next generation of youth entrepreneurs through practical experience,
            expert mentorship, and direct access to investors.
          </p>
        </motion.div>

        {/* 6 Feature Grid with staggered scroll lazy-loading cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VISION_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-[#e8dcc6]/75 rounded-3xl p-7 sm:p-9 border-2 border-[#89192c]/20 hover:border-[#701020] hover:bg-[#e8dcc6] shadow-md hover:shadow-2xl hover:shadow-[#5a0d1b]/20 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#701020] text-[#f1ca7e] shadow-md border-2 border-[#89192c] flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-[#5a0d1b] group-hover:rotate-2 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#5a0d1b] tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#650d1c]">
                  {card.description}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t-2 border-[#89192c]/15 flex items-center justify-between text-xs sm:text-sm font-bold text-[#701020] group-hover:text-[#5a0d1b] transition-colors">
                <span>Explore Pillar</span>
                <span className="w-7 h-7 rounded-full bg-[#701020] text-[#f1ca7e] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#5a0d1b]">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
