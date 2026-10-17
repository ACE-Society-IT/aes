import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Competition from '@/components/home/Competition';
import Faqs from '@/components/home/Faqs';
import Handbook from '@/components/home/Handbook';
import Hero from '@/components/home/Hero';
import Modules from '@/components/home/Modules';
import Schedule from '@/components/home/Schedule';
import Vision from '@/components/home/Vision';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0704] text-[#F4EFEA]">
      <Navbar />
      <Hero />
      <Vision />
      <Handbook />
      <Competition />
      <Modules />
      <Schedule />
      <Faqs />
      <Footer />
    </main>
  );
}
