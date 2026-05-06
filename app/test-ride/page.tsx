import type { Metadata } from "next";
import SeoH1 from "@/components/SeoH1";
import TestRideForm from "@/components/TestRideForm";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Ultraviolette Test Ride in Bengaluru",
  description:
    "Book a free Ultraviolette test ride in Bengaluru at UV Bengaluru, Nagarbhavi. Experience the X-47 and F77 range seven days a week, 10 AM–7 PM.",
  alternates: {
    canonical: "/test-ride",
  },
  openGraph: {
    title: "Book Ultraviolette Test Ride in Bengaluru | UV Bengaluru",
    description:
      "Reserve an Ultraviolette test ride in Bengaluru with UV Bengaluru in Nagarbhavi and confirm the right model before you visit.",
    url: absoluteUrl("/test-ride"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const steps = [
  {
    step: "01",
    title: "PICK YOUR MODEL",
    desc: "Choose the Ultraviolette you want to experience, such as the X-47 range or the F77 family.",
  },
  {
    step: "02",
    title: "CHOOSE YOUR SLOT",
    desc: "Select your preferred date and time. Our team confirms the slot by phone within 24 hours.",
  },
  {
    step: "03",
    title: "RIDE & EXPERIENCE",
    desc: "Visit our Nagarbhavi facility, meet the team, and experience the ride without pressure or obligation.",
  },
];

export default function TestRidePage() {
  return (
    <>
      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <SeoH1>Book an Ultraviolette Test Ride in Bengaluru</SeoH1>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            UV Bengaluru · Nagarbhavi
          </p>
          <div
            aria-hidden="true"
            className="mb-6 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl"
          >
            FEEL THE
            <br />
            <span className="text-[#FF3B3B]">DIFFERENCE.</span>
            <br />
            BOOK YOUR
            <br />
            TEST RIDE.
          </div>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#888]">
            UV Bengaluru in Nagarbhavi is the official place to book an
            Ultraviolette test ride in Bengaluru. Use this page to request the
            model you want, choose a preferred slot, and confirm your visit
            before you arrive at the showroom.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              The Process
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              HOW IT WORKS
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-[#E8231A] text-xl font-extrabold text-black">
                  {step.step}
                </div>
                <h3 className="mb-3 font-display text-xl font-extrabold uppercase text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Reserve Your Slot
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              BOOK YOUR
              <br />
              TEST RIDE
            </h2>
            <p className="mt-4 text-base text-[#888]">
              Fill in your details below. Our team will confirm your slot
              within 24 hours.
            </p>
          </div>
          <TestRideForm />
        </div>
      </section>

      <section className="border-t border-[#1a1a1a] bg-[#0c0c0c] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <h3 className="mb-1 font-display text-base font-bold uppercase text-white">
                Location
              </h3>
              <p className="text-sm text-[#888]">
                SJA Arcade, 904, 10th Cross Rd
                <br />
                ITI Layout, Naagarabhaavi
                <br />
                Bengaluru, Karnataka 560072
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-display text-base font-bold uppercase text-white">
                Hours
              </h3>
              <p className="text-sm text-[#888]">
                Monday - Sunday
                <br />
                10:00 AM - 7:00 PM
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-display text-base font-bold uppercase text-white">
                Contact
              </h3>
              <p className="text-sm text-[#888]">
                <a href="tel:+919606955530" className="transition-colors hover:text-white">
                  96069 55530
                </a>
                <br />
                <a
                  href="https://wa.me/919606955529"
                  className="transition-colors hover:text-white"
                >
                  WA: 96069 55529
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
