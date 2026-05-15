'use client'

import { useState } from 'react'
import type { VehicleVariant } from '@/lib/vehicles'

interface VehicleVariantExplorerProps {
  variants: VehicleVariant[]
}

const variantSpecRows: Array<[string, keyof VehicleVariant]> = [
  ['Battery', 'battery'],
  ['Range', 'range'],
  ['Power', 'power'],
  ['Torque', 'torque'],
  ['0-60 km/h', 'acceleration'],
  ['Top Speed', 'topSpeed'],
]

export default function VehicleVariantExplorer({ variants }: VehicleVariantExplorerProps) {
  const [activeName, setActiveName] = useState(variants[0]?.name ?? '')
  const activeVariant = variants.find((variant) => variant.name === activeName) ?? variants[0]

  if (!activeVariant) return null

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8">
      <div className="grid gap-2">
        {variants.map((variant, index) => {
          const isActive = variant.name === activeVariant.name

          return (
            <button
              key={variant.name}
              type="button"
              onClick={() => setActiveName(variant.name)}
              className={`rounded-[24px] border p-5 text-left transition ${
                isActive ? 'border-[#FF3B3B] bg-[#241010]' : 'border-white/8 bg-white/[0.03] hover:border-[#777]'
              }`}
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                Configuration {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
              <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-white">{variant.name}</p>
              {variant.priceLabel && <p className="mt-1 text-sm font-bold text-[#FF3B3B]">{variant.priceLabel}</p>}
            </button>
          )
        })}
      </div>

      <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#E8231A]/15 blur-[80px]" />
        <div className="relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">Selected Configuration</p>
          <h3 className="font-display mb-2 text-4xl font-extrabold uppercase tracking-[0.06em] text-white">
            {activeVariant.name}
          </h3>
          {activeVariant.priceLabel && <p className="mb-8 text-2xl font-bold text-white">{activeVariant.priceLabel}</p>}

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {variantSpecRows.map(([label, key]) => {
              const value = activeVariant[key]
              if (!value) return null

              return (
                <div key={label} className="rounded-[22px] border border-white/8 bg-black/20 p-4">
                  <p className="font-display text-xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#777]">{label}</p>
                </div>
              )
            })}
          </div>

          {activeVariant.highlights && activeVariant.highlights.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#777]">
                Configuration Highlights
              </p>
              <div className="flex flex-wrap gap-2">
                {activeVariant.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/8 bg-black/20 px-3 py-1 text-[11px] font-medium text-[#D6D6D6]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeVariant.notes && (
            <p className="mt-6 border-l-2 border-[#FF3B3B] pl-4 text-sm leading-relaxed text-[#A0A0A0]">
              {activeVariant.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
