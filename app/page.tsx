import type { Metadata } from "next";
import Link from "next/link";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import VehicleImage from "@/components/VehicleImage";
import {
  getVehicleImageFrameClass,
  getVehicleImageObjectClass,
} from "@/lib/vehicleImagePresentation";
import { getVehicle, retailVehicles } from "@/lib/vehicles";
import { absoluteUrl, showroomAddressText, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Official Ultraviolette Dealership in Bengaluru",
  description:
    "UV Bengaluru is the official Ultraviolette dealership in Nagarbhavi, Bengaluru. Explore X-47, F77 Mach 2, F77 SuperStreet, book a test ride, or get finance support. Open daily 10 AM–7 PM.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UV Bengaluru | Official Ultraviolette Dealership, Nagarbhavi",
    description:
      "Explore Ultraviolette's X-47, F77 Mach 2, and F77 SuperStreet in Bengaluru. Book a test ride at our Nagarbhavi showroom. Performance electric motorcycles for the next generation.",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "UV Bengaluru dealership landing page",
      },
    ],
  },
};

const brandPillars = [
  {
    title: "Performance Engineering",
    description:
      "Ultraviolette machines are built around measurable performance: instant torque, long-range battery systems, and high-speed confidence engineered for serious riders.",
  },
  {
    title: "Radar + Smart Tech",
    description:
      "From UV Hypersense radar to connected ride intelligence, the platform goes beyond electric propulsion and turns the machine into an active technology product.",
  },
  {
    title: "Design / Aviation DNA",
    description:
      "The visual language is sharp, technical, and future-facing. Every motorcycle feels designed with intent rather than decorated for attention.",
  },
];

const ownershipActions = [
  {
    title: "Visit Our Showroom",
    description:
      "See the current lineup in person at Nagarbhavi, compare variants, and understand current Bengaluru pricing with the team.",
    href: "/showroom",
    cta: "Get Directions",
  },
  {
    title: "Book Test Ride",
    description:
      "Experience X-47 and the F77 range first-hand. Test rides are available daily with guided support from the showroom team.",
    href: "/test-ride",
    cta: "Reserve Slot",
  },
  {
    title: "Finance / Ownership Support",
    description:
      "Talk to us about EMI options, insurance, service, OTA support, and what long-term Ultraviolette ownership looks like.",
    href: "/finance",
    cta: "Explore Finance",
  },
];

const researchGuides = [
  {
    title: "Ultraviolette Showroom Bengaluru",
    description:
      "Use this page when you want the dealership address, visit context, and what to confirm before you come in.",
    href: "/ultraviolette-showroom-bengaluru",
  },
  {
    title: "Ultraviolette Test Ride Bengaluru",
    description:
      "Best starting point if your main intent is to book or plan a test ride in Bengaluru.",
    href: "/ultraviolette-test-ride-bengaluru",
  },
  {
    title: "F77 Price in Bengaluru",
    description:
      "Useful for riders comparing F77 pricing context, ownership questions, and local purchase planning.",
    href: "/f77-price-bengaluru",
  },
  {
    title: "F77 Mach 2 vs F77 SuperStreet",
    description:
      "Helps buyers decide which F77 direction fits their riding style before they visit the showroom.",
    href: "/f77-mach-2-vs-f77-superstreet",
  },
  {
    title: "Ultraviolette Service Centre Bengaluru",
    description:
      "Find the workshop touchpoint, service visit process, and support context for owners in Bengaluru.",
    href: "/ultraviolette-service-centre-bengaluru",
  },
  {
    title: "Electric Bike Finance Bengaluru",
    description:
      "Use this guide when your next question is EMI, on-road cost, and finance planning.",
    href: "/electric-bike-finance-bengaluru",
  },
];

const landingFaqs = [
  {
    question: "Is UV Bengaluru an official Ultraviolette dealership?",
    answer:
      "Yes. UV Bengaluru is the official Ultraviolette dealership in Nagarbhavi, Bengaluru, operated by Aadya Inc.",
  },
  {
    question: "Which Ultraviolette models can I explore at UV Bengaluru?",
    answer:
      "The lineup includes the X-47 range, F77 Mach 2, F77 SuperStreet, and selected pre-book platforms such as Tesseract and Shockwave, subject to current availability.",
  },
  {
    question: "Can I book an Ultraviolette test ride in Bengaluru?",
    answer:
      "Yes. Test rides can be booked through the website or directly with the showroom team during business hours.",
  },
  {
    question: "Where is the UV Bengaluru showroom located?",
    answer:
      "The showroom is located at SJA Arcade, 904, 10th Cross Road, ITI Layout, Papareddipalya, Naagarabhaavi, Bengaluru, Karnataka 560072.",
  },
];

const deferredSectionStyle = {
  contentVisibility: "auto" as const,
  containIntrinsicSize: "900px",
};

export default function HomePage() {
  const featured = getVehicle("x-47") ?? retailVehicles[0];

  if (!featured) return null;

  const featuredStats = featured.heroStats.slice(0, 4);
  const featuredFeatureCards = featured.features.slice(0, 3);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": ["MotorcycleDealer", "LocalBusiness"],
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description: siteConfig.description,
      url: siteConfig.url,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landingFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <StructuredData data={structuredData} />

      <section
        style={{ background: "#F5F5F5", minHeight: "100vh" }}
        className="flex items-center"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SeoH1>
                Official Ultraviolette Dealership in Bengaluru — UV Bengaluru,
                Nagarbhavi
              </SeoH1>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#666]">
                Official Ultraviolette Dealership - Nagarbhavi, Bengaluru
              </p>
              <div
                aria-hidden="true"
                className="mb-5 font-display text-[clamp(36px,6vw,58px)] font-bold uppercase leading-none text-[#1A1A1A]"
              >
                Electric Performance.
                <br />
                <span className="text-[#E8231A]">Refined.</span>
              </div>
              <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-[#666]">
                UV Bengaluru in Nagarbhavi is the official Ultraviolette
                dealership in Bengaluru, where riders can explore the X-47, F77
                Mach 2, and F77 SuperStreet, compare variants, and book a test
                ride with showroom guidance. The experience stays design-led and
                performance-first, but the first step is practical: get the
                right model, pricing context, and ownership support in one
                place.
              </p>
              <p className="mb-2 text-[15px] leading-relaxed text-[#666]">
                {showroomAddressText}
              </p>
              <p className="mb-9 text-sm text-[#888]">
                Open daily - 10:00 AM to 7:00 PM
              </p>
              <div className="mb-8 flex flex-wrap gap-3">
                <Link
                  href="/vehicles"
                  className="border border-[#1A1A1A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] hover:bg-black/5"
                >
                  Explore Vehicles
                </Link>
                <Link
                  href="/test-ride"
                  className="bg-[#E8231A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#C41C14]"
                >
                  Book Test Ride
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[rgba(232,35,26,0.08)] blur-[60px]" />
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <VehicleImage
                  src={featured.heroImage}
                  alt={featured.name}
                  label={featured.name}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#1A1A1A] bg-[#0D0D0D] py-20"
        style={deferredSectionStyle}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
                Why Ultraviolette
              </p>
              <h2 className="mb-6 font-display text-[clamp(28px,4vw,42px)] font-bold uppercase tracking-[0.08em] text-white">
                More Than An EV.
                <br />A New Kind Of{" "}
                <span className="text-[#FF3B3B]">Performance Machine.</span>
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-[#A0A0A0] md:text-base">
                Ultraviolette stands apart because the motorcycles are not
                positioned as simple electric replacements for petrol bikes.
                They are engineered as advanced performance machines with strong
                battery platforms, aggressive power delivery, connected
                intelligence, and a distinctly futuristic design language.
              </p>
              <p className="mb-5 text-sm leading-relaxed text-[#A0A0A0] md:text-base">
                For new visitors, the difference is immediately visible in the
                way the range, power, ride modes, radar-assisted safety, and
                control systems are presented as part of one coherent riding
                experience.
              </p>
              <p className="text-sm leading-relaxed text-[#A0A0A0] md:text-base">
                UV Bengaluru brings that experience into a real local setting: a
                place where you can understand the machines, compare the lineup,
                book a test ride, and make an informed ownership decision.
              </p>
            </div>

            <div className="grid gap-4">
              {brandPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[6px] border border-[#2A2A2A] bg-[#151515] p-6"
                >
                  <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-[0.06em] text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#1A1A1A] bg-[#111] py-20"
        style={deferredSectionStyle}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Featured Model Story
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold uppercase tracking-[0.08em] text-white">
              X-47:
              <span className="text-[#FF3B3B]"> The Flagship Crossover</span>
            </h2>
          </div>

          <div className="mb-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div
              className={`relative aspect-[16/11] overflow-hidden rounded-[6px] border border-[#2A2A2A] ${getVehicleImageFrameClass(featured.heroImage, "light")}`}
            >
              <VehicleImage
                src={featured.heroImage}
                alt={featured.name}
                label={featured.name}
                fill
                className={getVehicleImageObjectClass(featured.heroImage)}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="mb-3 font-display text-3xl font-bold uppercase tracking-[0.06em] text-white">
                {featured.tagline}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[#A0A0A0] md:text-base">
                {featured.subheadline}
              </p>
              <p className="mb-8 text-sm leading-relaxed text-[#A0A0A0] md:text-base">
                {featured.description}
              </p>

              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {featuredStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-[#2A2A2A] bg-[#171717] p-4"
                  >
                    <p className="font-display text-xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[#777]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={`/vehicles/${featured.slug}`}
                className="btn-primary text-xs"
              >
                Explore X-47
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featuredFeatureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] p-6"
              >
                <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#A0A0A0]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#1A1A1A] bg-[#0D0D0D] py-20"
        style={deferredSectionStyle}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Current Lineup
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-[0.08em] text-white">
              Choose Your <span className="text-[#FF3B3B]">Ultraviolette</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {retailVehicles.map((vehicle) => (
              <article
                key={vehicle.slug}
                className="card-hover flex flex-col overflow-hidden rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A]"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${getVehicleImageFrameClass(vehicle.cardImage, "light")}`}
                >
                  <VehicleImage
                    src={vehicle.cardImage}
                    alt={vehicle.name}
                    label={vehicle.name}
                    fill
                    className={getVehicleImageObjectClass(vehicle.cardImage)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <span
                    className={`absolute left-3 top-3 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${
                      vehicle.status === "pre-book"
                        ? "bg-[#F5C518] text-[#111]"
                        : "border border-[#2A2A2A] bg-[#111] text-white"
                    }`}
                  >
                    {vehicle.status === "pre-book" ? "Pre-book" : "Available"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                    {vehicle.category.replace(/-/g, " ")}
                  </p>
                  <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-[0.06em] text-white">
                    {vehicle.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#A0A0A0]">
                    {vehicle.subheadline}
                  </p>
                  <div className="mb-5 grid grid-cols-1 gap-3">
                    {vehicle.heroStats.slice(0, 3).map((stat) => (
                      <div
                        key={stat.label}
                        className="border border-[#2A2A2A] bg-[#141414] p-3"
                      >
                        <p className="text-sm font-bold text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[#777]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-auto mb-4 font-display text-lg font-bold text-white">
                    {vehicle.price}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href={`/vehicles/${vehicle.slug}`}
                      className="btn-ghost flex-1 px-3 py-2 text-center text-[11px]"
                    >
                      Discover
                    </Link>
                    <Link
                      href={
                        vehicle.status === "available"
                          ? "/test-ride"
                          : "/contact"
                      }
                      className="btn-primary flex-1 px-3 py-2 text-center text-[11px]"
                    >
                      {vehicle.status === "available" ? "Book" : "Enquire"}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#1A1A1A] bg-[#111] py-16"
        style={deferredSectionStyle}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Showroom & Ownership
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-[0.08em] text-white">
              Everything You Need
              <span className="text-[#FF3B3B]"> To Start Right</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#A0A0A0] md:text-base">
              From first walk-in to finance guidance and long-term support, UV
              Bengaluru is built to help you discover, evaluate, and own an
              Ultraviolette with confidence.
            </p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {ownershipActions.map((action) => (
              <article
                key={action.title}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] p-8"
              >
                <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-[0.08em] text-white">
                  {action.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#A0A0A0]">
                  {action.description}
                </p>
                <Link href={action.href} className="btn-primary text-xs">
                  {action.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="grid gap-6 rounded-[6px] border border-[#2A2A2A] bg-[#151515] p-6 md:grid-cols-3 md:p-8">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777]">
                Location
              </p>
              <p className="text-sm leading-relaxed text-white">
                {showroomAddressText}
              </p>
            </div>
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777]">
                Hours
              </p>
              <p className="text-sm leading-relaxed text-white">
                Open daily, 10:00 AM to 7:00 PM
              </p>
            </div>
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777]">
                Support
              </p>
              <p className="text-sm leading-relaxed text-white">
                Authorized sales, service, finance help, and ownership guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#1A1A1A] bg-[#151515] py-16"
        style={deferredSectionStyle}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Buyer Guides
            </p>
            <h2 className="mb-4 font-display text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-[0.08em] text-white">
              Start With The Right
              <span className="text-[#FF3B3B]"> Question</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#A0A0A0] md:text-base">
              These pages cover the commercial-intent queries riders usually
              search before they visit the showroom, compare models, or plan a
              booking conversation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {researchGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#111] p-6 transition-colors hover:border-[#E8231A]"
              >
                <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-white">
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#A0A0A0]">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#1A1A1A] bg-[#0D0D0D] py-20"
        style={deferredSectionStyle}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Quick Answers
            </p>
            <h2 className="mb-4 font-display text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-[0.08em] text-white">
              Questions Riders Ask Before Visiting
            </h2>
            <p className="text-sm leading-relaxed text-[#A0A0A0] md:text-base">
              This section answers common dealership, pricing, and test-ride
              queries.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {landingFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#151515] p-6"
              >
                <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-white">
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
    </>
  );
}
