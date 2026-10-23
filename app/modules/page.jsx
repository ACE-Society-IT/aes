import React from 'react';
import Navbar from '@/components/Navbar';
import Modules from '@/components/home/Modules';
import Handbook from '@/components/home/Handbook';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Summit Modules | AES 2026',
  description:
    'Discover the 5 flagship competitive modules of AES 2026: Investomania, Market Monopoly, Venture Verse, Defend The Empire, and Viral Velocity.',
};

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] overflow-x-hidden pt-28 sm:pt-32">
      <Navbar />

      {/* Header intro */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#f8eee1] leading-[1.05]">
          Summit Modules
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] max-w-2xl mx-auto leading-relaxed">
          From trading floors and hostile takeovers to startup pitching and crisis containment — test your limits across our premier competitive simulations.
        </p>
      </section>

      {/* 5 Modules */}
      <Modules />

      {/* Delegate Guide Download Section */}
      <Handbook />

      <Footer />
    </main>
  );
}
