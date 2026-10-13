import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0704] text-[#F4EFEA]">
      <Navbar />
      <Hero />
    </main>
  );
}