import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Rian Moraes - Desenvolvedor Full Stack'
    const description = searchParams.get('description') || 'Especialista em React, Next.js, Node.js, TypeScript, .NET e Industry 4.0'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #1e293b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #334155 0%, transparent 50%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: '1.2',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '24px',
                color: '#94a3b8',
                marginBottom: '30px',
                maxWidth: '800px',
                lineHeight: '1.4',
              }}
            >
              {description}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontSize: '18px',
                color: '#64748b',
              }}
            >
              <span>🚀 React</span>
              <span>⚡ Next.js</span>
              <span>🔧 TypeScript</span>
              <span>🏭 Industry 4.0</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}