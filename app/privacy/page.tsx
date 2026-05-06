import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the UV Bengaluru privacy policy for how dealership enquiries, test ride requests, and contact information are handled.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | UV Bengaluru",
    description:
      "How UV Bengaluru collects, uses, and protects information submitted through this website.",
    url: absoluteUrl("/privacy"),
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you submit a contact form, test ride request, finance enquiry, or service enquiry, we may collect your name, phone number, email address, city, and any message or vehicle preference you provide.",
      "We may also collect basic technical information such as browser type, device information, pages visited, and referral source for site performance, security, and analytics purposes.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you submit to respond to enquiries, schedule test rides, coordinate showroom visits, provide finance or service follow-up, and share dealership-related updates relevant to your request.",
      "We may also use aggregated site usage data to improve content, page performance, and the overall website experience.",
    ],
  },
  {
    title: "3. Sharing Of Information",
    body: [
      "We do not sell your personal information. We may share submitted details with dealership staff, CRM tools, lead-management tools, service providers, or brand-authorized operational partners only when needed to respond to your request or run the website.",
      "We may disclose information when required by law, regulation, legal process, or to protect the safety, rights, or property of UV Bengaluru, Aadya Inc., customers, or the public.",
    ],
  },
  {
    title: "4. Data Retention",
    body: [
      "We retain enquiry and customer-support data only for as long as reasonably necessary to manage dealership communication, fulfil the request, maintain operational records, or comply with applicable legal obligations.",
    ],
  },
  {
    title: "5. Cookies And Analytics",
    body: [
      "This website may use cookies or similar technologies for essential functionality, traffic measurement, performance monitoring, and marketing effectiveness. Your browser settings may allow you to limit or block certain cookies, though some site functionality may be affected.",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We use reasonable administrative and technical measures to protect submitted information. However, no internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "7. Third-Party Links",
    body: [
      "The website may link to third-party services such as WhatsApp, maps, social platforms, or brand-owned pages. Their privacy practices are governed by their own policies, not this one.",
    ],
  },
  {
    title: "8. Your Choices",
    body: [
      "If you want to update, correct, or request deletion of information you previously submitted through this website, contact us using the details below and we will review the request in line with applicable obligations.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      `For privacy-related questions, contact ${siteConfig.legalName}, UV Bengaluru, at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
    ],
  },
  {
    title: "10. Policy Updates",
    body: [
      "We may update this Privacy Policy from time to time. Any revised version will be posted on this page with an updated effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="border-t border-[#1A1A1A] bg-[#0D0D0D] py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
          Legal
        </p>
        <h1 className="font-display text-[clamp(32px,5vw,52px)] font-bold uppercase tracking-[0.08em] text-white">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#A0A0A0] md:text-base">
          This Privacy Policy explains how UV Bengaluru, operated by{" "}
          {siteConfig.legalName}, collects and uses information through this
          website and related enquiry flows.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#777]">
          Effective date: May 5, 2026
        </p>

        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[6px] border border-[#2A2A2A] bg-[#151515] p-6 md:p-8"
            >
              <h2 className="font-display text-2xl font-bold uppercase tracking-[0.06em] text-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-[#A0A0A0] md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
