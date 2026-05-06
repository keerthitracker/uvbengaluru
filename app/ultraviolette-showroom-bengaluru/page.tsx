import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { showroomAddressText, siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ultraviolette Showroom in Bengaluru — Visit UV Bengaluru",
  description:
    "Looking for an Ultraviolette showroom in Bengaluru? UV Bengaluru in Nagarbhavi is the official dealership for model discovery, test rides, and ownership support.",
  alternates: { canonical: "/ultraviolette-showroom-bengaluru" },
  openGraph: {
    title: "Ultraviolette Showroom Bengaluru | UV Bengaluru",
    description:
      "Find the official Ultraviolette showroom touchpoint in Bengaluru and plan your visit.",
    url: absoluteUrl("/ultraviolette-showroom-bengaluru"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const faqs = [
  {
    question: "Where is the Ultraviolette showroom in Bengaluru?",
    answer:
      "UV Bengaluru in Nagarbhavi is the official dealership touchpoint for customers looking to explore the Ultraviolette lineup in Bengaluru.",
  },
  {
    question: "Can I test ride from the showroom?",
    answer:
      "Yes. The showroom helps coordinate model discovery and test-ride booking for available vehicles.",
  },
  {
    question: "What should I ask before visiting?",
    answer:
      "Confirm the model you want to see, the test-ride availability, and whether you want pricing or finance support during the visit.",
  },
];

const visitSignals = [
  "Official Ultraviolette dealership touchpoint in Nagarbhavi, Bengaluru",
  "Open daily from 10:00 AM to 7:00 PM",
  "Use the visit for lineup discovery, pricing discussion, finance context, and test-ride planning",
  "Call ahead if you want a specific model or test-ride slot confirmed before visiting",
];

export default function UltravioletteShowroomBengaluruPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": ["MotorcycleDealer", "LocalBusiness"],
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: absoluteUrl("/ultraviolette-showroom-bengaluru"),
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
      areaServed: ["Bengaluru", "Karnataka"],
      brand: {
        "@type": "Brand",
        name: "Ultraviolette Automotive",
      },
      sameAs: siteConfig.sameAs,
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
          name: "Ultraviolette Showroom Bengaluru",
          item: absoluteUrl("/ultraviolette-showroom-bengaluru"),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />
      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SeoH1>Ultraviolette Showroom in Bengaluru — Visit UV Bengaluru</SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Search Guide
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            ULTRAVIOLETTE
            <br />
            SHOWROOM
            <br />
            <span className="text-[#FF3B3B]">BENGALURU</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            UV Bengaluru in Nagarbhavi is the official dealership destination
            for riders who want to explore the lineup, understand pricing, and
            book a test ride in Bengaluru.
          </p>
        </div>
      </section>
      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl grid gap-4">
          {[
            `Location: ${showroomAddressText}`,
            "Hours: 10:00 AM - 7:00 PM",
            `Phone: ${siteConfig.phoneDisplay}`,
            "Support: showroom visits, test rides, pricing, finance guidance",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-6"
            >
              <p className="text-sm leading-relaxed text-[#A0A0A0]">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-b border-[#1a1a1a] bg-[#111] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[6px] border border-[#2A2A2A] bg-[#0d0d0d] p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
              Visit Planning
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold uppercase text-white">
              What To Confirm Before You Visit
            </h2>
            <div className="space-y-3">
              {[
                "Ask which models are currently on display.",
                "Confirm whether your preferred bike is available for a same-day test ride.",
                "Tell the team if you want pricing, finance, or booking guidance during the visit.",
                "Use WhatsApp or phone first if you are coming from outside Nagarbhavi and want a productive visit window.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[4px] border border-[#303030] bg-[#111] px-4 py-3"
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
                className="rounded-[6px] border border-[#2A2A2A] bg-[#0d0d0d] p-6"
              >
                <h3 className="mb-3 font-display text-lg font-bold uppercase text-white">
                  Showroom Signal
                </h3>
                <p className="text-sm leading-relaxed text-[#A0A0A0]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl grid gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-6"
            >
              <h3 className="mb-3 font-display text-lg font-bold uppercase text-white">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-[#A0A0A0]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-4 py-16 text-center md:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/showroom" className="btn-primary">
            Visit Showroom Page
          </Link>
          <a
            href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Open Map
          </a>
          <Link href="/test-ride" className="btn-ghost">
            Book Test Ride
          </Link>
        </div>
      </section>
    </>
  );
}
