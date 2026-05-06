import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import WorkshopBookingForm from "@/components/WorkshopBookingForm";
import { absoluteUrl, showroomAddressText, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Workshop & Service | UV Bengaluru",
  description:
    "Book Ultraviolette workshop support at UV Bengaluru in Nagarbhavi for scheduled maintenance, diagnostics, software support, and genuine-parts service.",
  alternates: {
    canonical: "/workshop",
  },
  openGraph: {
    title: "Ultraviolette Workshop Booking | UV Bengaluru",
    description:
      "Use the UV Bengaluru workshop page to request service support and plan your Nagarbhavi visit.",
    url: absoluteUrl("/workshop"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const services = [
  {
    title: "SCHEDULED MAINTENANCE",
    desc: "Routine service support aligned to official ownership and maintenance expectations.",
  },
  {
    title: "BATTERY HEALTH AND DIAGNOSTICS",
    desc: "Diagnostic conversations around battery performance, system health, and rideability concerns.",
  },
  {
    title: "SOFTWARE AND OTA SUPPORT",
    desc: "Firmware and connected-feature support for owners who need an official dealership touchpoint.",
  },
  {
    title: "TYRE, BRAKE, AND WEAR ITEMS",
    desc: "Workshop coordination for normal wear-and-tear service items and ride-readiness checks.",
  },
  {
    title: "ACCIDENT OR REPAIR ENQUIRIES",
    desc: "A clear starting point for owners who need inspection, repair guidance, or next-step support.",
  },
  {
    title: "GENUINE PARTS SUPPORT",
    desc: "A dealership-led path for service work that depends on genuine Ultraviolette components.",
  },
];

const visitSignals = [
  "Official local touchpoint in Nagarbhavi, Bengaluru",
  "Open Monday to Sunday, 10:00 AM to 7:00 PM",
  "Call or WhatsApp before arriving for smoother workshop planning",
  "Use the booking form for a structured service request",
];

export default function WorkshopPage() {
  const workshopStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: `${siteConfig.name} Workshop`,
      url: absoluteUrl("/workshop"),
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
          name: "Workshop",
          item: absoluteUrl("/workshop"),
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={workshopStructuredData} />

      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Nagarbhavi, Bengaluru
          </p>
          <h1 className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
            WORKSHOP
            <br />
            <span className="text-[#FF3B3B]">BOOKING</span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            Use this page to request an Ultraviolette workshop appointment with
            UV Bengaluru. It is the right route for service coordination,
            diagnostics, and genuine-parts workshop support.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              What We Support
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              WORKSHOP SERVICE SCOPE
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-[#222] bg-[#111] p-6"
              >
                <h3 className="mb-3 font-display text-lg font-extrabold uppercase text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="border border-[#222] bg-[#111] p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Visit Proof
            </p>
            <h2 className="mb-5 font-display text-3xl font-extrabold uppercase text-white">
              BEFORE YOU COME IN
            </h2>
            <div className="space-y-3">
              {[
                `Address: ${showroomAddressText}`,
                "Hours: Monday to Sunday, 10:00 AM to 7:00 PM",
                `Phone: ${siteConfig.phoneDisplay}`,
                `WhatsApp: ${siteConfig.whatsappDisplay}`,
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[4px] border border-[#2A2A2A] bg-[#151515] px-4 py-3"
                >
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {visitSignals.map((item) => (
              <article
                key={item}
                className="border border-[#222] bg-[#111] p-6"
              >
                <h3 className="mb-3 font-display text-lg font-extrabold uppercase text-white">
                  Workshop Guidance
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Book a Service
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              SCHEDULE YOUR APPOINTMENT
            </h2>
            <p className="mt-4 text-base text-[#888]">
              Fill in the form below and the UV Bengaluru team will use it to
              coordinate your workshop visit.
            </p>
          </div>
          <WorkshopBookingForm />
        </div>
      </section>
    </>
  );
}
