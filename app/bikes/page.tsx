import type { Metadata } from 'next'
import Link from 'next/link'
import VehicleImage from '@/components/VehicleImage'
import { getVehicleImageFrameClass, getVehicleImageObjectClass } from '@/lib/vehicleImagePresentation'
import { availableVehicles, preBookVehicles } from '@/lib/vehicles'

export const metadata: Metadata = {
  title: 'Bikes',
  description:
    'Explore the Ultraviolette retail and pre-book lineup at UV Bengaluru in Nagarbhavi, Bengaluru.',
}

export default function BikesPage() {
  const lineup = [...availableVehicles, ...preBookVehicles]
  const x47 = availableVehicles.find((vehicle) => vehicle.slug === 'x-47')

  return (
    <>
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">UV Bengaluru</p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-white mb-5">
            The Ultraviolette<br />
            <span className="text-[#FF3B3B]">Lineup</span>
          </h1>
          <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
            This legacy bikes page now uses the same verified vehicle data as the main vehicles section.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {lineup.map((vehicle) => (
            <article key={vehicle.slug} className="grid md:grid-cols-2 gap-6 overflow-hidden border border-[#222] bg-[#111]">
              <div className={`relative aspect-[4/3] ${getVehicleImageFrameClass(vehicle.cardImage, 'light')}`}>
                <VehicleImage
                  src={vehicle.cardImage}
                  alt={vehicle.name}
                  label={vehicle.name}
                  fill
                  className={getVehicleImageObjectClass(vehicle.cardImage)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B3B]">{vehicle.category.replace(/-/g, ' ')}</p>
                <h2 className="font-display mb-3 text-3xl font-extrabold uppercase text-white">{vehicle.name}</h2>
                <p className="mb-5 text-sm leading-relaxed text-[#888]">{vehicle.subheadline}</p>
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {vehicle.heroStats.slice(0, 4).map((stat) => (
                    <div key={stat.label} className="border border-[#222] bg-[#161616] p-3">
                      <p className="font-display text-[#FF3B3B] font-bold text-lg leading-tight">{stat.value}</p>
                      <p className="text-[#666] text-xs uppercase tracking-wider mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mb-6 font-bold text-white">{vehicle.price}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={`/vehicles/${vehicle.slug}`} className="bg-[#E8231A] text-white font-bold uppercase tracking-widest px-5 py-3 text-xs hover:bg-[#C41C14]">
                    View Details
                  </Link>
                  <Link href={vehicle.status === 'available' ? '/test-ride' : '/contact'} className="border border-white text-[#FF3B3B] font-bold uppercase tracking-widest px-5 py-3 text-xs hover:bg-white/10">
                    {vehicle.status === 'available' ? 'Book Test Ride' : 'Register Interest'}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {x47?.variants && (
        <section className="py-20 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Bengaluru Ex-Showroom Pricing</p>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">X-47 Variants</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#222]">
                    {['Variant', 'Price', 'Power', 'Torque', 'Range', '0-60', 'Battery'].map((heading) => (
                      <th key={heading} className="text-left text-[#666] text-xs uppercase tracking-widest py-4 px-4 font-medium">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {x47.variants.map((variant) => (
                    <tr key={variant.name} className="border-b border-[#1a1a1a] hover:bg-[#161616]">
                      <td className="py-4 px-4 text-white font-semibold text-sm">{variant.name}</td>
                      <td className="py-4 px-4 text-[#FF3B3B] font-bold text-sm">{variant.priceLabel}</td>
                      <td className="py-4 px-4 text-[#888] text-sm">{variant.power}</td>
                      <td className="py-4 px-4 text-[#888] text-sm">{variant.torque}</td>
                      <td className="py-4 px-4 text-[#888] text-sm">{variant.range}</td>
                      <td className="py-4 px-4 text-[#888] text-sm">{variant.acceleration}</td>
                      <td className="py-4 px-4 text-[#888] text-sm">{variant.battery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#555] text-xs mt-4">
              * Prices may include time-sensitive offers and are subject to dealership verification. Contact UV Bengaluru for current on-road pricing.
            </p>
          </div>
        </section>
      )}
    </>
  )
}
