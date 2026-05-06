const PRODUCT_IMAGE_MARKERS = [
  '/card-side.',
  '/vehicles/x47/hero.png',
  '/vehicles/x47-desert-wing/hero.png',
  '/vehicles/shockwave/hero.png',
  '/colors/',
  '/tesseract/card-side.png',
  '/shockwave/side-profile.png',
]

const DARK_IMAGE_MARKERS = [
  '/vehicles/tesseract/hero.png',
  '/vehicles/shockwave/colors/',
  '/vehicles/f77-space-edition/',
  '/gallery/',
  '/features/',
  '/details/',
  '/racing/',
]

export function getVehicleImageFrameClass(src: string, fallback: 'light' | 'dark' = 'dark') {
  if (!src) return fallback === 'light' ? 'bg-[#F4F4F2]' : 'bg-[#111]'

  if (DARK_IMAGE_MARKERS.some((marker) => src.includes(marker))) {
    return 'bg-[#111]'
  }

  if (PRODUCT_IMAGE_MARKERS.some((marker) => src.includes(marker))) {
    return 'bg-[#F4F4F2]'
  }

  return fallback === 'light' ? 'bg-[#F4F4F2]' : 'bg-[#111]'
}

export function getVehicleImageObjectClass(src: string, intent: 'product' | 'media' = 'media') {
  const isProduct = PRODUCT_IMAGE_MARKERS.some((marker) => src.includes(marker))

  if (intent === 'product' || isProduct) {
    return 'object-contain p-8'
  }

  return 'object-cover'
}
