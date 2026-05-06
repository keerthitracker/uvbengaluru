import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electric Bike Finance in Bengaluru — Ultraviolette EMI Options",
  description:
    "Looking for electric bike finance in Bengaluru? UV Bengaluru helps buyers understand EMI, on-road cost context, and ownership planning for Ultraviolette models.",
  alternates: { canonical: "/electric-bike-finance-bengaluru" },
  openGraph: {
    title: "Electric Bike Finance Bengaluru | UV Bengaluru",
    description:
      "Use this page to understand electric bike finance context in Bengaluru before speaking to the showroom team.",
    url: absoluteUrl("/electric-bike-finance-bengaluru"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const faqs = [
  {
    question: "Can I finance an electric bike in Bengaluru?",
    answer:
      "Yes. Buyers commonly finance electric two-wheelers through bank or NBFC-backed EMI structures, and the dealership can help you evaluate the options.",
  },
  {
    question: "What affects my EMI?",
    answer:
      "EMI depends on the bike price, down payment, tenure, lender terms, and your approval profile.",
  },
  {
    question: "Should I ask only for EMI or also for on-road cost?",
    answer:
      "Always ask for both. EMI alone is incomplete without the full Bengaluru on-road context, insurance, and any current offers.",
  },
];

const financeSignals = [
  "Ask for both ex-showroom and estimated on-road cost in Bengaluru",
  "EMI becomes meaningful only when down payment, tenure, and insurance are discussed together",
  "Finance support works best when you already know the model or shortlist you want to discuss",
  "Use the dealership conversation to compare ownership fit, not just monthly EMI",
];

export default function ElectricBikeFinanceBengaluruPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      name: `${siteConfig.name} Finance Guidance`,
      url: absoluteUrl("/electric-bike-finance-bengaluru"),
      provider: {
        "@type": "AutoDealer",
        name: siteConfig.name,
        telephone: siteConfig.phoneHref,
      },
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
          name: "Electric Bike Finance Bengaluru",
          item: absoluteUrl("/electric-bike-finance-bengaluru"),
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
          <SeoH1>
            Electric Bike Finance in Bengaluru — Ultraviolette EMI Options
          </SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Search Guide
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            ELECTRIC BIKE
            <br />
            FINANCE
            <br />
            <span className="text-[#FF3B3B]">BENGALURU</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            Buyers searching for electric bike finance in Bengaluru usually want
            practical clarity: EMI, down-payment reality, and what to confirm
            before deciding. UV Bengaluru helps guide that conversation for the
            Ultraviolette lineup.
          </p>
        </div>
      </section>
      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl grid gap-4">
          {[
            "Model price and final on-road cost",
            "Down payment and lender structure",
            "Tenure, EMI, and insurance planning",
            `Contact: ${siteConfig.phoneDisplay}`,
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
              Finance Planning
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold uppercase text-white">
              What To Ask The Showroom Team
            </h2>
            <div className="space-y-3">
              {[
                "Ask for the full Bengaluru on-road estimate, not only the EMI.",
                "Clarify what down payment range changes the monthly outcome most meaningfully.",
                "Understand how insurance and accessory decisions affect the ownership number.",
                "If you are comparing F77 or X-47 variants, ask for finance context on the exact one you want.",
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
            {financeSignals.map((item) => (
              <article
                key={item}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#0d0d0d] p-6"
              >
                <h3 className="mb-3 font-display text-lg font-bold uppercase text-white">
                  Finance Signal
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
          <Link href="/finance" className="btn-primary">
            Explore Finance Page
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Showroom
          </Link>
        </div>
      </section>
    </>
  );
}
