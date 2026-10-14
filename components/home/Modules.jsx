'use client';

import React from 'react';
import SqueezeCarousel from '@/components/ui/carousel-squeeze';

/**
 * Wordmark overlay badge displayed on the open panel
 */
const renderBadge = (tag, title) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2.5">
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#160D09]/85 backdrop-blur-md border border-[#52433D]/90 text-[10px] font-bold uppercase tracking-widest text-[#E5D9C5] shadow-sm">
      {tag}
    </span>
    <span className="text-sm sm:text-base font-semibold tracking-tight text-[#F4EFEA] drop-shadow-md">
      {title}
    </span>
  </div>
);

const MODULES_SLIDES = [
  {
    id: 'venture-sprint',
    title: 'The Venture Sprint: High-Stakes Seed & Pre-Series Pitch Arena.',
    description:
      'Elite early-stage startups pitch live before top-tier institutional VCs, angel syndicates, and sovereign allocators for direct term sheets and equity-free grants.',
    action: 'Enter Venture Arena',
    href: '#register',
    overlay: renderBadge('Module 01', 'Venture Sprint'),
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Startup founders pitching to investors during venture summit',
  },
  {
    id: 'ai-hackathon',
    title: 'AI Frontier Hackathon: 36-Hour Autonomous Agent Challenge.',
    description:
      'Engineers and AI researchers collaborate under real-time constraints to architect autonomous agents, fine-tuned foundational models, and high-throughput enterprise pipelines.',
    action: 'Review Hackathon Track',
    href: '#register',
    overlay: renderBadge('Module 02', 'AI Frontier Hackathon'),
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineering teams collaborating during hackathon sprint',
  },
  {
    id: 'case-crack',
    title: 'Corporate Case Crack: High-Impact Market Turnaround Simulation.',
    description:
      'Dissect high-stakes enterprise bottlenecks, private equity restructuring scenarios, and international expansion roadmaps evaluated by Tier-1 management consultants.',
    action: 'Download Case Brief',
    href: '#register',
    overlay: renderBadge('Module 03', 'Case Strategy'),
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Corporate enterprise skyscraper reflecting strategy and capital',
  },
  {
    id: 'brand-growth',
    title: 'Brand X & Growth Engine: Guerrilla Product-Market Acceleration.',
    description:
      'Build end-to-end user acquisition loops, digital conversion funnels, and narrative positioning designed to achieve velocity in crowded markets.',
    action: 'Explore Growth Track',
    href: '#register',
    overlay: renderBadge('Module 04', 'Brand & Growth'),
    image:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Product growth and marketing strategists mapping acquisition funnel',
  },
  {
    id: 'ecoventure',
    title: 'EcoVenture Track: Scalable Climate & Circular Economy Tech.',
    description:
      'Empowering founders building climate intelligence, clean industrial technology, and circular infrastructure to unlock sustainable global impact.',
    action: 'Discover Track Specs',
    href: '#register',
    overlay: renderBadge('Module 05', 'Sustainability Track'),
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Clean sustainable architecture representing futuristic green enterprise',
  },
  {
    id: 'deal-room',
    title: 'The Executive Deal Room: Private LP Receptions & Co-Investment Circles.',
    description:
      'An invite-only Chatham House rule sanctuary for founders, LP institutional allocators, and enterprise partners orchestrating strategic co-investments and M&A.',
    action: 'Request Deal Room Access',
    href: '#register',
    overlay: renderBadge('Module 06', 'Executive Deal Room'),
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Executive delegates and partners conversing at summit deal room',
  },
];

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative w-full bg-[#0D0704] text-[#F4EFEA] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#52433D]/50 overflow-hidden"
    >
      {/* Ambient Radial Spotlight strictly following DESIGN-RULES.md */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 50% 15%, #38251D 0%, #281A14 45%, #0D0704 85%)',
        }}
      />

      {/* Decorative Warm Vignette Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-[#E5D9C5]/[0.03] rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
           
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F4EFEA]">
              Flagship Modules
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#B09B8C] leading-relaxed">
              Six high-velocity challenge arenas designed to test founders, engineers, and strategists.
              Compete for the PKR 1.5M+ pool, institutional term sheets, and global venture acceleration.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-4 self-start md:self-auto bg-[#1E130E]/90 border border-[#52433D]/80 rounded-2xl p-4 backdrop-blur-sm shadow-md">
            <div className="border-r border-[#52433D]/60 pr-4">
              <div className="text-2xl font-black text-[#E5D9C5]">6</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                Arenas
              </div>
            </div>
            <div className="border-r border-[#52433D]/60 pr-4">
              <div className="text-2xl font-black text-[#F4EFEA]">1.5M+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                Prize Pool
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#E5D9C5]">40+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                VC Judges
              </div>
            </div>
          </div>
        </div>

        {/* Squeeze Carousel Container */}
        <div className="w-full bg-[#160D09]/60 rounded-3xl p-4 sm:p-8 border border-[#52433D]/60 backdrop-blur-md shadow-2xl">
          <SqueezeCarousel
            slides={MODULES_SLIDES}
            defaultIndex={0}
            height="clamp(260px, 36cqi, 420px)"
            slatWidth={10}
            slatGap={10}
            gap={18}
            radius={14}
            duration={850}
            hoverGrow={true}
            autoplay={true}
            interval={5500}
            controls={true}
            accent="#E5D9C5"
            accentForeground="#1E1410"
            label="AES Flagship Summit Modules"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}