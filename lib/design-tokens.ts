export const colors = {
  bg: {
    page:      '#0D0D0D',
    navbar:    '#141414',
    card:      '#1A1A1A',
    footer:    '#111111',
    ticker:    '#000000',
    heroLight: '#F5F5F5',
  },
  accent: {
    red:      '#E8231A',
    redDark:  '#C41C14',
    redText:  '#FF3B3B',
    yellow:   '#F5C518',
    white:    '#FFFFFF',
  },
  text: {
    primary:   '#FFFFFF',
    secondary: '#A0A0A0',
    tertiary:  '#666666',
    dark:      '#1A1A1A',
  },
  border: {
    card:    '#2A2A2A',
    divider: '#333333',
  },
} as const

export const typography = {
  fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif",
  letterSpacing: {
    nav:     '0.12em',
    heading: '0.08em',
    tight:   '-0.01em',
  },
} as const

export const buttons = {
  primary: {
    background:    '#E8231A',
    color:         '#FFFFFF',
    borderRadius:  '2px',
    padding:       '10px 20px',
    letterSpacing: '0.12em',
    fontWeight:    600,
    fontSize:      '13px',
    hover:         { background: '#C41C14' },
  },
  ghost: {
    background:    'transparent',
    color:         '#FFFFFF',
    border:        '1px solid #FFFFFF',
    borderRadius:  '2px',
    padding:       '10px 20px',
    letterSpacing: '0.12em',
    fontWeight:    600,
    fontSize:      '13px',
    hover:         { background: 'rgba(255,255,255,0.08)' },
  },
  yellow: {
    background:   '#F5C518',
    color:        '#111111',
    borderRadius: '2px',
    fontSize:     '11px',
    padding:      '4px 10px',
    fontWeight:   700,
  },
} as const

export const DEALER = {
  name:        'UV Bengaluru',
  legal:       'Aadya Inc.',
  phone:       '96069 55530',
  phoneTel:    'tel:+919606955530',
  whatsapp:    '96069 55529',
  whatsappUrl: 'https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles',
  address:     'SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya, Naagarabhaavi, Bengaluru, Karnataka 560072',
  timings:     '10:00 AM – 7:00 PM, all days',
  copyright:   '© 2025 Aadya Inc. | Authorized Ultraviolette Dealer, Bengaluru',
} as const
