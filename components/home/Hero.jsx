import Image from 'next/image';
import Link from 'next/link';
import MouseStreakWrapper from './MouseStreakWrapper';

const SUMMIT_DATES = [
  { day: 'FRIDAY', date: '13', month: 'NOV' },
  { day: 'SATURDAY', date: '14', month: 'NOV' },
  { day: 'SUNDAY', date: '15', month: 'NOV' },
];

export default function Hero() {
  return (
    <MouseStreakWrapper className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Main Center Content Container (Fully transparent so canvas streaks shine through) */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* AES Monument Logo Centerpiece (Refined, sleeker scale) */}
        <div className="relative group mb-5 flex flex-col items-center justify-center">
          {/* Ambient Backlight Halo */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#E5D9C5]/10 via-[#2E1D16]/50 to-[#E5D9C5]/10 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Logo Image */}
          <div className="relative w-44 sm:w-52 md:w-60 h-20 sm:h-24 md:h-28 transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/aes-logo.png"
              alt="AES - Alpha Entrepreneurship Summit"
              fill
              priority
              className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)]"
            />
          </div>

          <span className="mt-2 text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[#B09B8C]">
            Alpha Entrepreneurship Summit
          </span>
        </div>

        {/* Subtitle Description */}
        <p className="mt-2 text-base sm:text-lg md:text-xl text-[#B09B8C] max-w-2xl font-normal leading-relaxed">
          Three days of visionary discourse, high-stakes venture showcases, and
          curated networking with top founders, venture partners, and pioneers.
        </p>

        {/* 3 Highlighted Dates (Nov 13, Nov 14, Nov 15) */}
        <div className="mt-9 sm:mt-11 flex flex-col items-center w-full">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#9CA3AF] mb-3.5">
            Official Summit Dates
          </div>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
            {SUMMIT_DATES.map((item, idx) => (
              <div
                key={item.date}
                className="group relative w-24 sm:w-28 md:w-32 h-28 sm:h-32 md:h-36 rounded-2xl bg-[#241712]/90 backdrop-blur-md border border-[#443027] hover:border-[#E5D9C5]/70 hover:bg-[#322019] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 flex flex-col items-center justify-center cursor-default"
              >
                {/* Subtle top indicator highlight */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#E5D9C5]/40 group-hover:via-[#E5D9C5] to-transparent rounded-full transition-colors" />

                {/* Weekday Micro-label */}
                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#9CA3AF] uppercase">
                  {item.day}
                </span>

                {/* Date Highlight */}
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F4EFEA] group-hover:text-[#E5D9C5] transition-colors my-0.5 sm:my-1 leading-none tracking-tight">
                  {item.date}
                </span>

                {/* Month Label */}
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#E5D9C5]">
                  {item.month}
                </span>

                {/* Day Tag label */}
                <span className="text-[9px] text-[#B09B8C]/80 mt-1 hidden sm:block font-medium">
                  Day 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: Register & Become an Ambassador */}
        <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center">
          {/* Primary Action: Register */}
          <Link
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full bg-white text-[#160D09] hover:bg-[#E5D9C5] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5]"
          >
            Register Now
          </Link>

          {/* Secondary Action: Become an Ambassador */}
          <Link
            href="#ambassador"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-[#241712]/90 text-[#F4EFEA] border border-[#443027] hover:border-[#E5D9C5]/60 hover:bg-[#322019] hover:text-[#E5D9C5] transition-all duration-200 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5D9C5]"
          >
            Become an Ambassador
          </Link>
        </div>

        {/* Summit Highlights Micro-Badge */}
        <div className="mt-11 pt-7 border-t border-[#443027]/40 flex flex-wrap items-center justify-center gap-6 sm:gap-9 text-xs font-medium text-[#B09B8C]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5]" />
            50+ Visionary Speakers
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5]" />
            Venture Pitch Arena
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D9C5]" />
            Global Founder Network
          </span>
        </div>
      </div>
    </MouseStreakWrapper>
  );
}