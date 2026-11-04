import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";

import { business } from "./business";

export type ServiceKind = "body" | "mechanical";

/** Primary action: solid red slab. One label site-wide: "Request an Estimate". */
export function CtaEstimate({
  service,
  size = "md",
  className,
}: {
  service?: ServiceKind;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <Link
      to="/contact"
      search={service ? { service } : {}}
      className={["cta-estimate", size === "sm" ? "cta-estimate--sm" : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
    >
      Request an Estimate
      <ArrowRight aria-hidden="true" size={18} weight="bold" />
    </Link>
  );
}

/** Secondary action: tap to call. */
export function CtaCall({
  label = `Call ${business.phoneDisplay}`,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a href={business.phoneHref} className={["cta-call", className ?? ""].filter(Boolean).join(" ")}>
      <Phone aria-hidden="true" size={18} weight="regular" />
      <span className="cta-call__label">{label}</span>
    </a>
  );
}

/** Panel link with a hairline that extends on hover. `cover` stretches the hit area over the nearest positioned parent. */
export function PathLink({
  to,
  label,
  cover = false,
}: {
  to: "/body-collision" | "/mechanical" | "/about" | "/contact";
  label: string;
  cover?: boolean;
}) {
  return (
    <Link to={to} className={["path-link", cover ? "path-link--cover" : ""].filter(Boolean).join(" ")}>
      <span>{label}</span>
      <span className="path-link__rule" aria-hidden="true" />
    </Link>
  );
}

/** Opens Google Maps directions in a new tab. */
export function DirectionsLink({ label = "Get Directions" }: { label?: string }) {
  return (
    <a className="directions-link" href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowUpRight aria-hidden="true" size={16} weight="bold" />
      <span className="sr-only"> (opens Google Maps in a new tab)</span>
    </a>
  );
}
