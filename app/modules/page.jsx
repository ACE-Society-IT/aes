import React from 'react';
import Navbar from '@/components/Navbar';
import Modules from '@/components/home/Modules';
import Handbook from '@/components/home/Handbook';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Summit Modules',
  description:
    'Discover the 5 flagship competitive modules of AES 2026: Investomania, Market Monopoly, Venture Verse, Defend The Empire, and Viral Velocity.',
};

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] overflow-x-hidden">
      <Navbar />

      {/* 5 Modules */}
      <Modules />

      {/* Delegate Guide Download Section */}
      <Handbook />

      <Footer />
    </main>
  );
}
