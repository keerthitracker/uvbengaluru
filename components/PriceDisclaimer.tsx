import { siteConfig } from "@/lib/site";

interface PriceDisclaimerProps {
  className?: string;
}

export default function PriceDisclaimer({ className }: PriceDisclaimerProps) {
  return (
    <p
      className={`text-xs leading-relaxed text-[#8A8A8A] ${className ?? ""}`}
    >
      <strong className="font-semibold text-[#B5B5B5]">Price disclaimer:</strong>{" "}
      All prices shown are indicative. Prices and offers are determined by the
      manufacturer, Ultraviolette Automotive, and are subject to revision
      without prior notice. As this website is not updated on a daily basis,
      we request you to call our IVR on{" "}
      <a
        href={`tel:${siteConfig.phoneHref}`}
        className="text-[#FF3B3B] hover:text-white"
      >
        {siteConfig.phoneDisplay}
      </a>{" "}
      or visit our Nagarbhavi or Rajajinagar location to confirm the latest
      price before booking.
    </p>
  );
}
