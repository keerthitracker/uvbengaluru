import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'UV Bengaluru — Official Ultraviolette Dealership',
    template: '%s | UV Bengaluru',
  },
  description:
    'UV Bengaluru is the official Ultraviolette electric motorcycle dealership in Nagarbhavi, Bengaluru, operated by Aadya Inc. Test ride the X-47, F77 Mach 2, and more.',
  keywords: [
    'Ultraviolette',
    'UV Bengaluru',
    'electric motorcycle Bengaluru',
    'F77 Mach 2',
    'X-47',
    'Aadya Inc',
    'Nagarbhavi',
    'electric bike dealership',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://uvbengaluru.com',
    siteName: 'UV Bengaluru',
    title: 'UV Bengaluru — Official Ultraviolette Dealership',
    description:
      'Experience the electric revolution. Official Ultraviolette dealership in Nagarbhavi, Bengaluru. Test rides available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UV Bengaluru — Official Ultraviolette Dealership',
    description: 'Official Ultraviolette dealership in Nagarbhavi, Bengaluru. Test ride the X-47 and F77 Mach 2.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="bg-[#080808] text-white antialiased" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
