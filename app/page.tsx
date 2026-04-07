import Link from 'next/link'
import Image from 'next/image'

const CDN = 'https://d2atk76x06g5eh.cloudfront.net/website/india/navbar/vehicles'

const bikes = [
  {
    name: 'X-47 Recon',
    tagline: 'Many Roads, One Crossover',
    range: '323 km IDC',
    power: '30 kW / 40.2 hp',
    price: 'From ₹3.49 Lakh',
    accent: 'The X-47 Recon redefines what a crossover electric can do — multi-terrain capability, HyperSense radar, and 323 km of real-world range.',
    img: `${CDN}/x47.png`,
  },
  {
    name: 'F77 Mach 2',
    tagline: 'Sport Flagship',
    range: '307 km IDC',
    power: '38.5 kW / 51.6 hp',
    price: 'From ₹3.99 Lakh',
    accent: 'Ultraviolette\'s performance crown. Aerospace-grade chassis, 155+ km/h top speed, and riding modes tuned for the track and the street.',
    img: `${CDN}/mach_2_dummy.png`,
  },
  {
    name: 'F77 SuperStreet',
    tagline: 'Urban Sport',
    range: '307 km IDC',
    power: '27 kW',
    price: 'Enquire for pricing',
    accent: 'Built for Bengaluru\'s streets. Razor-sharp handling, instant torque delivery, and a silhouette that commands every lane.',
    img: `${CDN}/superstreet_2.png`,
  },
]

const stats = [
  { value: '323 KM', label: 'IDC Range' },
  { value: '2.7s', label: '0–60 km/h' },
  { value: '8 YRS', label: 'Battery Warranty' },
  { value: '5-Level', label: 'Battery Safety' },
]

const whyUs = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'AUTHORIZED DEALER',
    copy: 'Certified by Ultraviolette Automotive. Purchase with confidence — full warranty coverage, genuine parts, and factory-trained technicians.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'TEST RIDE EXPERIENCE',
    copy: 'Feel the instant torque and electric silence before you decide. Book a test ride at our Nagarbhavi facility, any day of the week.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'DEDICATED WORKSHOP',
    copy: 'Our workshop handles the full Ultraviolette range. Battery diagnostics, software updates, genuine spares, and scheduled maintenance — all under one roof.',
  },
]

const services = [
  {
    title: 'SHOWROOM',
    copy: 'Explore the full Ultraviolette lineup in person. Our team is ready to walk you through every model, variant, and colour.',
    href: '/showroom',
  },
  {
    title: 'WORKSHOP',
    copy: 'Factory-certified service, diagnostics, and genuine Ultraviolette parts. Your machine deserves nothing less.',
    href: '/workshop',
  },
  {
    title: 'TEST RIDE',
    copy: 'Nothing prepares you for the Ultraviolette experience like riding one. Book your slot today.',
    href: '/test-ride',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gradient min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-6 font-semibold">
                Official Ultraviolette Dealership · Nagarbhavi, Bengaluru
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none tracking-tight text-white mb-8">
                BENGALURU&apos;S<br />
                <span className="text-[#C8FF00]">ELECTRIC</span><br />
                REVOLUTION<br />
                STARTS HERE
              </h1>
              <p className="text-[#888] text-lg mb-10 max-w-md leading-relaxed">
                Experience Ultraviolette&apos;s aerospace-engineered electric motorcycles. 7 years of uncompromising R&amp;D. Available now at UV Bengaluru.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/bikes"
                  className="bg-[#C8FF00] text-black font-bold uppercase tracking-widest px-7 py-4 text-sm hover:bg-[#d4ff33] transition-colors"
                >
                  EXPLORE BIKES
                </Link>
                <Link
                  href="/test-ride"
                  className="border border-[#C8FF00] text-[#C8FF00] font-bold uppercase tracking-widest px-7 py-4 text-sm hover:bg-[#C8FF00] hover:text-black transition-all"
                >
                  BOOK TEST RIDE
                </Link>
              </div>
            </div>

            {/* Hero bike image */}
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full opacity-30 blur-3xl bg-[#C8FF00]" />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`${CDN}/x47.png`}
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

      {/* ── Marquee Strip ── */}
      <div className="bg-[#C8FF00] py-4 overflow-hidden">
        <div className="animate-marquee">
          {[1, 2].map((i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8 font-display">
              {[
                'ULTRAVIOLETTE',
                '323 KM RANGE',
                '0–60 IN 2.7S',
                '8 YEAR WARRANTY',
                'OFFICIAL DEALER',
                'NAGARBHAVI BENGALURU',
                'GO BALLISTIC',
                'ACTIVATE FLIGHT MODE',
              ].map((text) => (
                <span key={text} className="flex items-center gap-8">
                  <span className="text-black font-bold uppercase tracking-[0.2em] text-sm">{text}</span>
                  <span className="text-black/30 text-sm">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">About UV Bengaluru</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-white mb-6">
              DRIVEN BY PASSION.<br />POWERED BY<br />AADYA INC.
            </h2>
            <p className="text-[#888] text-base leading-relaxed mb-6">
              UV Bengaluru, operated by Aadya Inc., is Bengaluru&apos;s premier Ultraviolette electric motorcycle dealership. Located in Nagarbhavi, we bring Ultraviolette&apos;s revolutionary machines — engineered with 7 years of uncompromising R&amp;D and aerospace-derived technology — directly to Karnataka&apos;s riders.
            </p>
            <p className="text-[#888] text-base leading-relaxed">
              We&apos;re not just a dealership. We offer test rides, expert factory-certified servicing, genuine Ultraviolette parts, finance assistance, and a full ownership experience — all under one roof. This is your gateway to the electric revolution.
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

      {/* ── Bike Showcase ── */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Available Now</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
                THE LINEUP
              </h2>
            </div>
            <Link href="/bikes" className="text-[#C8FF00] text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
              View All Models
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bikes.map((bike) => (
              <div key={bike.name} className="card-hover bg-[#111] border border-[#222] flex flex-col">
                <div className="bg-[#0d0d0d] border-b border-[#222] aspect-video relative overflow-hidden">
                  <Image
                    src={bike.img}
                    alt={bike.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#C8FF00] text-xs uppercase tracking-[0.2em] mb-1 font-medium">{bike.tagline}</p>
                  <h3 className="font-display text-2xl font-extrabold uppercase text-white mb-3">{bike.name}</h3>
                  <p className="text-[#888] text-sm leading-relaxed mb-4 flex-1">{bike.accent}</p>
                  <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-[#222]">
                    <div>
                      <p className="text-[#C8FF00] text-sm font-bold">{bike.range}</p>
                      <p className="text-[#666] text-xs uppercase tracking-wider">Range</p>
                    </div>
                    <div>
                      <p className="text-[#C8FF00] text-sm font-bold">{bike.power}</p>
                      <p className="text-[#666] text-xs uppercase tracking-wider">Peak Power</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-white text-sm font-semibold">{bike.price}</p>
                    <Link
                      href="/bikes"
                      className="text-[#C8FF00] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1"
                    >
                      Details
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why UV Bengaluru ── */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              THE UV BENGALURU DIFFERENCE
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-[#111] border border-[#222] p-8 hover:border-[#C8FF00] transition-colors duration-300">
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-display text-xl font-extrabold uppercase text-white mb-3">{item.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Quick Links ── */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              OUR SERVICES
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-[#111] border border-[#222] p-8 hover:border-[#C8FF00] transition-all duration-300 hover:bg-[#161616] flex flex-col"
              >
                <h3 className="font-display text-3xl font-extrabold uppercase text-white mb-4 group-hover:text-[#C8FF00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed flex-1">{service.copy}</p>
                <div className="mt-6 flex items-center gap-2 text-[#C8FF00] text-xs font-bold uppercase tracking-wider">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-4 md:px-8 border-t border-b border-[#C8FF00]/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl font-extrabold uppercase text-white mb-6">
            READY TO<br />
            <span className="text-[#C8FF00]">GO BALLISTIC?</span>
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Experience Ultraviolette&apos;s electric performance first-hand at our Nagarbhavi showroom. No commitments. Just the ride.
          </p>
          <Link
            href="/test-ride"
            className="inline-block bg-[#C8FF00] text-black font-bold uppercase tracking-widest px-10 py-5 text-base hover:bg-[#d4ff33] transition-colors"
          >
            BOOK YOUR TEST RIDE →
          </Link>
          <p className="text-[#555] text-xs mt-6 uppercase tracking-widest">Nagarbhavi, Bengaluru · Open 7 Days</p>
        </div>
      </section>
    </>
  )
}
