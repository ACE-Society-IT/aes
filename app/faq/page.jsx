import React from 'react';
import Navbar from '@/components/Navbar';
import Faqs from '@/components/home/Faqs';
import Handbook from '@/components/home/Handbook';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Got questions about the Alpha Entrepreneurship Summit 2026? Find all answers on eligibility, team registrations, modules, and schedule.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] overflow-x-hidden pt-12 sm:pt-16">
      <Navbar />

      {/* FAQs Accordion */}
      <Faqs />

      {/* Delegate Guide Download Section */}
      <Handbook />

      <Footer />
    </main>
  );
}
