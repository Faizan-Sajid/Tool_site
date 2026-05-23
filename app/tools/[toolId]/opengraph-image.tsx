import { ImageResponse } from 'next/og'
import { TOOLS } from '@/constants/tools'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'QuickCalcs Tool Image'

export default async function OgImage({ params }: { params: Promise<{ toolId: string }> }) {
  const resolvedParams = await params
  const toolId = resolvedParams.toolId
  const tool = TOOLS.find((t) => t.id === toolId)

  // Visual Style Constants (matching app/opengraph-image.tsx)
  const containerStyle: any = {
    background: '#0f172a',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    padding: '0 80px',
  }

  const brandingStyle: any = {
    position: 'absolute',
    bottom: 32,
    right: 48,
    color: '#475569',
    fontSize: 22,
  }

  if (!tool) {
    return new ImageResponse(
      (
        <div style={containerStyle}>
          <div style={{ color: '#ffffff', fontSize: 80, fontWeight: 700 }}>
            QuickCalcs
          </div>
          <div style={{ color: '#94a3b8', fontSize: 36, textAlign: 'center' }}>
            Free Universal Online Calculators & Tools
          </div>
          <div style={brandingStyle}>quickcalcs.app</div>
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <div style={containerStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ color: '#ffffff', fontSize: 84, fontWeight: 800, textAlign: 'center' }}>
            {tool.title}
          </div>
        </div>
        <div style={{ color: '#94a3b8', fontSize: 36, textAlign: 'center', maxWidth: 1000, lineHeight: 1.4 }}>
          {tool.description}
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
          {tool.tags && tool.tags.length > 0 ? (
            tool.tags.map((tag) => (
              <div
                key={tag.text}
                style={{
                  background: '#1e293b',
                  color: tag.variant === 'gold' ? '#f59e0b' : tag.variant === 'teal' ? '#2dd4bf' : '#ffffff',
                  fontSize: 28,
                  padding: '12px 28px',
                  borderRadius: 12,
                }}
              >
                {tag.text}
              </div>
            ))
          ) : (
            <>
              <div
                style={{
                  background: '#1e293b',
                  color: '#f59e0b',
                  fontSize: 28,
                  padding: '12px 28px',
                  borderRadius: 12,
                }}
              >
                2026 Updated
              </div>
              <div
                style={{
                  background: '#1e293b',
                  color: '#2dd4bf',
                  fontSize: 28,
                  padding: '12px 28px',
                  borderRadius: 12,
                }}
              >
                100% Free
              </div>
            </>
          )}
        </div>
        <div style={brandingStyle}>quickcalcs.app</div>
      </div>
    ),
    { ...size }
  )
}
