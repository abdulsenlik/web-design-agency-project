// Verified facts only (see clients/charlies-ace-auto/fact-inventory.md).
// Hours, ratings, years in business and certifications are intentionally absent
// until the owner confirms them.

export const SITE_ORIGIN = "https://charlies-ace-auto-body.higgsfield.app";

/** Concept preview for the owner: noindex everywhere + preview strip. Flip to false at launch. */
export const SITE_IS_PREVIEW = true;

export const THEME_COLOR = "#131416";

export const business = {
  name: "Charlie's Ace Auto & Body Service",
  shortName: "Charlie's Ace Auto & Body",
  signName: "Charlie's Auto Service",
  phoneDisplay: "(847) 228-6603",
  phoneHref: "tel:+18472286603",
  phoneE164: "+18472286603",
  street: "1429 E Algonquin Rd",
  city: "Arlington Heights",
  region: "IL",
  postalCode: "60005",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1429+E+Algonquin+Rd%2C+Arlington+Heights%2C+IL+60005",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Charlie%27s+Ace+Auto+%26+Body+Service+1429+E+Algonquin+Rd+Arlington+Heights",
  yelpUrl: "https://www.yelp.com/biz/charlies-auto-service-arlington-heights-2",
  hoursNote: "Call ahead for today's hours.",
  nearby: ["Mount Prospect", "Rolling Meadows", "Elk Grove Village", "Des Plaines", "Schaumburg"],
} as const;

export const addressLine = `${business.street}, ${business.city}, ${business.region} ${business.postalCode}`;

export const localBusinessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: business.name,
  url: SITE_ORIGIN,
  telephone: business.phoneE164,
  image: `${SITE_ORIGIN}/assets/site/storefront.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "US",
  },
});
