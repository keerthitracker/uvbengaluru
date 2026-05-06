import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { showroomAddressText, siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ultraviolette Service Centre in Bengaluru",
  description:
    "Looking for an Ultraviolette service centre in Bengaluru? UV Bengaluru in Nagarbhavi handles service coordination, diagnostics, OTA support, and genuine-parts workshop help.",
  alternates: { canonical: "/ultraviolette-service-centre-bengaluru" },
  openGraph: {
    title: "Ultraviolette Service Centre Bengaluru | UV Bengaluru",
    description:
      "Find the official Bengaluru touchpoint for Ultraviolette service and workshop support.",
    url: absoluteUrl("/ultraviolette-service-centre-bengaluru"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const faqs = [
  {
    question: "Where can I service my Ultraviolette in Bengaluru?",
    answer:
      "UV Bengaluru in Nagarbhavi is the dealership touchpoint to contact for Ultraviolette workshop coordination, diagnostics, and service support.",
  },
  {
    question: "What type of service support is available?",
    answer:
      "Support typically includes scheduled maintenance, diagnostics, software and OTA support, and service work using genuine parts.",
  },
  {
    question: "Should I book before visiting?",
    answer:
      "Yes. Booking ahead helps the team plan workshop load and prepare for your specific service need.",
  },
];

const supportSignals = [
  "Official service touchpoint for Ultraviolette owners in Bengaluru",
  "Useful for scheduled maintenance, diagnostics, software support, and workshop coordination",
  "Booking ahead helps the team plan service load and understand your issue before you arrive",
  "Best results come when you share your model, issue summary, and preferred visit timing in advance",
];

export default function UltravioletteServiceCentreBengaluruPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: `${siteConfig.name} Service Centre`,
      url: absoluteUrl("/ultraviolette-service-centre-bengaluru"),
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
          name: "Ultraviolette Service Centre Bengaluru",
          item: absoluteUrl("/ultraviolette-service-centre-bengaluru"),
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
          <SeoH1>Ultraviolette Service Centre in Bengaluru</SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Search Guide
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            ULTRAVIOLETTE
            <br />
            SERVICE CENTRE
            <br />
            <span className="text-[#FF3B3B]">BENGALURU</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            If you are searching for an Ultraviolette service centre in
            Bengaluru, UV Bengaluru in Nagarbhavi is the right local touchpoint
            for workshop coordination and support.
          </p>
        </div>
      </section>
      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl grid gap-4">
          {[
            `Location: ${showroomAddressText}`,
            "Hours: 10:00 AM - 7:00 PM",
            `Phone: ${siteConfig.phoneDisplay}`,
            "Recommended: book before visiting",
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
              Before You Visit
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold uppercase text-white">
              Service Visit Checklist
            </h2>
            <div className="space-y-3">
              {[
                "Share your model name and the issue you are facing before the visit.",
                "Ask whether the support you need is workshop-related, diagnostic, or service-interval based.",
                "Confirm the likely drop-off timing and whether same-week planning is realistic.",
                "Carry any ownership or prior-service context that may help the team understand the issue faster.",
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
            {supportSignals.map((item) => (
              <article
                key={item}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#0d0d0d] p-6"
              >
                <h3 className="mb-3 font-display text-lg font-bold uppercase text-white">
                  Service Signal
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
          <Link href="/service" className="btn-ghost">
            Explore Service Support
          </Link>
        </div>
      </section>
    </>
  );
}
