'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const UV_LOGO = '/aadyaa-logo.svg'

const navLinks = [
  { label: 'BIKES', href: '/bikes' },
  { label: 'SHOWROOM', href: '/showroom' },
  { label: 'WORKSHOP', href: '/workshop' },
  { label: 'FINANCE', href: '/finance' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#080808]/95 backdrop-blur-sm border-b border-[#222]'
            : 'bg-transparent'
        }`}
      >
        {/* Announcement Bar */}
        <div className="hidden sm:block bg-[#C8FF00] text-black text-center py-1.5 px-4">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em]">
            Visit us at Nagarbhavi · Mon–Sun 10 AM – 7 PM ·{' '}
            <a href="tel:+919606955530" className="hover:underline">96069 55530</a>
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-0.5 group">
            <Image
              src={UV_LOGO}
              alt="Aadyaa"
              width={110}
              height={22}
              className="h-auto"
              priority
            />
            <span className="font-display text-[10px] font-bold text-[#C8FF00] tracking-[0.35em] uppercase leading-none">
              BENGALURU
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-[0.15em] transition-colors ${
                  pathname === link.href
                    ? 'text-[#C8FF00]'
                    : 'text-[#aaa] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/test-ride"
              className={`text-xs font-bold tracking-[0.15em] px-5 py-2.5 transition-colors ${
                pathname === '/test-ride'
                  ? 'bg-[#d4ff33] text-black'
                  : 'bg-[#C8FF00] text-black hover:bg-[#d4ff33]'
              }`}
            >
              TEST RIDE
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center items-center gap-10 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mb-4">
          <Image
            src={UV_LOGO}
            alt="Aadyaa"
            width={140}
            height={28}
            className="h-auto opacity-60"
          />
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-display text-4xl font-bold uppercase tracking-[0.15em] transition-colors ${
              pathname === link.href ? 'text-[#C8FF00]' : 'text-white hover:text-[#C8FF00]'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/test-ride"
          className="mt-4 bg-[#C8FF00] text-black font-display text-2xl font-bold uppercase tracking-[0.15em] px-10 py-5 hover:bg-[#d4ff33] transition-colors"
        >
          BOOK TEST RIDE
        </Link>
      </div>
    </>
  )
}
