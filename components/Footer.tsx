import Link from 'next/link'
import Image from 'next/image'

const vehicles = [
  { name: 'X-47',            href: '/vehicles/x-47' },
  { name: 'X-47 Desert Wing',href: '/vehicles/x-47-desert-wing' },
  { name: 'F77 Superstreet', href: '/vehicles/f77-superstreet' },
  { name: 'F77 Mach 2',      href: '/vehicles/f77-mach-2' },
  { name: 'Tesseract',       href: '/vehicles/tesseract' },
  { name: 'Shockwave',       href: '/vehicles/shockwave' },
]

const services = [
  { name: 'Service & Repairs', href: '/service' },
  { name: 'Book Test Ride',    href: '/test-ride' },
  { name: 'Finance Options',   href: '/finance' },
  { name: 'Contact Us',        href: '/contact' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use',   href: '/terms' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111111', borderTop: '1px solid #2A2A2A' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Image
              src="/images/uv-logo-footer.svg"
              alt="UV Bengaluru"
              width={180}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6 }}>
              Official Ultraviolette dealership in Nagarbhavi, Bengaluru.
            </p>
          </div>

          {/* Vehicles */}
          <div>
            <h3 style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 600, marginBottom: '16px' }} className="uppercase">
              VEHICLES
            </h3>
            <ul className="space-y-3">
              {vehicles.map((v) => (
                <li key={v.href}>
                  <Link href={v.href} style={{ fontSize: '14px', color: '#A0A0A0' }} className="hover:text-white transition-colors">
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h3 style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 600, marginBottom: '16px' }} className="uppercase">
              VISIT US
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" style={{ fontSize: '14px', color: '#A0A0A0' }} className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" style={{ fontSize: '14px', color: '#A0A0A0' }} className="hover:text-white transition-colors">Showroom</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 600, marginBottom: '16px' }} className="uppercase">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} style={{ fontSize: '14px', color: '#A0A0A0' }} className="hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#FFFFFF', fontWeight: 600, marginBottom: '16px' }} className="uppercase">
              CONTACT US
            </h3>
            <ul className="space-y-3">
              <li style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: 1.6 }}>
                SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya, Naagarabhaavi, Bengaluru, Karnataka 560072
              </li>
              <li>
                <a href="tel:+919606955530" style={{ fontSize: '14px', color: '#A0A0A0' }} className="hover:text-white transition-colors">
                  📞 96069 55530
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: '#A0A0A0' }}
                  className="hover:text-white transition-colors"
                >
                  💬 WhatsApp: 96069 55529
                </a>
              </li>
              <li style={{ fontSize: '14px', color: '#A0A0A0' }}>
                🕙 10:00 AM – 7:00 PM, all days
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #333333', marginTop: '48px', paddingTop: '24px' }} className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: '12px', color: '#666666', letterSpacing: '0.06em' }}>
            © 2025 Aadya Inc. | Authorized Ultraviolette Dealer, Bengaluru
          </p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: '12px', color: '#666666' }} className="hover:text-white transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
