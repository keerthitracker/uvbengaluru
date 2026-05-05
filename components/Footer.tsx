import Link from "next/link";
import Image from "next/image";
import { retailVehicles } from "@/lib/vehicles";

const services = [
  { name: "Service & Repairs", href: "/service" },
  { name: "Book Test Ride", href: "/test-ride" },
  { name: "Finance Options", href: "/finance" },
  { name: "Contact Us", href: "/contact" },
];

const guides = [
  { name: "All Resources", href: "/resources" },
  {
    name: "Ultraviolette Test Ride Bengaluru",
    href: "/ultraviolette-test-ride-bengaluru",
  },
  { name: "F77 Price in Bengaluru", href: "/f77-price-bengaluru" },
  {
    name: "F77 Mach 2 vs F77 SuperStreet",
    href: "/f77-mach-2-vs-f77-superstreet",
  },
  {
    name: "Ultraviolette Service Centre Bengaluru",
    href: "/ultraviolette-service-centre-bengaluru",
  },
  {
    name: "Electric Bike Finance Bengaluru",
    href: "/electric-bike-finance-bengaluru",
  },
  {
    name: "Ultraviolette Showroom Bengaluru",
    href: "/ultraviolette-showroom-bengaluru",
  },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111111", borderTop: "1px solid #2A2A2A" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div>
            <Image
              src="/images/uv-logo-footer.svg"
              alt="UV Bengaluru"
              width={180}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-[#666]">
              Official Ultraviolette dealership in Nagarbhavi, Bengaluru.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Vehicles
            </h3>
            <ul className="space-y-3">
              {retailVehicles.map((vehicle) => (
                <li key={vehicle.slug}>
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="text-sm text-[#A0A0A0] hover:text-white"
                  >
                    {vehicle.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Visit Us
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#A0A0A0] hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/showroom"
                  className="text-sm text-[#A0A0A0] hover:text-white"
                >
                  Showroom
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicles"
                  className="text-sm text-[#A0A0A0] hover:text-white"
                >
                  Lineup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#A0A0A0] hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Guides
            </h3>
            <ul className="space-y-3">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="text-sm text-[#A0A0A0] hover:text-white"
                  >
                    {guide.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="text-sm leading-relaxed text-[#A0A0A0]">
                SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya,
                Naagarabhaavi, Bengaluru, Karnataka 560072
              </li>
              <li>
                <a
                  href="tel:+919606955530"
                  className="text-sm text-[#A0A0A0] hover:text-white"
                >
                  Phone: 96069 55530
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A0A0A0] hover:text-white"
                >
                  WhatsApp: 96069 55529
                </a>
              </li>
              <li className="text-sm text-[#A0A0A0]">
                10:00 AM - 7:00 PM, all days
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#333] pt-6 md:flex-row">
          <p className="text-xs tracking-[0.06em] text-[#666]">
            (c) 2025 Aadya Inc. | Authorized Ultraviolette Dealer, Bengaluru
          </p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-[#666] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
