export const siteConfig = {
  name: "UV Bengaluru",
  legalName: "Aadya Inc.",
  description:
    "UV Bengaluru is the official Ultraviolette dealership in Nagarbhavi, Bengaluru. Explore the lineup, compare models, and book a test ride.",
  url: "https://uvbengaluru.com",
  ogImage: "/opengraph-image",
  phoneDisplay: "96069 55530",
  phoneHref: "+919606955530",
  whatsappDisplay: "96069 55529",
  whatsappHref:
    "https://wa.me/919606955529?text=Hi%2C%20I%27m%20interested%20in%20Ultraviolette%20motorcycles",
  email: "hello@uvbengaluru.com",
  address: {
    streetAddress: "SJA Arcade, 904, 10th Cross Rd, ITI Layout, Papareddipalya",
    locality: "Naagarabhaavi",
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

export const showroomAddressText = `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
