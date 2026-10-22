import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alphaace.com.pk';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AES 2026 | Alpha Entrepreneurship Summit",
    template: "%s | AES 2026",
  },
  description:
    "Pakistan's premier youth entrepreneurship summit. 3 days of high-intensity business simulations, angel investor pitches, tactical masterclasses, and executive keynotes from November 13–15, 2026 at Alpha College Karachi.",
  keywords: [
    "AES 2026",
    "Alpha Entrepreneurship Summit",
    "Alpha College Karachi",
    "ACE Society",
    "youth entrepreneurship Pakistan",
    "startup pitching Karachi",
    "business simulation",
    "Investomania",
    "Defend The Empire",
    "Market Monopoly",
    "Venture Verse",
    "Viral Velocity",
    "student business competition",
  ],
  authors: [{ name: "Alpha College & ACE Society", url: SITE_URL }],
  creator: "AES Executive Council",
  publisher: "Alpha College Karachi",
  category: "Business & Education",
  applicationName: "AES 2026",
  generator: "Next.js",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "Alpha Entrepreneurship Summit (AES 2026)",
    title: "Alpha Entrepreneurship Summit 2026 | AES",
    description:
      "Pakistan's premier youth entrepreneurship summit. 3 days, 5 flagship competitive arenas, investor pitching, and formal gala dinner at Alpha College Karachi (Nov 13–15, 2026).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Entrepreneurship Summit 2026 (AES)",
    description:
      "Pakistan's premier youth entrepreneurship summit. Nov 13–15, 2026 at Alpha College Karachi. 5 competitive arenas & investor pitches.",
    creator: "@aes_summit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BusinessEvent",
  name: "Alpha Entrepreneurship Summit 2026",
  alternateName: "AES 2026",
  startDate: "2026-11-13T14:00:00+05:00",
  endDate: "2026-11-15T21:30:00+05:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Alpha College Karachi",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alpha College",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
  },
  image: ["https://alphaace.com.pk/opengraph-image"],
  description:
    "Pakistan's premier youth entrepreneurship summit featuring 5 competitive business simulation modules, angel investor pitching, tactical masterclasses, and an executive gala dinner.",
  organizer: {
    "@type": "Organization",
    name: "Alpha College & ACE Society",
    url: "https://alphaace.com.pk",
    logo: "https://alphaace.com.pk/aes-logo.png",
  },
  offers: {
    "@type": "Offer",
    url: "https://forms.gle/cGVgw5TpvpU9AXZx5",
    price: "0",
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
    validFrom: "2026-10-01T00:00:00+05:00",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} font-sans h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#5a0d1b] text-[#f8eee1]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
