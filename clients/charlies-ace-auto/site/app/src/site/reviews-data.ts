// Public Google reviews for the listing, captured 2026-10-23 from Google Maps
// (signed-out view shows 5). Excerpts are verbatim; "..." marks omitted text.
// Quoting needs the owner's OK before the site leaves preview.

export const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=5163780695882978348";

export const googleRating = {
  rating: 4.7,
  count: 98,
  checkedLabel: "October 23, 2026",
  // Share of rated reviews per star (88, 3, 1, 0, 5 of 97 ratings).
  breakdown: [
    { stars: 5, count: 88 },
    { stars: 4, count: 3 },
    { stars: 3, count: 1 },
    { stars: 2, count: 0 },
    { stars: 1, count: 5 },
  ],
  // Topics Google surfaces from the review text, with mention counts.
  topics: [
    { label: "Body work", count: 8 },
    { label: "Efficient work", count: 5 },
    { label: "Accident repair", count: 3 },
    { label: "Attention to detail", count: 2 },
    { label: "Repair costs", count: 2 },
    { label: "Brake job", count: 2 },
  ],
} as const;

export type ReviewExcerpt = {
  name: string;
  when: string;
  quote: string;
};

export const reviewExcerpts: ReviewExcerpt[] = [
  {
    name: "Yu Kyung Yoon",
    when: "3 months ago",
    quote:
      "I had an outstanding experience with this body/auto shop from start to finish. The owner, Charlie, truly went above and beyond throughout the entire repair process.",
  },
  {
    name: "Alec Gee Gault",
    when: "4 months ago",
    quote:
      "I came to Charlie when I needed a second opinion inspection on a broken catalytic converter, and while the car was done for, I've stayed for his phenomenal attention to detail.",
  },
  {
    name: "leroy young jr",
    when: "4 months ago",
    quote:
      "If you need body work auto work, that's the place to go ... the car look brand new. He has the best price in this area.",
  },
  {
    name: "Noel Timones",
    when: "2 months ago",
    quote: "Awesome customer service, nice facility, nice staff, & quick auto service too!!!",
  },
  {
    name: "Burak Gulsen",
    when: "3 years ago",
    quote:
      "I recently had the pleasure of bringing my car to Charlies Auto Shop, and I couldn't be happier with the service I received.",
  },
];
