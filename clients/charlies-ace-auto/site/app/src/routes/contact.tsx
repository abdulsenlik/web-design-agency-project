import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Car,
  Clock,
  MapPin,
  Question,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

import { submitEstimate } from "../lib/api/estimates.functions";
import { addressLine, business } from "../site/business";
import { CtaCall, DirectionsLink } from "../site/ctas";
import {
  CONTACT_PREF_OPTIONS,
  DRIVABLE_OPTIONS,
  SERVICE_OPTIONS,
  estimateSchema,
} from "../site/estimate-schema";
import { pageHead } from "../site/seo";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: "body" | "mechanical" } => ({
    service:
      s.service === "body" || s.service === "mechanical"
        ? (s.service as "body" | "mechanical")
        : undefined,
  }),
  head: () =>
    pageHead({
      title: "Request an Estimate | Charlie's Ace Auto & Body, Arlington Heights",
      description:
        "Tell Charlie's Ace Auto & Body what's happening with your car. Send a few details and we'll get back to you, or call the shop in Arlington Heights.",
      path: "/contact",
    }),
  component: ContactPage,
});

type FieldKey =
  | "name"
  | "phone"
  | "email"
  | "service"
  | "vehicle"
  | "drivable"
  | "description"
  | "contactPref"
  | "consent";

type Values = {
  name: string;
  phone: string;
  email: string;
  service: "" | "body" | "mechanical" | "unsure";
  vehicle: string;
  drivable: "" | "yes" | "no" | "unsure";
  contactPref: "call" | "text" | "email";
  description: string;
  consent: boolean;
  company: string;
};

const INITIAL: Values = {
  name: "",
  phone: "",
  email: "",
  service: "",
  vehicle: "",
  drivable: "",
  contactPref: "call",
  description: "",
  consent: false,
  company: "",
};

/** DOM id to focus for each field, in on-screen order. */
const FOCUS_ID: Record<FieldKey, string> = {
  name: "f-name",
  phone: "f-phone",
  email: "f-email",
  service: "f-service-body",
  vehicle: "f-vehicle",
  drivable: "f-drivable-yes",
  description: "f-description",
  contactPref: "f-pref-call",
  consent: "f-consent",
};
const FIELD_ORDER: FieldKey[] = [
  "name",
  "phone",
  "email",
  "service",
  "vehicle",
  "drivable",
  "description",
  "contactPref",
  "consent",
];

const SERVICE_ICON = { body: Car, mechanical: Wrench, unsure: Question } as const;

const REACH_BY = { call: "phone call", text: "text", email: "email" } as const;

function ContactPage() {
  const search = Route.useSearch();

  return (
    <main id="main" className="page-main">
      <div className="wrap contact-grid">
        <header className="contact-intro">
          <h1 className="h-display rise">Tell us what&apos;s happening.</h1>
          <p className="lede contact-intro__lede">
            Send a few details and we&apos;ll get back to you to talk it through. Prefer to talk now? Call the
            shop.
          </p>
          <div className="contact-intro__actions">
            <CtaCall />
          </div>
        </header>

        <div className="contact-form-wrap">
          <EstimateForm initialService={search.service} />
        </div>

        <aside className="contact-aside" aria-label="Shop details and what happens next">
          <div className="contact-facts">
            <p className="contact-fact">
              <MapPin aria-hidden="true" size={20} weight="regular" />
              <span>
                {business.street}
                <br />
                {business.city}, {business.region} {business.postalCode}
                <br />
                <DirectionsLink />
              </span>
            </p>
            <p className="contact-fact">
              <Clock aria-hidden="true" size={20} weight="regular" />
              <span>{business.hoursNote}</span>
            </p>
          </div>

          <h2 className="eyebrow contact-next__title">What happens next</h2>
          <ol className="contact-steps">
            <li>We read your request.</li>
            <li>We call, text or email you back, the way you asked.</li>
            <li>You decide what happens next.</li>
          </ol>

          <figure className="contact-photo">
            <div className="contact-photo__frame">
              <img
                src="/assets/site/storefront.jpg"
                width={2688}
                height={1520}
                loading="lazy"
                alt={`The front of the shop at ${addressLine}, with the Charlie's Auto Service sign above the entrance.`}
                className="settle-on-scroll"
              />
            </div>
            <figcaption className="small-note">The shop at {business.street}.</figcaption>
          </figure>
        </aside>
      </div>
    </main>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

function EstimateForm({ initialService }: { initialService?: "body" | "mechanical" }) {
  const [values, setValues] = useState<Values>({ ...INITIAL, service: initialService ?? "" });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");
  const [sentName, setSentName] = useState("");
  const [sentPref, setSentPref] = useState<Values["contactPref"]>("call");
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  // Keep the preselected tile in step with the ?service= param.
  useEffect(() => {
    if (initialService) setValues((v) => ({ ...v, service: initialService }));
  }, [initialService]);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
    if (status === "error") errorRef.current?.focus();
  }, [status]);

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (key in FOCUS_ID && errors[key as FieldKey]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const parsed = estimateSchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<FieldKey, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && key in FOCUS_ID && !next[key as FieldKey]) {
          next[key as FieldKey] = issue.message;
        }
      }
      setErrors(next);
      const first = FIELD_ORDER.find((k) => next[k]);
      if (first) document.getElementById(FOCUS_ID[first])?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const res = await submitEstimate({ data: parsed.data });
      if (res && res.ok === true) {
        setSentName(parsed.data.name.split(/\s+/)[0] ?? "");
        setSentPref(parsed.data.contactPref);
        setStatus("sent");
      } else {
        throw new Error("unexpected");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      setErrorText(
        message.includes("rate-limited")
          ? "Too many requests in a short time. Please call us instead."
          : `We couldn't send your request. Please call us at ${business.phoneDisplay}.`,
      );
      setStatus("error");
    }
  }

  function reset() {
    setValues({ ...INITIAL, service: initialService ?? "" });
    setErrors({});
    setErrorText("");
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div className="contact-panel contact-success" role="status" tabIndex={-1} ref={successRef}>
        <h2 className="h-card">Got it, {sentName}.</h2>
        <p className="body-copy">
          Your request is in. We&apos;ll reach out by {REACH_BY[sentPref]} during business hours.
        </p>
        <div className="contact-success__actions">
          <CtaCall label="Call the Shop" />
          <button type="button" className="form-secondary" onClick={reset}>
            Send another request
          </button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className="contact-panel form" onSubmit={onSubmit} noValidate aria-label="Estimate request">
      <div className="form-row form-row--2">
        <Field id="f-name" label="Full name" error={errors.name}>
          {(p) => (
            <input
              {...p}
              className="form-input"
              type="text"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
            />
          )}
        </Field>
        <Field id="f-phone" label="Phone" error={errors.phone}>
          {(p) => (
            <input
              {...p}
              className="form-input"
              type="tel"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          )}
        </Field>
      </div>

      <Field id="f-email" label="Email" optional error={errors.email}>
        {(p) => (
          <input
            {...p}
            className="form-input"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
        )}
      </Field>

      <fieldset
        className="form-group"
        aria-describedby={errors.service ? "f-service-error" : undefined}
      >
        <legend className="form-label">What do you need?</legend>
        <div className="form-tiles">
          {SERVICE_OPTIONS.map((opt) => {
            const Icon = SERVICE_ICON[opt.value];
            return (
              <label key={opt.value} className="form-tile">
                <input
                  id={`f-service-${opt.value}`}
                  className="form-choice__input"
                  type="radio"
                  name="service"
                  value={opt.value}
                  checked={values.service === opt.value}
                  aria-invalid={errors.service ? true : undefined}
                  onChange={() => set("service", opt.value)}
                />
                <span className="form-tile__body">
                  <Icon aria-hidden="true" size={28} weight="regular" />
                  <span className="form-tile__label">{opt.label}</span>
                  <span className="form-tile__hint">{opt.hint}</span>
                </span>
              </label>
            );
          })}
        </div>
        {errors.service ? (
          <p id="f-service-error" className="form-error">
            {errors.service}
          </p>
        ) : null}
      </fieldset>

      <Field
        id="f-vehicle"
        label="Vehicle year, make, model"
        helper="Example: 2016 Honda Accord"
        error={errors.vehicle}
      >
        {(p) => (
          <input
            {...p}
            className="form-input"
            type="text"
            name="vehicle"
            autoComplete="off"
            value={values.vehicle}
            onChange={(e) => set("vehicle", e.target.value)}
          />
        )}
      </Field>

      <fieldset className="form-group">
        <legend className="form-label">
          Can it be driven? <span className="form-optional">Optional</span>
        </legend>
        <div className="form-choices">
          {DRIVABLE_OPTIONS.map((opt) => (
            <label key={opt.value} className="form-choice">
              <input
                id={`f-drivable-${opt.value}`}
                className="form-choice__input"
                type="radio"
                name="drivable"
                value={opt.value}
                checked={values.drivable === opt.value}
                onChange={() => set("drivable", opt.value)}
              />
              <span className="form-choice__body">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="f-description" label="Describe the issue" error={errors.description}>
        {(p) => (
          <textarea
            {...p}
            className="form-input form-textarea"
            name="description"
            rows={5}
            value={values.description}
            onChange={(e) => set("description", e.target.value)}
          />
        )}
      </Field>
      <p className="small-note form-photos">
        Have photos? Mention it, and we&apos;ll tell you where to send them.
      </p>

      <fieldset className="form-group">
        <legend className="form-label">Preferred contact</legend>
        <div className="form-choices">
          {CONTACT_PREF_OPTIONS.map((opt) => (
            <label key={opt.value} className="form-choice">
              <input
                id={`f-pref-${opt.value}`}
                className="form-choice__input"
                type="radio"
                name="contactPref"
                value={opt.value}
                checked={values.contactPref === opt.value}
                onChange={() => set("contactPref", opt.value)}
              />
              <span className="form-choice__body">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-consent-wrap">
        <label className="form-consent">
          <input
            id="f-consent"
            className="form-consent__box"
            type="checkbox"
            name="consent"
            checked={values.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "f-consent-error" : undefined}
            onChange={(e) => set("consent", e.target.checked)}
          />
          <span>
            I agree to be contacted about this request. We only use your details to respond.
          </span>
        </label>
        {errors.consent ? (
          <p id="f-consent-error" className="form-error">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="form-hp" aria-hidden="true">
        <label htmlFor="f-company">Leave this field empty</label>
        <input
          id="f-company"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => set("company", e.target.value)}
        />
      </div>

      {status === "error" ? (
        <div className="contact-error" role="alert" tabIndex={-1} ref={errorRef}>
          {errorText}
        </div>
      ) : null}

      <button type="submit" className="contact-submit" disabled={sending} aria-disabled={sending}>
        {sending ? (
          "Sending..."
        ) : (
          <>
            Send request
            <ArrowRight aria-hidden="true" size={18} weight="bold" />
          </>
        )}
      </button>
    </form>
  );
}

type ControlProps = {
  id: string;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
};

/** Label above, helper and error below. Passes id + aria wiring to the control. */
function Field({
  id,
  label,
  optional,
  helper,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  helper?: string;
  error?: string;
  children: (props: ControlProps) => ReactNode;
}) {
  const helperId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy = [helper ? helperId : "", error ? errorId : ""].filter(Boolean).join(" ");
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
        {optional ? <span className="form-optional">Optional</span> : null}
      </label>
      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy || undefined,
      })}
      {helper ? (
        <p id={helperId} className="form-help">
          {helper}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="form-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
