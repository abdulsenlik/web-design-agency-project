import { createFileRoute } from "@tanstack/react-router";

import { business } from "@/site/business";
import { CtaCall, CtaEstimate, DirectionsLink } from "@/site/ctas";
import { pageHead } from "@/site/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Charlie's Ace Auto & Body | Arlington Heights, IL",
      description:
        "Bodywork and mechanical repair under one roof at 1429 E Algonquin Rd in Arlington Heights. Learn how Charlie's Ace Auto & Body works with customers.",
      path: "/about",
      image: "/assets/site/storefront.jpg",
    }),
  component: AboutPage,
});

const themes = [
  {
    title: "Fair, honest answers",
    text: "Reviewers describe straight talk about what a car needs, and what it doesn't.",
  },
  {
    title: "Quick turnarounds",
    text: "More than one review mentions a car fixed and back the next day.",
  },
  {
    title: "Attention to detail",
    text: "Customers notice the small things, like fixing a door handle while the window was already apart.",
  },
];

function AboutPage() {
  return (
    <main id="main" className="page-main about">
      <header className="about-intro">
        <div className="wrap about-intro__inner">
          <h1 className="h-display rise about-intro__title">The shop on Algonquin Road.</h1>
          <p className="lede about-intro__lede">
            Bodywork and mechanical repair under one roof, in a neighborhood shop where people ask for Charlie by
            name.
          </p>
        </div>
      </header>

      <figure className="about-figure">
        <img
          src="/assets/site/storefront.jpg"
          width={2688}
          height={1520}
          alt="The front of Charlie's Auto Service on East Algonquin Road, with the shop sign above the bays."
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <figcaption className="wrap small-note about-figure__caption">
          The shop at 1429 E Algonquin Rd. Look for the Charlie&apos;s Auto Service sign.
        </figcaption>
      </figure>

      <section className="about-section about-say" aria-labelledby="about-say-title">
        <div className="wrap about-say__inner">
          <h2 className="h-section about-say__title" id="about-say-title">
            What people say
          </h2>
          <div className="about-say__body">
            <ul className="about-themes">
              {themes.map((t) => (
                <li className="about-theme" key={t.title}>
                  <h3 className="h-card about-theme__title">{t.title}</h3>
                  <p className="about-theme__text">{t.text}</p>
                </li>
              ))}
            </ul>
            <p className="small-note about-note">
              Based on public reviews. Read them yourself:{" "}
              <a className="text-link" href={business.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Google<span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              and{" "}
              <a className="text-link" href={business.yelpUrl} target="_blank" rel="noopener noreferrer">
                Yelp<span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-split" aria-labelledby="about-how-title">
        <div className="wrap about-split__inner">
          <div className="about-split__media">
            <img
              className="settle-on-scroll"
              src="/assets/site/bay.jpg"
              width={2688}
              height={1520}
              alt="An empty, clean workshop bay in morning light."
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-split__copy">
            <h2 className="h-section" id="about-how-title">
              How we work.
            </h2>
            <p className="body-copy">
              We look at the car first and explain what we find in plain words, before anything gets fixed.
            </p>
            <p className="body-copy">You decide what happens next. Nothing starts until you say go.</p>
            <p className="body-copy">
              Every car gets the same care, whether it&apos;s a daily driver or the one you plan to keep for years.
            </p>
          </div>
        </div>
      </section>

      <section className="about-band" aria-labelledby="about-band-title">
        <div className="wrap about-band__inner">
          <h2 className="h-section" id="about-band-title">
            Come by, or call first.
          </h2>
          <div className="about-band__actions">
            <CtaEstimate />
            <CtaCall />
            <DirectionsLink />
          </div>
        </div>
      </section>
    </main>
  );
}
