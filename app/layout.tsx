import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'UV Bengaluru — Official Ultraviolette Dealership | Nagarbhavi',
    template: '%s | UV Bengaluru',
  },
  description:
    'UV Bengaluru is the official Ultraviolette electric motorcycle dealership in Nagarbhavi, Bengaluru. Test ride the X-47, F77 Mach 2, F77 Superstreet and more. Visit us at SJA Arcade, Naagarabhaavi.',
  keywords: [
    'Ultraviolette',
    'UV Bengaluru',
    'electric motorcycle Bengaluru',
    'F77 Mach 2',
    'X-47',
    'Aadya Inc',
    'Nagarbhavi',
    'Naagarabhaavi',
    'electric bike dealership Bengaluru',
    'Ultraviolette dealer Bangalore',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://uvbengaluru.com',
    siteName: 'UV Bengaluru',
    title: 'UV Bengaluru — Official Ultraviolette Dealership',
    description:
      'Experience the electric revolution. Official Ultraviolette dealership in Nagarbhavi, Bengaluru. Test rides available daily 10 AM–7 PM.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UV Bengaluru — Official Ultraviolette Dealership',
    description:
      'Official Ultraviolette dealership in Nagarbhavi, Bengaluru. Test ride the X-47 and F77 Mach 2.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#0D0D0D', color: '#FFFFFF', fontFamily: "'Rajdhani', 'Barlow', 'Inter', sans-serif" }} className="antialiased">
        <Navbar />
        {/* Offset for fixed announcement bar (32px) + navbar (64px) */}
        <div style={{ paddingTop: '96px' }}>
          <main>{children}</main>
        </div>
        <Footer />
        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
          style={{ background: '#25D366' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
