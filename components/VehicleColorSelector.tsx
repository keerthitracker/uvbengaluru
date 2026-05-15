'use client'

import { useState } from 'react'
import VehicleImage from '@/components/VehicleImage'
import { getVehicleImageFrameClass } from '@/lib/vehicleImagePresentation'
import type { VehicleColor } from '@/lib/vehicles'

interface VehicleColorSelectorProps {
  colors: VehicleColor[]
  modelName: string
  layout?: 'default' | 'hero' | 'compact'
  activeName?: string
  onChange?: (name: string) => void
}

export default function VehicleColorSelector({
  colors,
  modelName,
  layout = 'default',
  activeName: controlledActiveName,
  onChange,
}: VehicleColorSelectorProps) {
  const [internalActiveName, setInternalActiveName] = useState(colors[0]?.name ?? '')
  const activeName = controlledActiveName ?? internalActiveName
  const activeColor = colors.find((color) => color.name === activeName) ?? colors[0]

  const handleSelect = (name: string) => {
    if (controlledActiveName === undefined) {
      setInternalActiveName(name)
    }

    onChange?.(name)
  }

  if (!activeColor) return null

  if (layout === 'compact') {
    return (
      <div className="rounded-[28px] border border-white/10 bg-black/28 p-4 backdrop-blur-2xl md:p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">Available Colours</p>
            <h3 className="font-display mt-2 text-xl font-bold uppercase tracking-[0.08em] text-white md:text-2xl">
              {activeColor.name}
            </h3>
          </div>
          {(activeColor.personality || activeColor.tagline) && (
            <p className="max-w-[220px] text-sm leading-relaxed text-white/58 md:text-right">
              {activeColor.personality || activeColor.tagline}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {colors.map((color) => {
            const isActive = color.name === activeColor.name

            return (
              <button
                key={color.name}
                type="button"
                onClick={() => handleSelect(color.name)}
                className={`flex items-center gap-2 rounded-full border px-3.5 py-2 transition ${
                  isActive
                    ? 'border-white/45 bg-white text-black'
                    : 'border-white/10 bg-white/[0.04] text-white hover:border-white/25'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="block h-4 w-4 rounded-full border border-black/10"
                  style={{ background: color.hex }}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] md:text-[11px]">{color.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  if (layout === 'hero') {
    return (
      <div className={`overflow-hidden rounded-[6px] border border-[#2A2A2A] ${getVehicleImageFrameClass(activeColor.image, 'light')}`}>
        <div className="relative aspect-[4/3]">
          <VehicleImage
            src={activeColor.image}
            alt={`${modelName} in ${activeColor.name}`}
            label={`${modelName} - ${activeColor.name}`}
            fill
            className="object-contain p-8"
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
        </div>
        <div className="border-t border-[#2A2A2A] bg-[#111] p-4 md:p-5">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A0A0A0]">Available Colours</p>
              <h3 className="font-display mt-1 text-2xl font-bold uppercase tracking-[0.06em] text-white">{activeColor.name}</h3>
            </div>
            {(activeColor.personality || activeColor.tagline) && (
              <p className="max-w-[260px] text-right text-sm text-[#A0A0A0]">{activeColor.personality || activeColor.tagline}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => handleSelect(color.name)}
                className="flex items-center gap-2 rounded-[4px] border px-3 py-2 text-left transition-colors"
                style={{
                  borderColor: color.name === activeColor.name ? '#FF3B3B' : '#2A2A2A',
                  background: color.name === activeColor.name ? 'rgba(232,35,26,0.08)' : '#151515',
                }}
              >
                <span
                  aria-hidden="true"
                  className="block h-5 w-5 rounded-full border border-white/20"
                  style={{ background: color.hex }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-[6px] border border-[#2A2A2A] ${getVehicleImageFrameClass(activeColor.image, 'light')}`}>
        <VehicleImage
          src={activeColor.image}
          alt={`${modelName} in ${activeColor.name}`}
          label={`${modelName} - ${activeColor.name}`}
          fill
          className="object-contain p-8"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A0A0A0]">Available Colours</p>
        <h3 className="font-display mb-2 text-3xl font-bold uppercase tracking-[0.06em] text-white">{activeColor.name}</h3>
        {(activeColor.personality || activeColor.tagline) && (
          <p className="mb-6 text-sm text-[#A0A0A0]">{activeColor.personality || activeColor.tagline}</p>
        )}
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => handleSelect(color.name)}
              className="flex items-center gap-3 rounded-[4px] border px-3 py-2 text-left transition-colors"
              style={{
                borderColor: color.name === activeColor.name ? '#FF3B3B' : '#2A2A2A',
                background: color.name === activeColor.name ? 'rgba(232,35,26,0.08)' : '#151515',
              }}
            >
              <span
                aria-hidden="true"
                className="block h-6 w-6 rounded-full border border-white/20"
                style={{ background: color.hex }}
              />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white">{color.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
