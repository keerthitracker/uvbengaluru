import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { vehicles, getVehicle } from '@/lib/vehicles'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const vehicle = getVehicle(slug)
  if (!vehicle) return { title: 'Vehicle Not Found' }
  return {
    title: `${vehicle.name} | UV Bengaluru`,
    description: `${vehicle.description} Available at UV Bengaluru, Nagarbhavi. Book a test ride today.`,
  }
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params
  const vehicle = getVehicle(slug)
  if (!vehicle) notFound()

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0D0D0D' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          {/* Breadcrumb */}
          <div style={{ marginBottom: '32px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Link
              href="/vehicles"
              style={{ fontSize: '12px', color: '#666666', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              className="hover:text-white transition-colors"
            >
              Vehicles
            </Link>
            <span style={{ color: '#444444', fontSize: '12px' }}>›</span>
            <span style={{ fontSize: '12px', color: '#A0A0A0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {vehicle.name}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              style={{
                background: '#F5F5F5',
                borderRadius: '6px',
                aspectRatio: '4/3',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className="object-contain p-8 bike-image-glow"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {vehicle.status === 'pre-book' && (
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span className="btn-yellow" style={{ fontSize: '13px', padding: '6px 14px' }}>
                    PRE-BOOK
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                  marginBottom: '12px',
                  lineHeight: 1.05,
                }}
              >
                {vehicle.name}
              </h1>
              <p style={{ fontSize: '15px', color: '#A0A0A0', lineHeight: 1.6, marginBottom: '24px' }}>
                {vehicle.tagline}
              </p>
              <p
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '8px',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                }}
              >
                {vehicle.price}
              </p>
              {vehicle.availableFrom && (
                <p style={{ fontSize: '13px', color: '#F5C518', marginBottom: '8px', fontWeight: 600 }}>
                  Expected availability: {vehicle.availableFrom}
                </p>
              )}
              <p style={{ fontSize: '13px', color: '#666666', marginBottom: '32px' }}>
                Ex-showroom, Nagarbhavi · On-road price may vary
              </p>

              {/* Color Picker */}
              {vehicle.colors.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <p
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      color: '#A0A0A0',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    AVAILABLE COLOURS
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {vehicle.colors.map((color) => (
                      <div
                        key={color.name}
                        title={color.name}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: color.hex,
                          border: '2px solid #2A2A2A',
                          cursor: 'pointer',
                          flexShrink: 0,
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '8px' }}>
                    {vehicle.colors.map((color) => (
                      <span key={color.name} style={{ fontSize: '11px', color: '#666666' }}>
                        {color.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {vehicle.status === 'available' ? (
                  <>
                    <Link href="/test-ride" className="btn-primary">
                      BOOK TEST RIDE
                    </Link>
                    <a
                      href={`https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20the%20Ultraviolette%20${encodeURIComponent(vehicle.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      ENQUIRE ON WHATSAPP
                    </a>
                  </>
                ) : (
                  <>
                    <Link href="/contact" className="btn-primary">
                      REGISTER INTEREST
                    </Link>
                    <a
                      href={`https://wa.me/919606955529?text=Hi%2C%20I%27d%20like%20to%20pre-book%20the%20${encodeURIComponent(vehicle.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      WHATSAPP US
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section style={{ background: '#111111', padding: '64px 0', borderTop: '1px solid #2A2A2A' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                  marginBottom: '16px',
                }}
              >
                ABOUT THE{' '}
                <span style={{ color: '#FF3B3B' }}>{vehicle.name.toUpperCase()}</span>
              </h2>
              <p style={{ fontSize: '15px', color: '#A0A0A0', lineHeight: 1.7 }}>
                {vehicle.description}
              </p>
            </div>

            {/* Specs Table */}
            {vehicle.specs.length > 0 && (
              <div>
                <h2
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                    marginBottom: '16px',
                  }}
                >
                  SPECIFICATIONS
                </h2>
                <div
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '6px',
                    overflow: 'hidden',
                  }}
                >
                  {vehicle.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 20px',
                        borderBottom: i < vehicle.specs.length - 1 ? '1px solid #2A2A2A' : 'none',
                      }}
                    >
                      <span style={{ fontSize: '13px', color: '#A0A0A0', letterSpacing: '0.04em' }}>
                        {spec.label}
                      </span>
                      <span style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: 600 }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dealership Info */}
      <section style={{ background: '#0D0D0D', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div
            style={{
              background: '#1A1A1A',
              border: '1px solid #2A2A2A',
              borderRadius: '6px',
              padding: '40px',
              display: 'grid',
              gap: '32px',
            }}
            className="md:grid-cols-3"
          >
            <div>
              <h3
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: '#A0A0A0',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontWeight: 600,
                }}
              >
                VISIT US
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6 }}>
                SJA Arcade, 904, 10th Cross Rd<br />
                ITI Layout, Papareddipalya<br />
                Naagarabhaavi, Bengaluru 560072
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: '#A0A0A0',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontWeight: 600,
                }}
              >
                CONTACT
              </h3>
              <p style={{ fontSize: '14px', color: '#666666', marginBottom: '4px' }}>
                <a href="tel:+919606955530" className="hover:text-white transition-colors">
                  96069 55530
                </a>
              </p>
              <p style={{ fontSize: '14px', color: '#666666' }}>
                <a
                  href="https://wa.me/919606955529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WA: 96069 55529
                </a>
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: '#A0A0A0',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontWeight: 600,
                }}
              >
                TIMINGS
              </h3>
              <p style={{ fontSize: '14px', color: '#666666' }}>10:00 AM – 7:00 PM</p>
              <p style={{ fontSize: '13px', color: '#666666' }}>All days of the week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Vehicles */}
      <section style={{ background: '#111111', padding: '64px 0', borderTop: '1px solid #2A2A2A' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
              marginBottom: '32px',
            }}
          >
            EXPLORE <span style={{ color: '#FF3B3B' }}>OTHER MODELS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {vehicles
              .filter((v) => v.slug !== vehicle.slug)
              .slice(0, 3)
              .map((v) => (
                <Link
                  key={v.slug}
                  href={`/vehicles/${v.slug}`}
                  style={{
                    display: 'block',
                    background: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                  }}
                  className="card-hover"
                >
                  <div style={{ background: '#F5F5F5', aspectRatio: '16/9', position: 'relative' }}>
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#FFFFFF',
                        fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                        marginBottom: '4px',
                      }}
                    >
                      {v.name}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#A0A0A0' }}>{v.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
