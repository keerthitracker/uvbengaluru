import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms governing use of the UV Bengaluru website, content, enquiries, and dealership information.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | UV Bengaluru",
    description:
      "Terms governing access to the UV Bengaluru website and its informational and enquiry features.",
    url: absoluteUrl("/terms"),
  },
};

const sections = [
  {
    title: "1. Acceptance Of Terms",
    body: [
      "By accessing or using this website, you agree to these Terms of Use. If you do not agree, do not use the site.",
    ],
  },
  {
    title: "2. Website Purpose",
    body: [
      "This website is intended to provide information about UV Bengaluru, Ultraviolette vehicles, test rides, finance options, showroom visits, and related dealership services.",
      "Vehicle specifications, pricing context, availability, finance examples, and service information are provided for general guidance and may change without notice.",
    ],
  },
  {
    title: "3. No Purchase Guarantee",
    body: [
      "Submitting a form, enquiry, or test ride request through this website does not create a binding sale, reservation, delivery commitment, financing approval, or service contract.",
      "Any purchase, booking, or service arrangement is subject to final confirmation by the dealership and any applicable brand, finance, or operational requirements.",
    ],
  },
  {
    title: "4. Accuracy Of Information",
    body: [
      "We aim to keep website information accurate and current, but we do not guarantee that all content is complete, current, or error-free at all times. Visitors should confirm final pricing, offers, specifications, stock status, delivery timelines, and commercial terms directly with the dealership.",
    ],
  },
  {
    title: "5. Acceptable Use",
    body: [
      "You agree not to misuse the website, attempt unauthorized access, interfere with site operation, submit false or misleading information, or use the site for unlawful, abusive, or fraudulent purposes.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "Website text, layout, branding, graphics, and original dealership content are owned by or licensed to UV Bengaluru or its affiliates unless otherwise stated. Brand and model names, marks, and related assets belonging to Ultraviolette remain the property of their respective owners.",
    ],
  },
  {
    title: "7. Third-Party Services And Links",
    body: [
      "This website may include links to third-party tools or services such as WhatsApp, maps, or social platforms. We are not responsible for the content, availability, or policies of third-party services.",
    ],
  },
  {
    title: "8. Limitation Of Liability",
    body: [
      "To the maximum extent permitted by law, UV Bengaluru and Aadya Inc. are not liable for any direct, indirect, incidental, consequential, or business loss arising from use of this website, reliance on its content, or inability to access it.",
    ],
  },
  {
    title: "9. Privacy",
    body: [
      "Use of this website is also subject to the Privacy Policy, which explains how submitted information may be handled.",
    ],
  },
  {
    title: "10. Changes To Terms",
    body: [
      "We may revise these Terms of Use at any time by updating this page. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      `For questions about these Terms of Use, contact ${siteConfig.legalName}, UV Bengaluru, at ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="border-t border-[#1A1A1A] bg-[#0D0D0D] py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF3B3B]">
          Legal
        </p>
        <h1 className="font-display text-[clamp(32px,5vw,52px)] font-bold uppercase tracking-[0.08em] text-white">
          Terms Of Use
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#A0A0A0] md:text-base">
          These terms govern access to the UV Bengaluru website and the use of
          its informational, enquiry, and contact features.
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
