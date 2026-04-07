import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with UV Bengaluru — official Ultraviolette dealership in Nagarbhavi, Bengaluru. Call, email, or visit us for enquiries, test rides, and service.',
}


const contactInfo = [
  {
    title: 'VISIT US',
    lines: ['UV Bengaluru', 'Nagarbhavi Cross', 'Bengaluru – 560072', 'Karnataka, India'],
    cta: { label: 'Get Directions', href: 'https://maps.google.com/?q=Nagarbhavi+Cross+Bengaluru+560072', external: true },
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'CALL US',
    lines: ['+91 80 4567 8900', '', 'Mon–Sat: 9:30 AM – 7:00 PM', 'Sunday: 10:00 AM – 5:00 PM'],
    cta: { label: 'Call Now', href: 'tel:+918045678900', external: false },
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'EMAIL US',
    lines: ['hello@uvbengaluru.com', '', 'We respond within', '24 business hours'],
    cta: { label: 'Send Email', href: 'mailto:hello@uvbengaluru.com', external: false },
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const socials = [
  { label: 'Instagram', handle: '@uvbengaluru', href: 'https://instagram.com/uvbengaluru' },
  { label: 'Facebook', handle: '/uvbengaluru', href: 'https://facebook.com/uvbengaluru' },
  { label: 'YouTube', handle: '@uvbengaluru', href: 'https://youtube.com/@uvbengaluru' },
  { label: 'LinkedIn', handle: 'UV Bengaluru', href: 'https://linkedin.com/company/uvbengaluru' },
]

const subjectOptions = [
  'General Enquiry',
  'New Bike Purchase',
  'Test Ride Booking',
  'Service Appointment',
  'Parts & Accessories',
  'Finance & Insurance',
  'Career Opportunities',
  'Other',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">UV Bengaluru</p>
          <h1
            className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-white mb-5"
           
          >
            GET IN<br />
            <span className="text-[#C8FF00]">TOUCH</span>
          </h1>
          <p className="text-[#888] text-lg max-w-xl leading-relaxed">
            Questions about a model? Want to book a test ride? Planning a service visit? We&apos;re here to help — reach us any way you prefer.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-[#111] border border-[#222] p-8 hover:border-[#C8FF00] transition-colors duration-300">
                <div className="mb-5">{info.icon}</div>
                <h3 className="font-display text-lg font-extrabold uppercase text-white mb-4">{info.title}</h3>
                <div className="space-y-0.5 mb-6">
                  {info.lines.map((line, i) => (
                    <p key={i} className={`text-sm ${line === '' ? 'h-2' : 'text-[#888]'}`}>{line}</p>
                  ))}
                </div>
                <a
                  href={info.cta.href}
                  target={info.cta.external ? '_blank' : undefined}
                  rel={info.cta.external ? 'noopener noreferrer' : undefined}
                  className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
                >
                  {info.cta.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <a
            href="https://maps.google.com/?q=Nagarbhavi+Cross+Bengaluru+560072"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full h-72 bg-[#111] border border-[#222] hover:border-[#C8FF00] transition-all duration-300 group"
          >
            <svg
              className="w-12 h-12 text-[#333] group-hover:text-[#C8FF00] transition-colors mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-[#444] group-hover:text-[#C8FF00] text-sm font-semibold transition-colors mb-1">
              UV BENGALURU · NAGARBHAVI CROSS, BENGALURU 560072
            </p>
            <p className="text-[#333] group-hover:text-[#888] text-xs transition-colors">Click to open in Google Maps</p>
          </a>
        </div>
      </section>

      {/* Contact Form + Social */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Send a Message</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
                HOW CAN<br />WE HELP?
              </h2>
            </div>
            <ContactForm subjects={subjectOptions} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#111] border border-[#222] p-6">
              <h3 className="font-display text-base font-bold uppercase text-white mb-5">FOLLOW US</h3>
              <ul className="space-y-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group hover:text-[#C8FF00] transition-colors"
                    >
                      <span className="text-white text-sm font-medium group-hover:text-[#C8FF00] transition-colors">{s.label}</span>
                      <span className="text-[#666] text-xs group-hover:text-[#C8FF00] transition-colors">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#111] border border-[#222] p-6">
              <h3 className="font-display text-base font-bold uppercase text-white mb-4">OPERATED BY</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                UV Bengaluru is operated by <strong className="text-white">Aadya Inc.</strong> — an authorized Ultraviolette Automotive dealership serving Bengaluru and Karnataka.
              </p>
            </div>

            <div className="bg-[#C8FF00]/5 border border-[#C8FF00]/20 p-6">
              <h3 className="text-base font-bold uppercase text-[#C8FF00] mb-3">READY TO RIDE?</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-4">
                Skip the form — book a test ride directly and experience the Ultraviolette difference.
              </p>
              <a
                href="/test-ride"
                className="block text-center bg-[#C8FF00] text-black font-bold uppercase tracking-widest py-3 text-xs hover:bg-[#d4ff33] transition-colors"
              >
                BOOK TEST RIDE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
