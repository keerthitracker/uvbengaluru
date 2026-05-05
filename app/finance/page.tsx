import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finance Your Ultraviolette | UV Bengaluru',
  description:
    'Flexible EMI and finance options for Ultraviolette motorcycles at UV Bengaluru, Nagarbhavi. Low monthly payments, insurance bundling, and zero down payment options available.',
}

const financeOptions = [
  {
    title: 'EMI PLANS',
    desc: 'Work with leading banks and NBFCs for monthly EMI options tailored to your budget. Competitive interest rates on all Ultraviolette models with tenures from 12 to 60 months.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'ZERO DOWN PAYMENT',
    desc: 'Select finance partners offer zero or minimal down payment options. Ask our team about current promotions and eligibility — making your Ultraviolette even more accessible.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'INSURANCE BUNDLING',
    desc: 'We assist with comprehensive motor insurance from leading providers. Bundle with your finance for a single, hassle-free monthly payment that covers everything.',
    icon: (
      <svg className="w-8 h-8 text-[#FF3B3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const emiExamples = [
  { model: 'X-47', price: 'INR 2.49 lakh', emi: 'INR 7,200/month (approx.)' },
  { model: 'X-47 Recon', price: 'INR 3.59 lakh', emi: 'INR 10,400/month (approx.)' },
  { model: 'F77 SuperStreet', price: 'INR 3,09,000*', emi: 'INR 9,000/month (approx.)' },
  { model: 'F77 Mach 2', price: 'INR 3.99 lakh', emi: 'INR 11,500/month (approx.)' },
]

const steps = [
  {
    step: '01',
    title: 'CHOOSE YOUR MODEL',
    desc: 'Pick the Ultraviolette that fits you. Our showroom team will walk you through variant and pricing options, from the X-47 family to the F77 Mach 2.',
  },
  {
    step: '02',
    title: 'FINANCE CONSULTATION',
    desc: 'Our finance desk connects you with the right lender. We handle the paperwork, liaise with banks, and explain your options clearly — no jargon.',
  },
  {
    step: '03',
    title: 'RIDE HOME',
    desc: 'Approvals are typically fast. Complete your docs, collect your keys, and take your Ultraviolette home the same day.',
  },
]

const taxBenefits = [
  { title: 'REDUCED GST', desc: 'EVs attract 5% GST compared to 28%+ for petrol motorcycles — a significant cost advantage at purchase.' },
  { title: 'ROAD TAX WAIVER', desc: 'Karnataka offers road tax exemptions or reductions for electric vehicles, lowering your on-road price.' },
  { title: 'SECTION 80EEB', desc: 'Claim up to ₹1.5 lakh deduction on interest paid on EV loans under Section 80EEB of the Income Tax Act.' },
  { title: 'FAME-II / PM E-DRIVE', desc: 'Government subsidy programmes (where applicable) can further reduce the effective purchase price. Ask our team for current eligibility.' },
]

export default function FinancePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Finance &amp; Ownership</p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-white mb-5">
            MAKE YOUR <span className="text-[#FF3B3B]">UV</span><br />
            YOURS TODAY
          </h1>
          <p className="text-[#888] text-lg max-w-xl leading-relaxed">
            Flexible EMI options and finance assistance to make Ultraviolette ownership accessible. Talk to our team at Nagarbhavi to find the right plan for you.
          </p>
        </div>
      </section>

      {/* Finance Options */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">How We Help</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              FINANCE OPTIONS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {financeOptions.map((option) => (
              <div key={option.title} className="bg-[#111] border border-[#222] p-8 hover:border-[#E8231A] transition-colors duration-300">
                <div className="mb-5">{option.icon}</div>
                <h3 className="font-display text-xl font-extrabold uppercase text-white mb-3">{option.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Examples */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111] border border-[#222] p-10">
            <div className="mb-8">
              <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Indicative Pricing</p>
              <h2 className="font-display text-4xl font-extrabold uppercase text-white">
                ESTIMATE YOUR EMI
              </h2>
              <p className="text-[#888] text-sm mt-3 max-w-xl">
                Contact our finance team for a personalized quote. We&apos;ll factor in your preferred variant, down payment, and tenure to find the best plan. Below are indicative EMIs for a 36-month tenure.
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {emiExamples.map((ex) => (
                <div key={ex.model} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-[#1a1a1a] last:border-0 gap-2">
                  <div>
                    <span className="text-white font-semibold">{ex.model}</span>
                    <span className="text-[#666] text-sm ml-3">{ex.price}</span>
                  </div>
                  <span className="text-[#FF3B3B] font-bold text-sm">{ex.emi}</span>
                </div>
              ))}
            </div>
            <p className="text-[#555] text-xs mb-6">
              * EMI amounts are indicative for a 36-month tenure. Actual EMI depends on bank, tenure, interest rate, and credit profile. Contact us for an accurate on-road quote.
            </p>
            <Link
              href="/contact"
              className="inline-block btn-primary transition-colors"
            >
              GET A CUSTOM QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">The Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              HOW IT WORKS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="bg-[#111] border border-[#222] p-8 relative">
                <p className="font-display text-7xl font-extrabold text-[#FF3B3B]/15 leading-none mb-4 select-none">{step.step}</p>
                <h3 className="font-display text-xl font-extrabold uppercase text-white mb-3">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-[#FF3B3B] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Added Benefits</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white mb-8">
              TAX &amp; SUBSIDY ADVANTAGES
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {taxBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-[#111] border border-[#222] p-6 hover:border-[#E8231A] transition-colors duration-300">
                  <h3 className="font-display text-base font-extrabold uppercase text-white mb-2">{benefit.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#E8231A]/5 border border-[#E8231A]/20 p-8">
            <h3 className="text-lg font-bold uppercase text-[#FF3B3B] mb-4">SPEAK TO OUR FINANCE TEAM</h3>
            <p className="text-[#888] text-sm leading-relaxed mb-6">
              Our finance desk is available at Nagarbhavi, Mon–Sun, 10 AM – 7 PM. Walk in or reach us on WhatsApp or phone.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/919606955529?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20Ultraviolette%20finance%20options"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white font-bold uppercase tracking-widest px-5 py-3 text-xs hover:bg-[#20bd5a] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp: 96069 55529
              </a>
              <a
                href="tel:+919606955530"
                className="flex items-center gap-3 border border-white text-[#FF3B3B] font-bold uppercase tracking-widest px-5 py-3 text-xs hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: 96069 55530
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 border-t border-[#E8231A]/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-extrabold uppercase text-white mb-5">
            READY TO OWN AN<br /><span className="text-[#FF3B3B]">ULTRAVIOLETTE?</span>
          </h2>
          <p className="text-[#888] text-base mb-8 max-w-lg mx-auto">
            Book a test ride first — fall in love with the machine — then talk to our finance team about making it yours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/test-ride"
              className="bg-[#E8231A] text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-[#C41C14] transition-colors"
            >
              BOOK A TEST RIDE
            </Link>
            <Link
              href="/contact"
              className="border border-white text-[#FF3B3B] font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-white/10 transition-all"
            >
              TALK TO US
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
