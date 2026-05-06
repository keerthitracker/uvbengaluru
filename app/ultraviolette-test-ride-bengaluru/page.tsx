import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, showroomAddressText, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ultraviolette Test Ride in Bengaluru",
  description:
    "Book an Ultraviolette test ride in Bengaluru at UV Bengaluru, the official dealership in Nagarbhavi. Explore available models, process, timings, and what to expect.",
  alternates: {
    canonical: "/ultraviolette-test-ride-bengaluru",
  },
  openGraph: {
    title: "Ultraviolette Test Ride Bengaluru | UV Bengaluru",
    description:
      "Plan your Ultraviolette test ride in Bengaluru with model availability, location details, and booking guidance from UV Bengaluru.",
    url: absoluteUrl("/ultraviolette-test-ride-bengaluru"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const faqs = [
  {
    question: "Where can I book an Ultraviolette test ride in Bengaluru?",
    answer:
      "You can book an Ultraviolette test ride with UV Bengaluru, the official dealership in Nagarbhavi, Bengaluru.",
  },
  {
    question:
      "Which Ultraviolette models are typically available for test rides?",
    answer:
      "Availability can change, but the test-ride lineup usually centers on current retail models such as X-47 and the F77 range. Confirm the exact model before visiting.",
  },
  {
    question: "Do I need to book a test ride in advance?",
    answer:
      "Advance booking is recommended because it helps the showroom team prepare the right model, confirm the time slot, and reduce waiting time.",
  },
];

export default function UltravioletteTestRideBengaluruPage() {
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
          name: "Ultraviolette Test Ride Bengaluru",
          item: absoluteUrl("/ultraviolette-test-ride-bengaluru"),
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />

      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SeoH1>Ultraviolette Test Ride in Bengaluru</SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Search Guide
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            ULTRAVIOLETTE
            <br />
            TEST RIDE
            <br />
            <span className="text-[#FF3B3B]">BENGALURU</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            If you are searching for an Ultraviolette test ride in Bengaluru,
            the most direct path is UV Bengaluru in Nagarbhavi. This page
            explains where to go, how to book, what models to ask for, and what
            to expect before you ride.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-3xl font-bold uppercase text-white">
              Where To Book
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#A0A0A0]">
              UV Bengaluru is the official Ultraviolette dealership serving this
              route. The showroom handles model discovery, guided test rides,
              pricing conversations, and ownership support from the same
              location.
            </p>
            <p className="text-sm leading-relaxed text-[#A0A0A0]">
              Location: {showroomAddressText}
            </p>
          </div>
          <div className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-8">
            <h2 className="mb-4 font-display text-2xl font-bold uppercase text-white">
              Quick Booking Facts
            </h2>
            <div className="space-y-3 text-sm text-[#A0A0A0]">
              <p>Hours: 10:00 AM to 7:00 PM, all days</p>
              <p>Phone: {siteConfig.phoneDisplay}</p>
              <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
              <p>Recommended: book in advance for the exact model you want</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="mb-4 font-display text-3xl font-bold uppercase text-white">
              What To Expect
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-[#A0A0A0]">
              Searchers looking for a test ride usually want the practical
              details first. The flow is simple and designed to reduce friction.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Choose the model",
                text: "Ask specifically for the X-47 or F77 model you want to evaluate, because availability can vary.",
              },
              {
                title: "Confirm the slot",
                text: "The team confirms your timing, contact details, and any model-specific notes before your visit.",
              },
              {
                title: "Ride with context",
                text: "Expect a guided walkthrough of controls, performance positioning, and ownership questions after the ride.",
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
          Ready To Ride?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-[#A0A0A0]">
          Book your slot with UV Bengaluru and confirm the specific
          Ultraviolette model you want to experience.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/test-ride" className="btn-primary">
            Book Test Ride
          </Link>
          <Link href="/showroom" className="btn-ghost">
            Visit Showroom
          </Link>
        </div>
      </section>
    </>
  );
}
