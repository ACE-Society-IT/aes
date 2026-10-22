import React from 'react';
import Navbar from '@/components/Navbar';
import Faqs from '@/components/home/Faqs';
import Handbook from '@/components/home/Handbook';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Frequently Asked Questions | AES 2026',
  description:
    'Got questions about the Alpha Entrepreneurship Summit 2026? Find all answers on eligibility, team registrations, modules, and schedule.',
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] overflow-x-hidden pt-28 sm:pt-32">
      <Navbar />

      {/* Header intro */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#701020] border border-[#89192c] text-[#f1ca7e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          Everything You Need to Know
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#f8eee1] leading-[1.05]">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] max-w-2xl mx-auto leading-relaxed">
          Find clarity on registration deadlines, accommodation, module structures, and delegate guidelines before joining AES 2026.
        </p>
      </section>

      {/* FAQs Accordion */}
      <Faqs />

      {/* Delegate Guide Download Section */}
      <Handbook />

      <Footer />
    </main>
  );
}
