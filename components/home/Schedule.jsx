import React from 'react';
import Timeline from '@/components/ui/timeline';

export default function Schedule() {
  return (
    <div
      id="schedule"
      className="relative z-20 w-full bg-[#f8eee1] text-[#5a0d1b] border-t border-[#89192c]/15 rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(90,13,27,0.35)] -mt-10 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Pinned Scroll-and-Pause Day-by-Day Timeline */}
      <Timeline
        id="timeline-journey"
        title="Summit Track"
        periodLabel="Nov 13 — Nov 15, 2026"
      />
    </div>
  );
}
