import type { Metadata } from 'next'
import Link from 'next/link'
import VehicleImage from '@/components/VehicleImage'
import { getVehicleImageFrameClass, getVehicleImageObjectClass } from '@/lib/vehicleImagePresentation'
import { retailVehicles } from '@/lib/vehicles'

export const metadata: Metadata = {
  title: "Bengaluru's Home for Ultraviolette | UV Bengaluru",
  description:
    'UV Bengaluru is the official Ultraviolette electric mobility dealership in Nagarbhavi, Bengaluru. Explore X-47, F77 Mach 2, F77 SuperStreet, Tesseract, Shockwave, and more.',
}

export default function HomePage() {
  const featured = retailVehicles[0]

  return (
    <>
      <section style={{ background: '#F5F5F5', minHeight: '100vh' }} className="flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#666] mb-6">
                Official Ultraviolette Dealership - Nagarbhavi, Bengaluru
              </p>
              <h1 className="font-display text-[clamp(36px,6vw,56px)] font-bold uppercase leading-none text-[#1A1A1A] mb-5">
                Bengaluru&apos;s Home for<br />
                <span className="text-[#E8231A]">Ultraviolette</span>
              </h1>
              <p className="text-[15px] text-[#666] leading-relaxed mb-2">
                SJA Arcade, 904, 10th Cross Rd, ITI Layout, Naagarabhaavi, Bengaluru
              </p>
              <p className="text-sm text-[#888] mb-9">Open daily - 10:00 AM to 7:00 PM</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/vehicles" className="border border-[#1A1A1A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] hover:bg-black/5">
                  Explore Vehicles
                </Link>
                <Link href="/test-ride" className="bg-[#E8231A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#C41C14]">
                  Book Test Ride
                </Link>
              </div>
            </div>
            {featured && (
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[rgba(232,35,26,0.08)] blur-[60px]" />
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <VehicleImage
                    src={featured.heroImage}
                    alt={featured.name}
                    label={featured.name}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-black py-3">
        <div className="animate-marquee">
          {[1, 2].map((i) => (
            <span key={i} className="ticker-text px-10">
              {['ZERO EMISSIONS', 'INSTANT TORQUE', 'RADAR INTELLIGENCE', 'SRB BATTERY', 'NAGARBHAVI - 10AM TO 7PM DAILY'].map((text) => (
                <span key={text} className="mr-6 inline-flex items-center gap-6">
                  <span>{text}</span>
                  <span className="text-[#444]">/</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="bg-[#0D0D0D] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">Current Lineup</p>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-[0.08em] text-white">
              Choose Your <span className="text-[#FF3B3B]">Ultraviolette</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retailVehicles.map((vehicle) => (
              <article key={vehicle.slug} className="card-hover flex flex-col overflow-hidden rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A]">
                <div className={`relative aspect-[16/10] overflow-hidden ${getVehicleImageFrameClass(vehicle.cardImage, 'light')}`}>
                  <VehicleImage
                    src={vehicle.cardImage}
                    alt={vehicle.name}
                    label={vehicle.name}
                    fill
                    className={getVehicleImageObjectClass(vehicle.cardImage)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {vehicle.status === 'pre-book' && (
                    <span className="absolute left-3 top-3 btn-yellow">PRE-BOOK</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777]">{vehicle.category.replace(/-/g, ' ')}</p>
                  <h3 className="font-display mb-2 text-xl font-bold uppercase tracking-[0.06em] text-white">{vehicle.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#A0A0A0]">{vehicle.tagline}</p>
                  <div className="mb-5 grid grid-cols-2 gap-3">
                    {vehicle.heroStats.slice(0, 4).map((stat) => (
                      <div key={stat.label} className="border border-[#2A2A2A] bg-[#141414] p-3">
                        <p className="text-sm font-bold text-white">{stat.value}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[#777]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-auto mb-4 font-display text-lg font-bold text-white">{vehicle.price}</p>
                  <div className="flex gap-2">
                    <Link href={`/vehicles/${vehicle.slug}`} className="btn-ghost flex-1 px-3 py-2 text-center text-[11px]">
                      Discover
                    </Link>
                    <Link href={vehicle.status === 'available' ? '/test-ride' : '/contact'} className="btn-primary flex-1 px-3 py-2 text-center text-[11px]">
                      {vehicle.status === 'available' ? 'Book' : 'Enquire'}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-6">
          {[
            ['Visit Our Showroom', 'See the lineup, compare variants, and get local pricing at Nagarbhavi.', '/showroom', 'Get Directions'],
            ['Book Test Ride', 'Experience F77 and X-47 performance before you decide.', '/test-ride', 'Reserve Slot'],
            ['Talk To Us', 'Ask about current pricing, delivery timelines, finance, and pre-booking.', '/contact', 'Contact Team'],
          ].map(([title, desc, href, cta]) => (
            <div key={title} className="rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] p-8">
              <h3 className="font-display mb-3 text-xl font-bold uppercase tracking-[0.08em] text-white">{title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-[#A0A0A0]">{desc}</p>
              <Link href={href} className="btn-primary text-xs">
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
