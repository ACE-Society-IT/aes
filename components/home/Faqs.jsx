'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MouseStreakWrapper from './MouseStreakWrapper';

/* ──────────────────────────────────────────────
   FAQ Data — AES Summit 2026
   ────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    question: 'What is the Alpha Entrepreneurship Summit (AES)?',
    answer:
      'AES is Pakistan’s premier youth entrepreneurship summit. It brings together ambitious students, industry leaders, and investors for three days of high-intensity business simulations, practical masterclasses, and networking across five flagship modules.',
  },
  {
    question: 'Who should attend the summit?',
    answer:
      'AES is designed for high school, college, and university students, aspiring founders, and creative problem-solvers. Whether you already have a startup concept or simply want to sharpen your business and trading instincts, AES offers hands-on experience and direct mentorship.',
  },
  {
    question: 'When and where will AES 2026 take place?',
    answer:
      'AES 2026 will take place over three days from November 13–15, 2026, hosted at Alpha College in Karachi, Pakistan. Stay updated with announcements by following our official Instagram (@aes_summit).',
  },
  {
    question: 'How do I register for the summit?',
    answer:
      'You can register online by clicking the "Register Now" button in the navigation bar or hero section. You may sign up individually or with your team. Delegate passes are limited, so early registration is encouraged.',
  },
  {
    question: 'How does the competition work and how are winners chosen?',
    answer:
      'Each module has multiple practical rounds judged by experienced entrepreneurs, corporate executives, and industry mentors. Top performing delegates and teams receive official awards at the closing ceremony.',
  },
  {
    question: 'Can I register for more than one module?',
    answer:
      'No. You can only choose one competition module so you can take part in all its rounds without schedule conflicts. However, all registered delegates can attend the guest speaker sessions, workshops, and the social gala.',
  },
  {
    question: 'Is there a dress code or code of conduct?',
    answer:
      'Yes. Business-casual attire is recommended for daytime modules and presentations, while formal attire is requested for the evening awards ceremony and gala dinner. A complete guide will be provided to all registered delegates prior to the event.',
  },
];

/* ──────────────────────────────────────────────
   Accordion Item
   ────────────────────────────────────────────── */
function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className={`
          group rounded-3xl border-2 transition-all duration-300 ease-out hover:scale-[1.01]
          ${
            isOpen
              ? 'bg-[#701020] border-[#f1ca7e] shadow-[0_12px_40px_rgba(241,202,126,0.2)]'
              : 'bg-[#5a0d1b]/80 border-[#89192c] hover:border-[#f1ca7e]/60 hover:bg-[#701020]/70 shadow-xl shadow-[#5a0d1b]/50'
          }
        `}
      >
        {/* Question Button */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 py-3.5 sm:px-8 sm:py-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5a0d1b] rounded-3xl active:scale-[0.99] transition-transform duration-200"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            {/* Index Number */}
            <span
              className={`
                w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-black tabular-nums shrink-0 transition-colors duration-300
                ${isOpen ? 'bg-[#f1ca7e] text-[#5a0d1b]' : 'bg-[#701020] text-[#f1ca7e] group-hover:bg-[#89192c]'}
              `}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Question Text */}
            <span
              className={`
                text-sm sm:text-lg font-bold tracking-tight transition-colors duration-300 leading-snug
                ${isOpen ? 'text-[#f8eee1]' : 'text-[#e8dcc6] group-hover:text-[#f8eee1]'}
              `}
            >
              {item.question}
            </span>
          </div>

          {/* Chevron in circular disc */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
              isOpen
                ? 'bg-[#5a0d1b] border-[#f1ca7e]/60 text-[#f1ca7e]'
                : 'bg-[#701020] border-[#89192c] text-[#e8dcc6] group-hover:border-[#f1ca7e]/60 group-hover:text-[#f1ca7e]'
            }`}
          >
            <ChevronDown className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 transition-colors duration-300" />
          </motion.div>
        </button>

        {/* Answer Panel */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3, delay: 0.05 },
              }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 sm:px-8 sm:pb-6 pl-4 sm:pl-[calc(2rem+2rem)]">
                <div className="h-px w-full bg-gradient-to-r from-[#89192c] via-[#89192c]/40 to-transparent mb-3 sm:mb-4" />
                <p className="text-xs sm:text-base leading-relaxed text-[#e8dcc6]">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Faqs Section
   ────────────────────────────────────────────── */
export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <MouseStreakWrapper
      id="faqs"
      fadeOnScroll={false}
      className="w-full text-[#f8eee1] py-10 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Two-Column Layout: Header Left + FAQs Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
          {/* Left Column — Section Header */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Have Questions?
            </span>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f8eee1]">
              Frequently <span className="text-[#f1ca7e]">Asked</span>
              <br />
              Questions
            </h2>
            <p className="mt-2 sm:mt-5 text-xs sm:text-base md:text-lg text-[#e8dcc6] leading-relaxed max-w-md">
              Everything you need to know about AES 2026 — from registration and modules
              to competition formats and networking opportunities.
            </p>
          </motion.div>

          {/* Right Column — Accordion */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </MouseStreakWrapper>
  );
}
