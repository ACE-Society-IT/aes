export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alphaace.com.pk';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
