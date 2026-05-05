import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Showroom',
  description:
    'Visit UV Bengaluru\'s Nagarbhavi showroom — Bengaluru\'s official Ultraviolette dealership. See the full lineup in person, meet our team, and get on-road pricing.',
}


const showroomFeatures = [
  {
    title: 'LIVE BIKE DISPLAYS',
    desc: 'Explore the Ultraviolette lineup: X-47 series, F77 Mach 2, F77 SuperStreet, plus pre-book interest for Tesseract and Shockwave. Sit on them where available, explore every detail, ask every question.',
  },
  {
    title: 'CERTIFIED EXPERTS',
    desc: 'Our product specialists are trained directly by Ultraviolette. Get accurate specs, variant comparisons, and genuine advice — no hard sell.',
  },
  {
    title: 'FINANCE & INSURANCE',
    desc: 'We work with leading financiers to make ownership accessible. Get on-road pricing, EMI options, and insurance assistance in one visit.',
  },
  {
    title: 'TEST RIDE BOOKINGS',
    desc: 'Book your test ride on-site or online. Our Nagarbhavi facility has a dedicated test route for you to experience the electric difference.',
  },
]

export default function ShowroomPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Nagarbhavi, Bengaluru</p>
          <h1
            className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-white mb-5"
           
          >
            VISIT OUR<br />
            <span className="text-[#FF3B3B]">SHOWROOM</span>
          </h1>
          <p className="text-[#888] text-lg max-w-xl leading-relaxed">
            Experience the full Ultraviolette lineup in person. Our Nagarbhavi showroom is open 7 days a week — walk in or book an appointment.
          </p>
        </div>
      </section>

      {/* Location Details + Map */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Cards */}
          <div className="space-y-4">
            <div className="bg-[#111] border border-[#222] p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#888] mb-4">ADDRESS</h3>
              <p className="text-white text-base leading-relaxed">
                UV Bengaluru<br />
                SJA Arcade, 904, 10th Cross Rd<br />
                ITI Layout, Papareddipalya<br />
                Naagarabhaavi, Bengaluru<br />
                Karnataka 560072
              </p>
              <a
                href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[#FF3B3B] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                Get Directions
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111] border border-[#222] p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#888] mb-4">HOURS</h3>
                <p className="text-white text-sm leading-loose">
                  Monday – Sunday<br />
                  <span className="text-[#FF3B3B]">10:00 AM – 7:00 PM</span>
                </p>
              </div>
              <div className="bg-[#111] border border-[#222] p-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#888] mb-4">CONTACT</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#666] text-xs uppercase tracking-wider">Phone</p>
                    <a href="tel:+919606955530" className="text-white text-sm hover:text-white transition-colors">96069 55530</a>
                  </div>
                  <div>
                    <p className="text-[#666] text-xs uppercase tracking-wider">WhatsApp</p>
                    <a href="https://wa.me/919606955529" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-white transition-colors">96069 55529</a>
                  </div>
                  <div>
                    <p className="text-[#666] text-xs uppercase tracking-wider">Email</p>
                    <a href="mailto:hello@uvbengaluru.com" className="text-white text-sm hover:text-white transition-colors break-all">hello@uvbengaluru.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/test-ride"
                className="bg-[#E8231A] text-white font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-[#C41C14] transition-colors"
              >
                BOOK TEST RIDE
              </Link>
              <Link
                href="/vehicles"
                className="border border-white text-[#FF3B3B] font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-white/10 transition-all"
              >
                VIEW VEHICLES
              </Link>
            </div>
          </div>

          {/* Map Embed */}
          <div>
            <div className="w-full h-80 bg-[#111] border border-[#222] overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UV Bengaluru - Nagarbhavi Location"
              />
            </div>
            <a
              href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-[#FF3B3B] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Get Directions
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">When You Visit</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              WHAT TO EXPECT
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showroomFeatures.map((f) => (
              <div key={f.title} className="bg-[#111] border border-[#222] p-6 hover:border-[#E8231A] transition-colors duration-300">
                <h3 className="font-display text-lg font-extrabold uppercase text-white mb-3">{f.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              REACH OUT TO US
            </h2>
            <p className="text-[#888] text-base mt-4">
              Have a question about a model, pricing, or your visit? Send us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
