import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ExecutivesPage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] flex flex-col justify-between">
      <Navbar />
      <div className="pt-36 pb-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f1ca7e]">
          Leadership Board
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#f8eee1]">
          Executive <span className="text-[#f1ca7e]">Council</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#e8dcc6] max-w-xl">
          Visionary builders, managing directors, and partners steering the Alpha Entrepreneurship Summit 2026.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-[#f1ca7e] text-[#5a0d1b] hover:bg-[#f8eee1] font-semibold transition-all duration-300 shadow-lg shadow-[#5a0d1b]/50"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}