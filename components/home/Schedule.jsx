import React from 'react';
import Timeline from '@/components/ui/timeline';

export default function Schedule() {
  return (
    <div
      id="schedule"
      className="relative z-20 w-full bg-[#f8eee1] text-[#5a0d1b] border-t border-[#89192c]/15 rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.35)] -mt-10"
    >
      {/* Lead-in Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow badge matching Vision.jsx & DESIGN-RULES.md */}
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#701020]">
          Summit Itinerary
        </span>

        {/* Section Heading */}
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#5a0d1b]">
          Event <span className="text-[#701020]">Schedule</span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#650d1c] leading-relaxed">
          Three days of high-stakes pitching, autonomous agent hackathons, executive deal
          rooms, and venture masterclasses. Scroll down to advance through the live
          timeline.
        </p>
      </div>

      {/* Pinned Horizontal GSAP Scrub Timeline */}
      <Timeline
        id="timeline-journey"
        title="Summit Track"
        periodLabel="Nov 07 — Nov 09, 2026"
        backgroundColor="#f8eee1"
        textColor="#5a0d1b"
        mutedTextColor="#650d1c"
        activeColor="#701020"
        accentColor="#f1ca7e"
        borderColor="#e8dcc6"
        imageUrl="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
        imageAlt="AES Summit Grand Main Stage and Delegates"
        scrollDuration={1.2}
      />
    </div>
  );
}
