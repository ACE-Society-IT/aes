import React from 'react';
import Timeline from '@/components/ui/timeline';

export default function Schedule() {
  return (
    <div
      id="schedule"
      className="relative w-full bg-[#160D09] text-[#F4EFEA] border-t border-[#52433D]/50"
    >
      {/* Lead-in Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F4EFEA]">
          Event <span className="text-[#E5D9C5]">Schedule</span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#B09B8C] leading-relaxed">
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
        backgroundColor="#160D09"
        textColor="#F4EFEA"
        mutedTextColor="#B09B8C"
        activeColor="#E5D9C5"
        imageUrl="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
        imageAlt="AES Summit Grand Main Stage and Delegates"
        scrollDuration={1.2}
      />
    </div>
  );
}

