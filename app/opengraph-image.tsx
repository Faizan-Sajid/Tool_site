import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'QuickCalcs – Free Universal Online Calculators & Tools for UAE, Saudi Arabia, Pakistan and Global Users'

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
          ⚡ QuickCalcs
        </div>
        <div style={{ color: '#94a3b8', fontSize: 36, textAlign: 'center' }}>
          Free Universal Online Calculators & Tools
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
          {['24+ Free Tools', '200+ Countries', '100% Free'].map((badge) => (
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
