import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import VehicleColorSelector from '@/components/VehicleColorSelector'
import VehicleImage from '@/components/VehicleImage'
import { getVehicleImageFrameClass, getVehicleImageObjectClass } from '@/lib/vehicleImagePresentation'
import { vehicles, getVehicle } from '@/lib/vehicles'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const vehicle = getVehicle(slug)
  if (!vehicle) return { title: 'Vehicle Not Found' }

  return {
    title: `${vehicle.name} | UV Bengaluru`,
    description: `${vehicle.subheadline} ${vehicle.price}. Visit UV Bengaluru, Nagarbhavi for current pricing and availability.`,
  }
}

function statusLabel(status: string) {
  if (status === 'available') return 'Available / Test Ride'
  if (status === 'pre-book') return 'Pre-book / Register Interest'
  if (status === 'enquiry-only') return 'Enquiry Only'
  return 'Story / Archive'
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params
  const vehicle = getVehicle(slug)
  if (!vehicle) notFound()

  const isAvailable = vehicle.status === 'available'
  const isPreBook = vehicle.status === 'pre-book'
  const primaryHref = isAvailable ? '/test-ride' : '/contact'
  const leadStats = vehicle.heroStats.slice(0, 4)
  const galleryLead = vehicle.gallery[0]
  const galleryRest = vehicle.gallery.slice(1)

  return (
    <>
      <section className="bg-[#0D0D0D] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.08em]">
            <Link href="/vehicles" className="text-[#666] hover:text-white">Vehicles</Link>
            <span className="text-[#444]">/</span>
            <span className="text-[#A0A0A0]">{vehicle.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="relative">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
                <span className="btn-yellow">{statusLabel(vehicle.status)}</span>
                <span className="rounded-[3px] border border-white/10 bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                  {vehicle.category.replace(/-/g, ' ')}
                </span>
              </div>

              {vehicle.colors.length > 0 ? (
                <VehicleColorSelector colors={vehicle.colors} modelName={vehicle.name} layout="hero" />
              ) : (
                <div className={`relative overflow-hidden rounded-[6px] border border-[#2A2A2A] ${getVehicleImageFrameClass(vehicle.heroImage)}`}>
                  <div className="relative aspect-[4/3]">
                    <VehicleImage
                      src={vehicle.heroImage}
                      alt={vehicle.name}
                      label={vehicle.name}
                      fill
                      priority
                      className={getVehicleImageObjectClass(vehicle.heroImage, 'product')}
                      sizes="(max-width: 1024px) 100vw, 56vw"
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
                Ultraviolette / {vehicle.name}
              </p>
              <h1 className="font-display mb-4 text-[clamp(40px,6vw,68px)] font-extrabold uppercase leading-none tracking-[0.04em] text-white">
                {vehicle.name}
              </h1>
              <p className="mb-4 text-xl text-white md:text-2xl">{vehicle.tagline}</p>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-[#A0A0A0]">{vehicle.subheadline}</p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {leadStats.map((stat) => (
                  <div key={stat.label} className="border border-[#2A2A2A] bg-[#161616] p-4">
                    <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#777]">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="font-display text-3xl font-bold text-white">{vehicle.price}</p>
                {vehicle.availableFrom && (
                  <p className="mt-2 text-sm font-semibold text-[#F5C518]">Expected availability: {vehicle.availableFrom}</p>
                )}
                {vehicle.priceNote && (
                  <p className="mt-3 max-w-xl text-xs leading-relaxed text-[#777]">{vehicle.priceNote}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href={primaryHref} className="btn-primary">
                  {isPreBook ? vehicle.primaryCta : isAvailable ? 'Book Test Ride' : vehicle.primaryCta}
                </Link>
                <a
                  href={`https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20the%20Ultraviolette%20${encodeURIComponent(vehicle.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2A2A2A] bg-[#111] px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">Positioning</p>
            <h2 className="font-display mb-4 text-3xl font-bold uppercase tracking-[0.06em] text-white md:text-4xl">
              About {vehicle.name}
            </h2>
            <p className="text-base leading-relaxed text-[#A0A0A0]">{vehicle.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {vehicle.specs.map((spec) => (
              <div key={spec.label} className="border border-[#2A2A2A] bg-[#181818] p-4">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#777]">{spec.label}</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {vehicle.variants && vehicle.variants.length > 0 && (
        <section className="bg-[#111] px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">Variants</p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">Choose Your Configuration</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {vehicle.variants.map((variant, index) => (
                <div
                  key={variant.name}
                  className={`rounded-[6px] border p-6 ${
                    index === 0 ? 'border-[#FF3B3B] bg-[#1A1515]' : 'border-[#2A2A2A] bg-[#1A1A1A]'
                  }`}
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.14em] text-[#777]">
                    Configuration {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </p>
                  <h3 className="font-display mb-2 text-2xl font-bold uppercase text-white">{variant.name}</h3>
                  {variant.priceLabel && <p className="mb-5 text-lg font-bold text-[#FF3B3B]">{variant.priceLabel}</p>}
                  <div className="space-y-3">
                    {[
                      ['Battery', variant.battery],
                      ['Range', variant.range],
                      ['Power', variant.power],
                      ['Torque', variant.torque],
                      ['0-60 km/h', variant.acceleration],
                      ['Top Speed', variant.topSpeed],
                    ].map(([label, value]) => value && (
                      <div key={label} className="flex justify-between gap-4 border-b border-[#2A2A2A] pb-2 text-sm">
                        <span className="text-[#777]">{label}</span>
                        <span className="text-right font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                  {variant.notes && <p className="mt-4 text-xs leading-relaxed text-[#777]">{variant.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {vehicle.features.length > 0 && (
        <section className="bg-[#0D0D0D] px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">Feature Story</p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">Engineering Highlights</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {vehicle.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`overflow-hidden rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] ${
                    index === 0 && feature.image ? 'lg:col-span-2' : ''
                  }`}
                >
                  {feature.image && (
                    <div className={`relative ${index === 0 ? 'aspect-[16/8]' : 'aspect-video'} ${getVehicleImageFrameClass(feature.image)}`}>
                      <VehicleImage
                        src={feature.image}
                        alt={feature.title}
                        label={feature.title}
                        fill
                        className={getVehicleImageObjectClass(feature.image)}
                        sizes={index === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 1024px) 100vw, 33vw'}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-display mb-3 text-xl font-bold uppercase text-white md:text-2xl">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-[#A0A0A0]">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#111] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">Specifications</p>
            <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">Detailed Spec Groups</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {vehicle.specGroups.map((group) => (
              <div key={group.title} className="rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] p-6">
                <h3 className="font-display mb-5 text-2xl font-bold uppercase text-white">{group.title}</h3>
                <div>
                  {group.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className="grid gap-2 py-3 sm:grid-cols-[0.46fr_0.54fr]"
                      style={{ borderBottom: i < group.specs.length - 1 ? '1px solid #2A2A2A' : 'none' }}
                    >
                      <span className="text-sm text-[#A0A0A0]">{spec.label}</span>
                      <span className="text-sm font-semibold leading-relaxed text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {vehicle.gallery.length > 0 && (
        <section className="bg-[#0D0D0D] px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">Gallery</p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">Gallery</h2>
            </div>

            {galleryLead && (
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
                <div className={`relative aspect-[16/10] overflow-hidden rounded-[6px] border border-[#2A2A2A] ${getVehicleImageFrameClass(galleryLead.src)}`}>
                  <VehicleImage
                    src={galleryLead.src}
                    alt={galleryLead.alt}
                    label={galleryLead.alt}
                    fill
                    className={getVehicleImageObjectClass(galleryLead.src)}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  {galleryRest.map((item) => (
                    <div
                      key={`${item.type}-${item.src}`}
                      className={`relative aspect-video overflow-hidden rounded-[6px] border border-[#2A2A2A] ${getVehicleImageFrameClass(item.src)}`}
                    >
                      <VehicleImage
                        src={item.src}
                        alt={item.alt}
                        label={item.alt}
                        fill
                        className={getVehicleImageObjectClass(item.src)}
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {vehicle.dealerVerificationRequired && vehicle.dealerVerificationRequired.length > 0 && (
        <section className="border-t border-[#2A2A2A] bg-[#111] px-4 py-12 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C518]">Dealer Verification Required</p>
            <div className="flex flex-wrap gap-3">
              {vehicle.dealerVerificationRequired.map((item) => (
                <span key={item} className="rounded-[4px] border border-[#3A3A3A] bg-[#181818] px-3 py-2 text-xs text-[#A0A0A0]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0D0D0D] px-4 py-16 text-center md:px-8">
        <h2 className="font-display mb-4 text-4xl font-bold uppercase text-white">Ready For The Next Step?</h2>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-[#A0A0A0]">
          Contact UV Bengaluru for current price, availability, test rides, pre-booking, and delivery timelines.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={primaryHref} className="btn-primary">
            {isAvailable ? 'Book Test Ride' : 'Contact Showroom'}
          </Link>
          <Link href="/vehicles" className="btn-ghost">
            Explore Other Models
          </Link>
        </div>
      </section>
    </>
  )
}
