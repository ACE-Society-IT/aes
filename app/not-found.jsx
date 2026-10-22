import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page Not Found | AES 2026',
  description: 'The requested page could not be found. Return to Alpha Entrepreneurship Summit 2026.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] flex flex-col justify-between pt-28 sm:pt-36">
      <Navbar />

      <section className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center my-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#701020] border border-[#89192c] text-[#f1ca7e] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
          Error 404
        </div>

        <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-[#f1ca7e] leading-none mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f8eee1] tracking-tight mb-4">
          Off the Summit Track
        </h2>

        <p className="text-base sm:text-lg text-[#e8dcc6] max-w-lg mx-auto leading-relaxed mb-10">
          The page or itinerary you are looking for has moved or does not exist. Navigate back to explore our summit tracks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-sm tracking-tight transition-all duration-300 shadow-xl shadow-[#5a0d1b]/50 hover:scale-105 active:scale-95"
          >
            Return to Homepage
          </Link>

          <Link
            href="/schedule"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#89192c] hover:border-[#f1ca7e] bg-[#701020]/80 text-[#f8eee1] hover:text-[#f1ca7e] font-bold text-sm tracking-tight transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View Summit Track
          </Link>

          <Link
            href="/modules"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#89192c] hover:border-[#f1ca7e] bg-[#701020]/80 text-[#f8eee1] hover:text-[#f1ca7e] font-bold text-sm tracking-tight transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Modules
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
