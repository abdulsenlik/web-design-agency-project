import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { BeforeAfter } from "@/site/before-after";
import { business } from "@/site/business";
import { CtaCall, CtaEstimate, DirectionsLink, PathLink } from "@/site/ctas";
import { GoogleReviews } from "@/site/reviews";

export const Route = createFileRoute("/")({
  component: Index,
});

const steps = [
  {
    title: "Tell us what's happening.",
    body: "Call or send a request with a few details about the car.",
  },
  {
    title: "Talk it through.",
    body: "We ask the right questions and look at the car when needed.",
  },
  {
    title: "Get your assessment.",
    body: "A clear explanation of the repair and what it costs.",
  },
  {
    title: "You decide.",
    body: "No pressure. Ask anything, then give the go-ahead.",
  },
  {
    title: "Back on the road.",
    body: "We finish the work and walk you through what was done.",
  },
];

const promises = [
  {
    title: "We explain what we found.",
    body: "You hear what's wrong and why, in plain words, before work starts.",
  },
  {
    title: "You approve the work.",
    body: "Nothing gets fixed until you say go.",
  },
  {
    title: "Straight answers.",
    body: "If a repair isn't worth doing, you'll hear that too.",
  },
];

function joinNatural(items: readonly string[]): string {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function Index() {
  return (
    <main id="main">
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} className="rebuild" />

      {/* a. Pathways */}
      <section className="paths-section" aria-labelledby="paths-heading">
        <div className="wrap">
          <header className="paths-head">
            <h2 id="paths-heading" className="h-section paths-title">
              Where should we start?
            </h2>
            <p className="small-note paths-note">
              The film above is an illustration, not a customer vehicle.
            </p>
          </header>
          <div className="paths-grid">
            <div className="paths-panel has-path-link">
              <div className="paths-media">
                <img
                  className="paths-img settle-on-scroll"
                  src="/assets/site/body.jpg"
                  width={1792}
                  height={2240}
                  alt="A gloved hand sanding primer on a car fender in a body shop"
                  loading="lazy"
                />
              </div>
              <div className="paths-copy">
                <h3 className="paths-name">Auto body &amp; collision</h3>
                <p className="paths-line">
                  Dents, scrapes, collision damage and paint. We look at the damage with you and
                  explain the fix.
                </p>
                <PathLink cover to="/body-collision" label="Explore Body & Collision" />
              </div>
            </div>
            <div className="paths-panel has-path-link">
              <div className="paths-media">
                <img
                  className="paths-img settle-on-scroll"
                  src="/assets/site/mechanical.jpg"
                  width={1792}
                  height={2240}
                  alt="A brake caliper and rotor on a vehicle lifted in a shop bay"
                  loading="lazy"
                />
              </div>
              <div className="paths-copy">
                <h3 className="paths-name">Mechanical repair</h3>
                <p className="paths-line">
                  Warning lights, brakes, strange noises and the maintenance that keeps them away.
                </p>
                <PathLink cover to="/mechanical" label="Explore Mechanical Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* b. The work speaks */}
      <section className="work-section" aria-labelledby="work-heading">
        <div className="wrap">
          <h2 id="work-heading" className="h-display work-title">
            The work speaks.
          </h2>
          <div className="work-grid">
            <div className="work-main">
              <BeforeAfter
                before="/assets/site/door-before.jpg"
                after="/assets/site/door-after.jpg"
                beforeAlt="A car door with a deep dent and scraped paint"
                afterAlt="The same car door repaired, with smooth, even paint"
                width={2048}
                height={1360}
                caption="Illustration of a typical door repair. Not a customer vehicle."
              />
            </div>
            <div className="work-crops">
              <figure className="work-crop work-crop--a">
                <div className="work-crop__frame">
                  <img
                    className="work-crop__img work-crop__img--a"
                    src="/assets/site/body.jpg"
                    width={1792}
                    height={2240}
                    alt="Close crop of a gloved hand and sanding pad on primer"
                    loading="lazy"
                  />
                </div>
                <figcaption className="work-crop__cap">Panel prep</figcaption>
              </figure>
              <figure className="work-crop work-crop--b">
                <div className="work-crop__frame">
                  <img
                    className="work-crop__img work-crop__img--b"
                    src="/assets/site/mechanical.jpg"
                    width={1792}
                    height={2240}
                    alt="Close crop of a brake caliper and rotor"
                    loading="lazy"
                  />
                </div>
                <figcaption className="work-crop__cap">Brake inspection</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* c. Trust */}
      <section className="trust-section" aria-labelledby="trust-heading">
        <div className="wrap trust-grid">
          <h2 id="trust-heading" className="trust-statement">
            <span className="trust-statement__line">Good work isn&apos;t loud.</span>
            <span className="trust-statement__line">It shows.</span>
          </h2>
          <div className="trust-side">
            <ul className="trust-list" role="list">
              {promises.map((p) => (
                <li key={p.title} className="trust-item">
                  <strong className="trust-item__title">{p.title}</strong>
                  <span className="trust-item__body">{p.body}</span>
                </li>
              ))}
            </ul>
            <p className="trust-links">
              <a
                className="text-link"
                href={business.googleReviewsUrl}
                target="_blank"
                rel="noopener"
              >
                Read reviews on Google
              </a>
              <a className="text-link" href={business.yelpUrl} target="_blank" rel="noopener">
                Read reviews on Yelp
              </a>
            </p>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <div className="trust-steel" aria-hidden="true" />

      {/* d. Meet Charlie */}
      <section className="charlie-section" aria-labelledby="charlie-heading">
        <div className="charlie-band">
          <img
            className="charlie-img settle-on-scroll"
            src="/assets/site/hands.jpg"
            width={2688}
            height={1520}
            alt="Gloved hands turning a torque wrench on a wheel in a shop bay"
            loading="lazy"
          />
        </div>
        <div className="charlie-panel">
          <h2 id="charlie-heading" className="h-section charlie-title">
            Ask for Charlie.
          </h2>
          <p className="charlie-text">
            Charlie&apos;s Ace is a neighborhood shop on Algonquin Road doing bodywork and
            mechanical repair under one roof. Read the public reviews and one name keeps coming up:
            Charlie. People mention fair answers, quick turnarounds and attention to detail.
          </p>
          <PathLink to="/about" label="About the shop" />
        </div>
      </section>

      {/* e. What happens when you call */}
      <section className="steps-section" aria-labelledby="steps-heading">
        <div className="wrap steps-wrap">
          <h2 id="steps-heading" className="h-section steps-title">
            What happens when you call.
          </h2>
          <ol className="steps-list" role="list">
            {steps.map((s, i) => (
              <li key={s.title} className={`steps-item${i === steps.length - 1 ? " steps-item--last" : ""}`}>
                <span className="steps-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="steps-dot" aria-hidden="true" />
                <div className="steps-text">
                  <h3 className="steps-name">{s.title}</h3>
                  <p className="steps-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* f. Find us */}
      <section className="findus-section" aria-labelledby="findus-heading">
        <div className="findus-grid">
          <div className="findus-panel">
            <h2 id="findus-heading" className="h-display findus-title">
              Find us.
            </h2>
            <address className="findus-address">
              {business.street}
              <br />
              {business.city}, {business.region} {business.postalCode}
            </address>
            <p className="findus-row">
              <a className="findus-phone" href={business.phoneHref}>
                {business.phoneDisplay}
              </a>
            </p>
            <p className="findus-row findus-muted">{business.hoursNote}</p>
            <p className="findus-row findus-muted">
              Look for the {business.signName} sign.
            </p>
            <p className="findus-row findus-muted">
              Easy to reach from {joinNatural(business.nearby)}.
            </p>
            <p className="findus-row findus-directions">
              <DirectionsLink />
            </p>
          </div>
          <figure className="findus-figure">
            <img
              className="findus-img settle-on-scroll"
              src="/assets/site/storefront.jpg"
              width={2688}
              height={1520}
              alt="Front of the shop at 1429 E Algonquin Rd with the red Charlie's Auto Service sign and phone number 228-6603"
              loading="lazy"
            />
            <figcaption className="findus-cap">The shop at 1429 E Algonquin Rd.</figcaption>
          </figure>
        </div>
      </section>

      {/* g. Final statement */}
      <section className="finale-section" aria-labelledby="finale-heading">
        <img
          className="finale-img"
          src="/assets/site/taillamp.jpg"
          width={2304}
          height={1728}
          alt=""
          loading="lazy"
        />
        <div className="wrap finale-inner">
          <h2 id="finale-heading" className="finale-title">
            Let&apos;s get you back out there.
          </h2>
          <div className="finale-actions">
            <CtaEstimate />
            <CtaCall label="Call the Shop" />
          </div>
        </div>
      </section>
    </main>
  );
}
