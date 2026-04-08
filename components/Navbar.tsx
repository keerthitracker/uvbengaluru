'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'VEHICLES',  href: '/vehicles' },
  { label: 'SERVICE',   href: '/service' },
  { label: 'FINANCE',   href: '/finance' },
  { label: 'TEST RIDE', href: '/test-ride' },
  { label: 'ABOUT',     href: '/about' },
  { label: 'CONTACT',   href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black text-center py-2 px-4">
        <p style={{ fontSize: '12px', letterSpacing: '0.12em', color: '#A0A0A0' }} className="uppercase">
          Visit us at Nagarbhavi&nbsp;&nbsp;·&nbsp;&nbsp;10 AM–7 PM Daily&nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="tel:+919606955530" className="hover:text-white transition-colors">96069 55530</a>
        </p>
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-8 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled || menuOpen ? '#141414' : '#141414',
          borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
          height: '64px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/uv-logo.svg"
              alt="UV Bengaluru"
              width={180}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: pathname === link.href ? '#FFFFFF' : '#A0A0A0',
                  fontWeight: 400,
                }}
                className="uppercase transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/test-ride"
              style={{
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid #FFFFFF',
                borderRadius: '2px',
                padding: '8px 16px',
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: 600,
              }}
              className="uppercase transition-all hover:bg-white/10"
            >
              BOOK TEST RIDE
            </Link>
            <Link
              href="/contact"
              style={{
                background: '#E8231A',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '2px',
                padding: '8px 16px',
                fontSize: '13px',
                letterSpacing: '0.12em',
                fontWeight: 600,
              }}
              className="uppercase transition-all hover:bg-[#C41C14]"
            >
              VISIT SHOWROOM
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: '#0D0D0D' }}
      >
        <div className="mb-4">
          <Image src="/images/uv-logo.svg" alt="UV Bengaluru" width={180} height={32} className="h-8 w-auto opacity-70" />
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: '28px',
              letterSpacing: '0.12em',
              fontWeight: 700,
              color: pathname === link.href ? '#FF3B3B' : '#FFFFFF',
            }}
            className="uppercase transition-colors hover:text-[#FF3B3B]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/test-ride"
          style={{
            marginTop: '16px',
            background: '#E8231A',
            color: '#FFFFFF',
            borderRadius: '2px',
            padding: '14px 36px',
            fontSize: '16px',
            letterSpacing: '0.12em',
            fontWeight: 600,
          }}
          className="uppercase"
        >
          BOOK TEST RIDE
        </Link>
      </div>
    </>
  )
}
