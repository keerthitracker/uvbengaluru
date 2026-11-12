import { siteConfig } from "@/lib/site";

interface LocationAddressesProps {
  className?: string;
}

export default function LocationAddresses({
  className,
}: LocationAddressesProps) {
  return (
    <>
      {siteConfig.locations.map((location) => (
        <span key={location.id} className={`block ${className ?? ""}`}>
          <strong className="font-semibold">
            {location.name} ({location.type}):
          </strong>{" "}
          {location.addressLines.join(", ")}
        </span>
      ))}
    </>
  );
}
