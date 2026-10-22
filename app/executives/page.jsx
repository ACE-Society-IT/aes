'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Shield, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function LinkedInIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ExecutiveAvatar({ gender, name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-[#5a0d1b] select-none">
      {/* Refined subtle ambient radial backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(241,202,126,0.06),transparent_70%)] pointer-events-none" />

      {/* Professional Minimalist Vector Silhouette */}
      <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center">
        {gender === 'female' ? (
          <svg
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
          >
            {/* Background Disc */}
            <circle cx="64" cy="64" r="62" fill="#701020" stroke="#89192c" strokeWidth="2" />

            {/* Hair contour (behind head) */}
            <path
              d="M44 50 C44 32, 53 25, 64 25 C75 25, 84 32, 84 50 C84 66, 82 78, 86 86 C79 86, 77 70, 77 58 C77 41, 71 35, 64 35 C57 35, 51 41, 51 58 C51 70, 49 86, 42 86 C46 78, 44 66, 44 50 Z"
              fill="#89192c"
            />

            {/* Head */}
            <circle cx="64" cy="50" r="15" fill="#f8eee1" />

            {/* Neck */}
            <rect x="60" y="62" width="8" height="12" fill="#f8eee1" />

            {/* Torso / Contoured shoulders */}
            <path
              d="M36 112 C36 92, 48 80, 64 80 C80 80, 92 92, 92 112 Z"
              fill="#f8eee1"
            />

            {/* Professional V-neck jacket lapel line */}
            <path
              d="M57 80 L64 94 L71 80"
              stroke="#701020"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
          >
            {/* Background Disc */}
            <circle cx="64" cy="64" r="62" fill="#701020" stroke="#89192c" strokeWidth="2" />

            {/* Head */}
            <circle cx="64" cy="48" r="16" fill="#f8eee1" />

            {/* Neck */}
            <rect x="59" y="61" width="10" height="12" fill="#f8eee1" />

            {/* Torso / Structured suit shoulders */}
            <path
              d="M32 112 C32 89, 46 78, 64 78 C82 78, 96 89, 96 112 Z"
              fill="#f8eee1"
            />

            {/* Suit jacket collar & tie notch */}
            <path
              d="M56 78 L64 93 L72 78"
              stroke="#701020"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M64 93 V105"
              stroke="#701020"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Minimalist Professional Monogram Badge */}
      <div className="mt-4 px-3 py-1 rounded-full bg-[#701020]/90 border border-[#89192c] flex items-center gap-1.5 shadow-sm">
        <span className="text-[11px] font-bold tracking-widest text-[#f1ca7e] uppercase">
          {initials}
        </span>
        <span className="text-[10px] font-semibold tracking-wider text-[#e8dcc6] uppercase">
          • Executive
        </span>
      </div>
    </div>
  );
}

const EXECUTIVES = [
  {
    id: 'mansoor-moiz',
    name: 'Mansoor Moiz',
    gender: 'male',
    role: 'Chief Executive Officer (CEO)',
    badge: 'Executive Leadership',
    image: '/executives/mansoor-moiz.png',
    linkedin: 'https://www.linkedin.com/in/mansoor-moiz/',
    bio: 'As CEO, I focus on driving ACE’s vision, aligning teams toward shared goals, and building meaningful partnerships. I aim to foster a spirit of entrepreneurship, encourage innovative thinking, and create opportunities that connect students with the business world. Through strategic direction, collaboration, and effective execution, my goal is to deliver a summit that promotes practical learning, inspires new ideas, and creates a lasting impact on every participant.',
  },
  {
    id: 'zoya-ehtasham',
    name: 'Zoya Ehtasham',
    gender: 'female',
    role: 'Chief Financial Officer (CFO)',
    badge: 'Financial Governance',
    image: null,
    linkedin: null,
    bio: 'As CFO, I oversee financial strategy, resource allocation, and budget governance for AES. My priority is ensuring fiscal discipline, securing key sponsorships, and maximizing value across all summit modules to provide delegates and partners with a seamless, world-class experience.',
  },
  {
    id: 'bareerah-ahmed',
    name: 'Bareerah Ahmed',
    gender: 'female',
    role: 'Chief Communication Officer (CCO)',
    badge: 'Communications & Outreach',
    image: '/executives/bareerah-ahmed.png',
    linkedin: 'https://www.linkedin.com/in/bareerah-ahmed-ba1493423?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Chief Communication Officer, I aim to expand AES’s reach through strategic outreach, meaningful networking, and impactful partnerships. I’ll build strong connections with stakeholders and ensure seamless communication that strengthens the summit’s presence and impact.',
  },
  {
    id: 'ayaan-japanwalla',
    name: 'Ayaan Japanwalla',
    gender: 'male',
    role: 'Marketing Director',
    badge: 'Brand & Growth Strategy',
    image: '/executives/ayaan-japanwalla.jpg',
    linkedin: 'https://www.linkedin.com/in/ayaanjapanwalla',
    bio: 'As Marketing Director, I aim to bring AES to life through creative campaigns, engaging content, and strategic promotion. My focus is on building a strong brand presence, generating excitement, and connecting with our audience to make AES a memorable and impactful experience.',
  },
  {
    id: 'ayan-khurrum',
    name: 'Ayan Khurrum',
    gender: 'male',
    role: 'Module Director',
    badge: 'Competition Design',
    image: null,
    linkedin: 'https://www.linkedin.com/in/ayan-khurram-3bb4b4424?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Module Director, I aim to turn entrepreneurial ideas into meaningful experiences through strategic planning, creative thinking, and effective team leadership. I’ll focus on fostering innovation, encouraging collaboration, and ensuring seamless execution to deliver an engaging and impactful summit experience for every participant involved.',
  },
  {
    id: 'ahmed-shahid',
    name: 'Ahmed Shahid',
    gender: 'male',
    role: 'Operating Director',
    badge: 'Operations & Logistics',
    image: null,
    linkedin: 'https://www.linkedin.com/in/ahmed-shahid-2326582aa?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'As Operating Director, my goal is to make sure everything runs smoothly and efficiently while keeping the team motivated and focused. I believe in good planning, clear communication, and working together to get things done. I’m ready to take responsibility, solve problems, and make sure we deliver the best possible AES experience for everyone involved.',
  },
];

export default function ExecutivesPage() {
  return (
    <main className="min-h-screen bg-[#5a0d1b] text-[#f8eee1] flex flex-col justify-between selection:bg-[#f1ca7e] selection:text-[#5a0d1b]">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-40 sm:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,#89192c_0%,#701020_45%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#f1ca7e]/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f1ca7e]/40 bg-[#701020]/80 text-[#f1ca7e] text-xs font-bold uppercase tracking-[0.25em] shadow-lg shadow-[#5a0d1b]/60 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Leadership Board
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#f8eee1] leading-[0.95]">
            Executive <span className="text-[#f1ca7e]">Council</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-[#e8dcc6] max-w-2xl font-normal leading-relaxed">
            The visionary directors, builders, and strategists leading the Alpha Entrepreneurship
            Summit 2026.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl">
            <div className="rounded-2xl border-2 border-[#89192c] bg-[#701020]/60 backdrop-blur-md p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#f1ca7e]">6</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e8dcc6]">
                Core Directors
              </span>
            </div>
            <div className="rounded-2xl border-2 border-[#89192c] bg-[#701020]/60 backdrop-blur-md p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#f8eee1]">5</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e8dcc6]">
                Flagship Modules
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-2xl border-2 border-[#89192c] bg-[#701020]/60 backdrop-blur-md p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#f1ca7e]">1</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e8dcc6]">
                Shared Mission
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Executives Roster Grid */}
      <section className="relative z-20 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#650d1c] border-t-2 border-[#89192c] rounded-t-[40px] sm:rounded-t-[56px] shadow-[0_-30px_70px_rgba(90,13,27,0.6)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {EXECUTIVES.map((exec, index) => (
              <motion.div
                key={exec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl bg-[#701020]/80 border-2 border-[#89192c] hover:border-[#f1ca7e]/80 p-6 sm:p-7 flex flex-col justify-between shadow-2xl shadow-[#5a0d1b]/70 hover:shadow-[0_20px_55px_rgba(90,13,27,0.95)] hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl overflow-hidden"
              >
                {/* Ambient Top Glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#f1ca7e]/10 rounded-full blur-2xl group-hover:bg-[#f1ca7e]/25 transition-all duration-700 pointer-events-none" />

                <div>
                  {/* Photo / Avatar Frame */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#89192c] group-hover:border-[#f1ca7e]/60 shadow-lg bg-[#5a0d1b] mb-6 flex items-center justify-center">
                    {exec.image ? (
                      <>
                        <Image
                          src={exec.image}
                          alt={exec.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#5a0d1b]/80 via-transparent to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <ExecutiveAvatar gender={exec.gender} name={exec.name} />
                    )}

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-[#5a0d1b]/90 backdrop-blur-md border border-[#f1ca7e]/50 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#f1ca7e] shadow-md z-10">
                      {exec.badge}
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="mb-4">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#f8eee1] tracking-tight group-hover:text-[#f1ca7e] transition-colors duration-300">
                      {exec.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-[#f1ca7e] tracking-wide uppercase mt-1">
                      {exec.role}
                    </p>
                  </div>

                  {/* Bio statement */}
                  <div className="relative bg-[#5a0d1b]/80 border-2 border-[#89192c]/80 rounded-2xl p-4 sm:p-5 text-xs sm:text-[13px] text-[#e8dcc6] leading-relaxed mb-6 group-hover:border-[#89192c] transition-colors">
                    <span className="text-2xl text-[#f1ca7e] font-serif leading-none block mb-1">“</span>
                    <p className="italic">{exec.bio}</p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t-2 border-[#89192c]/60 flex items-center justify-between gap-3">
                  {exec.linkedin ? (
                    <a
                      href={exec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-between pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-xs sm:text-sm tracking-tight shadow-lg shadow-[#5a0d1b]/50 hover:shadow-[0_0_20px_rgba(248,238,225,0.45)] hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 ease-out w-full"
                    >
                      <span className="flex items-center gap-1.5">
                        <LinkedInIcon className="w-3.5 h-3.5 text-[#5a0d1b]" />
                        <span>Connect on LinkedIn</span>
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-2.5 shrink-0 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#701020]">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#89192c]/50 text-[#f8eee1] font-semibold text-xs border border-[#89192c] w-full">
                      <Shield className="w-3.5 h-3.5 text-[#f1ca7e]" />
                      <span>Executive Council Board</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Navigation CTA */}
          <div className="mt-20 pt-12 border-t-2 border-[#89192c] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-[#f8eee1]">
                Ready to Join the Summit?
              </h3>
              <p className="text-sm text-[#e8dcc6] mt-1">
                Register as an individual or team delegate for AES 2026.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://forms.gle/cGVgw5TpvpU9AXZx5"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-between pl-7 pr-2.5 py-2.5 sm:pl-8 sm:pr-3 sm:py-3 rounded-full bg-[#f8eee1] hover:bg-[#f1ca7e] text-[#5a0d1b] font-bold text-sm sm:text-base tracking-tight shadow-xl shadow-[#5a0d1b]/60 hover:shadow-[0_0_28px_rgba(248,238,225,0.5)] hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 ease-out whitespace-nowrap"
              >
                <span>Register Now</span>
                <span className="w-8 h-8 rounded-full bg-[#5a0d1b] text-[#f8eee1] flex items-center justify-center ml-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#701020]">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </a>

              <Link
                href="/"
                className="group relative inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#89192c]/50 border-2 border-[#f1ca7e]/40 hover:border-[#f1ca7e] hover:bg-[#89192c] text-[#f8eee1] font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>Return Home</span>
                <span className="w-7 h-7 rounded-full bg-[#f1ca7e] text-[#5a0d1b] flex items-center justify-center ml-3 shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}