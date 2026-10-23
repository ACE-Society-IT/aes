const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://alphaace.com.pk';

export const metadata = {
  title: 'Executive Council',
  description:
    'Meet the Executive Leadership Council, Presidents, and Board of Directors behind the Alpha Entrepreneurship Summit (AES 2026) at Alpha College Karachi.',
  keywords: [
    'AES Executive Council',
    'Alpha Entrepreneurship Summit',
    'Alpha College Karachi',
    'ACE Society Directors',
  ],
  alternates: {
    canonical: `${SITE_URL}/executives`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: `${SITE_URL}/executives`,
    siteName: 'Alpha Entrepreneurship Summit',
    title: 'Executive Council | Alpha Entrepreneurship Summit',
    description:
      'Meet the leadership team and board of directors behind AES 2026.',
    images: [
      {
        url: `${SITE_URL}/aes-og-preview.png`,
        width: 1200,
        height: 630,
        alt: 'Alpha Entrepreneurship Summit Executive Council',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Council | Alpha Entrepreneurship Summit',
    description:
      'Meet the leadership team and board of directors behind AES 2026.',
    images: [`${SITE_URL}/aes-og-preview.png`],
    creator: '@aes_summit',
  },
};

export default function ExecutivesLayout({ children }) {
  return children;
}
