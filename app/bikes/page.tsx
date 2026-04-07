import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bikes',
  description:
    'Explore the full Ultraviolette lineup — X-47, F77 Mach 2, F77 SuperStreet. Available at UV Bengaluru in Nagarbhavi, Bengaluru.',
}

const CDN = 'https://d2atk76x06g5eh.cloudfront.net/website/india/navbar/vehicles'

const x47Variants = [
  { name: 'X-47 Original', price: '₹2.49 Lakh', power: '27 kW (36.2 hp)', torque: '550 Nm', range: '211 km IDC', sprint: '2.8s', battery: '7.1 kWh' },
  { name: 'X-47 Original+', price: '₹2.99 Lakh', power: '27 kW (36.2 hp)', torque: '550 Nm', range: '211 km IDC', sprint: '2.8s', battery: '7.1 kWh' },
  { name: 'X-47 Recon', price: '₹3.49 Lakh', power: '30 kW (40.2 hp)', torque: '610 Nm', range: '323 km IDC', sprint: '2.7s', battery: '10.3 kWh SRB-10' },
  { name: 'X-47 Recon+', price: '₹3.99 Lakh', power: '30 kW (40.2 hp)', torque: '610 Nm', range: '323 km IDC', sprint: '2.7s', battery: '10.3 kWh SRB-10' },
  { name: 'X-47 Desert Wing', price: '₹4.49 Lakh', power: '30 kW (40.2 hp)', torque: '610 Nm', range: '323 km IDC', sprint: '2.7s', battery: '10.3 kWh SRB-10' },
]

const mainModels = [
  {
    name: 'X-47 Series',
    tagline: 'Many Roads, One Crossover',
    badge: 'AVAILABLE NOW',
    img: `${CDN}/x47.png`,
    description:
      'The X-47 is Ultraviolette\'s genre-defining crossover electric motorcycle. It merges raw street performance with multi-terrain capability, wrapped in an aerospace-inspired silhouette. Whether you\'re navigating Bengaluru\'s traffic or venturing off the beaten path, the X-47 handles everything with unwavering confidence.',
    highlights: [
      { label: 'Peak Range', value: '323 KM' },
      { label: 'Peak Power', value: '30 kW' },
      { label: 'Wheel Torque', value: '610 Nm' },
      { label: '0–60 km/h', value: '2.7s' },
      { label: 'Top Speed', value: '145 km/h' },
      { label: 'Seat Height', value: '820 mm' },
    ],
    features: [
      'HyperSense Gen 6 77GHz Radar (200m monitoring)',
      'Rear collision warning & blind spot monitoring',
      '5" Touchscreen console (aerospace-grade aluminium)',
      'Onboard Type-2 compatible charger',
      '10-level dynamic regenerative braking',
      'OTA software updates',
      'Violette AI security system',
    ],
    warranty: '8,00,000 km or 8 years battery warranty',
    charging: '<60 minutes (20–80% SOC) with UV Supernova',
  },
  {
    name: 'F77 Mach 2',
    tagline: 'Sport Flagship',
    badge: 'AVAILABLE NOW',
    img: `${CDN}/mach_2_dummy.png`,
    description:
      'The F77 Mach 2 is Ultraviolette\'s performance crown jewel. Born from 7 years of aerospace-grade R&D, it delivers a top speed of 155+ km/h and a riding experience that renders petrol irrelevant. For riders who refuse to compromise — this is your machine.',
    highlights: [
      { label: 'Peak Power', value: '38.5 kW' },
      { label: 'Wheel Torque', value: '580 Nm' },
      { label: '0–60 km/h', value: '2.9s' },
      { label: 'Top Speed', value: '155+ km/h' },
      { label: 'Range', value: '~307 km' },
      { label: 'Battery', value: '10.3 kWh' },
    ],
    features: [
      'Multiple riding modes (Sport, City, Eco)',
      'Violette AI smart security',
      'OTA firmware updates',
      'Aerospace-grade chassis construction',
      '5-level battery safety system',
      'UV Lync: access to 4,000+ charging stations',
      'Connected ride analytics',
    ],
    warranty: '8,00,000 km or 8 years battery warranty',
    charging: '<60 minutes (20–80% SOC) with UV Supernova',
  },
  {
    name: 'F77 SuperStreet',
    tagline: 'Urban Sport',
    badge: 'AVAILABLE NOW',
    img: `${CDN}/superstreet_2.png`,
    description:
      'The F77 SuperStreet is built for riders who demand sport DNA in their daily commute. Sharpened for urban environments with Ultraviolette\'s characteristic instant torque delivery and a stance that turns every street into a stage. Sleek, efficient, and unmistakably Ultraviolette.',
    highlights: [
      { label: 'Peak Power', value: '27 kW' },
      { label: 'Category', value: 'Urban Sport' },
      { label: 'Character', value: 'Street-focused' },
      { label: 'Range', value: 'Up to 307 km' },
      { label: 'Charging', value: 'Type-2 onboard' },
      { label: 'Connectivity', value: 'UV Lync' },
    ],
    features: [
      'Street-tuned suspension',
      'Instant torque delivery',
      'UV Lync charging connectivity',
      'OTA update capability',
      '5-level battery protection',
      'Violette AI security',
    ],
    warranty: '8,00,000 km or 8 years battery warranty',
    charging: '<60 minutes (20–80% SOC) with UV Supernova',
  },
]

const upcoming = [
  {
    name: 'Tesseract',
    category: 'Electric Scooter',
    eta: 'Q2 2026',
    description: 'Ultraviolette enters the scooter segment with its signature approach — radical design and uncompromising performance.',
    img: `${CDN}/tesseract_2.png`,
  },
  {
    name: 'Shockwave',
    category: 'Funduro',
    eta: 'Q1 2026',
    description: 'An adventure-funduro category entry for riders who want to take the electric revolution off-road.',
    img: `${CDN}/shockwave_2.png`,
  },
]

const benefits = [
  { label: '323 KM', sublabel: 'IDC Range', desc: 'Industry-leading real-world range on the X-47 Recon and F77 Mach 2.' },
  { label: '8 YEARS', sublabel: 'Battery Warranty', desc: 'Up to 8,00,000 km / 8 year warranty — the best in the industry.' },
  { label: '<60 MIN', sublabel: 'Fast Charging', desc: '20–80% SOC with UV Supernova chargers at Hindustan Petroleum stations.' },
  { label: '5-LEVEL', sublabel: 'Battery Safety', desc: 'Thermal, Electrical, Mechanical, Electronic, and Software protection layers.' },
]

export default function BikesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">UV Bengaluru</p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none tracking-tight text-white mb-5">
            THE ULTRAVIOLETTE<br />
            <span className="text-[#C8FF00]">LINEUP</span>
          </h1>
          <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
            Every Ultraviolette motorcycle is engineered with aerospace precision and backed by 7 years of uncompromising R&amp;D. Choose your machine. Redefine your ride.
          </p>
        </div>
      </section>

      {/* Main Models */}
      {mainModels.map((model, idx) => (
        <section key={model.name} className={`py-24 px-4 md:px-8 border-b border-[#1a1a1a] ${idx % 2 === 1 ? 'bg-[#0c0c0c]' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-[#0d0d0d] border border-[#222] aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={model.img}
                    alt={model.name}
                    fill
                    className="object-contain p-8 bike-image-glow"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block bg-[#C8FF00] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4">
                  {model.badge}
                </span>
                <p className="text-[#C8FF00] text-sm uppercase tracking-[0.2em] font-medium mb-2">{model.tagline}</p>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white mb-5 leading-tight">
                  {model.name}
                </h2>
                <p className="text-[#888] text-base leading-relaxed mb-8">{model.description}</p>

                {/* Spec Grid */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {model.highlights.map((h) => (
                    <div key={h.label} className="bg-[#161616] border border-[#222] p-3">
                      <p className="font-display text-[#C8FF00] font-bold text-lg leading-tight">{h.value}</p>
                      <p className="text-[#666] text-xs uppercase tracking-wider mt-0.5">{h.label}</p>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#888]">
                      <svg className="w-4 h-4 text-[#C8FF00] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="text-[#666] text-xs mb-2">
                  <span className="text-[#888]">Warranty:</span> {model.warranty}
                </p>
                <p className="text-[#666] text-xs mb-8">
                  <span className="text-[#888]">Charging:</span> {model.charging}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/test-ride" className="bg-[#C8FF00] text-black font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-[#d4ff33] transition-colors">
                    BOOK TEST RIDE
                  </Link>
                  <Link href="/contact" className="border border-[#C8FF00] text-[#C8FF00] font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-[#C8FF00] hover:text-black transition-all">
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* X-47 Variant Pricing */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Bengaluru Ex-Showroom Pricing</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              X-47 VARIANTS
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#222]">
                  {['Variant', 'Price', 'Power', 'Torque', 'Range', '0–60', 'Battery'].map((h) => (
                    <th key={h} className="text-left text-[#666] text-xs uppercase tracking-widest py-4 px-4 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {x47Variants.map((v, i) => (
                  <tr key={v.name} className={`border-b border-[#1a1a1a] hover:bg-[#161616] transition-colors ${i === 4 ? 'border-[#C8FF00]/20' : ''}`}>
                    <td className="py-4 px-4">
                      <span className="text-white font-semibold text-sm">{v.name}</span>
                      {i === 4 && (
                        <span className="ml-2 bg-[#C8FF00] text-black text-[10px] font-bold uppercase px-1.5 py-0.5">TOP</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#C8FF00] font-bold text-sm">{v.price}</td>
                    <td className="py-4 px-4 text-[#888] text-sm">{v.power}</td>
                    <td className="py-4 px-4 text-[#888] text-sm">{v.torque}</td>
                    <td className="py-4 px-4 text-[#888] text-sm">{v.range}</td>
                    <td className="py-4 px-4 text-[#888] text-sm">{v.sprint}</td>
                    <td className="py-4 px-4 text-[#888] text-sm">{v.battery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#555] text-xs mt-4">* Prices are ex-showroom, Bengaluru. Includes ₹25,000 Carbon Farewell Fund. Contact us for on-road pricing.</p>
        </div>
      </section>

      {/* Upcoming Models */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Coming Soon</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              WHAT&apos;S NEXT
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcoming.map((model) => (
              <div key={model.name} className="bg-[#111] border border-[#222] overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-[#222] text-[#888] text-xs font-bold uppercase px-3 py-1 tracking-widest">
                  {model.eta}
                </div>
                <div className="bg-[#0d0d0d] aspect-video relative">
                  <Image
                    src={model.img}
                    alt={model.name}
                    fill
                    className="object-contain p-8 grayscale opacity-50"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[#666] text-xs uppercase tracking-widest mb-2">{model.category}</p>
                  <h3 className="font-display text-3xl font-extrabold uppercase text-white mb-3">{model.name}</h3>
                  <p className="text-[#888] text-sm leading-relaxed mb-6">{model.description}</p>
                  <Link
                    href="/contact"
                    className="border border-[#444] text-[#888] font-bold uppercase tracking-widest px-5 py-2.5 text-xs hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all"
                  >
                    NOTIFY ME
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Benefits */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">The UV Promise</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              EVERY ULTRAVIOLETTE INCLUDES
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.label} className="bg-[#111] border border-[#222] p-6 text-center">
                <p className="font-display text-[#C8FF00] text-3xl font-extrabold leading-none mb-1">{b.label}</p>
                <p className="text-white text-xs uppercase tracking-widest mb-3">{b.sublabel}</p>
                <p className="text-[#888] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 border-t border-[#C8FF00]/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase text-white mb-5">
            FIND YOUR<br /><span className="text-[#C8FF00]">ULTRAVIOLETTE</span>
          </h2>
          <p className="text-[#888] text-base mb-8 max-w-lg mx-auto">
            Visit our Nagarbhavi showroom to see the full lineup in person, or book a test ride today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/test-ride" className="bg-[#C8FF00] text-black font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#d4ff33] transition-colors">
              BOOK TEST RIDE
            </Link>
            <Link href="/showroom" className="border border-[#C8FF00] text-[#C8FF00] font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#C8FF00] hover:text-black transition-all">
              VISIT SHOWROOM
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
