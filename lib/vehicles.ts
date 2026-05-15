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
    slug: 'x-47',
    name: 'X-47',
    category: 'street-crossover',
    tagline: 'Many roads, one crossover.',
    subheadline:
      'A high-performance electric street crossover built with radar intelligence, long range, and multi-terrain capability.',
    status: 'available',
    theme: 'dark',
    heroBackdropImage: asset('vehicles/x47/immersive/backdrop.png'),
    pagePriority: 'high',
    price: 'From INR 2.49 lakh',
    priceNote:
      'Prices are shown as Bengaluru ex-showroom and may include time-sensitive Carbon Farewell Fund offers. Verify final on-road pricing with the dealership.',
    image: asset('vehicles/x47/hero.png'),
    cardImage: asset('vehicles/x47/hero.png'),
    heroImage: asset('vehicles/x47/hero.png'),
    primaryCta: 'Book your X-47',
    secondaryCta: 'Book test ride',
    colors: [
      {
        personality: 'Laser',
        name: 'Turbo Red',
        hex: '#E8231A',
        image: asset('vehicles/x47/hero.png'),
        heroImage: asset('vehicles/x47/hero.png'),
        backdropImage: asset('vehicles/x47/colors/turbo-red-backdrop.png'),
      },
      {
        personality: 'Shadow',
        name: 'Cosmic Black',
        hex: '#111111',
        image: asset('vehicles/x47/colors/cosmic-black.jpg'),
        heroImage: asset('vehicles/x47/colors/cosmic-black.jpg'),
        backdropImage: asset('vehicles/x47/immersive/backdrop.png'),
      },
      {
        personality: 'Airstrike',
        name: 'Stellar White',
        hex: '#F2F2F0',
        image: asset('vehicles/x47/colors/stellar-white-hero.png'),
        heroImage: asset('vehicles/x47/colors/stellar-white-hero.png'),
        backdropImage: asset('vehicles/x47/colors/stellar-white-hero.png'),
        heroImageMode: 'lifestyle',
      },
      {
        personality: 'Desert Wing',
        name: 'Sand Finish',
        hex: '#B99A6E',
        image: asset('vehicles/x47-desert-wing/hero.png'),
        heroImage: asset('vehicles/x47-desert-wing/hero.png'),
        backdropImage: asset('vehicles/x47-desert-wing/immersive/backdrop.png'),
      },
    ],
    heroStats: [
      { label: 'Peak Power', value: '30 kW / 40.2 hp' },
      { label: 'Top Speed', value: '145 km/h' },
      { label: 'Wheel Torque', value: '610 Nm' },
      { label: '0-60 km/h', value: '2.7 sec' },
      { label: 'IDC Range', value: '211-323 km' },
    ],
    specs: [
      { label: 'Range (IDC)', value: '211-323 km' },
      { label: 'Peak Power', value: '27-30 kW / 36.2-40.2 hp' },
      { label: 'Top Speed', value: '145 km/h' },
      { label: '0-60 km/h', value: '2.7-2.8 sec' },
      { label: 'Battery', value: '7.1 kWh / 10.3 kWh' },
      { label: 'Wheel Torque', value: '550-610 Nm' },
      { label: 'Seat Height', value: '820 mm' },
      { label: 'Ground Clearance', value: '200 mm' },
    ],
    variants: [
      {
        name: 'X-47',
        priceLabel: 'From INR 2.49 lakh',
        battery: '7.1 kWh',
        range: '211 km IDC',
        power: '27 kW / 36.2 hp',
        torque: '550 Nm',
        acceleration: '2.8 sec',
        topSpeed: '145 km/h',
        transparentImage: asset('vehicles/x47/hero.png'),
        backdropImage: asset('vehicles/x47/immersive/backdrop.png'),
        colorNames: ['Turbo Red', 'Cosmic Black', 'Stellar White'],
        highlights: [
          'Standard charger',
          '3 years / 60,000 km battery warranty',
          '3-level dynamic regen',
          'Traction control on/off',
          'Standard connectivity (WiFi + BT)',
          'UV Supernova and Supernova+ network access',
        ],
        notes: 'Base X-47 configuration. The official spec sheet excludes UV Hypersense radar on this variant.',
      },
      {
        name: 'X-47 Original',
        priceLabel: 'From INR 2.64 lakh',
        battery: '7.1 kWh',
        range: '211 km IDC',
        power: '27 kW / 36.2 hp',
        torque: '550 Nm',
        acceleration: '2.8 sec',
        topSpeed: '145 km/h',
        transparentImage: asset('vehicles/x47/hero.png'),
        backdropImage: asset('vehicles/x47/immersive/backdrop.png'),
        colorNames: ['Turbo Red', 'Cosmic Black', 'Stellar White'],
        highlights: [
          'UV Hypersense radar tech',
          'Standard charger',
          '3 years / 60,000 km battery warranty',
          '3-level dynamic regen',
          'Traction control on/off',
          'Standard connectivity (WiFi + BT)',
        ],
      },
      {
        name: 'X-47 Original+',
        priceLabel: 'From INR 3.09 lakh',
        battery: '7.1 kWh',
        range: '211 km IDC',
        power: '27 kW / 36.2 hp',
        torque: '550 Nm',
        acceleration: '2.8 sec',
        topSpeed: '145 km/h',
        transparentImage: asset('vehicles/x47/hero.png'),
        backdropImage: asset('vehicles/x47/immersive/backdrop.png'),
        colorNames: ['Turbo Red', 'Cosmic Black', 'Stellar White'],
        highlights: [
          'UV Hypersense radar tech',
          'On-board charger',
          '5 years / 1,00,000 km battery warranty',
          '10-level dynamic regen',
          '4-level traction control',
          'Premium connectivity (LTE + BT)',
          'Find My X-47',
        ],
      },
      {
        name: 'X-47 Recon',
        priceLabel: 'From INR 3.59 lakh',
        battery: '10.3 kWh',
        range: '323 km IDC',
        power: '30 kW / 40.2 hp',
        torque: '610 Nm',
        acceleration: '2.7 sec',
        topSpeed: '145 km/h',
        transparentImage: asset('vehicles/x47/hero.png'),
        backdropImage: asset('vehicles/x47/immersive/backdrop.png'),
        colorNames: ['Turbo Red', 'Cosmic Black', 'Stellar White'],
        highlights: [
          'UV Hypersense radar tech',
          'Standard charger',
          '5 years / 1,00,000 km battery warranty',
          '10-level dynamic regen',
          '4-level traction control',
          'Premium connectivity (LTE + BT)',
          'Find My X-47',
          'Crash protection: knuckle guard + bullbar',
        ],
      },
      {
        name: 'X-47 Recon+',
        priceLabel: 'From INR 4.09 lakh',
        battery: '10.3 kWh',
        range: '323 km IDC',
        power: '30 kW / 40.2 hp',
        torque: '610 Nm',
        acceleration: '2.7 sec',
        topSpeed: '145 km/h',
        transparentImage: asset('vehicles/x47/hero.png'),
        backdropImage: asset('vehicles/x47/immersive/backdrop.png'),
        colorNames: ['Turbo Red', 'Cosmic Black', 'Stellar White'],
        highlights: [
          'UV Hypersense radar tech',
          'On-board charger',
          '5 years / 1,00,000 km battery warranty',
          '10-level dynamic regen',
          '4-level traction control',
          'Premium connectivity (LTE + BT)',
          'Find My X-47',
          'Crash protection: knuckle guard + bullbar',
          'Violette A.I. included',
          'TPMS',
        ],
      },
      {
        name: 'X-47 Desert Wing',
        priceLabel: 'From INR 4.59 lakh',
        battery: '10.3 kWh',
        range: '323 km IDC',
        power: '30 kW / 40.2 hp',
        torque: '610 Nm',
        acceleration: '2.7 sec',
        topSpeed: '145 km/h',
        transparentImage: asset('vehicles/x47-desert-wing/hero.png'),
        backdropImage: asset('vehicles/x47-desert-wing/immersive/backdrop.png'),
        colorNames: ['Sand Finish'],
        highlights: [
          'Exclusive Sandstorm finish',
          'On-board charger',
          'Integrated dashcam module',
          'Soft case pannier kit',
          'Crash protection: knuckle guard + bullbar',
          'Advanced ride control pack',
          '8 years / 8,00,000 km battery warranty',
          'Violette A.I. included',
          'TPMS',
        ],
        notes: 'Special edition based on the Recon+ specification, with additional touring equipment and an upgraded battery warranty.',
      },
    ],
    specGroups: [
      {
        title: 'Performance',
        specs: [
          { label: 'Battery Packs', value: 'SRB7 / SRB10' },
          { label: 'Energy Capacity', value: '7.1 kWh / 10.3 kWh' },
          { label: 'Peak Motor Torque', value: '90-100 Nm' },
          { label: 'Rear Wheel Torque', value: '550-610 Nm' },
          { label: '0-100 km/h', value: '8.1-8.2 sec' },
          { label: 'Ride Modes', value: 'Glide, Combat, Ballistic' },
        ],
      },
      {
        title: 'Radar And Safety',
        specs: [
          { label: 'Radar System', value: 'UV Hypersense' },
          { label: 'Radar Frequency', value: 'Gen 6 77 GHz long-range radar' },
          { label: 'Monitoring Distance', value: 'Around 200 m' },
          { label: 'Radar Alerts', value: 'Rear collision warning, lane change assist, overtake alert, blindspot monitoring' },
          { label: 'Traction Control', value: '4 levels on higher configurations' },
          { label: 'Dynamic Regen', value: '3 levels included; 10 levels on higher configurations' },
        ],
      },
      {
        title: 'Charging',
        specs: [
          { label: 'Charging Port', value: 'IEC 62196-6' },
          { label: 'Standard Charger', value: '20-80% in 3 hr 30 min / 5 hr' },
          { label: 'Boost Charger', value: '20-80% in 1 hr 45 min / 2 hr 30 min' },
          { label: 'DC Fast Charging', value: '20-80% in 40-60 min' },
        ],
      },
      {
        title: 'Mechanical',
        specs: [
          { label: 'Frame', value: 'Steel trellis with aluminium bulk head' },
          { label: 'Suspension', value: '41 mm USD fork; preload-adjustable monoshock' },
          { label: 'Brakes', value: '320 mm front disc, 230 mm rear disc with Bosch ABS' },
          { label: 'Tyres', value: '110/70 R17 front, 150/60 R17 rear' },
          { label: 'Kerb Weight', value: '197 kg / 208 kg' },
          { label: 'Dimensions', value: '2060 x 867 x 1220 mm' },
        ],
      },
    ],
    features: [
      {
        title: 'UV Hypersense Radar',
        description:
          'Gen 6 77 GHz radar supports rear collision warning, lane change assist, overtake alert, and blindspot monitoring.',
        image: asset('vehicles/x47/features/radar.png'),
      },
      {
        title: 'Integrated Dashcam Upgrade',
        description:
          'Front and rear cameras record 1080p footage with Sony IMX307 HDR sensors, 120-degree view, and expandable storage.',
        image: asset('vehicles/x47/features/dashcam.png'),
      },
      {
        title: 'SRB Battery System',
        description:
          'Up to 10.3 kWh battery capacity in an all-aluminium IP67 enclosure with patented 5-level protection.',
        image: asset('vehicles/x47/features/battery.png'),
      },
    ],
    gallery: [
      { type: 'hero', alt: 'Ultraviolette X-47 hero view', src: asset('vehicles/x47/hero.png') },
      { type: 'lifestyle', alt: 'Ultraviolette X-47 lineup image', src: asset('vehicles/x47/side-profile.png') },
      { type: 'lifestyle', alt: 'Ultraviolette X-47 action image', src: asset('vehicles/x47/gallery/action-01.jpg') },
    ],
    description:
      'The X-47 is a high-performance electric street crossover built for city roads, outskirts, and multi-terrain riding with radar intelligence, long range, and sharp Ultraviolette performance.',
    sourceRefs: ['S2', 'S3'],
    dealerVerificationRequired: ['Current Bengaluru price and offer validity', 'Final on-road price', 'Available colors and delivery timeline'],
  },
  {
    slug: 'x-47-desert-wing',
    name: 'X-47 Desert Wing',
    category: 'street-crossover',
    tagline: 'Built for explorers. Fully specced for the journey.',
    subheadline:
      'A special-edition X-47 with exclusive sand finish, UV Hypersense radar, integrated dashcam, pannier kit, and touring protection accessories.',
    status: 'available',
    theme: 'dark',
    heroBackdropImage: asset('vehicles/x47-desert-wing/immersive/backdrop.png'),
    pagePriority: 'high',
    price: 'From INR 4.59 lakh',
    priceNote: 'Verify current Bengaluru ex-showroom and on-road pricing with the dealership before publishing final offers.',
    image: asset('vehicles/x47-desert-wing/hero.png'),
    cardImage: asset('vehicles/x47-desert-wing/hero.png'),
    heroImage: asset('vehicles/x47-desert-wing/hero.png'),
    primaryCta: 'Book your X-47 Desert Wing',
    secondaryCta: 'Book test ride',
    colors: [
      {
        personality: 'Desert Wing',
        name: 'Sand Finish',
        hex: '#B99A6E',
        image: asset('vehicles/x47-desert-wing/hero.png'),
        heroImage: asset('vehicles/x47-desert-wing/hero.png'),
        backdropImage: asset('vehicles/x47-desert-wing/immersive/backdrop.png'),
      },
    ],
    heroStats: [
      { label: 'Peak Power', value: '30 kW / 40.2 hp' },
      { label: 'Wheel Torque', value: '610 Nm' },
      { label: 'IDC Range', value: '323 km' },
      { label: '0-60 km/h', value: '2.7 sec' },
      { label: 'Warranty', value: 'Up to 8 years / 8,00,000 km' },
    ],
    specs: [
      { label: 'Range (IDC)', value: '323 km' },
      { label: 'Peak Power', value: '30 kW / 40.2 hp' },
      { label: 'Top Speed', value: '145 km/h' },
      { label: '0-60 km/h', value: '2.7 sec' },
      { label: 'Battery', value: '10.3 kWh / SRB10' },
      { label: 'Wheel Torque', value: '610 Nm' },
      { label: 'Dynamic Regen', value: '10 levels' },
      { label: 'Ride Modes', value: 'Glide, Combat, Ballistic' },
    ],
    variants: [
      {
        name: 'X-47 Desert Wing',
        priceLabel: 'From INR 4.59 lakh',
        battery: '10.3 kWh',
        range: '323 km IDC',
        power: '30 kW / 40.2 hp',
        torque: '610 Nm',
        acceleration: '2.7 sec',
        topSpeed: '145 km/h',
        transparentImage: asset('vehicles/x47-desert-wing/hero.png'),
        backdropImage: asset('vehicles/x47-desert-wing/immersive/backdrop.png'),
        highlights: [
          'Exclusive Sandstorm finish',
          'UV Hypersense radar tech',
          'Integrated dashcam module',
          'Soft case pannier kit',
          'Crash protection: knuckle guard + bullbar',
          'Advanced ride control pack',
          '8 years / 8,00,000 km battery warranty',
          'Premium connectivity (LTE + BT)',
          'Find My X-47',
          'TPMS',
        ],
        notes: 'Other specs remain identical to X-47 Recon+ according to the official spec sheet.',
      },
    ],
    specGroups: [
      {
        title: 'Special Edition Equipment',
        specs: [
          { label: 'Finish', value: 'Exclusive sand finish' },
          { label: 'Radar', value: 'UV Hypersense included' },
          { label: 'Dashcam', value: 'Integrated dashcam standard' },
          { label: 'Touring Kit', value: 'Soft case pannier kit' },
          { label: 'Protection', value: 'Crash protection, knuckle guard, bullbar' },
        ],
      },
      {
        title: 'Performance',
        specs: [
          { label: 'Battery Pack', value: '10.3 kWh / SRB10' },
          { label: 'Peak Motor Torque', value: '100 Nm' },
          { label: 'Rear Wheel Torque', value: '610 Nm' },
          { label: '0-100 km/h', value: '8.1 sec' },
          { label: 'Top Speed', value: '145 km/h' },
        ],
      },
      {
        title: 'Ownership',
        specs: [
          { label: 'Warranty Package', value: 'UV Care Max up to 8 years / 8,00,000 km' },
          { label: 'Utility', value: 'Type-C charging, TPMS, charge limits, deep sleep' },
        ],
      },
    ],
    features: [
      {
        title: 'Touring Ready',
        description: 'Soft panniers, crash protection, knuckle guard, and bullbar make Desert Wing the most journey-focused X-47.',
      },
      {
        title: 'Radar And Dashcam Standard',
        description: 'UV Hypersense radar and the integrated front/rear dashcam are standard on the Desert Wing.',
        image: asset('vehicles/x47/features/dashcam.png'),
      },
    ],
    gallery: [
      { type: 'hero', alt: 'X-47 Desert Wing hero view', src: asset('vehicles/x47-desert-wing/hero.png') },
      { type: 'lifestyle', alt: 'X-47 Desert Wing lineup image', src: asset('vehicles/x47-desert-wing/gallery/lineup.png') },
      { type: 'dashcam', alt: 'X-47 Desert Wing dashcam system', src: asset('vehicles/x47/features/dashcam.png') },
    ],
    description:
      'The X-47 Desert Wing is a fully specced special edition with exclusive sand finish, Recon+ performance, radar, dashcam, touring luggage, and protection accessories.',
    sourceRefs: ['S2', 'S3'],
    dealerVerificationRequired: ['Current Bengaluru price', 'Accessory kit availability', 'Delivery timeline'],
  },
  {
    slug: 'f77-mach-2',
    name: 'F77 Mach 2',
    category: 'electric-motorcycle',
    tagline: 'Activate flight mode.',
    subheadline:
      'Aviation-derived electric performance with 40.2 hp, 100 Nm torque, 323 km IDC range, and 155 km/h top speed.',
    status: 'available',
    pagePriority: 'high',
    price: 'From INR 3.99 lakh',
    priceNote: 'Use India/dealership pricing and warranty data for India-facing pages. Verify final on-road price locally.',
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
      { label: 'Peak Power', value: '30 kW / 40.2 hp' },
      { label: 'Motor Torque', value: '100 Nm' },
      { label: 'IDC Range', value: '323 km' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: '0-60 km/h', value: '2.8 sec' },
    ],
    specs: [
      { label: 'Range (IDC)', value: '323 km' },
      { label: 'Peak Power', value: '30 kW / 40.2 hp' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: '0-60 km/h', value: '2.8 sec' },
      { label: 'Battery', value: '10.3 kWh / SRB10' },
      { label: 'Motor Torque', value: '100 Nm' },
      { label: 'Ride Modes', value: 'Glide, Combat, Ballistic' },
      { label: 'Kerb Weight', value: '207 kg' },
    ],
    specGroups: [
      {
        title: 'Performance',
        specs: [
          { label: 'Peak Power', value: '30 kW' },
          { label: 'Net Power', value: '20 kW, ECE R85' },
          { label: 'Continuous Power', value: '9.5 kW at 3000 rpm, ECE R85' },
          { label: 'Peak Motor Torque', value: '100 Nm' },
          { label: '0-100 km/h', value: '7.7 sec' },
          { label: 'Regenerative Braking', value: '10 levels / dynamic regen' },
        ],
      },
      {
        title: 'Battery And Charging',
        specs: [
          { label: 'Battery Pack', value: 'SRB10' },
          { label: 'Energy Capacity', value: '10.3 kWh' },
          { label: 'Enclosure', value: 'All-aluminium IP67-rated enclosure' },
          { label: 'Standard Charger', value: '1.3 kW, 20-80% in 5 hr' },
          { label: 'Boost Charger', value: '3.0 kW, 20-80% in 2.5 hr' },
          { label: 'DC Fast Charging', value: '20-80% in less than 60 min' },
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
      'The F77 Mach 2 is the sport-focused F77 expression, combining aviation-derived electric performance, 323 km IDC range, connected smart tech, and a 10.3 kWh SRB10 battery platform.',
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
    price: 'From INR 3,09,000*',
    priceNote: 'Official SuperStreet page shows INR 3,09,000*. Verify final Bengaluru on-road pricing and offer terms.',
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
      { label: 'Peak Power', value: '30 kW / 40.2 hp' },
      { label: 'Motor Torque', value: '100 Nm' },
      { label: 'IDC Range', value: '323 km' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: 'Battery', value: '10.3 kWh' },
    ],
    specs: [
      { label: 'Range (IDC)', value: '323 km' },
      { label: 'Peak Power', value: '30 kW / 40.2 hp' },
      { label: 'Top Speed', value: '155 km/h' },
      { label: '0-60 km/h', value: '2.8 sec' },
      { label: 'Battery', value: '10.3 kWh / SRB10' },
      { label: 'Motor Torque', value: '100 Nm' },
      { label: 'Ride Modes', value: 'Glide, Combat, Ballistic' },
      { label: 'Dynamic Regen', value: '10 levels on Recon/spec configuration' },
    ],
    specGroups: [
      {
        title: 'Shared F77 Platform',
        specs: [
          { label: 'Peak Power', value: '30 kW / 40.2 hp' },
          { label: 'Peak Motor Torque', value: '100 Nm' },
          { label: 'Top Speed', value: '155 km/h' },
          { label: 'Battery', value: '10.3 kWh SRB10 on Recon configuration' },
          { label: 'Traction Control', value: '4 levels' },
          { label: 'ABS', value: 'Dual-channel ABS highlighted on product page' },
        ],
      },
      {
        title: 'Street Focus',
        specs: [
          { label: 'Positioning', value: 'More upright, everyday-friendly F77 performance platform' },
          { label: 'Charging', value: 'Standard 1.3 kW, Boost 3.0 kW, Supernova/Supernova Plus DC network' },
          { label: 'Warranty Claim', value: 'Up to 8,00,000 km shown on official product page' },
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
        description: '40.2 hp, 100 Nm torque, 323 km IDC range, and a 155 km/h top speed keep it firmly in the F77 performance family.',
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
    availableFrom: 'Q2 2026',
    price: 'Pre-book / Register interest',
    priceNote: 'Final variant selection, retail specifications, pricing, and delivery details must be verified with the dealership before publishing.',
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
      { label: 'Expected', value: 'Q2 2026' },
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
    availableFrom: 'Q1 2026',
    price: 'INR 1,75,000*',
    priceNote:
      'Official page shows INR 1,75,000* and INR 999 pre-book amount. Do not publish battery capacity or riding range until Ultraviolette/dealership confirms them.',
    image: asset('vehicles/shockwave/hero.png'),
    cardImage: asset('vehicles/shockwave/hero.png'),
    heroImage: asset('vehicles/shockwave/hero.png'),
    primaryCta: 'Pre-book adrenaline',
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
      { label: 'Pre-book', value: 'INR 999' },
    ],
    specs: [
      { label: 'Status', value: 'Pre-book' },
      { label: 'Expected', value: 'Q1 2026' },
      { label: 'Rear Wheel Torque', value: '505 Nm' },
      { label: 'Power', value: '14.5 hp' },
      { label: 'Top Speed', value: '120 km/h' },
      { label: 'Weight', value: '120 kg' },
      { label: 'Display', value: '5-inch TFT full-color display' },
      { label: 'Pre-book Amount', value: 'INR 999' },
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
        description: 'Shockwave pages must avoid battery capacity and riding range until Ultraviolette or the dealership confirms those values.',
        image: asset('vehicles/shockwave/features/display.png'),
      },
    ],
    gallery: [
      { type: 'hero', alt: 'Shockwave action image', src: asset('vehicles/shockwave/hero.png') },
      { type: 'side-profile', alt: 'Shockwave side profile', src: asset('vehicles/shockwave/side-profile.png') },
      { type: 'detail', alt: 'Shockwave suspension detail', src: asset('vehicles/shockwave/details/suspension.png') },
    ],
    description:
      'Shockwave is a lightweight electric fun-bike with huge rear-wheel torque, off-road stance, switchable ride controls, and a rebellious pre-book positioning.',
    sourceRefs: ['S8'],
    dealerVerificationRequired: ['Final price terms', 'Delivery timeline', 'Battery capacity and range before publishing'],
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

