import React from 'react';
import Timeline from '@/components/ui/timeline';

export default function Schedule() {
  return (
    <div
      id="schedule"
      className="relative z-20 w-full bg-[#f8eee1] text-[#5a0d1b] border-t border-[#89192c]/15 rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.35)] -mt-10"
    >
     

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
