import type { Metadata } from 'next'
import Link from 'next/link'
import VehicleImage from '@/components/VehicleImage'
import { getVehicleImageFrameClass, getVehicleImageObjectClass } from '@/lib/vehicleImagePresentation'
import { availableVehicles, preBookVehicles, showcaseVehicles, type Vehicle } from '@/lib/vehicles'

export const metadata: Metadata = {
  title: 'Vehicles | UV Bengaluru',
  description:
    'Explore the Ultraviolette lineup at UV Bengaluru: X-47, X-47 Desert Wing, F77 Mach 2, F77 SuperStreet, Tesseract, Shockwave, and racing/story showcases.',
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const isAvailable = vehicle.status === 'available'

  return (
    <Link
      href={`/vehicles/${vehicle.slug}`}
      className="card-hover block overflow-hidden rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] no-underline"
    >
      <div className={`relative aspect-[16/10] ${getVehicleImageFrameClass(vehicle.cardImage, 'light')}`}>
        <VehicleImage
          src={vehicle.cardImage}
          alt={vehicle.name}
          label={vehicle.name}
          fill
          className={getVehicleImageObjectClass(vehicle.cardImage)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {!isAvailable && (
          <span className="absolute left-3 top-3 btn-yellow">
            {vehicle.status === 'pre-book' ? 'PRE-BOOK' : vehicle.status === 'enquiry-only' ? 'ENQUIRY' : 'STORY'}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777]">{vehicle.category.replace(/-/g, ' ')}</p>
        <h3 className="font-display mb-2 text-2xl font-bold uppercase tracking-[0.06em] text-white">{vehicle.name}</h3>
        <p className="mb-5 text-sm leading-relaxed text-[#A0A0A0]">{vehicle.tagline}</p>
        <div className="mb-5 grid grid-cols-3 gap-3">
          {vehicle.heroStats.slice(0, 3).map((spec) => (
            <div key={spec.label}>
              <p className="text-sm font-bold text-white">{spec.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.06em] text-[#777]">{spec.label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-bold text-white">{vehicle.price}</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF3B3B]">View Details</span>
        </div>
      </div>
    </Link>
  )
}

export default function VehiclesPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A0A0A0]">UV Bengaluru - Nagarbhavi</p>
          <h1 className="font-display mb-4 text-[clamp(36px,5vw,56px)] font-bold uppercase tracking-[0.08em] text-white">
            The <span className="text-[#FF3B3B]">Lineup</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#A0A0A0]">
            Current retail models, pre-book platforms, and Ultraviolette racing/story showcases. Prices and delivery timelines are dealership-verification sensitive.
          </p>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-4 pb-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 border-t border-[#2A2A2A] pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A0A0A0]">Available / Test Ride</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {availableVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#A0A0A0]">Pre-book / Register Interest</h2>
            <p className="text-sm text-[#666]">Upcoming models stay in pre-book mode until final retail specifications are confirmed.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {preBookVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#A0A0A0]">Racing And Story Showcase</h2>
            <p className="text-sm text-[#666]">Not normal dealership inventory. Use these pages for brand credibility and limited-edition storytelling.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {showcaseVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#2A2A2A] bg-[#0D0D0D] px-4 py-16 text-center md:px-8">
        <h2 className="font-display mb-4 text-3xl font-bold uppercase tracking-[0.08em] text-white">
          Want Current Bengaluru Pricing?
        </h2>
        <p className="mb-8 text-sm text-[#A0A0A0]">
          Book a test ride or speak to the showroom team for current ex-showroom, on-road, offer, and delivery details.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/test-ride" className="btn-primary">
            Book Test Ride
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Showroom
          </Link>
        </div>
      </section>
    </>
  )
}
