import Navbar from '@/components/Navbar';
import Competition from '@/components/home/Competition';
import Hero from '@/components/home/Hero';
import Vision from '@/components/home/Vision';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0704] text-[#F4EFEA]">
      <Navbar />
      <Hero />
      <Vision />
      <Competition/>
    </main>
  );
}