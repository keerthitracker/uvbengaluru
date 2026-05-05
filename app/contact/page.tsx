import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with UV Bengaluru, the official Ultraviolette dealership in Nagarbhavi, Bengaluru. Call, email, or visit us for enquiries, test rides, and service.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact UV Bengaluru",
    description:
      "Call, message, or visit UV Bengaluru in Nagarbhavi for enquiries, test rides, finance support, and service coordination.",
    url: absoluteUrl("/contact"),
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

const contactInfo = [
  {
    title: "VISIT US",
    lines: [
      "SJA Arcade, 904, 10th Cross Rd",
      "ITI Layout, Papareddipalya",
      "Naagarabhaavi, Bengaluru",
      "Karnataka 560072",
    ],
    cta: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072",
      external: true,
    },
    icon: (
      <svg
        className="h-8 w-8 text-[#FF3B3B]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "CALL US",
    lines: ["96069 55530", "", "Mon-Sun: 10:00 AM - 7:00 PM"],
    cta: { label: "Call Now", href: "tel:+919606955530", external: false },
    icon: (
      <svg
        className="h-8 w-8 text-[#FF3B3B]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "WHATSAPP US",
    lines: ["96069 55529", "", "Quick response", "Mon-Sun, 10 AM - 7 PM"],
    cta: {
      label: "Chat on WhatsApp",
      href: siteConfig.whatsappHref,
      external: true,
    },
    icon: (
      <svg className="h-8 w-8 text-[#FF3B3B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    title: "EMAIL US",
    lines: ["hello@uvbengaluru.com", "", "We respond within", "24 business hours"],
    cta: { label: "Send Email", href: "mailto:hello@uvbengaluru.com", external: false },
    icon: (
      <svg
        className="h-8 w-8 text-[#FF3B3B]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const socials = [
  { label: "Instagram", handle: "@uvbengaluru", href: "https://instagram.com/uvbengaluru" },
  { label: "Facebook", handle: "/uvbengaluru", href: "https://facebook.com/uvbengaluru" },
  { label: "YouTube", handle: "@uvbengaluru", href: "https://youtube.com/@uvbengaluru" },
  { label: "LinkedIn", handle: "UV Bengaluru", href: "https://linkedin.com/company/uvbengaluru" },
];

const subjectOptions = [
  "General Enquiry",
  "New Bike Purchase",
  "Test Ride Booking",
  "Service Appointment",
  "Parts & Accessories",
  "Finance & Insurance",
  "Career Opportunities",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient border-b border-[#1a1a1a] px-4 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
            UV Bengaluru
          </p>
          <h1 className="mb-5 font-display text-5xl font-extrabold uppercase leading-none text-white md:text-7xl">
            GET IN
            <br />
            <span className="text-[#FF3B3B]">TOUCH</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#888]">
            Questions about a model? Want to book a test ride? Planning a
            service visit? We&apos;re here to help, reach us any way you prefer.
          </p>
        </div>
      </section>

      <section className="border-b border-[#1a1a1a] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="border border-[#222] bg-[#111] p-8 transition-colors duration-300 hover:border-[#E8231A]"
              >
                <div className="mb-5">{info.icon}</div>
                <h3 className="mb-4 font-display text-lg font-extrabold uppercase text-white">
                  {info.title}
                </h3>
                <div className="mb-6 space-y-0.5">
                  {info.lines.map((line, index) => (
                    <p
                      key={index}
                      className={`text-sm ${line === "" ? "h-2" : "text-[#888]"}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <a
                  href={info.cta.href}
                  target={info.cta.external ? "_blank" : undefined}
                  rel={info.cta.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF3B3B] transition-colors hover:text-white"
                >
                  {info.cta.label}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

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
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF3B3B] transition-colors hover:text-white"
          >
            Get Directions on Google Maps
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF3B3B]">
                Send a Message
              </p>
              <h2 className="font-display text-4xl font-extrabold uppercase text-white md:text-5xl">
                HOW CAN
                <br />
                WE HELP?
              </h2>
            </div>
            <ContactForm subjects={subjectOptions} />
          </div>

          <div className="space-y-8">
            <div className="border border-[#222] bg-[#111] p-6">
              <h3 className="mb-5 font-display text-base font-bold uppercase text-white">
                FOLLOW US
              </h3>
              <ul className="space-y-4">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between transition-colors hover:text-white"
                    >
                      <span className="text-sm font-medium text-white transition-colors group-hover:text-white">
                        {social.label}
                      </span>
                      <span className="text-xs text-[#666] transition-colors group-hover:text-white">
                        {social.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#222] bg-[#111] p-6">
              <h3 className="mb-4 font-display text-base font-bold uppercase text-white">
                OPERATED BY
              </h3>
              <p className="text-sm leading-relaxed text-[#888]">
                UV Bengaluru is operated by{" "}
                <strong className="text-white">Aadya Inc.</strong>, an
                authorized Ultraviolette Automotive dealership serving Bengaluru
                and Karnataka.
              </p>
            </div>

            <div className="border border-[#E8231A]/20 bg-[#E8231A]/5 p-6">
              <h3 className="mb-3 text-base font-bold uppercase text-[#FF3B3B]">
                READY TO RIDE?
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-[#888]">
                Skip the form and book a test ride directly to experience the
                Ultraviolette difference.
              </p>
              <a
                href="/test-ride"
                className="block bg-[#E8231A] py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#C41C14]"
              >
                BOOK TEST RIDE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
