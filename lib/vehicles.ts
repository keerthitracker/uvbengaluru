export type VehicleStatus = 'available' | 'pre-book'

export interface VehicleColor {
  name: string
  hex: string
}

export interface VehicleSpec {
  label: string
  value: string
}

export interface Vehicle {
  slug: string
  name: string
  tagline: string
  status: VehicleStatus
  availableFrom?: string
  price: string
  image: string
  colors: VehicleColor[]
  specs: VehicleSpec[]
  description: string
}

const CDN = 'https://d2atk76x06g5eh.cloudfront.net/website/india/navbar/vehicles'

export const vehicles: Vehicle[] = [
  {
    slug: 'x-47',
    name: 'X-47',
    tagline: 'Multi-terrain crossover — radar-equipped, 323 km IDC range',
    status: 'available',
    price: 'From ₹3.49 Lakh',
    image: `${CDN}/x47.png`,
    colors: [
      { name: 'Stealth Black', hex: '#1A1A1A' },
      { name: 'Arctic White',  hex: '#F0F0F0' },
      { name: 'Desert Sand',   hex: '#C4A882' },
    ],
    specs: [
      { label: 'Range (IDC)',        value: '323 km' },
      { label: 'Peak Power',         value: '30 kW / 40.2 hp' },
      { label: 'Top Speed',          value: '135 km/h' },
      { label: '0–60 km/h',          value: '2.9 s' },
      { label: 'Battery',            value: '10.3 kWh' },
      { label: 'Battery Warranty',   value: '8 years' },
      { label: 'Charging',           value: 'DC Fast / AC' },
      { label: 'Weight',             value: '218 kg' },
    ],
    description:
      'The X-47 redefines what a crossover electric can do — multi-terrain capability, HyperSense radar, and 323 km of real-world range. Built for riders who refuse to be defined by a single road.',
  },
  {
    slug: 'x-47-desert-wing',
    name: 'X-47 Desert Wing',
    tagline: 'Off-road variant with long-travel suspension and desert tuning',
    status: 'available',
    price: 'Enquire for pricing',
    image: `${CDN}/x47.png`,
    colors: [
      { name: 'Dune Orange', hex: '#C4621A' },
      { name: 'Dust Beige',  hex: '#C4A882' },
    ],
    specs: [
      { label: 'Range (IDC)',        value: '300 km' },
      { label: 'Peak Power',         value: '30 kW / 40.2 hp' },
      { label: 'Top Speed',          value: '130 km/h' },
      { label: '0–60 km/h',          value: '3.1 s' },
      { label: 'Battery',            value: '10.3 kWh' },
      { label: 'Battery Warranty',   value: '8 years' },
      { label: 'Suspension',         value: 'Long-travel off-road' },
      { label: 'Weight',             value: '222 kg' },
    ],
    description:
      "The Desert Wing pushes beyond paved limits. With long-travel suspension, off-road tyre compatibility, and terrain-specific riding modes, it's the X-47 taken to its extreme.",
  },
  {
    slug: 'f77-superstreet',
    name: 'F77 Superstreet',
    tagline: 'Urban sport performance — built for Bengaluru streets',
    status: 'available',
    price: 'Enquire for pricing',
    image: `${CDN}/superstreet_2.png`,
    colors: [
      { name: 'Matte Black', hex: '#1A1A1A' },
      { name: 'Racing Red',  hex: '#E8231A' },
    ],
    specs: [
      { label: 'Range (IDC)',        value: '307 km' },
      { label: 'Peak Power',         value: '27 kW' },
      { label: 'Top Speed',          value: '155 km/h' },
      { label: '0–60 km/h',          value: '2.8 s' },
      { label: 'Battery',            value: '10.3 kWh' },
      { label: 'Battery Warranty',   value: '8 years' },
      { label: 'Riding Modes',       value: 'Eco / Sport / Ludicrous' },
      { label: 'Weight',             value: '207 kg' },
    ],
    description:
      "Built for Bengaluru's streets. Razor-sharp handling, instant torque delivery, and a silhouette that commands every lane. The F77 Superstreet is urban performance distilled.",
  },
  {
    slug: 'f77-mach-2',
    name: 'F77 Mach 2',
    tagline: "Ultraviolette's performance flagship — 155+ km/h top speed",
    status: 'available',
    price: 'From ₹3.99 Lakh',
    image: `${CDN}/mach_2_dummy.png`,
    colors: [
      { name: 'Carbon Black', hex: '#111111' },
      { name: 'Storm White',  hex: '#ECECEC' },
      { name: 'Plasma Blue',  hex: '#1A3A5C' },
    ],
    specs: [
      { label: 'Range (IDC)',        value: '307 km' },
      { label: 'Peak Power',         value: '38.5 kW / 51.6 hp' },
      { label: 'Top Speed',          value: '155+ km/h' },
      { label: '0–60 km/h',          value: '2.7 s' },
      { label: 'Battery',            value: '10.3 kWh' },
      { label: 'Battery Warranty',   value: '8 years' },
      { label: 'Riding Modes',       value: 'Eco / Sport / Ludicrous / Track' },
      { label: 'Weight',             value: '207 kg' },
    ],
    description:
      "Ultraviolette's performance crown. Aerospace-grade chassis, 155+ km/h top speed, and riding modes tuned for the track and the street. The Mach 2 is not a vehicle — it's a statement.",
  },
  {
    slug: 'tesseract',
    name: 'Tesseract',
    tagline: 'Next-generation hyperbike — arriving Q2 2026',
    status: 'pre-book',
    availableFrom: 'Q2 2026',
    price: 'Pre-book now',
    image: `${CDN}/x47.png`,
    colors: [
      { name: 'Void Black', hex: '#050505' },
    ],
    specs: [
      { label: 'Status',   value: 'Pre-production' },
      { label: 'Delivery', value: 'Q2 2026' },
    ],
    description:
      "The Tesseract represents Ultraviolette's vision for the next dimension of electric performance. Pre-book now to secure your allocation.",
  },
  {
    slug: 'shockwave',
    name: 'Shockwave',
    tagline: 'High-performance track-focused electric — arriving Q1 2026',
    status: 'pre-book',
    availableFrom: 'Q1 2026',
    price: 'Pre-book now',
    image: `${CDN}/mach_2_dummy.png`,
    colors: [
      { name: 'Thunderstrike Yellow', hex: '#F5C518' },
      { name: 'Stealth Black',        hex: '#1A1A1A' },
    ],
    specs: [
      { label: 'Status',   value: 'Pre-production' },
      { label: 'Delivery', value: 'Q1 2026' },
    ],
    description:
      'Shockwave brings circuit-born engineering to the street. A track-focused electric designed to redefine what fast feels like. Pre-book to be among the first.',
  },
]

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug)
}

export function getAvailableVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.status === 'available')
}

export function getPreBookVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.status === 'pre-book')
}
