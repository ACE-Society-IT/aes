import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Competition from '@/components/home/Competition';
import Faqs from '@/components/home/Faqs';
import Handbook from '@/components/home/Handbook';
import Hero from '@/components/home/Hero';
import Modules from '@/components/home/Modules';
import Schedule from '@/components/home/Schedule';
import Vision from '@/components/home/Vision';
import CurvedLoop from '@/components/CurvedLoop';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1]">
      <Navbar />
      <Hero />
      <Vision />
      <Competition />
      <Modules />

      {/* Interactive Curved Loop Ribbon */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-[#5a0d1b] via-[#650d1c] to-[#5a0d1b] border-y-2 border-[#89192c]/40 overflow-hidden relative select-none">
        <div className="max-w-7xl mx-auto px-4 text-center mb-3">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#f1ca7e] bg-[#701020]/90 px-4 py-1.5 rounded-full border border-[#f1ca7e]/40 shadow-md inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f1ca7e] animate-ping"></span>
            Interactive Summit Ribbon · Drag or Fling
          </span>
        </div>
        <CurvedLoop
          marqueeText="ALPHA ENTREPRENEURSHIP SUMMIT 2026"
          speed={2.2}
          curveAmount={240}
          direction="left"
          interactive={true}
          color="#f1ca7e"
          separator="✦ 5 SIMULATION TRACKS ✦ NOV 13–15, 2026 ✦ PKR 1,000,000+ PRIZE POOL ✦ ALPHA COLLEGE KARACHI ✦"
          separatorColor="#f8eee1"
          fontSize={56}
          fontWeight={900}
          letterSpacing={2}
          outline={false}
          scrollBoost={0.8}
          shape="wave"
        />
      </section>

      <Schedule />
      <Handbook />
      <Faqs />
      <Footer />
    </main>
  );
}
