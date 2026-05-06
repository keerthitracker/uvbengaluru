'use client'

import { useMemo, useState } from 'react'
import VehicleImage from '@/components/VehicleImage'
import { getVehicleImageFrameClass, getVehicleImageObjectClass } from '@/lib/vehicleImagePresentation'
import type { VehicleGalleryItem } from '@/lib/vehicles'

interface VehicleGalleryExperienceProps {
  items: VehicleGalleryItem[]
  modelName: string
}

export default function VehicleGalleryExperience({ items, modelName }: VehicleGalleryExperienceProps) {
  const galleryItems = useMemo(() => items.filter((item) => item.src), [items])
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = galleryItems[activeIndex] ?? galleryItems[0]

  if (!activeItem) return null

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className={`group relative min-h-[360px] overflow-hidden rounded-[6px] border border-[#2A2A2A] md:min-h-[560px] ${getVehicleImageFrameClass(activeItem.src)}`}>
        <VehicleImage
          src={activeItem.src}
          alt={activeItem.alt}
          label={activeItem.alt}
          fill
          className={`${getVehicleImageObjectClass(activeItem.src)} transition duration-700 group-hover:scale-[1.035]`}
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FF3B3B]">
            {String(activeItem.type).replace(/-/g, ' ')}
          </p>
          <h3 className="font-display text-2xl font-bold uppercase tracking-[0.06em] text-white md:text-4xl">
            {activeItem.alt}
          </h3>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {galleryItems.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={`${item.type}-${item.src}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group overflow-hidden rounded-[6px] border text-left transition ${
                isActive ? 'border-[#FF3B3B] bg-[#1A1A1A]' : 'border-[#2A2A2A] bg-[#111] hover:border-[#777]'
              }`}
            >
              <div className={`relative aspect-video ${getVehicleImageFrameClass(item.src)}`}>
                <VehicleImage
                  src={item.src}
                  alt={item.alt}
                  label={item.alt}
                  fill
                  className={`${getVehicleImageObjectClass(item.src)} transition duration-500 group-hover:scale-[1.04]`}
                  sizes="(max-width: 1024px) 33vw, 280px"
                />
              </div>
              <div className="p-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777]">
                  {modelName} / {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </p>
                <p className="line-clamp-2 text-sm font-semibold text-white">{item.alt}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
