import type { ReactNode } from "react";

import { StructuredData } from "@/components/StructuredData";
import { addressLine, business } from "@/site/business";
import { CtaCall, CtaEstimate } from "@/site/ctas";

export type ServicePageProps = {
  title: string;
  intro: string;
  image: { src: string; width: number; height: number; alt: string };
  items: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  service: "body" | "mechanical";
  extra?: ReactNode;
};

function faqJsonLd(faqs: ServicePageProps["faqs"]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }).replace(/</g, "\\u003c");
}

export function ServicePage({ title, intro, image, items, steps, faqs, service, extra }: ServicePageProps) {
  return (
    <main id="main" className="page-main svc">
      <header className="svc-hero">
        <div className="wrap svc-hero__inner">
          <div className="svc-hero__copy">
            <h1 className="h-display rise">{title}</h1>
            <p className="lede svc-hero__lede">{intro}</p>
          </div>
          <div className="svc-hero__media">
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      <div className="wrap svc-layout">
        <div className="svc-main">
          <section className="svc-section" aria-labelledby="svc-work">
            <h2 className="svc-h2" id="svc-work">
              What we work on
            </h2>
            <ul className="svc-items">
              {items.map((item) => (
                <li className="svc-item" key={item.title}>
                  <h3 className="h-card svc-item__title">{item.title}</h3>
                  <p className="svc-item__text">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="svc-section" aria-labelledby="svc-steps">
            <h2 className="svc-h2" id="svc-steps">
              How it goes
            </h2>
            <ol className="svc-steps">
              {steps.map((step) => (
                <li className="svc-step" key={step.title}>
                  <h3 className="svc-step__title">{step.title}</h3>
                  <p className="svc-step__text">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {extra ? <div className="svc-section svc-extra">{extra}</div> : null}

          <section className="svc-section" aria-labelledby="svc-faq">
            <h2 className="svc-h2" id="svc-faq">
              Questions
            </h2>
            <div className="svc-faq">
              {faqs.map((f) => (
                <details className="svc-faq__item" key={f.q}>
                  <summary className="svc-faq__q">
                    <span>{f.q}</span>
                    <span className="svc-faq__icon" aria-hidden="true" />
                  </summary>
                  <p className="svc-faq__a">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="svc-panel" aria-labelledby="svc-panel-title">
          <div className="svc-panel__inner">
            <h2 className="svc-panel__title" id="svc-panel-title">
              Ready when you are.
            </h2>
            <div className="svc-panel__actions">
              <CtaEstimate service={service} />
              <CtaCall />
            </div>
            <p className="svc-panel__meta">{addressLine}</p>
            <p className="svc-panel__meta">{business.hoursNote}</p>
          </div>
        </aside>
      </div>

      <StructuredData json={faqJsonLd(faqs)} />
    </main>
  );
}
