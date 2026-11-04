import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { CSSProperties } from "react";

import { GOOGLE_LISTING_URL, googleRating, reviewExcerpts } from "./reviews-data";

const STAR_PATH =
  "M12 2.5l2.94 6.2 6.8.82-5.02 4.66 1.32 6.72L12 17.6l-6.04 3.3 1.32-6.72L2.26 9.52l6.8-.82z";

/** Five outline stars with a fill layer clipped to the rating. */
function StarMeter({ rating }: { rating: number }) {
  const fill = { "--fill": `${(rating / 5) * 100}%` } as CSSProperties;
  return (
    <span className="rv-stars" style={fill} aria-hidden="true">
      <span className="rv-stars__row rv-stars__row--base">
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} viewBox="0 0 24 24" width="28" height="28">
            <path d={STAR_PATH} />
          </svg>
        ))}
      </span>
      <span className="rv-stars__clip">
        <span className="rv-stars__row rv-stars__row--fill">
          {Array.from({ length: 5 }, (_, i) => (
            <svg key={i} viewBox="0 0 24 24" width="28" height="28">
              <path d={STAR_PATH} />
            </svg>
          ))}
        </span>
      </span>
    </span>
  );
}

export function GoogleReviews() {
  const { rating, count, checkedLabel, breakdown, topics } = googleRating;
  const maxCount = Math.max(...breakdown.map((b) => b.count));

  return (
    <section className="rv section" aria-labelledby="rv-heading">
      <div className="wrap rv__head">
        <div className="rv__score">
          <h2 id="rv-heading" className="h-section">
            In their words.
          </h2>
          <p className="rv__rating">
            <span className="rv__number">{rating.toFixed(1)}</span>
            <span className="rv__meta">
              <StarMeter rating={rating} />
              <span>
                {count} Google reviews
                <span className="rv__checked">As of {checkedLabel}</span>
              </span>
            </span>
          </p>
          <span className="sr-only">
            Rated {rating} out of 5 from {count} reviews on Google.
          </span>
        </div>

        <div className="rv__breakdown">
          <ul className="rv-bars" aria-label="Rating breakdown">
            {breakdown.map((b) => (
              <li key={b.stars} className="rv-bars__row">
                <span className="rv-bars__label">{b.stars}</span>
                <span className="rv-bars__track" aria-hidden="true">
                  <span
                    className="rv-bars__bar"
                    style={{ "--w": maxCount ? b.count / maxCount : 0 } as CSSProperties}
                  />
                </span>
                <span className="sr-only">
                  {b.count} {b.stars === 1 ? "one-star" : `${b.stars}-star`} ratings
                </span>
              </li>
            ))}
          </ul>
          <p className="rv__topics-label small-note">What reviewers mention most</p>
          <ul className="rv-topics" aria-label="Topics mentioned in reviews">
            {topics.map((t) => (
              <li key={t.label}>
                {t.label} <span className="rv-topics__count">{t.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rv-reel" aria-label="Review excerpts">
        <ul className="rv-reel__track">
          {reviewExcerpts.map((r, i) => (
            <li key={r.name} className="rv-card" style={{ "--i": i } as CSSProperties}>
              <figure className="rv-card__fig">
                <span className="rv-card__stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, s) => (
                    <svg key={s} viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                      <path d={STAR_PATH} />
                    </svg>
                  ))}
                </span>
                <blockquote className="rv-card__quote">
                  <p>&ldquo;{r.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="rv-card__by">
                  <span className="rv-card__name">{r.name}</span>
                  <span className="rv-card__when">Google review, {r.when}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap rv__foot">
        <a className="directions-link" href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer">
          Read all {count} reviews on Google
          <ArrowUpRight aria-hidden="true" size={16} weight="bold" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <p className="small-note">Excerpts quoted from public Google reviews. "..." marks shortened text.</p>
      </div>
    </section>
  );
}
