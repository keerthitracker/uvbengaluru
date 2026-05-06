import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, showroomAddressText, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service & Workshop | UV Bengaluru",
  description:
    "Factory-certified Ultraviolette service and workshop support at UV Bengaluru in Nagarbhavi. Get diagnostics, software support, genuine parts, and service booking help.",
  alternates: {
    canonical: "/service",
  },
  openGraph: {
    title: "Ultraviolette Service & Workshop | UV Bengaluru",
    description:
      "Plan your service visit with UV Bengaluru for diagnostics, scheduled maintenance, and genuine-parts support.",
    url: absoluteUrl("/service"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const services = [
  {
    title: "SCHEDULED MAINTENANCE",
    desc: "Factory-aligned periodic service support for Ultraviolette motorcycles and EV platforms.",
  },
  {
    title: "BATTERY DIAGNOSTICS",
    desc: "Battery health checks, thermal-system review, and dealership-guided diagnostic evaluation where applicable.",
  },
  {
    title: "SOFTWARE AND OTA SUPPORT",
    desc: "Help with firmware updates, software checks, and connected-feature support through an official touchpoint.",
  },
  {
    title: "GENUINE PARTS",
    desc: "Service work and replacements are positioned around genuine Ultraviolette parts rather than unverified substitutes.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "BOOK AHEAD",
    desc: "Call or WhatsApp before visiting so the team can plan workshop load and understand your issue.",
  },
  {
    step: "02",
    title: "VISIT NAGARBHAVI",
    desc: "Bring the vehicle to the UV Bengaluru location in Nagarbhavi for inspection and service coordination.",
  },
  {
    step: "03",
    title: "VERIFY THE SCOPE",
    desc: "Confirm the service requirement, estimated work, and timing before the job proceeds.",
  },
  {
    step: "04",
    title: "COLLECT WITH CLARITY",
    desc: "Pickup discussions should include the completed work, pricing, and next recommended service step.",
  },
];

const visitNotes = [
  `Address: ${showroomAddressText}`,
  "Hours: Monday to Sunday, 10:00 AM to 7:00 PM",
  `Phone: ${siteConfig.phoneDisplay}`,
  `WhatsApp: ${siteConfig.whatsappDisplay}`,
  "Best practice: share your model name, issue summary, and preferred visit window before you travel.",
];

export default function ServicePage() {
  const serviceStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: `${siteConfig.name} Service`,
      url: absoluteUrl("/service"),
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      image: absoluteUrl(siteConfig.ogImage),
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
      areaServed: ["Bengaluru", "Karnataka"],
      hasMap:
        "https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072",
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
          name: "Service",
          item: absoluteUrl("/service"),
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={serviceStructuredData} />

      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Service Support
          </p>
          <h1 className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
            ULTRAVIOLETTE
            <br />
            <span className="text-[#FF3B3B]">SERVICE</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            UV Bengaluru is the official local touchpoint for Ultraviolette
            service coordination in Nagarbhavi, Bengaluru. Use this page to plan
            a visit, confirm support scope, and contact the team before you come
            in.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
              Call Service Team
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Service
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-6"
            >
              <h2 className="mb-3 font-display text-lg font-extrabold uppercase text-white">
                {service.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#A0A0A0]">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
              Visit Proof
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold uppercase tracking-[0.06em] text-white">
              Service Visit Details
            </h2>
            <div className="space-y-3">
              {visitNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[4px] border border-[#303030] bg-[#151515] px-4 py-3"
                >
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/workshop" className="btn-primary">
                Book Workshop Service
              </Link>
              <a
                href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Open Map
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-6"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C518]">
                  Step {step.step}
                </p>
                <h3 className="mb-3 font-display text-lg font-extrabold uppercase text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#A0A0A0]">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
