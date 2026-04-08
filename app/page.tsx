import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/lib/vehicles'

export const metadata: Metadata = {
  title: "Bengaluru's Home for Ultraviolette | UV Bengaluru",
  description:
    'UV Bengaluru is the official Ultraviolette electric motorcycle dealership in Nagarbhavi, Bengaluru. Test ride the X-47, F77 Mach 2, and more. Open 10 AM–7 PM, all days.',
}

export default function HomePage() {
  const availableVehicles = vehicles.filter((v) => v.status === 'available')
  const preBookVehicles = vehicles.filter((v) => v.status === 'pre-book')
  const allVehicles = [...availableVehicles, ...preBookVehicles]

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{ background: '#F5F5F5', minHeight: '100vh' }}
        className="flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  color: '#666666',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                Official Ultraviolette Dealership · Nagarbhavi, Bengaluru
              </p>
              <h1
                style={{
                  fontSize: 'clamp(36px, 6vw, 56px)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#1A1A1A',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                }}
              >
                Bengaluru&apos;s Home for<br />
                <span style={{ color: '#E8231A' }}>Ultraviolette</span>
              </h1>
              <p style={{ fontSize: '15px', color: '#666666', lineHeight: 1.6, marginBottom: '8px' }}>
                SJA Arcade, 904, 10th Cross Rd, ITI Layout, Naagarabhaavi, Bengaluru
              </p>
              <p style={{ fontSize: '14px', color: '#888888', marginBottom: '36px' }}>
                Open daily · 10:00 AM – 7:00 PM
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/vehicles"
                  style={{
                    background: 'transparent',
                    color: '#1A1A1A',
                    border: '1px solid #1A1A1A',
                    borderRadius: '2px',
                    padding: '10px 24px',
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    display: 'inline-block',
                  }}
                  className="hover:bg-black/5 transition-colors"
                >
                  EXPLORE VEHICLES
                </Link>
                <Link
                  href="/test-ride"
                  style={{
                    background: '#E8231A',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '2px',
                    padding: '10px 24px',
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    display: 'inline-block',
                  }}
                  className="hover:bg-[#C41C14] transition-colors"
                >
                  BOOK TEST RIDE
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'rgba(232,35,26,0.08)',
                  filter: 'blur(60px)',
                }}
              />
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                <Image
                  src="https://d2atk76x06g5eh.cloudfront.net/website/india/navbar/vehicles/x47.png"
                  alt="Ultraviolette X-47"
                  fill
                  className="object-contain bike-image-glow"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker Bar ── */}
      <div style={{ background: '#000000', paddingTop: '12px', paddingBottom: '12px', overflow: 'hidden' }}>
        <div className="animate-marquee">
          {[1, 2].map((i) => (
            <span key={i} className="ticker-text" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
              {[
                'ZERO EMISSIONS',
                'LOWER COSTS',
                'INSTANT TORQUE',
                'REGENERATIVE BRAKING',
                'SMART CONNECT',
                'NAGARBHAVI · 10AM–7PM DAILY',
              ].map((text) => (
                <span key={text} style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', marginRight: '24px' }}>
                  <span>{text}</span>
                  <span style={{ color: '#444', fontSize: '16px' }}>—</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Vehicle Grid ── */}
      <section style={{ background: '#0D0D0D', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
              }}
            >
              CHOOSE YOUR{' '}
              <span style={{ color: '#FF3B3B' }}>BALLISTIC MACHINE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allVehicles.map((vehicle) => (
              <div
                key={vehicle.slug}
                className="card-hover"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    background: '#F5F5F5',
                    aspectRatio: '16/9',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {vehicle.status === 'pre-book' && (
                    <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                      <span className="btn-yellow">PRE-BOOK</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                      marginBottom: '4px',
                      fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                    }}
                  >
                    {vehicle.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#A0A0A0', marginBottom: '8px', lineHeight: 1.4 }}>
                    {vehicle.tagline}
                  </p>
                  {vehicle.availableFrom && (
                    <p style={{ fontSize: '12px', color: '#F5C518', marginBottom: '8px' }}>
                      Available {vehicle.availableFrom}
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '16px',
                      marginTop: 'auto',
                    }}
                  >
                    {vehicle.price}
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link
                      href={`/vehicles/${vehicle.slug}`}
                      className="btn-ghost"
                      style={{ flex: 1, textAlign: 'center', fontSize: '11px', padding: '8px 12px' }}
                    >
                      DISCOVER
                    </Link>
                    {vehicle.status === 'available' ? (
                      <Link
                        href="/test-ride"
                        className="btn-primary"
                        style={{ flex: 1, textAlign: 'center', fontSize: '11px', padding: '8px 12px' }}
                      >
                        BOOK
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="btn-primary"
                        style={{ flex: 1, textAlign: 'center', fontSize: '11px', padding: '8px 12px' }}
                      >
                        ENQUIRE
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Cards ── */}
      <section style={{ background: '#0D0D0D', paddingBottom: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Visit Showroom */}
            <div
              style={{
                background: '#1A1A1A',
                border: '1px solid #2A2A2A',
                borderRadius: '6px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                }}
              >
                VISIT OUR SHOWROOM
              </h3>
              <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: 1.6, marginBottom: '8px' }}>
                SJA Arcade, 904, 10th Cross Rd<br />
                ITI Layout, Naagarabhaavi<br />
                Bengaluru, Karnataka 560072
              </p>
              <p style={{ fontSize: '13px', color: '#666666', marginBottom: '24px' }}>
                10:00 AM – 7:00 PM · All days
              </p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '12px' }}>
                GET DIRECTIONS
              </Link>
            </div>

            {/* Book Test Ride */}
            <div
              style={{
                background: '#E8231A',
                borderRadius: '6px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                }}
              >
                BOOK TEST RIDE
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '24px' }}>
                Experience instant electric torque before you decide. Free, no-commitment test rides available daily.
              </p>
              <Link
                href="/test-ride"
                style={{
                  background: '#FFFFFF',
                  color: '#E8231A',
                  border: 'none',
                  borderRadius: '2px',
                  padding: '10px 20px',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                RESERVE YOUR SLOT
              </Link>
            </div>

            {/* WhatsApp */}
            <div
              style={{
                background: '#1A1A1A',
                border: '1px solid #2A2A2A',
                borderRadius: '6px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                }}
              >
                WHATSAPP US
              </h3>
              <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: 1.6, marginBottom: '24px' }}>
                Quick answers to all your questions. Chat with our team on WhatsApp — 10 AM to 7 PM, every day.
              </p>
              <a
                href="https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '2px',
                  padding: '10px 20px',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                CHAT NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location Strip ── */}
      <section style={{ background: '#111111', borderTop: '1px solid #2A2A2A', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="md:col-span-2">
              <p
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#A0A0A0',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Ultraviolette Nagarbhavi
              </p>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6 }}>
                SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya,<br />
                Naagarabhaavi, Bengaluru, Karnataka 560072
              </p>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: '#A0A0A0', marginBottom: '4px' }}>
                <a href="tel:+919606955530" className="hover:text-white transition-colors">
                  96069 55530
                </a>
              </p>
              <p style={{ fontSize: '13px', color: '#A0A0A0' }}>
                <a
                  href="https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WA: 96069 55529
                </a>
              </p>
            </div>
            <div>
              <p style={{ fontSize: '13px', color: '#A0A0A0', marginBottom: '4px' }}>10:00 AM – 7:00 PM</p>
              <p style={{ fontSize: '12px', color: '#666666', marginBottom: '16px' }}>All days of the week</p>
              <a
                href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: '11px', padding: '8px 16px' }}
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
