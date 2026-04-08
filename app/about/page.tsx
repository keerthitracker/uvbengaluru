import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About UV Bengaluru | Authorized Ultraviolette Dealership',
  description:
    'UV Bengaluru, operated by Aadya Inc., is the official Ultraviolette electric motorcycle dealership in Nagarbhavi, Bengaluru. Factory-certified service, test rides, and the full UV lineup.',
}

const services = [
  {
    title: 'SHOWROOM',
    desc: 'Explore the full Ultraviolette lineup in person. Our product experts walk you through every variant, colour, and feature — no pressure, just knowledge.',
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'TEST RIDES',
    desc: 'Book a test ride any day of the week at our Nagarbhavi facility. Nothing replaces the feeling of instant electric torque.',
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'WORKSHOP & SERVICE',
    desc: 'Factory-certified technicians handle scheduled maintenance, battery diagnostics, OTA firmware updates, and genuine Ultraviolette parts.',
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'FINANCE ASSISTANCE',
    desc: 'We work with leading banks and NBFCs to find the right EMI plan for you. On-road pricing, insurance, and registration — all handled.',
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'OTA UPDATES',
    desc: "Keep your motorcycle's software current. Our workshop ensures your UV is always running the latest firmware for peak performance and safety.",
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'GENUINE PARTS',
    desc: 'Original Ultraviolette accessories and spare parts stocked at Nagarbhavi. No compromises on quality for your machine.',
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '2024', label: 'Year Established' },
  { value: '3+', label: 'UV Models Available' },
  { value: '7 DAYS', label: 'Open Every Week' },
  { value: '1 LOCATION', label: 'Nagarbhavi, Bengaluru' },
]

const differentiators = [
  {
    title: 'AUTHORIZED DEALER',
    desc: 'Certified directly by Ultraviolette Automotive. Every purchase comes with full manufacturer warranty, genuine parts guarantee, and factory-trained support.',
  },
  {
    title: 'EXPERT TEAM',
    desc: 'Our product specialists are factory-trained by Ultraviolette. Get honest, knowledgeable advice without the hard sell — we let the machines speak for themselves.',
  },
  {
    title: 'END-TO-END SUPPORT',
    desc: 'From your first test ride to ongoing service and OTA updates — we are your complete Ultraviolette partner in Bengaluru for the life of your machine.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">About UV Bengaluru</p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-white mb-5">
            BENGALURU&apos;S<br />
            <span className="text-[#C8FF00]">ELECTRIC</span><br />
            FUTURE
          </h1>
          <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
            UV Bengaluru is Bengaluru&apos;s official Ultraviolette dealership, operated by Aadya Inc. We bring India&apos;s most advanced electric motorcycles directly to Karnataka&apos;s riders.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-white mb-6">
              WHERE PASSION<br />MEETS PURPOSE
            </h2>
            <p className="text-[#888] text-base leading-relaxed mb-5">
              UV Bengaluru, operated by Aadya Inc., was established to bring Ultraviolette&apos;s revolutionary electric motorcycles to the heart of Karnataka. Located at SJA Arcade, Nagarbhavi, we are an authorized dealership committed to making the electric revolution accessible to Bengaluru&apos;s riders — whether you&apos;re a daily commuter or a weekend sport rider.
            </p>
            <p className="text-[#888] text-base leading-relaxed">
              We offer the full Ultraviolette ownership experience under one roof: test rides, expert consultation, factory-certified service, genuine parts, and finance assistance. Our team is trained directly by Ultraviolette Automotive, so every question gets an honest, knowledgeable answer.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-[#111] border border-[#222] p-6">
                <p className="stat-number text-4xl md:text-5xl mb-2">{stat.value}</p>
                <p className="text-[#888] text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Our Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              EVERYTHING YOU NEED
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-[#111] border border-[#222] p-8 hover:border-[#C8FF00] transition-colors duration-300">
                <div className="mb-5">{service.icon}</div>
                <h3 className="font-display text-xl font-extrabold uppercase text-white mb-3">{service.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UV Bengaluru */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              THE UV BENGALURU DIFFERENCE
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-[#111] border border-[#222] border-l-2 border-l-[#C8FF00] p-8">
                <h3 className="font-display text-xl font-extrabold uppercase text-white mb-3">{item.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 px-4 md:px-8 border-t border-[#C8FF00]/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white mb-6">
              VISIT US IN<br /><span className="text-[#C8FF00]">NAGARBHAVI</span>
            </h2>
            <div className="space-y-3 mb-8">
              <p className="text-[#888] text-sm leading-relaxed">
                SJA Arcade, 904, 10th Cross Rd<br />
                ITI Layout, Papareddipalya<br />
                Naagarabhaavi, Bengaluru, Karnataka 560072
              </p>
              <p className="text-[#888] text-sm">
                <a href="tel:+919606955530" className="hover:text-[#C8FF00] transition-colors">96069 55530</a>
              </p>
              <p className="text-[#888] text-sm">Mon–Sun: 10:00 AM – 7:00 PM</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/test-ride"
                className="bg-[#C8FF00] text-black font-bold uppercase tracking-widest px-7 py-4 text-sm hover:bg-[#d4ff33] transition-colors"
              >
                BOOK A TEST RIDE
              </Link>
              <a
                href="https://wa.me/919606955529"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C8FF00] text-[#C8FF00] font-bold uppercase tracking-widest px-7 py-4 text-sm hover:bg-[#C8FF00] hover:text-black transition-all"
              >
                WHATSAPP US
              </a>
            </div>
          </div>
          <div className="bg-[#111] border border-[#222] p-8">
            <h3 className="font-display text-base font-bold uppercase text-[#888] mb-4">LEGAL</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              UV Bengaluru is operated by <strong className="text-white">Aadya Inc.</strong>, an authorized Ultraviolette Automotive dealership. All vehicles sold carry full manufacturer warranty. Aadya Inc. is duly registered and authorized by Ultraviolette Automotive Pvt. Ltd. to sell, service, and support Ultraviolette products in Bengaluru, Karnataka.
            </p>
            <p className="text-[#555] text-xs mt-4">© 2025 Aadya Inc. | Authorized Ultraviolette Dealer, Bengaluru</p>
          </div>
        </div>
      </section>
    </>
  )
}
