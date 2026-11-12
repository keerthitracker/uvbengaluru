import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
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
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/ultraviolette-logo-official.svg"
                alt="Ultraviolette logo"
                width={32}
                height={32}
                className="h-8 w-8 invert"
              />
              <span className="text-sm font-bold uppercase tracking-[0.28em] text-white">
                UV BENGALURU
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#666]">
              Official Ultraviolette dealership in Bengaluru. Sales, service and spares in Nagarbhavi; sales counter in Rajajinagar.
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
              {siteConfig.locations.map((location) => (
                <li
                  key={location.id}
                  className="text-sm leading-relaxed text-[#A0A0A0]"
                >
                  <span className="block text-white">
                    {location.name} - {location.type}
                  </span>
                  {location.addressLines.join(", ")}
                </li>
              ))}
              <li>
                <a
                  href="tel:+918050073309"
                  className="text-sm text-[#A0A0A0] hover:text-white"
                >
                  Call (IVR): +91 80500 73309
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

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-[#333] pt-8 sm:flex-row sm:justify-center sm:gap-10">
          <a
            href="https://www.ultraviolette.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ultraviolette Automotive website"
          >
            <Image
              src="/images/ultraviolette-logo-footer-official.svg"
              alt="Ultraviolette logo"
              width={240}
              height={32}
              className="h-7 w-auto"
            />
          </a>
          <span
            aria-hidden="true"
            className="hidden h-10 w-px bg-[#333] sm:block"
          />
          <div className="flex items-center gap-4">
            <Image
              src="/images/aadya-inc-logo.png"
              alt="Aadya Inc. logo"
              width={640}
              height={477}
              className="h-14 w-auto"
            />
            <p className="text-xs uppercase leading-relaxed tracking-[0.14em] text-[#A0A0A0]">
              Authorised dealer
              <span className="block text-sm font-semibold tracking-[0.1em] text-white">
                {siteConfig.legalName}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#333] pt-6 md:flex-row">
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
