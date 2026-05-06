import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources & Buying Guides",
  description:
    "Explore UV Bengaluru buying guides for test rides, pricing, F77 comparisons, showroom visits, service centre queries, and finance research.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "UV Bengaluru Resources & Buying Guides",
    description:
      "Browse grouped buying guides and local search resources for Ultraviolette research in Bengaluru.",
    url: absoluteUrl("/resources"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const guideGroups = [
  {
    title: "Visit & Test Ride",
    items: [
      {
        title: "Ultraviolette Test Ride Bengaluru",
        href: "/ultraviolette-test-ride-bengaluru",
        text: "Where to book, what to expect, and how to plan your first Ultraviolette ride in Bengaluru.",
      },
      {
        title: "Ultraviolette Showroom Bengaluru",
        href: "/ultraviolette-showroom-bengaluru",
        text: "Find the official Bengaluru showroom touchpoint and plan your visit properly.",
      },
    ],
  },
  {
    title: "Price & Finance",
    items: [
      {
        title: "F77 Price in Bengaluru",
        href: "/f77-price-bengaluru",
        text: "Understand F77 pricing context before you request the exact showroom quote.",
      },
      {
        title: "Electric Bike Finance Bengaluru",
        href: "/electric-bike-finance-bengaluru",
        text: "Get practical context on EMI, on-road cost, and ownership planning.",
      },
    ],
  },
  {
    title: "Comparison & Service",
    items: [
      {
        title: "F77 Mach 2 vs F77 SuperStreet",
        href: "/f77-mach-2-vs-f77-superstreet",
        text: "Compare the sport-focused and street-focused F77 expressions before you shortlist one.",
      },
      {
        title: "Ultraviolette Service Centre Bengaluru",
        href: "/ultraviolette-service-centre-bengaluru",
        text: "Use this guide to find the local workshop touchpoint for service and diagnostics.",
      },
    ],
  },
];

export default function ResourcesPage() {
  const guideItems = guideGroups.flatMap((group) => group.items);

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "UV Bengaluru Resources & Buying Guides",
            url: absoluteUrl("/resources"),
            description:
              "Grouped buying guides and research resources for Ultraviolette discovery in Bengaluru.",
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
                name: "Resources",
                item: absoluteUrl("/resources"),
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "UV Bengaluru buying guides",
            itemListElement: guideItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              url: absoluteUrl(item.href),
            })),
          },
        ]}
      />

      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SeoH1>Ultraviolette Buying Guides in Bengaluru</SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Knowledge Hub
          </p>
          <div
            aria-hidden="true"
            className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            RESOURCES
            <br />
            & BUYING
            <br />
            <span className="text-[#FF3B3B]">GUIDES</span>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#888]">
            This hub groups the most useful research pages for buyers comparing
            Ultraviolette models, pricing, finance, service, and showroom
            discovery in Bengaluru.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          {guideGroups.map((group) => (
            <section key={group.title}>
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold uppercase tracking-[0.08em] text-white">
                  {group.title}
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map((item) => (
                  <article
                    key={item.href}
                    className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-8"
                  >
                    <h3 className="mb-3 font-display text-2xl font-bold uppercase text-white">
                      {item.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#A0A0A0]">
                      {item.text}
                    </p>
                    <Link
                      href={item.href}
                      className="btn-ghost inline-block text-xs"
                    >
                      Read Guide
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
