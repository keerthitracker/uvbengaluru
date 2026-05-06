import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { getVehicle } from "@/lib/vehicles";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "F77 Mach 2 vs F77 SuperStreet — Which Ultraviolette to Buy?",
  description:
    "Compare F77 Mach 2 and F77 SuperStreet with rider-fit, price context, and buying guidance from UV Bengaluru in Bengaluru.",
  alternates: {
    canonical: "/f77-mach-2-vs-f77-superstreet",
  },
  openGraph: {
    title: "F77 Mach 2 vs F77 SuperStreet | UV Bengaluru",
    description:
      "Use this comparison to decide which F77 fits your riding style before you visit UV Bengaluru.",
    url: absoluteUrl("/f77-mach-2-vs-f77-superstreet"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const mach2 = getVehicle("f77-mach-2");
const superStreet = getVehicle("f77-superstreet");

const faqs = [
  {
    question:
      "What is the main difference between F77 Mach 2 and F77 SuperStreet?",
    answer:
      "The main difference is positioning. F77 Mach 2 leans more sport-focused, while F77 SuperStreet is tuned to feel more street-friendly and everyday usable.",
  },
  {
    question: "Which F77 is better for daily city riding?",
    answer:
      "For most riders prioritizing everyday city use, F77 SuperStreet is the more obvious first look because of its street-oriented positioning.",
  },
  {
    question: "Which one should performance-focused riders shortlist first?",
    answer:
      "Riders prioritizing the sharper, more aggressive F77 personality should shortlist the F77 Mach 2 first.",
  },
];

export default function F77ComparisonPage() {
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
          name: "F77 Mach 2 vs F77 SuperStreet",
          item: absoluteUrl("/f77-mach-2-vs-f77-superstreet"),
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />

      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SeoH1>
            F77 Mach 2 vs F77 SuperStreet — Which Ultraviolette Should You Buy?
          </SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Comparison Guide
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            F77 MACH 2
            <br />
            VS
            <br />
            <span className="text-[#FF3B3B]">F77 SUPERSTREET</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            If you are deciding between F77 Mach 2 and F77 SuperStreet, the
            smartest approach is to compare rider intent first. The bikes live
            in the same family, but they are not pointed at the same first-use
            case.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            mach2 && {
              title: mach2.name,
              price: mach2.price,
              useCase:
                "For riders who want the sharper, more sport-focused F77 expression.",
              priorities: [
                "Sharper performance-first appeal",
                "More aggressive F77 identity",
                "Best first look for sport-oriented buyers",
              ],
            },
            superStreet && {
              title: superStreet.name,
              price: superStreet.price,
              useCase:
                "For riders who want F77 DNA with a more street-friendly and everyday-oriented posture.",
              priorities: [
                "Better everyday approachability",
                "Street-led positioning",
                "Strong option for urban-first riders",
              ],
            },
          ]
            .filter(Boolean)
            .map((model) => (
              <article
                key={model!.title}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-8"
              >
                <h2 className="mb-2 font-display text-3xl font-bold uppercase text-white">
                  {model!.title}
                </h2>
                <p className="mb-4 text-lg font-bold text-[#FF3B3B]">
                  {model!.price}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-[#A0A0A0]">
                  {model!.useCase}
                </p>
                <div className="space-y-2">
                  {model!.priorities.map((item) => (
                    <p key={item} className="text-sm text-[#A0A0A0]">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 font-display text-3xl font-bold uppercase text-white">
            How To Choose
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Choose Mach 2 if",
                text: "you are shopping for the sharper, more sport-coded version of the F77 platform.",
              },
              {
                title: "Choose SuperStreet if",
                text: "you want the same ballistic family feel packaged in a more street-friendly interpretation.",
              },
              {
                title: "Best final step",
                text: "book a test ride and compare riding feel directly before making the final call.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[6px] border border-[#222] bg-[#111] p-6"
              >
                <h3 className="mb-3 font-display text-xl font-bold uppercase text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#A0A0A0]">
                  {item.text}
                </p>
              </article>
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
          Compare Them Properly
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-[#A0A0A0]">
          Talk to UV Bengaluru, understand the live pricing difference, and test
          ride the F77 version that fits your real use case.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/test-ride" className="btn-primary">
            Book Test Ride
          </Link>
          <Link href="/f77-price-bengaluru" className="btn-ghost">
            See Price Guide
          </Link>
        </div>
      </section>
    </>
  );
}
