import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImmersiveHero from "@/components/ImmersiveHero";
import SeoH1 from "@/components/SeoH1";
import StructuredData from "@/components/StructuredData";
import VehicleImage from "@/components/VehicleImage";
import VehicleVariantExplorer from "@/components/VehicleVariantExplorer";
import {
  getVehicleImageFrameClass,
  getVehicleImageObjectClass,
} from "@/lib/vehicleImagePresentation";
import { getVehicle, vehicles } from "@/lib/vehicles";
import { absoluteUrl, siteConfig } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) {
    return { title: "Vehicle Not Found" };
  }

  return {
    title: `${vehicle.name} Price in Bengaluru`,
    description: `${vehicle.subheadline} ${vehicle.price}. Visit UV Bengaluru, Nagarbhavi for current pricing, availability, and booking guidance.`,
    alternates: {
      canonical: `/vehicles/${vehicle.slug}`,
    },
    openGraph: {
      title: `${vehicle.name} | UV Bengaluru`,
      description: `${vehicle.subheadline} ${vehicle.price}.`,
      url: absoluteUrl(`/vehicles/${vehicle.slug}`),
      images: [
        {
          url: absoluteUrl(vehicle.heroImage),
          alt: `${vehicle.name} at UV Bengaluru`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${vehicle.name} in Bengaluru | UV Bengaluru`,
      description: `${vehicle.subheadline} ${vehicle.price}.`,
      images: [absoluteUrl(vehicle.heroImage)],
    },
  };
}

function extractOfferPrice(value: string) {
  const numeric = value.replace(/[^0-9.]/g, "");
  if (!numeric) return undefined;

  if (/lakh/i.test(value)) {
    const amount = Number.parseFloat(numeric);
    return Number.isFinite(amount) ? Math.round(amount * 100000) : undefined;
  }

  const amount = Number.parseInt(numeric, 10);
  return Number.isFinite(amount) ? amount : undefined;
}

function statusLabel(status: string) {
  if (status === "available") return "Available / Test Ride";
  if (status === "pre-book") return "Pre-book / Register Interest";
  if (status === "enquiry-only") return "Enquiry Only";
  return "Story / Archive";
}

function buildVehicleFaqs(vehicle: NonNullable<ReturnType<typeof getVehicle>>) {
  const priceAnswer =
    vehicle.status === "available"
      ? `${vehicle.name} is currently positioned at ${vehicle.price}. UV Bengaluru can confirm the latest Bengaluru ex-showroom and on-road pricing before purchase.`
      : vehicle.status === "pre-book"
        ? `${vehicle.name} is currently in ${statusLabel(vehicle.status).toLowerCase()} mode. Contact UV Bengaluru for the latest price context, expected availability, and booking guidance.`
        : `${vehicle.name} is not positioned as regular in-stock showroom inventory. Contact UV Bengaluru for current enquiry guidance and availability context.`;

  const rideAnswer =
    vehicle.status === "available"
      ? `Yes. ${vehicle.name} is an available model, so it is the strongest candidate to ask about for a test ride at UV Bengaluru. Confirm the exact slot and model availability before visiting.`
      : `Test-ride availability for ${vehicle.name} depends on its current status and showroom planning. Contact UV Bengaluru to confirm whether a ride or viewing slot is available.`;

  const whoAnswer =
    vehicle.category === "electric-scooter"
      ? `${vehicle.name} suits riders looking for an Ultraviolette experience with everyday convenience, technology-led features, and urban usability.`
      : vehicle.category === "fun-bike"
        ? `${vehicle.name} suits riders who want a lighter, more playful, more unconventional electric performance machine rather than a typical commuter format.`
        : `${vehicle.name} suits riders who want ${vehicle.subheadline.toLowerCase()}`;

  return [
    {
      question: `What is the ${vehicle.name} price in Bengaluru?`,
      answer: priceAnswer,
    },
    {
      question: `Can I book or test ride the ${vehicle.name} at UV Bengaluru?`,
      answer: rideAnswer,
    },
    {
      question: `Who is the ${vehicle.name} best suited for?`,
      answer: whoAnswer,
    },
  ];
}

function buildWhyBuyPoints(
  vehicle: NonNullable<ReturnType<typeof getVehicle>>,
) {
  if (vehicle.slug === "f77-mach-2") {
    return [
      "The F77 Mach 2 is one of the strongest fits for Bengaluru riders who want outright performance, highway confidence, and a sharper sport-bike stance.",
      "UV Bengaluru can help you compare variants, understand charger choices, and verify how the 323 km IDC range claim translates into your use case.",
      "Because it is an available showroom model, you can usually move faster from enquiry to test ride, pricing discussion, and booking.",
    ];
  }

  if (vehicle.slug === "f77-superstreet") {
    return [
      "The F77 SuperStreet makes sense for Bengaluru riders who want F77 performance with a more everyday-friendly riding posture for city use.",
      "It is easier to position for mixed commuting, weekend rides, and regular ownership conversations than a pure story-led performance page.",
      "UV Bengaluru can help you compare it directly against the F77 Mach 2 before you decide which F77 is the better match.",
    ];
  }

  if (vehicle.slug === "x-47" || vehicle.slug === "x-47-desert-wing") {
    return [
      `${vehicle.name} is built for riders who want a more versatile Ultraviolette format for Bengaluru roads, outskirts, and occasional longer rides.`,
      "The combination of crossover ergonomics, strong range claims, and advanced rider-assist tech makes it easier to justify as more than a city-only machine.",
      "At UV Bengaluru, you can validate pricing, touring suitability, and current variant availability before committing.",
    ];
  }

  if (vehicle.category === "electric-scooter") {
    return [
      `${vehicle.name} is relevant for Bengaluru buyers looking for Ultraviolette technology in a more everyday urban format.`,
      "The practical ownership conversation is likely to focus on convenience, charging, storage, and launch timing rather than immediate in-stock purchase.",
      "UV Bengaluru can help you confirm launch sequence, pre-booking process, and which configuration is likely to suit your use case.",
    ];
  }

  return [
    `${vehicle.name} stands out because it offers a distinct Ultraviolette proposition rather than blending into generic EV messaging.`,
    "The Bengaluru dealership context matters because local pricing, availability, and delivery timing can differ from national headline messaging.",
    "A direct conversation with UV Bengaluru is the best way to verify whether this model is the right fit for your riding pattern and purchase timeline.",
  ];
}

function buildBookingChecklist(
  vehicle: NonNullable<ReturnType<typeof getVehicle>>,
) {
  const baseChecklist = [
    "Confirm the current Bengaluru ex-showroom and estimated on-road price.",
    "Check the exact variant, battery configuration, and charger option you want.",
    "Verify the current test-ride or display availability before visiting.",
  ];

  const verificationItems =
    vehicle.dealerVerificationRequired?.map((item) => `Confirm ${item}.`) ?? [];

  if (vehicle.status === "pre-book") {
    verificationItems.unshift(
      "Ask what the current pre-booking flow means for delivery priority and expected launch timing.",
    );
  }

  if (vehicle.slug === "f77-mach-2" || vehicle.slug === "f77-superstreet") {
    verificationItems.push(
      "Compare the F77 Mach 2 and F77 SuperStreet back-to-back if you are undecided between sportier and more street-focused ergonomics.",
    );
  }

  return [...baseChecklist, ...verificationItems];
}

function buildRelatedGuides(
  vehicle: NonNullable<ReturnType<typeof getVehicle>>,
) {
  const links = [
    {
      href: "/ultraviolette-test-ride-bengaluru",
      label: "Ultraviolette Test Ride Bengaluru",
      description:
        "Understand how to plan a showroom visit and test-ride discussion at UV Bengaluru.",
    },
  ];

  if (vehicle.slug === "f77-mach-2" || vehicle.slug === "f77-superstreet") {
    links.unshift(
      {
        href: "/f77-price-bengaluru",
        label: "F77 Price in Bengaluru",
        description:
          "Use this guide to understand current F77 pricing context before booking.",
      },
      {
        href: "/f77-mach-2-vs-f77-superstreet",
        label: "F77 Mach 2 vs F77 SuperStreet",
        description:
          "Compare the two key F77 directions before you choose your model.",
      },
    );
  }

  if (vehicle.slug === "x-47" || vehicle.slug === "x-47-desert-wing") {
    links.push({
      href: "/ultraviolette-showroom-bengaluru",
      label: "Ultraviolette Showroom Bengaluru",
      description:
        "Plan a showroom visit to compare the X-47 lineup, variants, and availability.",
    });
  }

  if (vehicle.category === "electric-scooter") {
    links.push({
      href: "/electric-bike-finance-bengaluru",
      label: "Electric Bike Finance Bengaluru",
      description:
        "Understand financing conversations and ownership planning before launch or pre-booking.",
    });
  }

  return links;
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);

  if (!vehicle) notFound();

  const isAvailable = vehicle.status === "available";
  const isPreBook = vehicle.status === "pre-book";
  const primaryHref = isAvailable ? "/test-ride" : "/contact";
  const galleryLead = vehicle.gallery[0];
  const galleryRest = vehicle.gallery.slice(1);
  const vehicleFaqs = buildVehicleFaqs(vehicle);
  const whyBuyPoints = buildWhyBuyPoints(vehicle);
  const bookingChecklist = buildBookingChecklist(vehicle);
  const relatedGuides = buildRelatedGuides(vehicle);
  const offerPrice = extractOfferPrice(
    vehicle.variants?.[0]?.priceLabel ?? vehicle.price,
  );
  const productStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: vehicle.name,
      description: vehicle.description,
      image: vehicle.gallery.map((item) => absoluteUrl(item.src)),
      brand: {
        "@type": "Brand",
        name: "Ultraviolette",
      },
      category: vehicle.category,
      sku: vehicle.slug,
      manufacturer: {
        "@type": "Organization",
        name: "Ultraviolette",
      },
      offers: {
        "@type": "Offer",
        ...(offerPrice
          ? {
              priceCurrency: "INR",
              price: offerPrice,
            }
          : {}),
        availability: isAvailable
          ? "https://schema.org/InStock"
          : isPreBook
            ? "https://schema.org/PreOrder"
            : "https://schema.org/LimitedAvailability",
        url: absoluteUrl(`/vehicles/${vehicle.slug}`),
        seller: {
          "@type": "AutoDealer",
          name: siteConfig.name,
        },
      },
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
          name: "Vehicles",
          item: absoluteUrl("/vehicles"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: vehicle.name,
          item: absoluteUrl(`/vehicles/${vehicle.slug}`),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: vehicleFaqs.map((faq) => ({
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
      <StructuredData data={productStructuredData} />

      <ImmersiveHero
        vehicle={vehicle}
        primaryHref={primaryHref}
        isAvailable={isAvailable}
        isPreBook={isPreBook}
      />

      <section className="border-t border-white/8 bg-[linear-gradient(180deg,#0b0b0b_0%,#121212_100%)] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
          <div className="rounded-[32px] border border-white/8 bg-white/[0.03] p-7 md:p-9">
            <SeoH1>
              {vehicle.name} price in Bengaluru at UV Bengaluru
            </SeoH1>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
              Positioning
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold uppercase tracking-[0.06em] text-white md:text-4xl">
              About {vehicle.name}
            </h2>
            <p className="text-base leading-8 text-[#A0A0A0] md:text-lg">
              {vehicle.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {vehicle.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5 md:p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#777]">
                  {spec.label}
                </p>
                <p className="mt-3 font-display text-2xl font-bold text-white md:text-[30px]">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {vehicle.variants && vehicle.variants.length > 0 && (
        <section className="bg-[#111] px-4 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
                Variants
              </p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">
                Choose Your Configuration
              </h2>
            </div>
            <VehicleVariantExplorer variants={vehicle.variants} />
          </div>
        </section>
      )}

      {vehicle.features.length > 0 && (
        <section className="bg-[#0D0D0D] px-4 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
                Feature Story
              </p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">
                Engineering Highlights
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {vehicle.features.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.03] ${
                    index === 0 && feature.image ? "lg:col-span-2" : ""
                  }`}
                >
                  {feature.image && (
                    <div
                      className={`relative ${
                        index === 0 ? "aspect-[16/8]" : "aspect-video"
                      } ${getVehicleImageFrameClass(feature.image)}`}
                    >
                      <VehicleImage
                        src={feature.image}
                        alt={feature.title}
                        label={feature.title}
                        fill
                        className={getVehicleImageObjectClass(feature.image)}
                        sizes={
                          index === 0
                            ? "(max-width: 1024px) 100vw, 66vw"
                            : "(max-width: 1024px) 100vw, 33vw"
                        }
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-7">
                    <h3 className="mb-3 font-display text-xl font-bold uppercase text-white md:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#A0A0A0]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#111] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
              Specifications
            </p>
            <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">
              Detailed Spec Groups
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {vehicle.specGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-7"
              >
                <h3 className="mb-5 font-display text-2xl font-bold uppercase text-white">
                  {group.title}
                </h3>
                <div>
                  {group.specs.map((spec, index) => (
                    <div
                      key={spec.label}
                      className="grid gap-2 py-3 sm:grid-cols-[0.46fr_0.54fr]"
                      style={{
                        borderBottom:
                          index < group.specs.length - 1
                            ? "1px solid #2A2A2A"
                            : "none",
                      }}
                    >
                      <span className="text-sm text-[#A0A0A0]">
                        {spec.label}
                      </span>
                      <span className="text-sm font-semibold leading-relaxed text-white">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {vehicle.gallery.length > 0 && (
        <section className="bg-[#0D0D0D] px-4 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
                Gallery
              </p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">
                Gallery
              </h2>
            </div>

            {galleryLead && (
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-[30px] border border-white/8 ${getVehicleImageFrameClass(galleryLead.src)}`}
                >
                  <VehicleImage
                    src={galleryLead.src}
                    alt={galleryLead.alt}
                    label={galleryLead.alt}
                    fill
                    className={getVehicleImageObjectClass(galleryLead.src)}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  {galleryRest.map((item) => (
                    <div
                      key={`${item.type}-${item.src}`}
                      className={`relative aspect-video overflow-hidden rounded-[28px] border border-white/8 ${getVehicleImageFrameClass(item.src)}`}
                    >
                      <VehicleImage
                        src={item.src}
                        alt={item.alt}
                        label={item.alt}
                        fill
                        className={getVehicleImageObjectClass(item.src)}
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {vehicle.dealerVerificationRequired &&
        vehicle.dealerVerificationRequired.length > 0 && (
          <section className="border-t border-[#2A2A2A] bg-[#111] px-4 py-12 md:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C518]">
                Dealer Verification Required
              </p>
              <div className="flex flex-wrap gap-3">
                {vehicle.dealerVerificationRequired.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-[#A0A0A0]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

      <section className="border-t border-[#2A2A2A] bg-[#0f0f0f] px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
              Bengaluru Fit
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold uppercase tracking-[0.06em] text-white">
              Why Buy {vehicle.name} In Bengaluru
            </h2>
            <div className="space-y-4">
              {whyBuyPoints.map((point) => (
                <p
                  key={point}
                  className="text-sm leading-relaxed text-[#A0A0A0]"
                >
                  {point}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5C518]">
              Before You Book
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold uppercase tracking-[0.06em] text-white">
              What To Confirm Before Booking
            </h2>
            <div className="space-y-3">
              {bookingChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/8 bg-black/20 px-4 py-3"
                >
                  <p className="text-sm leading-relaxed text-[#A0A0A0]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-[#2A2A2A] bg-[#0D0D0D] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
              Buyer Questions
            </p>
            <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">
              Quick Answers About {vehicle.name}
            </h2>
          </div>
          <div className="grid gap-4">
            {vehicleFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6"
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

      <section className="border-t border-[#2A2A2A] bg-[#111] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF3B3B]">
              Related Guides
            </p>
            <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-white">
              Continue Your Research
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-[#E8231A]"
              >
                <h3 className="mb-3 font-display text-lg font-bold uppercase text-white">
                  {guide.label}
                </h3>
                <p className="text-sm leading-relaxed text-[#A0A0A0]">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-4 py-16 text-center md:px-8">
        <h2 className="mb-4 font-display text-4xl font-bold uppercase text-white">
          Ready For The Next Step?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-[#A0A0A0]">
          Contact UV Bengaluru for current price, availability, test rides,
          pre-booking, and delivery timelines.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={primaryHref} className="btn-primary">
            {isAvailable ? "Book Test Ride" : "Contact Showroom"}
          </Link>
          <Link href="/vehicles" className="btn-ghost">
            Explore Other Models
          </Link>
        </div>
      </section>
    </>
  );
}
