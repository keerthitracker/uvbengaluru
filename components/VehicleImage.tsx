'use client'

import Image from 'next/image'
import { useState } from 'react'

interface VehicleImageProps {
  src: string
  alt: string
  label: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
}

export default function VehicleImage({
  src,
  alt,
  label,
  fill,
  width,
  height,
  priority,
  className,
  sizes,
}: VehicleImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className="relative flex h-full min-h-[180px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_46%,rgba(232,35,26,0.22),transparent_34%),linear-gradient(135deg,#090909,#1A1A1A_48%,#050505)] p-8 text-center">
        <div className="absolute left-1/2 top-1/2 h-[38%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF3B3B]/20 bg-black/20 blur-[1px]" />
        <div className="absolute bottom-[26%] left-1/2 h-[2px] w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF3B3B]/45 to-transparent" />
        <div className="relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF3B3B]">Ultraviolette</p>
          <p className="mt-3 font-display text-2xl font-extrabold uppercase tracking-[0.08em] text-white">{label}</p>
        </div>
      </div>
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        sizes={sizes}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      className={className}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  )
}
