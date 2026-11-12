export type VehicleStatus =
  | 'available'
  | 'pre-book'
  | 'register-interest'
  | 'enquiry-only'
  | 'story-only'

export type VehicleCategory =
  | 'street-crossover'
  | 'electric-motorcycle'
  | 'electric-scooter'
  | 'fun-bike'
  | 'racing-platform'
  | 'limited-edition-story'

export interface VehicleColor {
  name: string
  hex: string
  image: string
  heroImage?: string
  backdropImage?: string
  heroImageMode?: 'product' | 'lifestyle'
  personality?: string
  tagline?: string
}

export interface VehicleSpec {
  label: string
  value: string
}

export interface VehicleVariant {
  name: string
  priceLabel?: string
  battery?: string
  range?: string
  power?: string
  torque?: string
  topSpeed?: string
  acceleration?: string
  transparentImage?: string
  backdropImage?: string
  colorNames?: string[]
  highlights?: string[]
  notes?: string
}

export interface VehicleFeature {
  title: string
  description: string
  image?: string
  stats?: VehicleSpec[]
}

export interface VehicleGalleryItem {
  type:
    | 'hero'
    | 'side-profile'
    | 'front'
    | 'rear'
    | 'dashboard'
    | 'battery'
    | 'charging'
    | 'radar'
    | 'dashcam'
    | 'lifestyle'
    | 'detail'
    | 'color'
  alt: string
  src: string
}

export interface VehiclePriceRow {
  variant: string
  colour: string
  exShowroom: number
  offer: number
  effective: number
}

export interface VehiclePriceList {
  title: string
  offerLabel: string
  rows: VehiclePriceRow[]
}

export interface Vehicle {
  slug: string
  name: string
  category: VehicleCategory
  tagline: string
  subheadline: string
  status: VehicleStatus
  theme?: 'dark' | 'light'
  bRollVideo?: string
  heroBackdropImage?: string
  pagePriority: 'high' | 'medium' | 'low'
  availableFrom?: string
  price: string
  priceNote?: string
  priceList?: VehiclePriceList
  image: string
  cardImage: string
  heroImage: string
  primaryCta: string
  secondaryCta?: string
  colors: VehicleColor[]
  specs: VehicleSpec[]
  heroStats: VehicleSpec[]
  variants?: VehicleVariant[]
  specGroups: Array<{
    title: string
    specs: VehicleSpec[]
  }>
  features: VehicleFeature[]
  gallery: VehicleGalleryItem[]
  description: string
  sourceRefs: string[]
  dealerVerificationRequired?: string[]
}

const asset = (path: string) => `/assets/${path}`

export const vehicles: Vehicle[] = [
  {
    slug: 'x-47-venom',
    name: 'X-47 Venom',
    category: 'street-crossover',
    tagline: 'Cross over to your wild side.',
    subheadline:
      'The X-47 crossover rebuilt on the next-gen VX-100 100V platform, with 155 km/h top speed, up to 343 km IDC range, an 11 kWh battery option, and radar intelligence on Recon variants.',
    status: 'available',
    theme: 'dark',
    heroBackdropImage: asset('vehicles/x47-venom/backdrop.webp'),
    pagePriority: 'high',
    price: 'From INR 2,65,000',
    priceNote:
      'Effective ex-showroom price in Karnataka after the Carbon Farewell Fund offer of INR 35,000. Price varies by colour; see the full price list below.',
    priceList: {
      title: 'X-47 Venom price list - Karnataka',
      offerLabel: 'Carbon Farewell Fund offer',
      rows: [
        { variant: 'X-47 Venom Original', colour: 'Cosmic Black', exShowroom: 300000, offer: 35000, effective: 265000 },
        { variant: 'X-47 Venom Original', colour: 'Turbo Red', exShowroom: 304500, offer: 35000, effective: 269500 },
        { variant: 'X-47 Venom Original', colour: 'Afterburner Yellow', exShowroom: 312500, offer: 35000, effective: 277500 },
        { variant: 'X-47 Venom Original+', colour: 'Cosmic Black', exShowroom: 350000, offer: 35000, effective: 315000 },
        { variant: 'X-47 Venom Original+', colour: 'Turbo Red', exShowroom: 354500, offer: 35000, effective: 319500 },
        { variant: 'X-47 Venom Original+', colour: 'Afterburner Yellow', exShowroom: 362500, offer: 35000, effective: 327500 },
        { variant: 'X-47 Venom Recon', colour: 'Cosmic Black', exShowroom: 410000, offer: 35000, effective: 375000 },
        { variant: 'X-47 Venom Recon', colour: 'Turbo Red', exShowroom: 414500, offer: 35000, effective: 379500 },
        { variant: 'X-47 Venom Recon', colour: 'Stellar White', exShowroom: 417500, offer: 35000, effective: 382500 },
        { variant: 'X-47 Venom Recon', colour: 'Afterburner Yellow', exShowroom: 422500, offer: 35000, effective: 387500 },
        { variant: 'X-47 Venom Recon+', colour: 'Cosmic Black', exShowroom: 434900, offer: 35000, effective: 399900 },
        { variant: 'X-47 Venom Recon+', colour: 'Turbo Red', exShowroom: 439400, offer: 35000, effective: 404400 },
        { variant: 'X-47 Venom Recon+', colour: 'Stellar White', exShowroom: 442400, offer: 35000, effective: 407400 },
        { variant: 'X-47 Venom Recon+', colour: 'Afterburner Yellow', exShowroom: 447400, offer: 35000, effective: 412400 },
      ],
    },
    image: asset('vehicles/x47-venom/colors/turbo-red-cutout.webp'),
    cardImage: asset('vehicles/x47-venom/colors/turbo-red-cutout.webp'),
    heroImage: asset('vehicles/x47-venom/colors/turbo-red-cutout.webp'),
    primaryCta: 'Book your X-47 Venom',
    secondaryCta: 'Book test ride',
    colors: [
      {
        name: 'Turbo Red',
        hex: '#E8231A',
        image: asset('vehicles/x47-venom/colors/turbo-red.webp'),
        heroImage: asset('vehicles/x47-venom/colors/turbo-red-cutout.webp'),
        backdropImage: asset('vehicles/x47-venom/backdrop.webp'),
      },
      {
        name: 'Cosmic Black',
        hex: '#111111',
        image: asset('vehicles/x47-venom/colors/cosmic-black.webp'),
        heroImage: asset('vehicles/x47-venom/colors/cosmic-black-cutout.webp'),
        backdropImage: asset('vehicles/x47-venom/backdrop.webp'),
      },
      {
        name: 'Stellar White',
        hex: '#F2F2F0',
        image: asset('vehicles/x47-venom/colors/stellar-white.webp'),
        heroImage: asset('vehicles/x47-venom/gallery/final-banner.webp'),
        backdropImage: asset('vehicles/x47-venom/gallery/final-banner.webp'),
        heroImageMode: 'lifestyle',
        tagline: 'Recon variants only',
      },
      {
        name: 'Afterburner Yellow',
        hex: '#F5C518',
        image: asset('vehicles/x47-venom/colors/afterburner-yellow.webp'),
        heroImage: asset('vehicles/x47-venom/colors/afterburner-yellow-cutout.webp'),
        backdropImage: asset('vehicles/x47-venom/backdrop.webp'),
      },
    ],
    heroStats: [
      { label: 'Peak Power', value: '30 kW / 40 hp' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: 'Wheel Torque', value: '550 Nm' },
      { label: '0-100 km/h', value: '5.9 sec' },
      { label: 'IDC Range', value: '227-343 km' },
    ],
    specs: [
      { label: 'Range (IDC)', value: '227-343 km' },
      { label: 'Peak Power', value: '30 kW / 40 hp' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: '0-100 km/h', value: '5.9 sec' },
      { label: 'Battery', value: '7.5 kWh / 11 kWh' },
      { label: 'Wheel Torque', value: '550 Nm' },
      { label: 'Seat Height', value: '820 mm' },
      { label: 'Ground Clearance', value: '200 mm' },
    ],
    variants: [
      {
        name: 'X-47 Venom Original',
        priceLabel: 'From INR 2,65,000',
        battery: '7.5 kWh',
        range: '227 km IDC',
        power: '30 kW / 40 hp',
        torque: '550 Nm',
        acceleration: '2.7 sec',
        topSpeed: '155 km/h',
        colorNames: ['Cosmic Black', 'Turbo Red', 'Afterburner Yellow'],
        highlights: [
          'SRB-7.5 high-voltage 100V battery',
          'Portable standard charger (1.3 kW)',
          '3 years / 60,000 km battery warranty (UV Care)',
          '3-level dynamic regen',
          'Traction control on/off',
          'Dual-channel ABS',
          'Standard connectivity (Wi-Fi + Bluetooth)',
          'Hill hold, park assist, dynamic stability control',
        ],
        notes: 'Base X-47 Venom configuration. UV Hypersense radar and cruise control are not included on this variant.',
      },
      {
        name: 'X-47 Venom Original+',
        priceLabel: 'From INR 3,15,000',
        battery: '7.5 kWh',
        range: '227 km IDC',
        power: '30 kW / 40 hp',
        torque: '550 Nm',
        acceleration: '2.7 sec',
        topSpeed: '155 km/h',
        colorNames: ['Cosmic Black', 'Turbo Red', 'Afterburner Yellow'],
        highlights: [
          'On-board charger (1.6 kW)',
          '5 years / 1,00,000 km battery warranty (UV Care+)',
          '10-level dynamic regen',
          '4-level traction control',
          'Mono and dual-channel switchable ABS',
          'Cruise control',
          'Premium connectivity (LTE + Wi-Fi + Bluetooth)',
          'On-board navigation and Find My X-47',
        ],
      },
      {
        name: 'X-47 Venom Recon',
        priceLabel: 'From INR 3,75,000',
        battery: '11 kWh',
        range: '343 km IDC',
        power: '30 kW / 40 hp',
        torque: '550 Nm',
        acceleration: '2.7 sec',
        topSpeed: '155 km/h',
        colorNames: ['Cosmic Black', 'Turbo Red', 'Stellar White', 'Afterburner Yellow'],
        highlights: [
          'SRB-11 high-voltage 100V battery',
          'UV Hypersense radar tech',
          'Integrated front dashcam and rear park-assist camera',
          'Portable standard charger (1.3 kW)',
          '5 years / 1,00,000 km battery warranty (UV Care+)',
          '10-level dynamic regen and 4-level traction control',
          'Cruise control',
          'Premium connectivity (LTE + Wi-Fi + Bluetooth)',
          'Crash protection: knuckle guard + bullbar',
        ],
      },
      {
        name: 'X-47 Venom Recon+',
        priceLabel: 'From INR 3,99,900',
        battery: '11 kWh',
        range: '343 km IDC',
        power: '30 kW / 40 hp',
        torque: '550 Nm',
        acceleration: '2.7 sec',
        topSpeed: '155 km/h',
        colorNames: ['Cosmic Black', 'Turbo Red', 'Stellar White', 'Afterburner Yellow'],
        highlights: [
          'SRB-11 high-voltage 100V battery',
          'UV Hypersense radar tech',
          'Integrated front + rear dashcam and park-assist camera',
          'On-board charger (1.6 kW)',
          '5 years / 1,00,000 km battery warranty (UV Care+)',
          '10-level dynamic regen and 4-level traction control',
          'Cruise control',
          'Violette A.I. included',
          'TPMS',
          'Crash protection: knuckle guard + bullbar',
        ],
      },
    ],
    specGroups: [
      {
        title: 'Performance',
        specs: [
          { label: 'Platform', value: 'VX-100 next-gen 100V' },
          { label: 'Battery Packs', value: 'SRB-7.5 / SRB-11' },
          { label: 'Energy Capacity', value: '7.5 kWh / 11 kWh' },
          { label: 'Peak Motor Torque', value: '90 Nm' },
          { label: 'Rear Wheel Torque', value: '550 Nm' },
          { label: '0-60 km/h', value: '2.7 sec' },
          { label: '0-100 km/h', value: '5.9 sec' },
          { label: 'Ride Modes', value: 'Glide, Combat, Ballistic' },
        ],
      },
      {
        title: 'Radar And Safety',
        specs: [
          { label: 'Radar System', value: 'UV Hypersense (Recon variants)' },
          { label: 'Radar Frequency', value: 'Gen 6 77 GHz long-range radar' },
          { label: 'Monitoring Distance', value: 'Around 200 m' },
          { label: 'Radar Alerts', value: 'Rear collision warning, lane change assist, overtake alert, blindspot detection' },
          { label: 'ABS', value: 'Dual-channel; mono/dual switchable on higher variants' },
          { label: 'Traction Control', value: 'On/off; 4 levels on higher variants' },
          { label: 'Dynamic Regen', value: '3 levels; 10 levels on higher variants' },
          { label: 'Rider Aids', value: 'Dynamic stability control, hill hold, park assist' },
          { label: 'Battery Safety', value: 'Patented 6-level safety system, IP67 aluminium enclosure' },
        ],
      },
      {
        title: 'Charging',
        specs: [
          { label: 'Charging Port', value: 'IEC 62196-6' },
          { label: 'Standard / On-board Charger', value: '20-80% in 3 hr 45 min (7.5 kWh) / 5 hr 30 min (11 kWh)' },
          { label: 'Boost Charger (3 kW)', value: '20-80% in 1 hr 50 min (7.5 kWh) / 2 hr 45 min (11 kWh)' },
          { label: 'Device Charging', value: '35W Type-C port' },
        ],
      },
      {
        title: 'Cockpit',
        specs: [
          { label: 'Display', value: '7-inch TFT LCD touchscreen, powered by Qualcomm' },
          { label: 'Operating System', value: 'Android OS' },
          { label: 'Navigation', value: 'On-board navigation on higher variants' },
        ],
      },
      {
        title: 'Mechanical',
        specs: [
          { label: 'Frame', value: 'Steel trellis with aluminium bulk head' },
          { label: 'Suspension', value: '41 mm USD fork; preload-adjustable monoshock' },
          { label: 'Brakes', value: '320 mm front disc, 230 mm rear disc with Bosch ABS' },
          { label: 'Tyres', value: '110/70 R17 front, 150/60 R17 rear (MRF Revz-AT 03)' },
          { label: 'Kerb Weight', value: '180 kg / 195 kg' },
          { label: 'Wheelbase', value: '1385 mm' },
          { label: 'Dimensions', value: '2060 x 867 x 1220 mm' },
          { label: 'Vehicle Warranty', value: '3 years / 30,000 km' },
        ],
      },
    ],
    features: [
      {
        title: 'VX-100 Platform And SRB-11 Battery',
        description:
          'A ground-up 100V platform with an 11 kWh battery option, tested for over 40 million km. Ultraviolette claims 25% more energy density, 2x faster charging, and 50% faster cooling.',
        image: asset('vehicles/x47-venom/features/battery.webp'),
      },
      {
        title: 'UV Hypersense Radar',
        description:
          'Gen 6 77 GHz radar on Recon variants supports rear collision warning, lane change assist, overtake alert, and blindspot detection at around 200 m.',
        image: asset('vehicles/x47-venom/features/radar.webp'),
      },
      {
        title: '7-inch Touchscreen Cockpit',
        description:
          'A Qualcomm-powered, IP67-rated 7-inch touchscreen with on-board navigation, 35W USB charging, and an integrated dual dashcam on higher variants.',
        image: asset('vehicles/x47-venom/features/dashcam.webp'),
      },
      {
        title: 'Cruise Control And Park Assist',
        description:
          'Cruise control, reverse park assist with a live rear-camera feed, switchable ABS, 4-level traction control, and 10-level dynamic regen, depending on variant.',
        image: asset('vehicles/x47-venom/features/park-assist.webp'),
      },
    ],
    gallery: [
      { type: 'hero', alt: 'Ultraviolette X-47 Venom in Afterburner Yellow', src: asset('vehicles/x47-venom/backdrop.webp') },
      { type: 'lifestyle', alt: 'Ultraviolette X-47 Venom in Stellar White', src: asset('vehicles/x47-venom/gallery/final-banner.webp') },
      { type: 'lifestyle', alt: 'Ultraviolette X-47 Venom at a campsite', src: asset('vehicles/x47-venom/gallery/go-beyond.webp') },
    ],
    description:
      'The X-47 Venom is built on the VX-100 next-gen platform and merges sport-like performance, street agility, and ADV capability, with 30 kW peak power, 550 Nm wheel torque, a 155 km/h top speed, and up to 343 km IDC range.',
    sourceRefs: ['S4'],
    dealerVerificationRequired: ['Current Bengaluru price and offer validity', 'Final on-road price', 'Test-ride and delivery timeline', 'Available colors by variant'],
  },
  {
    slug: 'f77-mach-2',
    name: 'F77 Mach 2',
    category: 'electric-motorcycle',
    tagline: 'Activate flight mode.',
    subheadline:
      'Aviation-derived electric performance with up to 40.2 hp, 100 Nm torque, 323 km IDC range, and a 155 km/h top speed.',
    status: 'available',
    pagePriority: 'high',
    price: 'From INR 3,09,000',
    priceNote: 'Indicative ex-showroom price. Please confirm the current Bengaluru ex-showroom and on-road price with UV Bengaluru.',
    image: asset('vehicles/f77-mach-2/card-side.png'),
    cardImage: asset('vehicles/f77-mach-2/card-side.png'),
    heroImage: asset('vehicles/f77-mach-2/card-side.png'),
    primaryCta: 'Configure',
    secondaryCta: 'Book test ride',
    colors: [
      { personality: 'Laser', name: 'Turbo Red', hex: '#E8231A', image: asset('vehicles/f77-mach-2/colors/turbo-red.png') },
      { personality: 'Laser', name: 'Plasma Red', hex: '#8E1612', image: asset('vehicles/f77-mach-2/colors/plasma-red.png') },
      { personality: 'Laser', name: 'Afterburner Yellow', hex: '#F5C518', image: asset('vehicles/f77-mach-2/colors/afterburner-yellow.png') },
      { personality: 'Shadow', name: 'Stealth Grey', hex: '#25282A', image: asset('vehicles/f77-mach-2/colors/stealth-grey.png') },
      { personality: 'Shadow', name: 'Asteroid Grey', hex: '#5B5D5F', image: asset('vehicles/f77-mach-2/colors/asteroid-grey.png') },
      { personality: 'Shadow', name: 'Cosmic Black', hex: '#070707', image: asset('vehicles/f77-mach-2/colors/cosmic-black.png') },
      { personality: 'Airstrike', name: 'Supersonic Silver', hex: '#C9CDD2', image: asset('vehicles/f77-mach-2/colors/supersonic-silver.png') },
      { personality: 'Airstrike', name: 'Stellar White', hex: '#F2F2F0', image: asset('vehicles/f77-mach-2/colors/stellar-white.png') },
      { personality: 'Airstrike', name: 'Lightning Blue', hex: '#2B6CB0', image: asset('vehicles/f77-mach-2/colors/lightning-blue.png') },
    ],
    heroStats: [
      { label: 'Peak Power', value: 'Up to 30 kW / 40.2 hp' },
      { label: 'Motor Torque', value: '90-100 Nm' },
      { label: 'IDC Range', value: '211-323 km' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: '0-60 km/h', value: '2.8-2.9 sec' },
    ],
    specs: [
      { label: 'Range (IDC)', value: '211-323 km' },
      { label: 'Peak Power', value: '27-30 kW / 36.2-40.2 hp' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: '0-60 km/h', value: '2.8-2.9 sec' },
      { label: 'Battery', value: '7.1 kWh / 10.3 kWh' },
      { label: 'Motor Torque', value: '90-100 Nm' },
      { label: 'Ride Modes', value: 'Glide, Combat, Ballistic' },
      { label: 'Kerb Weight', value: '197 kg / 207 kg' },
    ],
    variants: [
      {
        name: 'F77 Mach 2',
        priceLabel: 'From INR 3,09,000',
        battery: '7.1 kWh',
        range: '211 km IDC',
        power: '27 kW / 36.2 hp',
        torque: '90 Nm',
        acceleration: '2.9 sec',
        topSpeed: '155 km/h',
        highlights: [
          'SRB7 7.1 kWh battery',
          'Kerb weight 197 kg',
          '0-100 km/h in 7.8 sec',
          'Standard charger: 20-80% in 3 hr',
          'Boost charger: 20-80% in 1.5 hr',
        ],
      },
      {
        name: 'F77 Mach 2 Recon',
        priceLabel: 'From INR 3,99,000',
        battery: '10.3 kWh',
        range: '323 km IDC',
        power: '30 kW / 40.2 hp',
        torque: '100 Nm',
        acceleration: '2.8 sec',
        topSpeed: '155 km/h',
        highlights: [
          'SRB10 10.3 kWh battery',
          'Kerb weight 207 kg',
          '0-100 km/h in 7.7 sec',
          'Standard charger: 20-80% in 5 hr',
          'Boost charger: 20-80% in 2.5 hr',
        ],
      },
    ],
    specGroups: [
      {
        title: 'Performance',
        specs: [
          { label: 'Peak Power', value: '27 kW / 30 kW (Recon)' },
          { label: 'Net Power', value: '20 kW, ECE R85' },
          { label: 'Continuous Power', value: '9.5 kW at 3000 rpm, ECE R85' },
          { label: 'Peak Motor Torque', value: '90 Nm / 100 Nm (Recon)' },
          { label: '0-100 km/h', value: '7.8 sec / 7.7 sec (Recon)' },
          { label: 'Regenerative Braking', value: '10 levels / dynamic regen' },
        ],
      },
      {
        title: 'Battery And Charging',
        specs: [
          { label: 'Battery Pack', value: 'SRB7 / SRB10 (Recon)' },
          { label: 'Energy Capacity', value: '7.1 kWh / 10.3 kWh (Recon)' },
          { label: 'Enclosure', value: 'All-aluminium IP67-rated enclosure' },
          { label: 'Standard Charger', value: '1.3 kW, 20-80% in 3 hr / 5 hr (Recon)' },
          { label: 'Boost Charger', value: '3.0 kW, 20-80% in 1.5 hr / 2.5 hr (Recon)' },
          { label: 'DC Fast Charging', value: '20-80% in 45 min / 1 hr (Recon)' },
        ],
      },
      {
        title: 'Smart Tech And Safety',
        specs: [
          { label: 'Control Center', value: '5-inch TFT display with tactile input switch console' },
          { label: 'Operating System', value: 'UV Automotive Linux OS' },
          { label: 'Traction Control', value: '4 levels' },
          { label: 'Dynamic Stability Control', value: 'Included' },
          { label: 'Hill Hold', value: 'Included' },
          { label: 'ABS', value: 'Dual-channel ABS highlighted on product page' },
        ],
      },
      {
        title: 'Mechanical And Connectivity',
        specs: [
          { label: 'Motor', value: 'Permanent Magnet AC Motor' },
          { label: 'Frame', value: 'Steel trellis with aluminium bulk head' },
          { label: 'Suspension', value: '41 mm USD fork; preload-adjustable monoshock' },
          { label: 'Connectivity', value: 'LTE eSIM, GPS/GLONASS, Wi-Fi, Bluetooth 5/BLE' },
          { label: 'Wheelbase', value: '1340 mm' },
          { label: 'Ground Clearance', value: '160 mm' },
        ],
      },
    ],
    features: [
      {
        title: 'Aviation-Derived Drivetrain',
        description: 'The Recon configuration pairs 30 kW peak power with 100 Nm motor torque and a 155 km/h company-tested top speed.',
        image: asset('vehicles/f77-mach-2/features/battery.png'),
      },
      {
        title: 'Smart Ride Stack',
        description: 'Violette AI, dynamic regen, traction control, Hill Hold, Park Assist, Delta Watch, and connected ride analytics support daily and performance riding.',
        image: asset('vehicles/f77-mach-2/features/dashboard.png'),
      },
      {
        title: 'Charging Ecosystem',
        description: 'Standard, Boost, and UV Supernova/Supernova Plus DC charging options support everyday and intercity use.',
        image: asset('vehicles/f77-mach-2/features/charging.webp'),
      },
    ],
    gallery: [
      { type: 'side-profile', alt: 'F77 Mach 2 clean side profile', src: asset('vehicles/f77-mach-2/card-side.png') },
      { type: 'dashboard', alt: 'F77 Mach 2 dashboard', src: asset('vehicles/f77-mach-2/features/dashboard.png') },
      { type: 'charging', alt: 'F77 Mach 2 charging ecosystem', src: asset('vehicles/f77-mach-2/features/charging.webp') },
    ],
    description:
      'The F77 Mach 2 is the sport-focused F77 expression, combining aviation-derived electric performance, up to 323 km IDC range, connected smart tech, and 7.1 kWh or 10.3 kWh battery options.',
    sourceRefs: ['S4', 'S5', 'S6'],
    dealerVerificationRequired: ['Current India pricing', 'Applicable warranty package', 'Available colors'],
  },
  {
    slug: 'f77-superstreet',
    name: 'F77 SuperStreet',
    category: 'electric-motorcycle',
    tagline: 'Same ballistic DNA. More street-ready.',
    subheadline:
      'F77 performance tuned for everyday aggression, urban comfort, and real-world riding.',
    status: 'available',
    pagePriority: 'high',
    price: 'From INR 3,09,000',
    priceNote: 'Indicative ex-showroom price. Please confirm the current Bengaluru ex-showroom and on-road price with UV Bengaluru.',
    image: asset('vehicles/f77-superstreet/card-side.png'),
    cardImage: asset('vehicles/f77-superstreet/card-side.png'),
    heroImage: asset('vehicles/f77-superstreet/card-side.png'),
    primaryCta: 'Book test ride',
    secondaryCta: 'Register interest',
    colors: [
      { name: 'Turbo Red', hex: '#E8231A', image: asset('vehicles/f77-superstreet/colors/turbo-red.png') },
      { name: 'Afterburner Yellow', hex: '#F5C518', image: asset('vehicles/f77-superstreet/colors/afterburner-yellow.png') },
      { name: 'Stellar White', hex: '#F2F2F0', image: asset('vehicles/f77-superstreet/colors/stellar-white.png') },
      { name: 'Cosmic Black', hex: '#070707', image: asset('vehicles/f77-superstreet/colors/cosmic-black.png') },
    ],
    heroStats: [
      { label: 'Peak Power', value: 'Up to 30 kW / 40.2 hp' },
      { label: 'Motor Torque', value: '90-100 Nm' },
      { label: 'IDC Range', value: '211-323 km' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: 'Battery', value: '7.1 / 10.3 kWh' },
    ],
    specs: [
      { label: 'Range (IDC)', value: '211-323 km' },
      { label: 'Peak Power', value: '27-30 kW / 36.2-40.2 hp' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: '0-60 km/h', value: '2.8-2.9 sec' },
      { label: 'Battery', value: '7.1 kWh / 10.3 kWh' },
      { label: 'Motor Torque', value: '90-100 Nm' },
      { label: 'Ride Modes', value: 'Glide, Combat, Ballistic' },
      { label: 'Dynamic Regen', value: '10 levels on Recon/spec configuration' },
    ],
    variants: [
      {
        name: 'F77 SuperStreet',
        priceLabel: 'From INR 3,09,000',
        battery: '7.1 kWh',
        range: '211 km IDC',
        power: '27 kW / 36.2 hp',
        torque: '90 Nm',
        acceleration: '2.9 sec',
        topSpeed: '155 km/h',
        highlights: [
          'SRB7 7.1 kWh battery',
          'Kerb weight 197 kg',
          '0-100 km/h in 7.8 sec',
          'Standard charger: 20-80% in 3 hr',
          'Boost charger: 20-80% in 1.5 hr',
        ],
      },
      {
        name: 'F77 SuperStreet Recon',
        priceLabel: 'From INR 3,99,000',
        battery: '10.3 kWh',
        range: '323 km IDC',
        power: '30 kW / 40.2 hp',
        torque: '100 Nm',
        acceleration: '2.8 sec',
        topSpeed: '155 km/h',
        highlights: [
          'SRB10 10.3 kWh battery',
          'Kerb weight 207 kg',
          '0-100 km/h in 7.7 sec',
          'Standard charger: 20-80% in 5 hr',
          'Boost charger: 20-80% in 2.5 hr',
        ],
      },
    ],
    specGroups: [
      {
        title: 'Shared F77 Platform',
        specs: [
          { label: 'Peak Power', value: '27 kW / 30 kW (Recon)' },
          { label: 'Peak Motor Torque', value: '90 Nm / 100 Nm (Recon)' },
          { label: '0-100 km/h', value: '7.8 sec / 7.7 sec (Recon)' },
          { label: 'Kerb Weight', value: '197 kg / 207 kg (Recon)' },
          { label: 'Top Speed', value: '155 km/h' },
          { label: 'Battery', value: '7.1 kWh; 10.3 kWh on Recon' },
          { label: 'Traction Control', value: '4 levels' },
          { label: 'ABS', value: 'Dual-channel ABS highlighted on product page' },
        ],
      },
      {
        title: 'Street Focus',
        specs: [
          { label: 'Positioning', value: 'More upright, everyday-friendly F77 performance platform' },
          { label: 'Charging', value: 'Standard 1.3 kW, Boost 3.0 kW, Supernova/Supernova Plus DC network' },
          { label: 'Warranty Claim', value: 'Up to 1,00,000 km battery warranty' },
        ],
      },
    ],
    features: [
      {
        title: 'Street-Ready Ergonomics',
        description: 'SuperStreet keeps F77 performance while presenting a more accessible everyday riding posture for urban use.',
      },
      {
        title: 'F77 Performance Core',
        description: 'Up to 40.2 hp, 100 Nm torque, 323 km IDC range, and a 155 km/h top speed keep it firmly in the F77 performance family.',
        image: asset('vehicles/f77-superstreet/card-side.png'),
      },
    ],
    gallery: [
      { type: 'side-profile', alt: 'F77 SuperStreet clean side profile', src: asset('vehicles/f77-superstreet/card-side.png') },
    ],
    description:
      'The F77 SuperStreet is the street-friendly interpretation of the F77 platform, built for riders who want the same ballistic electric DNA with everyday urban comfort.',
    sourceRefs: ['S5', 'S6', 'S13', 'S14'],
    dealerVerificationRequired: ['Current SuperStreet price', 'Available colors', 'Test ride availability'],
  },
  {
    slug: 'tesseract',
    name: 'Tesseract',
    category: 'electric-scooter',
    tagline: "The world's most advanced electric scooter.",
    subheadline:
      'Radar intelligence, smart dashcam, ARAS 360 awareness, long range, fast charging, and everyday convenience in one futuristic scooter.',
    status: 'pre-book',
    pagePriority: 'medium',
    price: 'From INR 1,45,000 (indicative)',
    priceNote: 'Indicative pre-launch price published by Ultraviolette. Final price, variants, and specifications may change once the Tesseract is officially launched.',
    image: asset('vehicles/tesseract/hero.png'),
    cardImage: asset('vehicles/tesseract/card-side.png'),
    heroImage: asset('vehicles/tesseract/hero.png'),
    primaryCta: 'Pre-book',
    secondaryCta: 'Register interest',
    colors: [
      { name: 'Desert Sand', hex: '#C4A882', image: asset('vehicles/tesseract/colors/desert-sand.png') },
      { name: 'Solar White', hex: '#F4F4F0', image: asset('vehicles/tesseract/colors/solar-white.png') },
      { name: 'Stealth Black', hex: '#050505', image: asset('vehicles/tesseract/colors/stealth-black.png') },
      { name: 'Sonic Pink', hex: '#F064A6', image: asset('vehicles/tesseract/colors/sonic-pink.png') },
    ],
    heroStats: [
      { label: 'IDC Range', value: 'Up to 261 km' },
      { label: 'Power', value: 'Up to 20 hp' },
      { label: 'Top Speed', value: 'Up to 125 km/h' },
      { label: 'Fast Charging', value: '<30 min 20-80%' },
      { label: 'Display', value: '7-inch TFT' },
    ],
    specs: [
      { label: 'Status', value: 'Pre-book' },
      { label: 'Range (IDC)', value: 'Up to 261 km' },
      { label: 'Power', value: 'Up to 20 hp' },
      { label: 'Top Speed', value: 'Up to 125 km/h' },
      { label: 'Battery', value: 'Up to 6 kWh / SRB-6' },
      { label: 'Display', value: '7-inch TFT full-color display' },
      { label: 'Warranty', value: 'Up to 2 lac km / 8 years' },
    ],
    variants: [
      { name: 'Tesseract 3.5', battery: '3.5 kWh', range: '162 km IDC' },
      { name: 'Tesseract 5', battery: '5 kWh', range: '220 km IDC' },
      { name: 'Tesseract 6', battery: '6 kWh', range: '261 km IDC' },
    ],
    specGroups: [
      {
        title: 'Safety And Ride Tech',
        specs: [
          { label: 'Front Radar', value: 'Featured' },
          { label: 'Rear Radar', value: 'Featured' },
          { label: 'Smart Dashcam', value: 'Featured' },
          { label: 'ARAS 360 Awareness', value: 'Featured' },
          { label: 'Traction Control', value: '2 modes' },
          { label: 'Dynamic Regen', value: '4 levels' },
          { label: 'ABS', value: 'Dual-channel ABS' },
        ],
      },
      {
        title: 'Convenience',
        specs: [
          { label: 'Navigation', value: 'Real-time directions on display' },
          { label: 'Charging', value: 'Supernova 20-80% in less than 30 min' },
          { label: 'Battery Pack', value: 'SRB-6' },
          { label: 'Top Battery Capacity', value: '6 kWh' },
        ],
      },
    ],
    features: [
      {
        title: 'ARAS 360 Awareness',
        description: 'Front radar, rear radar, Omnisense mirrors, and smart dashcam support all-around awareness.',
        image: asset('vehicles/tesseract/features/aras.png'),
      },
      {
        title: 'Everyday Electric Convenience',
        description: 'A 7-inch TFT display, navigation, fast charging, and scooter practicality make Tesseract a futuristic daily EV.',
        image: asset('vehicles/tesseract/features/display.png'),
      },
    ],
    gallery: [
      { type: 'hero', alt: 'Tesseract electric scooter hero image', src: asset('vehicles/tesseract/hero.png') },
      { type: 'dashboard', alt: 'Tesseract TFT display', src: asset('vehicles/tesseract/features/display.png') },
      { type: 'side-profile', alt: 'Tesseract clean side profile', src: asset('vehicles/tesseract/card-side.png') },
    ],
    description:
      'Tesseract is Ultraviolette electric scooter platform for pre-book customers, combining radar intelligence, ARAS 360 awareness, fast charging, high range, and everyday convenience.',
    sourceRefs: ['S7', 'S11', 'S12'],
    dealerVerificationRequired: ['Final retail specs', 'Variant availability', 'Color availability', 'Storage capacity before publishing'],
  },
  {
    slug: 'shockwave',
    name: 'Shockwave',
    category: 'fun-bike',
    tagline: 'Too stoked. Zero fumes.',
    subheadline:
      'A high-torque electric fun-bike built for thrill seekers, rally lovers, and riders who want something lighter, sharper, and more rebellious.',
    status: 'pre-book',
    pagePriority: 'medium',
    price: 'INR 1,75,000*',
    priceNote:
      'Launching soon. Indicative pre-launch price and range published by Ultraviolette; both may change once the Shockwave is officially launched.',
    image: asset('vehicles/shockwave/hero.png'),
    cardImage: asset('vehicles/shockwave/hero.png'),
    heroImage: asset('vehicles/shockwave/hero.png'),
    primaryCta: 'Register interest',
    secondaryCta: 'Register interest',
    colors: [
      {
        name: 'Cosmic Black',
        tagline: 'For the thrill seekers',
        hex: '#070707',
        image: asset('vehicles/shockwave/colors/cosmic-black.png'),
      },
      {
        name: 'Frost White',
        tagline: 'For the rally lovers',
        hex: '#F4F4F0',
        image: asset('vehicles/shockwave/colors/frost-white.png'),
      },
    ],
    heroStats: [
      { label: 'Wheel Torque', value: '505 Nm' },
      { label: 'Power', value: '14.5 hp' },
      { label: 'Top Speed', value: '120 km/h' },
      { label: 'Weight', value: '120 kg' },
      { label: 'IDC Range', value: '165 km (indicative)' },
    ],
    specs: [
      { label: 'Status', value: 'Launching soon' },
      { label: 'Rear Wheel Torque', value: '505 Nm' },
      { label: 'Power', value: '14.5 hp' },
      { label: 'Top Speed', value: '120 km/h' },
      { label: 'Weight', value: '120 kg' },
      { label: 'Display', value: '5-inch TFT full-color display' },
      { label: 'Range (IDC)', value: '165 km (indicative, may change at launch)' },
    ],
    specGroups: [
      {
        title: 'Motor And Command Center',
        specs: [
          { label: 'Motor', value: 'Chassis-mounted Interior Permanent Magnet Synchronous Motor' },
          { label: 'Display', value: '5-inch TFT full-color display' },
          { label: 'Headlamp', value: 'Dual projector LED headlamps' },
        ],
      },
      {
        title: 'Brakes, Wheels, Tyres, Suspension',
        specs: [
          { label: 'Front Brake', value: '270 mm disc, axial-mounted dual-piston caliper' },
          { label: 'Rear Brake', value: '220 mm disc, floating single-piston caliper' },
          { label: 'Wheels', value: '19-inch front, 17-inch rear spoked wheels' },
          { label: 'Tyres', value: '90/90 R19 front, 110/90 R17 rear' },
          { label: 'Suspension', value: '37 mm cartridge-type front, 200 mm travel; rear monoshock, 180 mm wheel travel' },
        ],
      },
      {
        title: 'Ride Control',
        specs: [
          { label: 'Traction Control', value: '4 modes' },
          { label: 'ABS', value: 'Switchable dual-channel ABS' },
          { label: 'Dynamic Regen', value: '6 levels' },
          { label: 'Seat Options', value: 'Single seat, dual seat' },
        ],
      },
    ],
    features: [
      {
        title: 'Funduro Stance',
        description: 'A 19-inch front wheel, 17-inch rear wheel, spoked setup, and long-travel suspension give Shockwave its playful off-road stance.',
        image: asset('vehicles/shockwave/details/front-brake-wheel.png'),
      },
      {
        title: 'Confirmed Specs Only',
        description: 'Ultraviolette lists an indicative 165 km IDC range for Shockwave. Final range and battery details will be confirmed at the official launch.',
        image: asset('vehicles/shockwave/features/display.png'),
      },
    ],
    gallery: [
      { type: 'hero', alt: 'Shockwave action image', src: asset('vehicles/shockwave/hero.png') },
      { type: 'side-profile', alt: 'Shockwave side profile', src: asset('vehicles/shockwave/side-profile.png') },
      { type: 'detail', alt: 'Shockwave suspension detail', src: asset('vehicles/shockwave/details/suspension.png') },
    ],
    description:
      'Shockwave is a lightweight electric fun-bike with huge rear-wheel torque, off-road stance, switchable ride controls, and a launching-soon status at UV Bengaluru.',
    sourceRefs: ['S8'],
    dealerVerificationRequired: ['Final price at launch', 'Launch and delivery timeline', 'Final battery capacity and range'],
  },
  {
    slug: 'f99',
    name: 'F99 Racing Platform',
    category: 'racing-platform',
    tagline: "Ultraviolette's factory racing platform.",
    subheadline:
      "A track-spec electric superbike showcase proving Ultraviolette's performance engineering.",
    status: 'enquiry-only',
    pagePriority: 'low',
    price: 'Enquiry only',
    image: asset('racing/f99/hero.png'),
    cardImage: asset('racing/f99/hero.png'),
    heroImage: asset('racing/f99/hero.png'),
    primaryCta: 'Express interest',
    colors: [],
    heroStats: [
      { label: 'Quarter Mile', value: '10.712 sec' },
      { label: 'Power', value: '120 bhp / 90 kW' },
      { label: 'Top Speed', value: '265 km/h estimated' },
      { label: 'Wheel Torque', value: '972 Nm' },
      { label: 'Weight', value: '180 kg' },
    ],
    specs: [
      { label: 'Quarter Mile', value: '10.712 sec' },
      { label: 'Power', value: '120 bhp / 90 kW' },
      { label: 'Top Speed', value: '265 km/h estimated' },
      { label: 'Wheel Torque', value: '972 Nm' },
    ],
    specGroups: [
      {
        title: 'Racing Engineering',
        specs: [
          { label: 'Battery Architecture', value: '400 V high-voltage architecture' },
          { label: 'Body', value: 'Complete carbon fibre exoskeleton' },
          { label: 'Drivetrain', value: '10-pole interior permanent magnet SMC-based propulsion system' },
          { label: 'Thermal System', value: 'Liquid-cooled drivetrain' },
        ],
      },
    ],
    features: [
      {
        title: 'Racing DNA',
        description: 'Use F99 as a racing DNA and engineering credibility showcase, not a normal dealership sales model.',
        image: asset('racing/f99/gallery/track-01.jpg'),
      },
    ],
    gallery: [
      { type: 'hero', alt: 'F99 racing platform hero image', src: asset('racing/f99/hero.png') },
      { type: 'lifestyle', alt: 'F99 track image', src: asset('racing/f99/gallery/track-01.jpg') },
    ],
    description:
      'The F99 Racing Platform is an enquiry-only engineering showcase for Ultraviolette racing DNA and track performance.',
    sourceRefs: ['S9'],
  },
  {
    slug: 'f77-space-edition',
    name: 'F77 Space Edition',
    category: 'limited-edition-story',
    tagline: 'Aerospace-inspired limited edition.',
    subheadline:
      'A premium brand story and limited-edition archive tribute to the Indian space odyssey.',
    status: 'story-only',
    pagePriority: 'low',
    price: 'Limited edition story',
    image: asset('vehicles/f77-space-edition/card-side.jpg'),
    cardImage: asset('vehicles/f77-space-edition/card-side.jpg'),
    heroImage: asset('vehicles/f77-space-edition/card-side.jpg'),
    primaryCta: 'Explore F77 Mach 2',
    colors: [],
    heroStats: [
      { label: 'Quantity', value: '10 machines only' },
      { label: 'Theme', value: 'Indian Space Odyssey' },
      { label: 'Range', value: '307 km IDC' },
      { label: 'Charger', value: 'Boost charger included' },
      { label: 'Warranty', value: 'UV Care Max included' },
    ],
    specs: [
      { label: 'Quantity', value: '10 machines only' },
      { label: 'Theme', value: 'Tribute to the Indian Space Odyssey' },
      { label: 'Range', value: '307 km IDC' },
      { label: 'Warranty', value: 'UV Care Max included' },
    ],
    specGroups: [
      {
        title: 'Story Details',
        specs: [
          { label: 'Design Tone', value: 'Resplendent white hue / space-machine elegance' },
          { label: 'Materials', value: 'Aerospace-grade technology and aluminium structures' },
          { label: 'Charger', value: 'Boost charger included' },
        ],
      },
    ],
    features: [
      {
        title: 'Limited Edition Archive',
        description: 'Use the Space Edition as a premium story page or brand credibility block, not regular sale inventory.',
      },
    ],
    gallery: [
      { type: 'side-profile', alt: 'F77 Space Edition side profile', src: asset('vehicles/f77-space-edition/card-side.jpg') },
    ],
    description:
      'The F77 Space Edition is a limited-edition brand story page celebrating aerospace inspiration and the Indian space odyssey.',
    sourceRefs: ['S10'],
  },
]

export const retailVehicles = vehicles.filter((v) => v.status === 'available' || v.status === 'pre-book')
export const availableVehicles = vehicles.filter((v) => v.status === 'available')
export const preBookVehicles = vehicles.filter((v) => v.status === 'pre-book')
export const showcaseVehicles = vehicles.filter((v) => v.status === 'enquiry-only' || v.status === 'story-only')

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug)
}

export function getAvailableVehicles(): Vehicle[] {
  return availableVehicles
}

export function getPreBookVehicles(): Vehicle[] {
  return preBookVehicles
}

