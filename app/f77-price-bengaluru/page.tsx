import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { getVehicle } from "@/lib/vehicles";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "F77 Price in Bengaluru 2026 — Mach 2 and SuperStreet Costs",
  description:
    "Current F77 Mach 2 price from ₹3.99L and F77 SuperStreet from ₹3.09L in Bengaluru. Compare variants, pricing context, and next steps with UV Bengaluru.",
  alternates: {
    canonical: "/f77-price-bengaluru",
  },
  openGraph: {
    title: "F77 Price in Bengaluru | UV Bengaluru",
    description:
      "Use this guide to understand F77 pricing context in Bengaluru and what to confirm with the official UV Bengaluru showroom.",
    url: absoluteUrl("/f77-price-bengaluru"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const mach2 = getVehicle("f77-mach-2");
const superStreet = getVehicle("f77-superstreet");

const faqs = [
  {
    question: "What is the F77 price in Bengaluru?",
    answer:
      "Pricing depends on the exact F77 variant, current offers, and on-road factors. UV Bengaluru can confirm the current Bengaluru ex-showroom and on-road numbers.",
  },
  {
    question: "Which is more affordable in the F77 range?",
    answer:
      "The F77 SuperStreet typically sits below the F77 Mach 2 in entry price, while the Mach 2 is positioned as the sharper sport-focused option.",
  },
  {
    question: "Should I trust only a price listed online?",
    answer:
      "No. Use online pricing as orientation only, then verify current Bengaluru pricing, insurance, registration, and offer eligibility directly with the dealership.",
  },
];

export default function F77PriceBengaluruPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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
          name: "F77 Price Bengaluru",
          item: absoluteUrl("/f77-price-bengaluru"),
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />

      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SeoH1>F77 Price in Bengaluru — Mach 2 and SuperStreet</SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Search Guide
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            F77 PRICE
            <br />
            IN
            <br />
            <span className="text-[#FF3B3B]">BENGALURU</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            People searching for F77 price in Bengaluru usually want one of two
            things: a realistic starting number and clarity on which F77 version
            makes more sense. This page gives that context before you speak to
            the showroom.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="mb-4 font-display text-3xl font-bold uppercase text-white">
              Current F77 Range Context
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[#A0A0A0]">
              For Bengaluru buyers, the key comparison is usually between the
              F77 SuperStreet and the F77 Mach 2. The showroom can confirm live
              pricing, but the lineup split is already clear.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              mach2 && {
                title: mach2.name,
                price: mach2.price,
                text: "Sport-focused F77 positioning with stronger performance-first appeal for riders who want the sharper expression of the platform.",
              },
              superStreet && {
                title: superStreet.name,
                price: superStreet.price,
                text: "Street-oriented F77 positioning that typically serves as the more accessible entry into the F77 family.",
              },
            ]
              .filter(Boolean)
              .map((item) => (
                <article
                  key={item!.title}
                  className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-8"
                >
                  <h3 className="mb-2 font-display text-2xl font-bold uppercase text-white">
                    {item!.title}
                  </h3>
                  <p className="mb-4 text-lg font-bold text-[#FF3B3B]">
                    {item!.price}
                  </p>
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">
                    {item!.text}
                  </p>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-display text-3xl font-bold uppercase text-white">
            What To Confirm Before You Buy
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Current Bengaluru ex-showroom pricing",
              "On-road pricing after insurance and registration",
              "Any active offers, delivery timelines, and finance options",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[6px] border border-[#222] bg-[#111] p-6"
              >
                <p className="text-sm leading-relaxed text-[#A0A0A0]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 font-display text-3xl font-bold uppercase text-white">
            Common Questions
          </h2>
          <div className="grid gap-4">
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
        </div>
      </section>

      <section className="px-4 py-16 text-center md:px-8">
        <h2 className="mb-4 font-display text-4xl font-bold uppercase text-white">
          Want The Exact Bengaluru Quote?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-[#A0A0A0]">
          Talk to UV Bengaluru for the live F77 Mach 2 and F77 SuperStreet
          numbers, including current offers and on-road pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/finance" className="btn-primary">
            Explore Finance
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Showroom
          </Link>
        </div>
      </section>
    </>
  );
}
