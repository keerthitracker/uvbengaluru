import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/lib/vehicles'

export const metadata: Metadata = {
  title: 'Vehicles | UV Bengaluru',
  description:
    'Explore the full Ultraviolette lineup at UV Bengaluru — X-47, X-47 Desert Wing, F77 Superstreet, F77 Mach 2, Tesseract, and Shockwave. Available for test ride and purchase in Nagarbhavi, Bengaluru.',
}

export default function VehiclesPage() {
  const available = vehicles.filter((v) => v.status === 'available')
  const preBook = vehicles.filter((v) => v.status === 'pre-book')

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0D0D0D', padding: '80px 0 48px' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: '#A0A0A0',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontWeight: 600,
            }}
          >
            UV Bengaluru · Nagarbhavi
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
              marginBottom: '16px',
            }}
          >
            THE <span style={{ color: '#FF3B3B' }}>LINEUP</span>
          </h1>
          <p style={{ fontSize: '15px', color: '#A0A0A0', maxWidth: '560px', lineHeight: 1.6 }}>
            Every Ultraviolette model, available to explore, test ride, and own at our Nagarbhavi showroom. Open daily, 10 AM–7 PM.
          </p>
        </div>
      </section>

      {/* Available Now */}
      <section style={{ background: '#0D0D0D', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            style={{
              borderTop: '1px solid #2A2A2A',
              paddingTop: '48px',
              marginBottom: '32px',
            }}
          >
            <h2
              style={{
                fontSize: '13px',
                letterSpacing: '0.12em',
                color: '#A0A0A0',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              AVAILABLE NOW
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {available.map((vehicle) => (
              <Link
                key={vehicle.slug}
                href={`/vehicles/${vehicle.slug}`}
                className="card-hover"
                style={{
                  display: 'flex',
                  background: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    background: '#F5F5F5',
                    width: '200px',
                    minWidth: '200px',
                    position: 'relative',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-4"
                    sizes="200px"
                  />
                </div>
                {/* Info */}
                <div style={{ padding: '24px', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                      marginBottom: '6px',
                      fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                    }}
                  >
                    {vehicle.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#A0A0A0', lineHeight: 1.5, marginBottom: '16px' }}>
                    {vehicle.tagline}
                  </p>
                  {/* Top 3 specs */}
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {vehicle.specs.slice(0, 3).map((spec) => (
                      <div key={spec.label}>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>{spec.value}</p>
                        <p style={{ fontSize: '11px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {spec.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>{vehicle.price}</span>
                    <span
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        color: '#FF3B3B',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      VIEW DETAILS →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-book */}
      {preBook.length > 0 && (
        <section style={{ background: '#111111', padding: '80px 0' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div style={{ marginBottom: '32px' }}>
              <h2
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: '#A0A0A0',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                COMING SOON — PRE-BOOK
              </h2>
              <p style={{ fontSize: '14px', color: '#666666' }}>
                Secure your allocation for upcoming models before they arrive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preBook.map((vehicle) => (
                <Link
                  key={vehicle.slug}
                  href={`/vehicles/${vehicle.slug}`}
                  className="card-hover"
                  style={{
                    display: 'flex',
                    background: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    opacity: 0.9,
                  }}
                >
                  <div
                    style={{
                      background: '#F5F5F5',
                      width: '200px',
                      minWidth: '200px',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain p-4 grayscale opacity-80"
                      sizes="200px"
                    />
                    <div style={{ position: 'absolute', top: '8px', left: '8px' }}>
                      <span className="btn-yellow">PRE-BOOK</span>
                    </div>
                  </div>
                  <div style={{ padding: '24px', flex: 1 }}>
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        marginBottom: '6px',
                        fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                      }}
                    >
                      {vehicle.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#A0A0A0', lineHeight: 1.5, marginBottom: '12px' }}>
                      {vehicle.tagline}
                    </p>
                    {vehicle.availableFrom && (
                      <p style={{ fontSize: '13px', color: '#F5C518', fontWeight: 600, marginBottom: '16px' }}>
                        Expected: {vehicle.availableFrom}
                      </p>
                    )}
                    <span
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        color: '#FF3B3B',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      REGISTER INTEREST →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: '#0D0D0D', padding: '64px 0', borderTop: '1px solid #2A2A2A' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              marginBottom: '16px',
              fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
            }}
          >
            WANT TO FEEL IT BEFORE YOU DECIDE?
          </h2>
          <p style={{ fontSize: '15px', color: '#A0A0A0', marginBottom: '32px' }}>
            Book a free test ride at our Nagarbhavi showroom. No commitments.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/test-ride" className="btn-primary">
              BOOK TEST RIDE
            </Link>
            <a
              href="https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
