import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, showroomAddressText, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showroom",
  description:
    "Visit UV Bengaluru's Nagarbhavi showroom, Bengaluru's official Ultraviolette dealership. Explore the lineup, compare variants, and get current pricing.",
  alternates: {
    canonical: "/showroom",
  },
  openGraph: {
    title: "Visit the UV Bengaluru Showroom",
    description:
      "Plan your visit to UV Bengaluru in Nagarbhavi for model exploration, pricing support, and test-ride assistance.",
    url: absoluteUrl("/showroom"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const showroomFeatures = [
  {
    title: "LIVE BIKE DISPLAYS",
    desc: "Explore the Ultraviolette lineup: X-47 series, F77 Mach 2, F77 SuperStreet, plus pre-book interest for Tesseract and Shockwave. Sit on them where available, explore every detail, and compare variants with the team.",
  },
  {
    title: "CERTIFIED EXPERTS",
    desc: "Our product specialists are trained directly by Ultraviolette. Get accurate specs, variant comparisons, and genuine advice without a hard sell.",
  },
  {
    title: "FINANCE & INSURANCE",
    desc: "We work with leading financiers to make ownership accessible. Get on-road pricing, EMI options, and insurance assistance in one visit.",
  },
  {
    title: "TEST RIDE BOOKINGS",
    desc: "Book your test ride on-site or online. Our Nagarbhavi facility is designed to help you experience the Ultraviolette ride before you commit.",
  },
];

const visitProof = [
  {
    title: "EASY TO FIND",
    desc: "The showroom is in Nagarbhavi at SJA Arcade, making it a practical visit point for riders coming from West Bengaluru and nearby neighborhoods.",
  },
  {
    title: "MAP AND CALL READY",
    desc: "You can call ahead, open directions instantly, and confirm model or test-ride availability before you leave.",
  },
  {
    title: "ONE-STOP VISIT",
    desc: "Use the same visit to discuss models, price context, finance options, and test rides instead of splitting the process across multiple touchpoints.",
  },
  {
    title: "SERVICE AREA CONTEXT",
    desc: "UV Bengaluru primarily serves Bengaluru riders while also handling enquiries from customers across Karnataka who want an official dealership touchpoint.",
  },
];

export default function ShowroomPage() {
  const showroomStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AutoDealer",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: absoluteUrl("/showroom"),
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
          name: "Showroom",
          item: absoluteUrl("/showroom"),
        },
      ],
    },
  ];

  return (
    <>
      <StructuredData data={showroomStructuredData} />

      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Nagarbhavi, Bengaluru
          </p>
          <h1 className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
            VISIT OUR
            <br />
            <span className="text-[#FF3B3B]">SHOWROOM</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#888]">
            Experience the full Ultraviolette lineup in person. Our Nagarbhavi
            showroom is open 7 days a week, so you can walk in or book an
            appointment in advance.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="border border-[#222] bg-[#111] p-6">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
                ADDRESS
              </h2>
              <p className="text-base leading-relaxed text-white">
                UV Bengaluru
                <br />
                {showroomAddressText}
              </p>
              <a
                href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF3B3B] transition-colors hover:text-white"
              >
                Get Directions
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#222] bg-[#111] p-6">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
                  HOURS
                </h2>
                <p className="text-sm leading-loose text-white">
                  Monday - Sunday
                  <br />
                  <span className="text-[#FF3B3B]">10:00 AM - 7:00 PM</span>
                </p>
              </div>
              <div className="border border-[#222] bg-[#111] p-6">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#888]">
                  CONTACT
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#666]">
                      Phone
                    </p>
                    <a
                      href="tel:+919606955530"
                      className="text-sm text-white transition-colors hover:text-white"
                    >
                      96069 55530
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#666]">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/919606955529"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white transition-colors hover:text-white"
                    >
                      96069 55529
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#666]">
                      Email
                    </p>
                    <a
                      href="mailto:hello@uvbengaluru.com"
                      className="break-all text-sm text-white transition-colors hover:text-white"
                    >
                      hello@uvbengaluru.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/test-ride"
                className="bg-[#E8231A] px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C41C14]"
              >
                BOOK TEST RIDE
              </Link>
              <Link
                href="/vehicles"
                className="border border-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#FF3B3B] transition-all hover:bg-white/10"
              >
                VIEW VEHICLES
              </Link>
            </div>
          </div>

          <div>
            <div className="h-80 w-full overflow-hidden border border-[#222] bg-[#111]">
              <iframe
                src="https://www.google.com/maps?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UV Bengaluru - Nagarbhavi Location"
              />
            </div>
            <a
              href="https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF3B3B] transition-colors hover:text-white"
            >
              Get Directions
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              When You Visit
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              WHAT TO EXPECT
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {showroomFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-[#222] bg-[#111] p-6 transition-colors duration-300 hover:border-[#E8231A]"
              >
                <h3 className="mb-3 font-display text-lg font-extrabold uppercase text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#111] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Visit Planning
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              SHOWROOM VISIT PROOF
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="border border-[#222] bg-[#0d0d0d] p-6 md:p-8">
              <h3 className="mb-4 font-display text-2xl font-extrabold uppercase text-white">
                Before You Visit
              </h3>
              <div className="space-y-3">
                {[
                  `Address: ${showroomAddressText}`,
                  "Hours: Monday to Sunday, 10:00 AM to 7:00 PM",
                  `Phone: ${siteConfig.phoneDisplay}`,
                  `WhatsApp: ${siteConfig.whatsappDisplay}`,
                  "Best practice: call ahead if you want a specific model, variant, or test-ride slot confirmed.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[4px] border border-[#2A2A2A] bg-[#111] px-4 py-3"
                  >
                    <p className="text-sm leading-relaxed text-[#A0A0A0]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {visitProof.map((item) => (
                <article
                  key={item.title}
                  className="border border-[#222] bg-[#0d0d0d] p-6"
                >
                  <h3 className="mb-3 font-display text-lg font-extrabold uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#888]">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              REACH OUT TO US
            </h2>
            <p className="mt-4 text-base text-[#888]">
              Have a question about a model, pricing, or your visit? Send us a
              message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
