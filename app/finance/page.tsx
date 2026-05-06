import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance Your Ultraviolette | UV Bengaluru",
  description:
    "Flexible EMI and finance options for Ultraviolette motorcycles at UV Bengaluru, Nagarbhavi. Compare indicative EMIs, ownership support, and buying guidance.",
};

const financeOptions = [
  {
    title: "EMI PLANS",
    desc: "Work with leading banks and NBFCs for monthly EMI options tailored to your budget and tenure preference.",
  },
  {
    title: "LOWER ENTRY BARRIERS",
    desc: "Ask the team about current finance structures, down-payment flexibility, and offer-linked affordability options.",
  },
  {
    title: "INSURANCE BUNDLING",
    desc: "We help buyers understand insurance and ownership-cost planning alongside the vehicle finance discussion.",
  },
];

const emiExamples = [
  { model: "X-47", price: "INR 2.49 lakh", emi: "INR 7,200/month (approx.)" },
  {
    model: "X-47 Recon",
    price: "INR 3.59 lakh",
    emi: "INR 10,400/month (approx.)",
  },
  {
    model: "F77 SuperStreet",
    price: "INR 3,09,000*",
    emi: "INR 9,000/month (approx.)",
  },
  {
    model: "F77 Mach 2",
    price: "INR 3.99 lakh",
    emi: "INR 11,500/month (approx.)",
  },
];

const steps = [
  {
    step: "01",
    title: "CHOOSE YOUR MODEL",
    desc: "Pick the Ultraviolette that fits your riding and ownership priorities.",
  },
  {
    step: "02",
    title: "FINANCE CONSULTATION",
    desc: "Our team helps you evaluate lender options, paperwork, and tenure scenarios clearly.",
  },
  {
    step: "03",
    title: "RIDE HOME",
    desc: "After approvals and documentation, you move from enquiry to delivery with dealership support.",
  },
];

const taxBenefits = [
  {
    title: "REDUCED GST",
    desc: "EVs attract lower GST than many petrol performance motorcycles, which helps overall purchase economics.",
  },
  {
    title: "ROAD TAX CONTEXT",
    desc: "State-level EV incentives and registration economics can improve the on-road picture depending on current rules.",
  },
  {
    title: "SECTION 80EEB",
    desc: "Eligible buyers may be able to claim income-tax deductions on EV loan interest under applicable rules.",
  },
  {
    title: "SUBSIDY CHECKS",
    desc: "Ask the team to clarify which current programmes or benefits still apply at the time of purchase.",
  },
];

export default function FinancePage() {
  return (
    <>
      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            Finance &amp; Ownership
          </p>
          <h1 className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
            MAKE YOUR <span className="text-[#FF3B3B]">UV</span>
            <br />
            YOURS TODAY
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#888]">
            Flexible EMI options and finance assistance to make Ultraviolette
            ownership more accessible for Bengaluru buyers.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              How We Help
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              FINANCE OPTIONS
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {financeOptions.map((option) => (
              <div
                key={option.title}
                className="border border-[#222] bg-[#111] p-8 transition-colors duration-300 hover:border-[#E8231A]"
              >
                <h3 className="mb-3 font-display text-xl font-extrabold uppercase text-white">
                  {option.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border border-[#222] bg-[#111] p-10">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
                Indicative Pricing
              </p>
              <h2 className="font-display text-4xl font-extrabold uppercase text-white">
                ESTIMATE YOUR EMI
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[#888]">
                These are orientation-only numbers. Contact the showroom for a
                personalized quote that reflects variant, tenure, down payment,
                insurance, and live Bengaluru pricing.
              </p>
            </div>
            <div className="mb-8 space-y-4">
              {emiExamples.map((example) => (
                <div
                  key={example.model}
                  className="flex flex-col justify-between gap-2 border-b border-[#1a1a1a] py-4 last:border-0 sm:flex-row sm:items-center"
                >
                  <div>
                    <span className="font-semibold text-white">
                      {example.model}
                    </span>
                    <span className="ml-3 text-sm text-[#666]">
                      {example.price}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#FF3B3B]">
                    {example.emi}
                  </span>
                </div>
              ))}
            </div>
            <p className="mb-6 text-xs text-[#555]">
              EMI values are indicative for a sample tenure. Actual EMI depends
              on lender, tenure, rate, profile, and the final on-road quote.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              GET A CUSTOM QUOTE
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-24 md:px-8">
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
              <div
                key={step.step}
                className="relative border border-[#222] bg-[#111] p-8"
              >
                <p className="mb-4 select-none font-display text-7xl font-extrabold leading-none text-[#FF3B3B]/15">
                  {step.step}
                </p>
                <h3 className="mb-3 font-display text-xl font-extrabold uppercase text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#888]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] bg-[#0c0c0c] px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
              Added Benefits
            </p>
            <h2 className="mb-8 font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
              TAX &amp; SUBSIDY ADVANTAGES
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {taxBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="border border-[#222] bg-[#111] p-6 transition-colors duration-300 hover:border-[#E8231A]"
                >
                  <h3 className="mb-2 font-display text-base font-extrabold uppercase text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#888]">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#E8231A]/20 bg-[#E8231A]/5 p-8">
            <h3 className="mb-4 text-lg font-bold uppercase text-[#FF3B3B]">
              SPEAK TO OUR FINANCE TEAM
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[#888]">
              Our finance desk is available at Nagarbhavi, Mon-Sun, 10 AM - 7
              PM. Walk in or reach us on WhatsApp or phone.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/919606955529?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Ultraviolette%20finance%20options"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#20bd5a]"
              >
                WhatsApp: 96069 55529
              </a>
              <a
                href="tel:+919606955530"
                className="flex items-center gap-3 border border-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#FF3B3B] transition-all hover:bg-white/10"
              >
                Call: 96069 55530
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8231A]/20 px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-5 font-display text-4xl font-extrabold uppercase text-white md:text-6xl">
            READY TO OWN AN
            <br />
            <span className="text-[#FF3B3B]">ULTRAVIOLETTE?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-[#888]">
            Book a test ride first, understand the machine, and then talk to our
            finance team about turning it into an ownership plan that works.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/test-ride"
              className="bg-[#E8231A] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C41C14]"
            >
              BOOK A TEST RIDE
            </Link>
            <Link
              href="/contact"
              className="border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#FF3B3B] transition-all hover:bg-white/10"
            >
              TALK TO US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
