import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GoldenCursorTrail from "@/components/ui/GoldenCursorTrail";

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
    default: "Alpha Entrepreneurship Summit | AES 2026",
    template: "%s | Alpha Entrepreneurship Summit",
  },
  description:
    "Pakistan's premier youth entrepreneurship summit. 3 days of high-intensity business simulations, angel investor pitches, tactical masterclasses, and executive keynotes from November 13–15, 2026 at Alpha College Karachi.",
  keywords: [
    "Alpha Entrepreneurship Summit",
    "AES 2026",
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
  applicationName: "Alpha Entrepreneurship Summit",
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
    siteName: "Alpha Entrepreneurship Summit",
    title: "Alpha Entrepreneurship Summit | AES 2026",
    description:
      "Pakistan's premier youth entrepreneurship summit. 3 days, 5 flagship competitive arenas, investor pitching, and formal gala dinner at Alpha College Karachi (Nov 13–15, 2026).",
    images: [
      {
        url: `${SITE_URL}/aes-og-preview.png`,
        width: 1200,
        height: 630,
        alt: "Alpha Entrepreneurship Summit (AES) Official Logo & Simulation Arenas",
        type: "image/png",
      },
      {
        url: `${SITE_URL}/aes-logo-square.png`,
        width: 800,
        height: 800,
        alt: "Alpha Entrepreneurship Summit Official Square Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Entrepreneurship Summit (AES 2026)",
    description:
      "Pakistan's premier youth entrepreneurship summit. Nov 13–15, 2026 at Alpha College Karachi. 5 competitive arenas & investor pitches.",
    images: [`${SITE_URL}/aes-og-preview.png`],
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Alpha Entrepreneurship Summit",
      "alternateName": ["AES", "AES 2026", "Alpha Entrepreneurship Summit 2026"],
      "description":
        "Pakistan's premier youth entrepreneurship summit hosted at Alpha College Karachi.",
      "publisher": {
        "@id": `${SITE_URL}/#organization`,
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/modules`,
          "name": "Summit Modules",
          "url": `${SITE_URL}/modules`,
          "description":
            "5 competitive simulation arenas: Investomania, Defend The Empire, Market Monopoly, Venture Verse, and Viral Velocity.",
        },
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/schedule`,
          "name": "Track Schedule",
          "url": `${SITE_URL}/schedule`,
          "description":
            "Chronological 3-day summit itinerary across Day 01, Day 02, and Day 03 at Alpha College.",
        },
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/executives`,
          "name": "Executive Council",
          "url": `${SITE_URL}/executives`,
          "description":
            "Leadership board, Presidents, and Board of Directors of Alpha Entrepreneurship Summit.",
        },
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ambassadors`,
          "name": "Brand Ambassador Program",
          "url": `${SITE_URL}/ambassadors`,
          "description":
            "Campus brand ambassador roles, tiered team discounts, and exclusive recognition awards.",
        },
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/faq`,
          "name": "Frequently Asked Questions",
          "url": `${SITE_URL}/faq`,
          "description":
            "Official delegate guidelines, team fees, lodging, rules, and event conduct.",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Alpha Entrepreneurship Summit",
      "alternateName": ["AES", "Alpha College ACE Society"],
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        "url": `${SITE_URL}/aes-logo-square.png`,
        "contentUrl": `${SITE_URL}/aes-logo-square.png`,
        "caption": "Alpha Entrepreneurship Summit Square Logo",
        "width": 800,
        "height": 800,
      },
      "image": {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#image`,
        "url": `${SITE_URL}/aes-og-preview.png`,
        "contentUrl": `${SITE_URL}/aes-og-preview.png`,
        "caption": "Alpha Entrepreneurship Summit 2026 Official Logo & Emblem",
        "width": 1200,
        "height": 630,
      },
      "sameAs": ["https://instagram.com/aes_summit"],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#sitenavigation`,
      "name": "Alpha Entrepreneurship Summit Site Navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Summit Modules",
          "description": "5 Competitive Arenas",
          "url": `${SITE_URL}/modules`,
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Track Schedule",
          "description": "3-Day Itinerary & Gala Dinner",
          "url": `${SITE_URL}/schedule`,
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Executive Council",
          "description": "Leadership Board & Directors",
          "url": `${SITE_URL}/executives`,
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Brand Ambassador Program",
          "description": "Campus Ambassador Network & Perks",
          "url": `${SITE_URL}/ambassadors`,
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "FAQ",
          "description": "Frequently Asked Questions",
          "url": `${SITE_URL}/faq`,
        },
      ],
    },
    {
      "@type": "BusinessEvent",
      "@id": `${SITE_URL}/#event`,
      "name": "Alpha Entrepreneurship Summit 2026",
      "alternateName": "AES 2026",
      "startDate": "2026-11-13T14:00:00+05:00",
      "endDate": "2026-11-15T21:30:00+05:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Alpha College Karachi",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Alpha College",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "addressCountry": "PK",
        },
      },
      "image": [
        `${SITE_URL}/aes-og-preview.png`,
        `${SITE_URL}/aes-logo.jpg`,
      ],
      "description":
        "Pakistan's premier youth entrepreneurship summit featuring 5 competitive business simulation modules, angel investor pitching, tactical masterclasses, and an executive gala dinner.",
      "organizer": {
        "@id": `${SITE_URL}/#organization`,
      },
      "offers": {
        "@type": "Offer",
        "url": "https://forms.gle/cGVgw5TpvpU9AXZx5",
        "price": "0",
        "priceCurrency": "PKR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-10-01T00:00:00+05:00",
      },
    },
  ],
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
          <GoldenCursorTrail />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
