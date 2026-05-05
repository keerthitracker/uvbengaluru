import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service & Workshop | UV Bengaluru',
  description:
    'Factory-certified Ultraviolette service and workshop at UV Bengaluru, Nagarbhavi. Battery diagnostics, OTA updates, scheduled maintenance, and genuine parts. Book your service appointment.',
}

const services = [
  {
    title: 'SCHEDULED MAINTENANCE',
    desc: 'Keep your Ultraviolette running at peak performance. Our factory-trained technicians handle all scheduled service intervals for every model in the lineup.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E8231A' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'BATTERY DIAGNOSTICS',
    desc: 'Comprehensive battery health assessments using Ultraviolette diagnostic tools. Monitor charge cycles, cell balance, and thermal management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E8231A' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'OTA FIRMWARE UPDATES',
    desc: "Keep your motorcycle's software current with the latest Ultraviolette firmware. Our workshop handles all over-the-air updates for improved performance and new features.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E8231A' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'GENUINE PARTS',
    desc: 'Only authentic Ultraviolette parts and accessories stocked and fitted at our Nagarbhavi workshop. No aftermarket substitutes — ever.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E8231A' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'ELECTRICAL SYSTEMS',
    desc: 'Full diagnostics and repair for all electrical systems — motor controllers, charging systems, display units, and Violette AI security.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E8231A' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'TYRES & BRAKES',
    desc: "Tyre replacement, brake pad servicing, and brake fluid changes. We stock UV-compatible tyres and use only specification brake components.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#E8231A' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const steps = [
  { step: '01', title: 'BOOK YOUR SLOT', desc: 'Call us at 96069 55530 or WhatsApp 96069 55529 to schedule a service appointment. We confirm within hours.' },
  { step: '02', title: 'BRING YOUR VEHICLE', desc: 'Drop off your Ultraviolette at our Nagarbhavi workshop. Our team does a thorough pre-service inspection.' },
  { step: '03', title: 'WE GET TO WORK', desc: 'Factory-trained technicians carry out service using Ultraviolette diagnostic tools and genuine parts.' },
  { step: '04', title: 'RIDE OUT', desc: 'Your motorcycle is handed back road-ready. We walk you through everything done — no surprises on the bill.' },
]

export default function ServicePage() {
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
            SERVICE &{' '}
            <span style={{ color: '#FF3B3B' }}>WORKSHOP</span>
          </h1>
          <p style={{ fontSize: '15px', color: '#A0A0A0', maxWidth: '560px', lineHeight: 1.6, marginBottom: '32px' }}>
            Factory-certified service for all Ultraviolette models. Our Nagarbhavi workshop is equipped for everything from routine maintenance to advanced diagnostics.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:+919606955530" className="btn-primary">
              BOOK BY PHONE
            </a>
            <a
              href="https://wa.me/919606955529?text=Hi%2C%20I%27d%20like%20to%20book%20a%20service%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              BOOK ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: '#0D0D0D', padding: '64px 0 80px' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: '48px', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
              }}
            >
              WHAT WE <span style={{ color: '#FF3B3B' }}>COVER</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  background: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  borderRadius: '6px',
                  padding: '32px',
                  transition: 'border-color 0.2s',
                }}
                className="hover:border-[#E8231A]"
              >
                <div style={{ marginBottom: '20px' }}>{service.icon}</div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    marginBottom: '10px',
                    fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#111111', padding: '80px 0', borderTop: '1px solid #2A2A2A' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            HOW IT <span style={{ color: '#FF3B3B' }}>WORKS</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: '#E8231A',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                    marginBottom: '10px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#A0A0A0', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Info */}
      <section style={{ background: '#0D0D0D', padding: '64px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div
              style={{
                background: '#1A1A1A',
                border: '1px solid #2A2A2A',
                borderRadius: '6px',
                padding: '40px',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                  marginBottom: '20px',
                }}
              >
                WORKSHOP LOCATION
              </h3>
              <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: 1.7, marginBottom: '16px' }}>
                SJA Arcade, 904, 10th Cross Rd<br />
                ITI Layout, Papareddipalya<br />
                Naagarabhaavi, Bengaluru, Karnataka 560072
              </p>
              <p style={{ fontSize: '13px', color: '#666666', marginBottom: '8px' }}>
                Workshop hours: 10:00 AM – 7:00 PM
              </p>
              <p style={{ fontSize: '13px', color: '#666666', marginBottom: '24px' }}>
                Open all days
              </p>
              <a
                href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ fontSize: '12px' }}
              >
                GET DIRECTIONS
              </a>
            </div>

            <div
              style={{
                background: '#1A1A1A',
                border: '1px solid #2A2A2A',
                borderRadius: '6px',
                padding: '40px',
              }}
            >
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
                  marginBottom: '20px',
                }}
              >
                BOOK A SERVICE
              </h3>
              <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: 1.6, marginBottom: '24px' }}>
                Call or WhatsApp our service team to schedule your appointment. We aim to accommodate same-week slots for all service types.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="tel:+919606955530"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 20px',
                    background: '#E8231A',
                    borderRadius: '2px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  CALL: 96069 55530
                </a>
                <a
                  href="https://wa.me/919606955529?text=Hi%2C%20I%27d%20like%20to%20book%20a%20service%20appointment%20for%20my%20Ultraviolette"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 20px',
                    background: '#25D366',
                    borderRadius: '2px',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WHATSAPP: 96069 55529
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
