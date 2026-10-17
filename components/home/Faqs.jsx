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
      'AES is a premier, multi-day entrepreneurship summit uniting frontier founders, institutional venture capital, and global industry leaders. It features five flagship modules — Investomania, Defend the Empire, Venture Verse, Market Monopoly, and Viral Velocity — designed to catalyze the next generation of market-defining ventures.',
  },
  {
    question: 'Who should attend the summit?',
    answer:
      "AES is curated for ambitious founders, early-stage startup teams, aspiring entrepreneurs, university innovators, engineers, product builders, and investment professionals. Whether you're raising your seed round or looking for co-investment opportunities, the summit offers unmatched access to capital, mentorship, and strategic networks.",
  },
  {
    question: 'When and where will AES 2026 take place?',
    answer:
      'AES 2026 will be held across three flagship days from November 13–15, 2026 at Alpha College in Karachi, Pakistan. Stay connected through our official channels and Instagram (@aes_summit) for timely updates.',
  },
  {
    question: 'How do I register for the summit?',
    answer:
      'Registration is available through our official website. Click the "Register" button in the navigation bar or hero section to access the registration portal. Early-bird pricing and limited delegate passes are available on a first-come, first-served basis.',
  },
  {
    question: 'What is the prize pool and competition format?',
    answer:
      'Competitors across all five modules vie for a combined PKR 1.5M+ prize pool. Each module features three rigorous rounds evaluated by VC judges, enterprise partners, and industry leaders.',
  },
  {
    question: 'Can I participate in multiple modules?',
    answer:
      'Absolutely. Delegates are encouraged to engage across modules based on their skill set and strategic interests. Some modules run concurrently, so check the published schedule to plan your summit journey. Team formation across tracks is also supported.',
  },
  {
    question: 'Is there a code of conduct or dress code?',
    answer:
      'AES maintains a professional, inclusive environment under Chatham House rules for select executive sessions. Business-casual attire is recommended for daytime sessions, with smart formal attire for the evening networking gala. A full code of conduct is shared with every registered delegate.',
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
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className={`
          group rounded-2xl border transition-all duration-300
          ${
            isOpen
              ? 'bg-[#701020] border-[#f1ca7e]/50 shadow-[0_0_30px_rgba(241,202,126,0.12)]'
              : 'bg-[#5a0d1b]/70 border-[#89192c] hover:border-[#f1ca7e]/40 hover:bg-[#701020]/60'
          }
        `}
      >
        {/* Question Button */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1ca7e]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5a0d1b] rounded-2xl"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-4 min-w-0">
            {/* Index Number */}
            <span
              className={`
                text-xs font-bold tabular-nums shrink-0 transition-colors duration-300
                ${isOpen ? 'text-[#f1ca7e]' : 'text-[#89192c] group-hover:text-[#e8dcc6]'}
              `}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Question Text */}
            <span
              className={`
                text-sm sm:text-base font-semibold tracking-tight transition-colors duration-300
                ${isOpen ? 'text-[#f8eee1]' : 'text-[#e8dcc6] group-hover:text-[#f8eee1]'}
              `}
            >
              {item.question}
            </span>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <ChevronDown
              size={18}
              className={`
                transition-colors duration-300
                ${isOpen ? 'text-[#f1ca7e]' : 'text-[#89192c] group-hover:text-[#e8dcc6]'}
              `}
            />
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
              <div className="px-6 pb-5 sm:px-8 sm:pb-6 pl-[calc(1.5rem+2rem)] sm:pl-[calc(2rem+2rem)]">
                <div className="h-px w-full bg-gradient-to-r from-[#89192c] via-[#89192c]/40 to-transparent mb-4" />
                <p className="text-sm sm:text-base leading-relaxed text-[#e8dcc6]">
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
      className="w-full text-[#f8eee1] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#89192c]"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Two-Column Layout: Header Left + FAQs Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column — Section Header */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
              Have Questions?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f8eee1]">
              Frequently <span className="text-[#f1ca7e]">Asked</span>
              <br />
              Questions
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#e8dcc6] leading-relaxed max-w-md">
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
