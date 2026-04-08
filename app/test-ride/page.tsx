import type { Metadata } from 'next'
import TestRideForm from '@/components/TestRideForm'

export const metadata: Metadata = {
  title: 'Book a Test Ride',
  description:
    'Book a test ride at UV Bengaluru\'s Nagarbhavi facility. Experience the X-47, F77 Mach 2, and F77 SuperStreet before you buy. Free, no-commitment test rides.',
}


const steps = [
  {
    step: '01',
    title: 'PICK YOUR MODEL',
    desc: 'Choose the Ultraviolette you want to experience — X-47 Original, Recon, Desert Wing, F77 Mach 2, or SuperStreet.',
  },
  {
    step: '02',
    title: 'CHOOSE YOUR SLOT',
    desc: 'Select a preferred date and time slot. We\'ll confirm your booking via phone within 24 hours.',
  },
  {
    step: '03',
    title: 'RIDE & EXPERIENCE',
    desc: 'Come to our Nagarbhavi facility, meet our team, and experience the Ultraviolette difference first-hand. No pressure, no commitments.',
  },
]

export default function TestRidePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4 md:px-8 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-4 font-semibold">UV Bengaluru · Nagarbhavi</p>
          <h1
            className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-white mb-6"
           
          >
            FEEL THE<br />
            <span className="text-[#C8FF00]">DIFFERENCE.</span><br />
            BOOK YOUR<br />TEST RIDE.
          </h1>
          <p className="text-[#888] text-lg max-w-xl mx-auto leading-relaxed">
            Experience Ultraviolette&apos;s electric performance first-hand. No commitments — just the ride. Available 7 days a week at our Nagarbhavi facility.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4 md:px-8 bg-[#0c0c0c] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">The Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              HOW IT WORKS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div
                  className="w-14 h-14 bg-[#C8FF00] text-black text-xl font-extrabold flex items-center justify-center mx-auto mb-6"
                 
                >
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-white mb-3">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#C8FF00] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Reserve Your Slot</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase text-white">
              BOOK YOUR<br />TEST RIDE
            </h2>
            <p className="text-[#888] text-base mt-4">
              Fill in your details below. Our team will confirm your slot within 24 hours.
            </p>
          </div>
          <TestRideForm />
        </div>
      </section>

      {/* Location Note */}
      <section className="py-16 px-4 md:px-8 bg-[#0c0c0c] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <svg className="w-8 h-8 text-[#C8FF00] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-display text-base font-bold uppercase text-white mb-1">LOCATION</h3>
              <p className="text-[#888] text-sm">SJA Arcade, 904, 10th Cross Rd<br />ITI Layout, Naagarabhaavi<br />Bengaluru, Karnataka 560072</p>
            </div>
            <div>
              <svg className="w-8 h-8 text-[#C8FF00] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display text-base font-bold uppercase text-white mb-1">HOURS</h3>
              <p className="text-[#888] text-sm">Monday – Sunday<br />10:00 AM – 7:00 PM</p>
            </div>
            <div>
              <svg className="w-8 h-8 text-[#C8FF00] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="font-display text-base font-bold uppercase text-white mb-1">CONTACT</h3>
              <p className="text-[#888] text-sm"><a href="tel:+919606955530" className="hover:text-[#C8FF00] transition-colors">96069 55530</a><br /><a href="https://wa.me/919606955529" className="hover:text-[#C8FF00] transition-colors">WA: 96069 55529</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
