export const siteConfig = {
  name: "UV Bengaluru",
  legalName: "Aadya Inc.",
  description:
    "UV Bengaluru is the official Ultraviolette dealership in Bengaluru, with a sales, service and spares facility in Nagarbhavi and a sales counter in Rajajinagar. Explore the X-47 Venom and F77 range and book a test ride.",
  url: "https://uvbengaluru.com",
  ogImage: "/opengraph-image",
  phoneDisplay: "+91 80500 73309",
  phoneHref: "+918050073309",
  whatsappDisplay: "96069 55529",
  whatsappHref:
    "https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles",
  email: "hello@uvbengaluru.com",
  address: {
    streetAddress: "SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya",
    locality: "Nagarbhavi",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560072",
    country: "IN",
  },
  geo: {
    latitude: 12.9619,
    longitude: 77.5036,
  },
  hours: "Mo-Su 10:00-19:00",
  locations: [
    {
      id: "nagarbhavi",
      name: "Nagarbhavi",
      type: "Sales, Service & Spares",
      shortType: "3S facility",
      addressLines: [
        "SJA Arcade, 904, 10th Cross Rd",
        "ITI Layout, Papareddipalya",
        "Nagarbhavi, Bengaluru 560072",
      ],
      streetAddress:
        "SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya, Nagarbhavi",
      postalCode: "560072",
      mapsQuery:
        "SJA+Arcade+904+10th+Cross+Rd+ITI+Layout+Papareddipalya+Naagarabhaavi+Bengaluru+Karnataka+560072",
    },
    {
      id: "rajajinagar",
      name: "Rajajinagar",
      type: "Sales Counter",
      shortType: "sales counter",
      addressLines: [
        "No. 35/2, Ground Floor, Shop No. 001",
        "Opp. Suguna Hospital, Dr. Rajkumar Road",
        "Rajajinagar, Bengaluru 560010",
      ],
      streetAddress:
        "No. 35/2, Ground Floor, Shop No. 001, Opp. Suguna Hospital, Dr. Rajkumar Road, Rajajinagar",
      postalCode: "560010",
      mapsQuery:
        "Ultraviolette+No.+35/2+Opp.+Suguna+Hospital+Dr.+Rajkumar+Road+Rajajinagar+Bengaluru+560010",
    },
  ],
  sameAs: [
    "https://instagram.com/uvbengaluru",
    "https://facebook.com/uvbengaluru",
    "https://youtube.com/@uvbengaluru",
    "https://linkedin.com/company/uvbengaluru",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const rajajinagarAddressText =
  "No. 35/2, Ground Floor, Shop No. 001, Opp. Suguna Hospital, Dr. Rajkumar Road, Rajajinagar, Bengaluru, Karnataka 560010";

export const rajajinagarLine = `Rajajinagar sales counter: ${rajajinagarAddressText}`;

export const showroomAddressText = `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

export function locationMapsUrl(mapsQuery: string) {
  return `https://maps.google.com/?q=${mapsQuery}`;
}

export function locationPostalAddress(
  location: (typeof siteConfig.locations)[number],
) {
  return {
    "@type": "PostalAddress",
    streetAddress: location.streetAddress,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: location.postalCode,
    addressCountry: siteConfig.address.country,
  };
}

export function branchStructuredData(locationId: string) {
  const location = siteConfig.locations.find((item) => item.id === locationId);
  if (!location) return null;

  return {
    "@context": "https://schema.org",
    "@type": ["MotorcycleDealer", "LocalBusiness"],
    "@id": `${siteConfig.url}/#${location.id}`,
    name: `${siteConfig.name} - ${location.name}`,
    description: `UV Bengaluru ${location.name}: official Ultraviolette ${location.shortType} in Bengaluru.`,
    parentOrganization: { "@id": `${siteConfig.url}/#dealer` },
    legalName: siteConfig.legalName,
    url: absoluteUrl("/showroom"),
    image: absoluteUrl(siteConfig.ogImage),
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    address: locationPostalAddress(location),
    openingHours: siteConfig.hours,
    areaServed: ["Bengaluru", "Karnataka"],
    brand: { "@type": "Brand", name: "Ultraviolette Automotive" },
    hasMap: locationMapsUrl(location.mapsQuery),
  };
}
