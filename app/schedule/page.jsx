import React from 'react';
import Navbar from '@/components/Navbar';
import Schedule from '@/components/home/Schedule';
import Handbook from '@/components/home/Handbook';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Summit Track & Schedule',
  description:
    'Explore the full three-day itinerary for the Alpha Entrepreneurship Summit 2026. From opening rounds to the Grand Gala Dinner.',
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] overflow-x-hidden">
      <Navbar />

      {/* Summit Timeline */}
      <Schedule />

      {/* Delegate Guide Download Section */}
      <Handbook />

      <Footer />
    </main>
  );
}
