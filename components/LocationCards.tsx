import { locationMapsUrl, siteConfig } from "@/lib/site";

export default function LocationCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {siteConfig.locations.map((location) => (
        <div
          key={location.id}
          className="flex flex-col border border-[#222] bg-[#111] p-8 transition-colors duration-300 hover:border-[#E8231A]"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B3B]">
            {location.type}
          </p>
          <h3 className="mb-4 font-display text-2xl font-extrabold uppercase text-white">
            {location.name}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-[#A0A0A0]">
            {location.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-auto flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={locationMapsUrl(location.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-[#FF3B3B] transition-colors hover:text-white"
            >
              Get Directions
            </a>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="text-xs font-bold uppercase tracking-widest text-[#FF3B3B] transition-colors hover:text-white"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
