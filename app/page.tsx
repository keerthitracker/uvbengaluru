import type { Metadata } from "next";
import Link from "next/link";
import VehicleImage from "@/components/VehicleImage";
import {
  getVehicleImageFrameClass,
  getVehicleImageObjectClass,
} from "@/lib/vehicleImagePresentation";
import { getVehicle, retailVehicles } from "@/lib/vehicles";

export const metadata: Metadata = {
  title: "Bengaluru's Home for Ultraviolette | UV Bengaluru",
  description:
    "UV Bengaluru is the official Ultraviolette electric mobility dealership in Nagarbhavi, Bengaluru. Explore X-47, F77 Mach 2, F77 SuperStreet, Tesseract, Shockwave, and more.",
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

export default function HomePage() {
  const featured = getVehicle("x-47") ?? retailVehicles[0];

  if (!featured) return null;

  const featuredStats = featured.heroStats.slice(0, 4);
  const featuredFeatureCards = featured.features.slice(0, 3);

  return (
    <>
      <section
        style={{ background: "#F5F5F5", minHeight: "100vh" }}
        className="flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#666] mb-6">
                Official Ultraviolette Dealership - Nagarbhavi, Bengaluru
              </p>
              <h1 className="font-display text-[clamp(36px,6vw,58px)] font-bold uppercase leading-none text-[#1A1A1A] mb-5">
                Electric Performance.
                <br />
                <span className="text-[#E8231A]">Refined.</span>
              </h1>
              <p className="text-[15px] text-[#666] leading-relaxed mb-6 max-w-xl">
                UV Bengaluru is your local gateway into Ultraviolette&apos;s
                world of high-performance electric mobility, intelligent
                technology, and design-led machines built for the next
                generation of riders.
              </p>
              <p className="text-[15px] text-[#666] leading-relaxed mb-2">
                SJA Arcade, 904, 10th Cross Rd, ITI Layout, Naagarabhaavi,
                Bengaluru
              </p>
              <p className="text-sm text-[#888] mb-9">
                Open daily - 10:00 AM to 7:00 PM
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
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
              <div className="relative w-full aspect-[4/3] overflow-hidden">
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

      <section className="bg-[#0D0D0D] py-20 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
                Why Ultraviolette
              </p>
              <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold uppercase tracking-[0.08em] text-white mb-6">
                More Than An EV.
                <br />A New Kind Of{" "}
                <span className="text-[#FF3B3B]">Performance Machine.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[#A0A0A0] mb-5">
                Ultraviolette stands apart because the motorcycles are not
                positioned as simple electric replacements for petrol bikes.
                They are engineered as advanced performance machines with strong
                battery platforms, aggressive power delivery, connected
                intelligence, and a distinctly futuristic design language.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#A0A0A0] mb-5">
                For new visitors, the difference is immediately visible in the
                way the range, power, ride modes, radar-assisted safety, and
                control systems are presented as part of one coherent riding
                experience.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#A0A0A0]">
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
                  <h3 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-white mb-3">
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

      <section className="bg-[#111] py-20 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Featured Model Story
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold uppercase tracking-[0.08em] text-white">
              X-47:
              <span className="text-[#FF3B3B]"> The Flagship Crossover</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center mb-10">
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
              <p className="font-display text-3xl font-bold uppercase tracking-[0.06em] text-white mb-3">
                {featured.tagline}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#A0A0A0] mb-4">
                {featured.subheadline}
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#A0A0A0] mb-8">
                {featured.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
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

          <div className="grid md:grid-cols-3 gap-4">
            {featuredFeatureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] p-6"
              >
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-white mb-3">
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

      <section className="bg-[#0D0D0D] py-20 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Current Lineup
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-[0.08em] text-white">
              Choose Your <span className="text-[#FF3B3B]">Ultraviolette</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        : "bg-[#111] text-white border border-[#2A2A2A]"
                    }`}
                  >
                    {vehicle.status === "pre-book" ? "Pre-book" : "Available"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                    {vehicle.category.replace(/-/g, " ")}
                  </p>
                  <h3 className="font-display mb-2 text-xl font-bold uppercase tracking-[0.06em] text-white">
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

      <section className="bg-[#111] py-16 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
              Showroom & Ownership
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-[0.08em] text-white">
              Everything You Need
              <span className="text-[#FF3B3B]"> To Start Right</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-[#A0A0A0]">
              From first walk-in to finance guidance and long-term support, UV
              Bengaluru is built to help you discover, evaluate, and own an
              Ultraviolette with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ownershipActions.map((action) => (
              <article
                key={action.title}
                className="rounded-[6px] border border-[#2A2A2A] bg-[#1A1A1A] p-8"
              >
                <h3 className="font-display mb-3 text-xl font-bold uppercase tracking-[0.08em] text-white">
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

          <div className="rounded-[6px] border border-[#2A2A2A] bg-[#151515] p-6 md:p-8 grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777] mb-2">
                Location
              </p>
              <p className="text-sm leading-relaxed text-white">
                SJA Arcade, 904, 10th Cross Rd, ITI Layout, Naagarabhaavi,
                Bengaluru
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777] mb-2">
                Hours
              </p>
              <p className="text-sm leading-relaxed text-white">
                Open daily, 10:00 AM to 7:00 PM
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777] mb-2">
                Support
              </p>
              <p className="text-sm leading-relaxed text-white">
                Authorized sales, service, finance help, and ownership guidance
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
