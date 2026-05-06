import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, showroomAddressText, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About UV Bengaluru — Official Ultraviolette Dealer, Nagarbhavi",
  description:
    "UV Bengaluru, operated by Aadya Inc., is the official authorized Ultraviolette dealership in Nagarbhavi, Bengaluru. Test rides, finance support, service, and ownership guidance are available under one roof.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About UV Bengaluru | Official Ultraviolette Dealer",
    description:
      "Learn about UV Bengaluru, the official Ultraviolette dealership in Nagarbhavi, Bengaluru, operated by Aadya Inc.",
    url: absoluteUrl("/about"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const services = [
  {
    title: "SHOWROOM",
    desc: "Explore the Ultraviolette lineup in person. Our team walks you through the variants, features, and ownership questions without a hard sell.",
  },
  {
    title: "TEST RIDES",
    desc: "Book a test ride through the week at our Nagarbhavi facility and experience the torque, ride modes, and real-world feel first-hand.",
  },
  {
    title: "WORKSHOP & SERVICE",
    desc: "Factory-certified technicians handle scheduled maintenance, battery diagnostics, OTA firmware support, and genuine parts fitting.",
  },
  {
    title: "FINANCE ASSISTANCE",
    desc: "We help buyers evaluate EMI plans, insurance, and on-road ownership decisions with dealership support from the same location.",
  },
  {
    title: "OTA SUPPORT",
    desc: "Software and connected ownership are part of the experience. We help keep your Ultraviolette current and well supported.",
  },
  {
    title: "GENUINE PARTS",
    desc: "Original Ultraviolette accessories and spare parts help protect quality, fitment, and warranty confidence.",
  },
];

const stats = [
  { value: "2024", label: "Year Established" },
  { value: "3+", label: "Retail Models" },
  { value: "7 Days", label: "Open Every Week" },
  { value: "1 Showroom", label: "Nagarbhavi, Bengaluru" },
];

const differentiators = [
  {
    title: "AUTHORIZED DEALER",
    desc: "Certified directly by Ultraviolette Automotive with manufacturer-backed support, genuine parts, and aligned ownership guidance.",
  },
  {
    title: "EXPERT TEAM",
    desc: "Our product specialists are trained on the lineup and can explain the differences between models, variants, and use cases clearly.",
  },
  {
    title: "END-TO-END SUPPORT",
    desc: "From first visit and test ride to finance, service, and long-term ownership, UV Bengaluru is built to support the full customer journey.",
  },
];

export default function AboutPage() {
  const aboutStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: absoluteUrl("/about"),
      image: absoluteUrl(siteConfig.ogImage),
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      openingHours: siteConfig.hours,
      sameAs: siteConfig.sameAs,
      areaServed: ["Bengaluru", "Karnataka"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: absoluteUrl("/about"),
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={aboutStructuredData} />
      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SeoH1>
            About UV Bengaluru — Official Ultraviolette Dealership in
            Nagarbhavi, Bengaluru
          </SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            About UV Bengaluru
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            BENGALURU&apos;S
            <br />
            <span className="text-[#FF3B3B]">ELECTRIC</span>
            <br />
            FUTURE
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[#888]">
            UV Bengaluru is the official Ultraviolette dealership in Nagarbhavi,
            operated by Aadya Inc. We bring performance-led electric mobility,
            test rides, service, and ownership guidance to riders across
            Bengaluru.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Our Story
            </p>
            <h2 className="mb-6 font-display text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl">
              WHERE PASSION
              <br />
              MEETS PURPOSE
            </h2>
            <p className="mb-5 text-base leading-relaxed text-[#888]">
              UV Bengaluru was created to give Bengaluru riders a direct,
              reliable, and well-supported entry point into the Ultraviolette
              ecosystem. From our Nagarbhavi location, we help customers compare
              the lineup, understand pricing, book test rides, and make informed
              ownership decisions.
            </p>
            <p className="text-base leading-relaxed text-[#888]">
              The dealership brings the full ownership flow under one roof:
              product discovery, finance assistance, factory-certified service,
              genuine parts, and continued after-sales support.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="border border-[#222] bg-[#111] p-6"
              >
                <p className="stat-number mb-2 text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-wider text-[#888]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Our Services
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              EVERYTHING YOU NEED
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-[#222] bg-[#111] p-8 transition-colors duration-300 hover:border-[#E8231A]"
              >
                <h3 className="mb-3 font-display text-xl font-extrabold uppercase text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              THE UV BENGALURU DIFFERENCE
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="border border-[#222] border-l-2 border-l-[#E8231A] bg-[#111] p-8"
              >
                <h3 className="mb-3 font-display text-xl font-extrabold uppercase text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8231A]/20 px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              VISIT US IN
              <br />
              <span className="text-[#FF3B3B]">NAGARBHAVI</span>
            </h2>
            <div className="mb-8 space-y-3">
              <p className="text-sm leading-relaxed text-[#888]">
                {showroomAddressText}
              </p>
              <p className="text-sm text-[#888]">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="text-sm text-[#888]">Mon-Sun: 10:00 AM - 7:00 PM</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/test-ride" className="btn-primary">
                BOOK A TEST RIDE
              </Link>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#FF3B3B] transition-all hover:bg-white/10"
              >
                WHATSAPP US
              </a>
            </div>
          </div>
          <div className="border border-[#222] bg-[#111] p-8">
            <h3 className="mb-4 font-display text-base font-bold uppercase text-[#888]">
              Legal
            </h3>
            <p className="text-sm leading-relaxed text-[#666]">
              UV Bengaluru is operated by{" "}
              <strong className="text-white">{siteConfig.legalName}</strong>, an
              authorized Ultraviolette Automotive dealership serving Bengaluru
              and Karnataka. Vehicles sold through the dealership follow the
              manufacturer warranty and support structure.
            </p>
            <p className="mt-4 text-xs text-[#555]">
              © 2025 {siteConfig.legalName} | Authorized Ultraviolette Dealer,
              Bengaluru
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
