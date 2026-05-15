'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import VehicleColorSelector from '@/components/VehicleColorSelector'
import type { Vehicle, VehicleColor, VehicleVariant } from '@/lib/vehicles'

interface ImmersiveHeroProps {
  vehicle: Vehicle
  primaryHref: string
  isAvailable: boolean
  isPreBook: boolean
}

type HeroVariant = VehicleVariant & {
  _fallbackName: string
}

function createFallbackVariant(vehicle: Vehicle): HeroVariant {
  return {
    _fallbackName: vehicle.name,
    name: vehicle.name,
    priceLabel: vehicle.price,
    range: vehicle.heroStats.find((stat) => /range/i.test(stat.label))?.value,
    topSpeed: vehicle.heroStats.find((stat) => /top speed/i.test(stat.label))?.value,
    acceleration: vehicle.heroStats.find((stat) => /0-60/i.test(stat.label))?.value,
    battery: vehicle.specs.find((stat) => /battery/i.test(stat.label))?.value,
    transparentImage: vehicle.heroImage,
    backdropImage: vehicle.heroBackdropImage,
  }
}

function resolveColorImage(color: VehicleColor) {
  return color.heroImage || color.image
}

export default function ImmersiveHero({
  vehicle,
  primaryHref,
  isAvailable,
  isPreBook,
}: ImmersiveHeroProps) {
  const variants = useMemo<HeroVariant[]>(
    () =>
      vehicle.variants?.length
        ? vehicle.variants.map((variant) => ({
            ...variant,
            _fallbackName: variant.name,
          }))
        : [createFallbackVariant(vehicle)],
    [vehicle],
  )
  const [activeName, setActiveName] = useState(variants[0]?.name ?? vehicle.name)
  const [activeColorName, setActiveColorName] = useState(vehicle.colors[0]?.name ?? '')

  const activeVariant = variants.find((variant) => variant.name === activeName) ?? variants[0]
  const availableColors = useMemo(() => {
    if (!vehicle.colors.length) return []
    if (!activeVariant) return vehicle.colors
    if (!activeVariant.colorNames?.length) return vehicle.colors

    const filtered = vehicle.colors.filter((color) => activeVariant.colorNames?.includes(color.name))
    return filtered.length ? filtered : vehicle.colors
  }, [activeVariant, vehicle.colors])
  if (!activeVariant) return null
  const activeColor = availableColors.find((color) => color.name === activeColorName) ?? availableColors[0]
  const backgroundImage =
    activeColor?.backdropImage || activeVariant.backdropImage || vehicle.heroBackdropImage || vehicle.gallery[0]?.src
  const selectedHeroImage = activeColor ? resolveColorImage(activeColor) : activeVariant.transparentImage || vehicle.heroImage
  const heroImageMode = activeColor?.heroImageMode ?? 'product'
  const shouldRenderOverlay = heroImageMode === 'product'
  const statItems = [
    { label: 'IDC Range', value: activeVariant.range },
    { label: 'Top Speed', value: activeVariant.topSpeed },
    { label: '0-60 km/h', value: activeVariant.acceleration },
  ].filter((stat) => stat.value)

  return (
    <section className="relative flex min-h-[900px] overflow-hidden bg-black text-white md:min-h-[1080px]">
      <div className="absolute inset-0">
        {vehicle.bRollVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-55"
            poster={backgroundImage}
          >
            <source src={vehicle.bRollVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <motion.div
            key={backgroundImage}
            initial={{ opacity: 0.45, scale: 1.04 }}
            animate={{ opacity: 0.72, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/55" />
      </div>

      <div className="absolute left-1/2 top-[12%] z-10 hidden w-full -translate-x-1/2 px-4 text-center lg:block">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: vehicle.theme === 'light' ? 0.1 : 0.16 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-[13vw] font-extrabold uppercase leading-none tracking-[0.16em] text-white"
        >
          {vehicle.name}
        </motion.p>
      </div>

      <div className="absolute inset-x-0 bottom-[28%] z-20 mx-auto flex max-w-7xl justify-center px-4 md:bottom-[30%] md:px-8">
        {shouldRenderOverlay && (
          <AnimatePresence mode="wait">
            <motion.img
              key={`${activeVariant.name}-${activeColor?.name ?? 'default'}`}
              src={selectedHeroImage}
              alt={activeColor ? `${activeVariant.name} in ${activeColor.name}` : activeVariant.name}
              initial={{ opacity: 0, scale: 0.94, x: 36 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.04, x: -36 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none max-h-[34vh] w-full max-w-5xl object-contain drop-shadow-[0_32px_120px_rgba(0,0,0,0.65)] md:max-h-[48vh] xl:max-h-[54vh]"
            />
          </AnimatePresence>
        )}
      </div>

      <div className="relative z-30 flex w-full items-end px-4 pb-8 pt-24 md:px-8 md:pb-14 md:pt-32 xl:pb-18">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:items-end lg:gap-14 xl:gap-20">
          <div className="max-w-3xl lg:pb-6">
            <div className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/60">
              <Link href="/vehicles" className="transition hover:text-white">
                Vehicles
              </Link>
              <span>/</span>
              <span>{vehicle.name}</span>
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#FF5A4E]">
              Ultraviolette Bengaluru
            </p>
            <h1 className="font-display text-[clamp(40px,7vw,92px)] font-extrabold uppercase leading-[0.95] tracking-[0.06em] text-white">
              {activeVariant.name}
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/48">
              {vehicle.tagline}
            </p>
            <p className="mt-6 max-w-[40rem] text-base leading-relaxed text-white/74 md:text-lg xl:text-[19px]">
              {vehicle.subheadline}
            </p>
            {(activeVariant.notes || activeColor?.personality || activeColor?.tagline) && (
              <div className="mt-5 max-w-[42rem] rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md md:px-5">
                {activeColor && (
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
                    Selected Finish: {activeColor.name}
                    {(activeColor.personality || activeColor.tagline) && ` / ${activeColor.personality || activeColor.tagline}`}
                  </p>
                )}
                {activeVariant.notes && (
                  <p className="mt-2 text-sm leading-relaxed text-white/66">{activeVariant.notes}</p>
                )}
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3 md:gap-4 xl:mt-12">
              {statItems.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[148px] rounded-[24px] border border-white/12 bg-white/6 px-4 py-3.5 backdrop-blur-md md:min-w-[176px] md:px-5 md:py-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/48">{stat.label}</p>
                  <motion.p
                    key={`${activeVariant.name}-${stat.label}-${stat.value}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 font-display text-2xl font-bold text-white md:text-3xl"
                  >
                    {stat.value}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:items-stretch">
            {variants.length > 1 && (
              <div className="flex flex-wrap gap-2 rounded-[28px] border border-white/10 bg-black/28 p-2 backdrop-blur-xl">
                {variants.map((variant) => {
                  const isActive = variant.name === activeVariant.name

                  return (
                    <button
                      key={variant.name}
                      type="button"
                      onClick={() => setActiveName(variant.name)}
                      className={`rounded-full px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition md:px-5 ${
                        isActive
                          ? 'bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.22)]'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {variant.name}
                    </button>
                  )
                })}
              </div>
            )}

            {availableColors.length > 0 && (
              <VehicleColorSelector
                colors={availableColors}
                modelName={vehicle.name}
                layout="compact"
                activeName={activeColor?.name}
                onChange={setActiveColorName}
              />
            )}

            <div className="w-full rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur-2xl md:p-6">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/48">Starting At</p>
                  <p className="mt-2 font-display text-3xl font-bold text-[#FF5A4E]">
                    {activeVariant.priceLabel ?? vehicle.price}
                  </p>
                  {activeVariant.battery && (
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/52">
                      Battery: <span className="text-white/78">{activeVariant.battery}</span>
                    </p>
                  )}
                  {vehicle.priceNote && (
                    <p className="mt-2 max-w-md text-xs leading-relaxed text-white/48">{vehicle.priceNote}</p>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href={primaryHref} className="btn-primary min-w-[170px] text-xs">
                    {isPreBook ? vehicle.primaryCta : isAvailable ? 'Book Test Ride' : vehicle.primaryCta}
                  </Link>
                  <a
                    href={`https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20the%20Ultraviolette%20${encodeURIComponent(activeVariant.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost min-w-[140px] text-xs"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
