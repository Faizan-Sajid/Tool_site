import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = "QuickCalcs – Free GOSI, Gratuity & Zakat Calculators 2026"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f172a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          padding: '0 80px',
        }}
      >
        <div style={{ color: '#ffffff', fontSize: 72, fontWeight: 700 }}>
          Free GOSI, Gratuity & Zakat Calculators 2026
        </div>
        <div style={{ color: '#94a3b8', fontSize: 32, textAlign: 'center' }}>
          Calculate GOSI deductions, UAE end-of-service gratuity, Zakat, gold prices & Pakistan freelancer tax instantly. Free, no login, updated for 2026 laws.
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
          {['UAE · Saudi Arabia · Pakistan', 'Free, No Login', '2026 Laws'].map((badge) => (
            <div
              key={badge}
              style={{
                background: '#1e293b',
                color: '#f59e0b',
                fontSize: 28,
                padding: '12px 28px',
                borderRadius: 12,
              }}
            >
              {badge}
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            right: 48,
            color: '#475569',
            fontSize: 22,
          }}
        >
          quickcalcs.app
        </div>
      </div>
    ),
    { ...size }
  )
}
