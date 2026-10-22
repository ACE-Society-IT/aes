import React from 'react';
import Navbar from '@/components/Navbar';
import Schedule from '@/components/home/Schedule';
import Handbook from '@/components/home/Handbook';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Summit Track & Schedule | AES 2026',
  description:
    'Explore the full three-day itinerary for the Alpha Entrepreneurship Summit 2026. From opening rounds to the Grand Gala Dinner.',
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] overflow-x-hidden pt-28 sm:pt-32">
      <Navbar />

      {/* Header intro */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#701020] border border-[#89192c] text-[#f1ca7e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          3-Day Summit Itinerary
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#f8eee1] leading-[1.05]">
          The Summit Track
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] max-w-2xl mx-auto leading-relaxed">
          November 13 — November 15, 2026 · Hosted at Alpha College Karachi. Scroll through each day to discover keynote rounds, simulations, and ceremonies.
        </p>
      </section>

      {/* Summit Timeline */}
      <Schedule />

      {/* Delegate Guide Download Section */}
      <Handbook />

      <Footer />
    </main>
  );
}
