const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alphaace.com.pk';

export const metadata = {
  title: 'Brand Ambassador Program',
  description:
    'Want to represent innovation? Become an official Brand Ambassador for the Alpha Entrepreneurship Summit (AES 2026). Earn tiered registration discounts, certificates, and executive recognition at Alpha College Karachi.',
  keywords: [
    'Brand Ambassador',
    'Alpha Entrepreneurship Summit',
    'AES 2026 Ambassador',
    'student ambassador Pakistan',
    'Alpha College Karachi',
  ],
  alternates: {
    canonical: `${SITE_URL}/ambassadors`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: `${SITE_URL}/ambassadors`,
    siteName: 'Alpha Entrepreneurship Summit',
    title: 'Brand Ambassador Program | Alpha Entrepreneurship Summit',
    description:
      'Want to represent innovation? Become an official Brand Ambassador for AES 2026. Earn tiered team discounts and special awards.',
    images: [
      {
        url: `${SITE_URL}/ambassadors-poster.png`,
        width: 1200,
        height: 630,
        alt: 'Want To Represent Innovation? Become An AES Brand Ambassador',
        type: 'image/png',
      },
      {
        url: `${SITE_URL}/ambassadors-logo.png`,
        width: 800,
        height: 800,
        alt: 'AES Brand Ambassador Emblem',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Ambassador Program | Alpha Entrepreneurship Summit',
    description:
      'Want to represent innovation? Become an official Brand Ambassador for AES 2026.',
    images: [`${SITE_URL}/ambassadors-poster.png`],
    creator: '@aes_summit',
  },
};

export default function AmbassadorsLayout({ children }) {
  return children;
}
