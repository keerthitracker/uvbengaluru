import type { Metadata } from 'next'
import WorkshopBookingForm from '@/components/WorkshopBookingForm'

export const metadata: Metadata = {
  title: 'Workshop & Service',
  description:
    'UV Bengaluru\'s certified workshop offers scheduled maintenance, battery diagnostics, OTA updates, and genuine Ultraviolette parts at our Nagarbhavi service centre.',
}


const services = [
  {
    title: 'SCHEDULED MAINTENANCE',
    desc: 'Keep your Ultraviolette performing at its peak. Our technicians follow factory-prescribed service intervals to maintain warranty validity and long-term reliability.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'BATTERY HEALTH & DIAGNOSTICS',
    desc: 'Deep diagnostic checks on your SRB battery pack, BMS health reports, cell-level analysis, and firmware diagnostics — keeping your range and warranty intact.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 3a2 2 0 002 2h2a2 2 0 002-2M9 3a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'SOFTWARE & OTA UPDATES',
    desc: 'Ultraviolette vehicles receive continuous OTA improvements. Our workshop ensures your motorcycle is running the latest firmware for performance, safety, and new features.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'TYRE & BRAKE SERVICE',
    desc: 'From tyre replacements and balancing to brake pad inspection and bleeding — our workshop handles all routine and wear-based maintenance with precision.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'ACCIDENT REPAIR & BODYWORK',
    desc: 'Post-incident repairs carried out to factory standards — bodywork restoration, frame inspection, electrical system checks, and structural integrity verification.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'GENUINE ULTRAVIOLETTE PARTS',
    desc: 'We stock only factory-authentic Ultraviolette components. No substitutes, no shortcuts — every part installed by us is covered by the manufacturer\'s warranty.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const reasons = [
  {
    title: 'FACTORY-CERTIFIED TECHNICIANS',
    desc: 'Our team is trained and certified by Ultraviolette Automotive. Every service procedure follows factory specifications — no guesswork, no shortcuts.',
  },
  {
    title: 'GENUINE UV PARTS ONLY',
    desc: 'We source every replacement component directly through Ultraviolette\'s official supply chain. Your warranty stays intact. Your bike stays original.',
  },
  {
    title: 'TRANSPARENT PRICING',
    desc: 'We provide itemised service estimates before any work begins. No hidden charges, no surprises. You approve, we proceed.',
  },
]

const processSteps = [
  { step: '01', title: 'BOOK ONLINE', desc: 'Use our booking form to schedule your service appointment. We\'ll confirm via phone within 24 hours.' },
  { step: '02', title: 'DROP OFF', desc: 'Bring your Ultraviolette to our Nagarbhavi workshop. Our team will carry out an initial inspection and brief you on the work required.' },
  { step: '03', title: 'INSPECT & SERVICE', desc: 'Our certified technicians service your motorcycle to factory standards with genuine parts. You\'ll be kept informed at every stage.' },
  { step: '04', title: 'PICKUP', desc: 'Collect your bike looking and performing its best. Full service record updated. Warranty maintained.' },
]

export default function WorkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Nagarbhavi, Bengaluru</p>
          <h1
            className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-white mb-5"
           
          >
            EXPERT SERVICE.<br />
            <span className="text-[#FF3B3B]">UNCOMPROMISED</span><br />
            PERFORMANCE.
          </h1>
          <p className="text-[#888] text-lg max-w-xl leading-relaxed">
            Factory-certified technicians, genuine Ultraviolette parts, and transparent pricing. Your machine deserves nothing less.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              OUR SERVICES
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-[#111] border border-[#222] p-6 hover:border-[#E8231A] transition-colors duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-display text-lg font-extrabold uppercase text-white mb-3">{service.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Why UV Bengaluru Workshop</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              SERVICE YOU CAN TRUST
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="text-center">
                <div className="w-12 h-12 bg-[#E8231A]/10 border border-[#E8231A]/20 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-white mb-3">{r.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              THE SERVICE PROCESS
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[#222] z-0" style={{ width: 'calc(100% - 40px)', left: '50%' }} />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#E8231A] text-black flex items-center justify-center font-extrabold text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display text-lg font-extrabold uppercase text-white mb-2">{step.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Book a Service</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              SCHEDULE YOUR APPOINTMENT
            </h2>
            <p className="text-[#888] text-base mt-4">
              Fill in the form below and our service team will confirm your appointment within 24 hours.
            </p>
          </div>
          <WorkshopBookingForm />
        </div>
      </section>
    </>
  )
}
