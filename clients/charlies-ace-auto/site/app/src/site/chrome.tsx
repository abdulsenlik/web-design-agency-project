import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react/dist/ssr";

import { SITE_IS_PREVIEW, addressLine, business } from "./business";
import { CtaEstimate } from "./ctas";

const NAV = [
  { to: "/body-collision", label: "Body & Collision" },
  { to: "/mechanical", label: "Mechanical" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteChrome() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site-chrome">
      {SITE_IS_PREVIEW ? (
        <p className="preview-strip">
          <span className="preview-strip__long">
            Concept preview prepared for {business.name}. Details pending owner review.
          </span>
          <span className="preview-strip__short">Concept preview. Details pending owner review.</span>
        </p>
      ) : null}
      <header className="site-header">
        <div className="site-header__bar wrap">
          <Link to="/" className="brand" onClick={close} aria-label={`${business.name}, home`}>
            <img className="brand__mark" src="/assets/site/mark.svg" alt="" width={34} height={34} />
            <span className="brand__name">
              Charlie&apos;s Ace
              <span className="brand__sub">Auto &amp; Body</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="site-nav__link"
                activeProps={{ "aria-current": "page" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="header-call" href={business.phoneHref}>
              {business.phoneDisplay}
            </a>
            <CtaEstimate size="sm" />
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" size={22} /> : <List aria-hidden="true" size={22} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
          <Link to="/" className="mobile-menu__link" onClick={close}>
            Home
          </Link>
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="mobile-menu__link" onClick={close}>
              {item.label}
            </Link>
          ))}
          <p className="mobile-menu__meta">
            {addressLine}
            <br />
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </p>
        </nav>
      </header>
    </div>
  );
}

/** Call + estimate, pinned to the bottom on phones. Hidden where the form already is. */
export function MobileActionBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // On the home page the hero already carries both actions, so the bar waits
  // until the visitor scrolls past it.
  const [pastHero, setPastHero] = useState(pathname !== "/");
  useEffect(() => {
    if (pathname !== "/") {
      setPastHero(true);
      return;
    }
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  if (pathname.startsWith("/contact") || pathname.startsWith("/inbox")) return null;
  return (
    <nav className="mobile-bar" aria-label="Quick actions" data-visible={pastHero ? "true" : "false"}>
      <a className="mobile-bar__btn" href={business.phoneHref}>
        <Phone aria-hidden="true" size={18} />
        Call
      </a>
      <Link className="mobile-bar__btn mobile-bar__btn--estimate" to="/contact" search={{}}>
        Request an Estimate
      </Link>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__name">{business.name}</p>
            <p className="small-note">
              Auto repair and bodywork in {business.city}, Illinois.
            </p>
          </div>
          <ul className="site-footer__list" aria-label="Visit">
            <li>{business.street}</li>
            <li>
              {business.city}, {business.region} {business.postalCode}
            </li>
            <li>
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </li>
            <li>{business.hoursNote}</li>
          </ul>
          <ul className="site-footer__list" aria-label="Pages">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="site-footer__legal">
          &copy; {new Date().getFullYear()} {business.name}. Workshop photography on this site is
          illustrative unless noted.
        </p>
      </div>
    </footer>
  );
}
