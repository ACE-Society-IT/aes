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

      {/* Curved Loop Ribbon (Seamless upper section transition) */}
      <section className="py-2 sm:py-3 bg-[#5a0d1b] border-y border-[#89192c]/30 overflow-hidden relative select-none">
        <CurvedLoop
          marqueeText="ALPHA ENTREPRENEURSHIP SUMMIT 2026"
          speed={2.2}
          curveAmount={220}
          direction="left"
          interactive={true}
          color="#f1ca7e"
          separator="✦ 5 SIMULATION TRACKS ✦ NOV 13–15, 2026 ✦ ALPHA COLLEGE KARACHI ✦"
          separatorColor="#f8eee1"
          fontSize={52}
          fontWeight={900}
          letterSpacing={2}
          outline={false}
          scrollBoost={0.8}
          shape="wave"
        />
      </section>

      <Vision />
      <Competition />
      <Modules />

      <Schedule />
      <Handbook />
      <Faqs />
      <Footer />
    </main>
  );
}
