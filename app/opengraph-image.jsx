import { ImageResponse } from 'next/og';

export const alt = 'AES 2026 - Alpha Entrepreneurship Summit';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          backgroundColor: '#5a0d1b',
          backgroundImage:
            'radial-gradient(circle at 50% 25%, #701020 0%, #5a0d1b 70%)',
          color: '#f8eee1',
          fontFamily: 'sans-serif',
          border: '12px solid #89192c',
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: '#701020',
                border: '2px solid #f1ca7e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f1ca7e',
                fontSize: '28px',
                fontWeight: '900',
              }}
            >
              AES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: '#f8eee1',
                  letterSpacing: '2px',
                }}
              >
                ALPHA COLLEGE
              </span>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#f1ca7e',
                  letterSpacing: '3px',
                }}
              >
                ACE SOCIETY PRESENTS
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#701020',
              border: '2px solid #f1ca7e',
              padding: '10px 24px',
              borderRadius: '9999px',
              color: '#f1ca7e',
              fontSize: '18px',
              fontWeight: '800',
              letterSpacing: '2px',
            }}
          >
            NOV 13 — 15, 2026
          </div>
        </div>

        {/* Center Hero Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#f1ca7e',
              letterSpacing: '4px',
            }}
          >
            PAKISTAN&apos;S PREMIER YOUTH ENTREPRENEURSHIP SUMMIT
          </div>
          <div
            style={{
              fontSize: '68px',
              fontWeight: '900',
              lineHeight: 1.05,
              color: '#f8eee1',
              letterSpacing: '-1px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Alpha Entrepreneurship</span>
            <span style={{ color: '#f1ca7e' }}>Summit 2026</span>
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#e8dcc6',
              maxWidth: '900px',
              marginTop: '6px',
            }}
          >
            3 Days · 5 Competitive Simulations · Pitch to Angel Investors · Gala Dinner
          </div>
        </div>

        {/* Bottom Specs & Domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid rgba(241, 202, 126, 0.25)',
            paddingTop: '28px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', color: '#e8dcc6', fontSize: '18px' }}>
            <span>📍 Alpha College Karachi</span>
            <span>🏆 5 Flagship Arenas</span>
            <span>🤝 50+ Institutions</span>
          </div>
          <div
            style={{
              fontSize: '20px',
              fontWeight: '800',
              color: '#f1ca7e',
              letterSpacing: '1px',
            }}
          >
            alphaace.com.pk
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
