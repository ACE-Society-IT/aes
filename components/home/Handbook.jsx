'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  FileText,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Award,
  Shirt,
  Clock,
  ArrowUpRight,
  Eye,
  BookOpen,
  FileDown,
  Layers,
  Scale,
  Sparkle,
  Check,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   SUMMIT BRIEFING POINTERS
   ───────────────────────────────────────────────────────────── */
const SUMMIT_POINTERS = [
  {
    icon: Layers,
    title: '6 Signature Competitive Tracks',
    description:
      'Structured 48-hour competitive streams spanning Venture Pitching, Autonomous AI Sprint, Corporate Innovation Challenge, and Growth Labs.',
    tag: 'FORMAT',
  },
  {
    icon: Scale,
    title: 'Transparent Evaluation Rubrics',
    description:
      'Rigorous adjudication benchmark: Market Validation (25%), Financial Defensibility (25%), Proprietary Moat (20%), and Executive Defense (30%).',
    tag: 'SCORING',
  },
  {
    icon: Award,
    title: 'PKR 1.5M+ Pool & Term Sheets',
    description:
      'Non-dilutive innovation grants, institutional syndication intros, and fast-track incubator admissions for podium-ranking delegates.',
    tag: 'REWARDS',
  },
  {
    icon: ShieldCheck,
    title: 'Proprietary IP & Chatham House Rule',
    description:
      '100% IP ownership retained by participating teams. Select venture roundtables operate under strict non-disclosure conventions.',
    tag: 'INTEGRITY',
  },
  {
    icon: Clock,
    title: 'Strict Deliverable Checkpoints',
    description:
      'Hard submission deadlines for pitch decks, financial models, and code repositories enforced via the official AES portal.',
    tag: 'DEADLINES',
  },
  {
    icon: CheckCircle2,
    title: 'Accredited Access & RFID Badging',
    description:
      'Digital accreditation badge and government-issued ID mandatory for all access gates, private investor lounges, and keynotes.',
    tag: 'CHECK-IN',
  },
];

/* ─────────────────────────────────────────────────────────────
   OFFICIAL DRESS CODE TIERS
   ───────────────────────────────────────────────────────────── */
const DRESS_CODE_TIERS = [
  {
    tier: 'Daytime Sessions & Pitch Arenas',
    code: 'Western Business Formal',
    badge: 'MANDATORY',
    recommendations: [
      'Tailored two-piece or three-piece suits in navy, charcoal, or dark tones',
      'Pressed collared dress shirts with conservative necktie or bow tie',
      'Executive tailored blazers, trousers, or modest business formal attire',
      'Polished formal leather dress shoes or executive formal footwear',
    ],
    prohibited: 'No athletic trainers, graphic tees, or distressed jeans',
  },
  {
    tier: 'Workshops & Hackathon Labs',
    code: 'Smart Executive Casual',
    badge: 'COLLABORATIVE',
    recommendations: [
      'Collared button-down shirts, polo shirts, or structured knitwear',
      'Tailored chinos or dark pressed trousers paired with smart blazers',
      'Clean, minimalist monotone dress sneakers or leather loafers',
      'Company or university branded polo apparel permitted for teams',
    ],
    prohibited: 'No gym wear, casual tracksuits, shorts, or flip-flops',
  },
  {
    tier: 'Evening Gala & Award Ceremony',
    code: 'Black Tie Optional / Formal Evening Elegance',
    badge: 'GRAND GALA',
    recommendations: [
      'Classic black or midnight navy tuxedos, or formal evening dark suits',
      'Floor-length evening gowns or elegant contemporary formal dresses',
      'Ceremonial formal cultural attire (e.g., formal dark Sherwanis)',
      'Formal evening dress footwear with matching leather accessories',
    ],
    prohibited: 'Strictly zero casual or daytime sportswear permitted',
  },
];

export default function Handbook() {
  const [activeTab, setActiveTab] = useState('pointers'); // 'pointers' | 'dresscode'
  const [downloadStatus, setDownloadStatus] = useState('idle'); // 'idle' | 'preparing' | 'success'

  /**
   * Triggers an official PDF handbook download
   */
  const handleDownload = () => {
    setDownloadStatus('preparing');

    // Simulate instant secure file generation/prep
    setTimeout(() => {
      // Create a downloadable blob with handbook executive summary
      const handbookContent = `%PDF-1.4
%âãÏÓ
1 0 obj
<< /Title (Alpha Entrepreneurship Summit 2026 - Official Tournament Handbook)
   /Author (ACE Society / AES Organizing Committee)
   /Subject (Tournament Regulations, Dress Code, and Evaluation Rubrics)
   /Keywords (AES, Summit, Entrepreneurship, Competition, Regulations)
>>
endobj
2 0 obj
<< /Type /Catalog /Pages 3 0 R >>
endobj
3 0 obj
<< /Type /Pages /Kids [4 0 R] /Count 1 >>
endobj
4 0 obj
<< /Type /Page /Parent 3 0 R /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
5 0 obj
<< /Length 440 >>
stream
BT
/F1 24 Tf
72 710 Td
(ALPHA ENTREPRENEURSHIP SUMMIT 2026) Tj
/F1 14 Tf
0 -36 Td
(OFFICIAL TOURNAMENT HANDBOOK & DELEGATE DOSSIER) Tj
/F1 10 Tf
0 -30 Td
(Tournament Dates: Nov 07 - Nov 09, 2026 | Islamabad, Pakistan) Tj
0 -20 Td
(1. Mandatory Business Formal Dress Code for all keynote arenas and pitch stages.) Tj
0 -16 Td
(2. Smart Executive Casual for innovation workshops and hackathon labs.) Tj
0 -16 Td
(3. Black Tie Optional / Formal Evening Wear for the Grand Awards Gala.) Tj
0 -20 Td
(4. 100% intellectual property rights retained by participating teams.) Tj
0 -16 Td
(5. Evaluation: Market Validation 25%, Financials 25%, Moat 20%, Defense 30%.) Tj
0 -30 Td
(Downloaded from the Official AES Summit Portal: https://aes-summit.com) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f
0000000015 00000 n
0000000215 00000 n
0000000262 00000 n
0000000320 00000 n
0000000405 00000 n
trailer
<< /Size 6 /Root 2 0 R /Info 1 0 R >>
startxref
900
%%EOF`;

      const blob = new Blob([handbookContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'AES-2026-Official-Tournament-Handbook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadStatus('success');

      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3500);
    }, 600);
  };

  return (
    <section
      id="handbook"
      className="relative w-full bg-[#0D0704] text-[#F4EFEA] border-t border-[#52433D]/60 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* ─────────────────────────────────────────────
          Ambient Warm Backlight Glows
          ───────────────────────────────────────────── */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#38251D]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2E1D16]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E5D9C5]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─────────────────────────────────────────────
            Section Header
            ───────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A2D28]/80 border border-[#52433D] backdrop-blur-md shadow-sm mb-4"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#E5D9C5]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E5D9C5]">
              Official Tournament Guide • 2026 Edition
            </span>
          </motion.div>

          {/* Main Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F4EFEA]"
          >
            Tournament <span className="text-[#E5D9C5]">Handbook</span> & Guidelines
          </motion.h2>

          {/* Lead Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-[#B09B8C] leading-relaxed max-w-2xl"
          >
            Your comprehensive roadmap to the Alpha Entrepreneurship Summit. Access judging
            matrices, deliverable timelines, competitive frameworks, and the mandatory delegate
            dress code.
          </motion.p>
        </div>

        {/* ─────────────────────────────────────────────
            Main Content Grid (Book Showcase + Interactive Intel)
            ───────────────────────────────────────────── */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ──────────────────────────────────────────
              LEFT: 3D Book Cover & Download Card (5 Cols)
              ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* The Dossier Showcase Box */}
            <div className="w-full max-w-md rounded-3xl bg-[#160D09]/90 border border-[#52433D]/80 p-6 sm:p-8 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] relative group overflow-hidden">
              {/* Subtle top spotlight shine */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-44 bg-gradient-to-b from-[#E5D9C5]/15 to-transparent blur-2xl pointer-events-none" />

              {/* Book Mockup Frame */}
              <div className="relative mx-auto w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-[#52433D] transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
                <Image
                  src="/aes-handbook-cover.jpg"
                  alt="AES 2026 Official Tournament Handbook Cover"
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover"
                  priority
                />

                {/* Realistic book spine shadow on the left */}
                <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
                {/* Glossy sheen reflection overlay across diagonal */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60 pointer-events-none" />

                {/* Top Corner Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0D0704]/80 backdrop-blur-md border border-[#E5D9C5]/30 text-[9px] font-bold tracking-widest uppercase text-[#E5D9C5]">
                  OFFICIAL PDF
                </div>
              </div>

              {/* Document Metadata Details */}
              <div className="mt-7 text-center">
                <h3 className="text-xl font-bold text-[#F4EFEA] tracking-tight">
                  AES Summit Delegate Dossier
                </h3>
                <p className="mt-1 text-xs text-[#B09B8C]">
                  Version 2.4 • Published October 2026 • 36 Illustrated Pages
                </p>

                {/* Quick Spec Pills */}
                <div className="mt-4 flex items-center justify-center gap-2 flex-wrap text-[11px] font-medium text-[#B09B8C]">
                  <span className="px-2.5 py-1 rounded-lg bg-[#3A2D28]/70 border border-[#52433D]/60">
                    PDF Document
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#3A2D28]/70 border border-[#52433D]/60">
                    12.8 MB
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#3A2D28]/70 border border-[#52433D]/60">
                    English (Full)
                  </span>
                </div>
              </div>

              {/* ──────────────────────────────────────────
                  DOWNLOAD PDF BUTTON (High-Impact CTA)
                  ────────────────────────────────────────── */}
              <div className="mt-7 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={downloadStatus === 'preparing'}
                  className={`w-full relative group/btn flex items-center justify-center gap-3 py-3.5 px-6 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg ${
                    downloadStatus === 'success'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-[#1E1410] hover:bg-[#E5D9C5] hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                  aria-label="Download Official AES Tournament Handbook"
                >
                  {downloadStatus === 'preparing' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#1E1410] border-t-transparent rounded-full animate-spin" />
                      <span>Preparing Your Dossier...</span>
                    </>
                  ) : downloadStatus === 'success' ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Handbook Downloaded ✓</span>
                    </>
                  ) : (
                    <>
                      <FileDown className="w-4 h-4 text-[#1E1410] transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                      <span>Download Handbook (PDF)</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#B09B8C]/80">
                  Free instant download for all registered and prospective summit delegates.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ──────────────────────────────────────────
              RIGHT: Information Showcase (7 Cols)
              ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* View Switcher Tabs (Pointers vs Dress Code) */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#160D09] border border-[#52433D]/70 self-start mb-8">
              <button
                type="button"
                onClick={() => setActiveTab('pointers')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                  activeTab === 'pointers'
                    ? 'bg-[#E5D9C5] text-[#1E1410] shadow-md'
                    : 'text-[#B09B8C] hover:text-[#F4EFEA]'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Summit Pointers & Rules</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('dresscode')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                  activeTab === 'dresscode'
                    ? 'bg-[#E5D9C5] text-[#1E1410] shadow-md'
                    : 'text-[#B09B8C] hover:text-[#F4EFEA]'
                }`}
              >
                <Shirt className="w-4 h-4" />
                <span>Official Dress Code</span>
              </button>
            </div>

            {/* Tab 1: Summit Pointers & Information */}
            <AnimatePresence mode="wait">
              {activeTab === 'pointers' ? (
                <motion.div
                  key="tab-pointers"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SUMMIT_POINTERS.map((pointer, idx) => {
                      const IconComponent = pointer.icon;
                      return (
                        <div
                          key={pointer.title}
                          className="group p-5 rounded-2xl bg-[#160D09]/80 border border-[#52433D]/60 hover:border-[#E5D9C5]/50 hover:bg-[#1E130E] transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-9 h-9 rounded-xl bg-[#3A2D28]/80 border border-[#52433D] flex items-center justify-center text-[#E5D9C5] transition-transform duration-300 group-hover:scale-110">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#0D0704] text-[#B09B8C] border border-[#52433D]/40">
                                {pointer.tag}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-[#F4EFEA] group-hover:text-[#E5D9C5] transition-colors duration-200">
                              {pointer.title}
                            </h4>
                            <p className="mt-2 text-xs text-[#B09B8C] leading-relaxed">
                              {pointer.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Informational Callout Banner */}
                  <div className="mt-6 p-4 rounded-2xl bg-[#3A2D28]/40 border border-[#52433D]/70 flex items-start gap-3.5">
                    <Sparkles className="w-5 h-5 text-[#E5D9C5] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#E5D9C5] uppercase tracking-wider">
                        Executive Notice for Pitching Teams
                      </h5>
                      <p className="mt-1 text-xs text-[#B09B8C] leading-relaxed">
                        All final slide decks, live prototype URLs, and financial projections must be
                        uploaded to your delegate portal at least 4 hours before your module’s
                        commencement time. Late submissions incur automated scoring penalties.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Tab 2: Dress Code Protocol */
                <motion.div
                  key="tab-dresscode"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {DRESS_CODE_TIERS.map((tier) => (
                    <div
                      key={tier.tier}
                      className="p-5 sm:p-6 rounded-2xl bg-[#160D09]/80 border border-[#52433D]/70 hover:border-[#E5D9C5]/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#52433D]/40">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B09B8C]">
                            {tier.tier}
                          </span>
                          <h4 className="text-base font-bold text-[#E5D9C5]">{tier.code}</h4>
                        </div>
                        <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#3A2D28] text-[#F4EFEA] border border-[#52433D]">
                          {tier.badge}
                        </span>
                      </div>

                      <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {tier.recommendations.map((rec) => (
                          <div key={rec} className="flex items-start gap-2 text-xs text-[#F4EFEA]">
                            <Check className="w-3.5 h-3.5 text-[#E5D9C5] shrink-0 mt-0.5" />
                            <span>{rec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3.5 pt-3 border-t border-[#52433D]/30 flex items-center gap-2 text-[11px] text-[#B09B8C]">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                        <span>
                          <strong className="text-[#F4EFEA]">Prohibited:</strong> {tier.prohibited}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Mandatory Badge Reminder */}
                  <div className="p-4 rounded-2xl bg-[#3A2D28]/40 border border-[#52433D]/70 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#E5D9C5] shrink-0" />
                    <p className="text-xs text-[#B09B8C]">
                      <strong className="text-[#F4EFEA]">Badge Visibility Protocol:</strong> Your
                      official delegate badge with visible lanyard must be worn continuously inside
                      all summit halls, pitch rooms, and VIP lounges.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}