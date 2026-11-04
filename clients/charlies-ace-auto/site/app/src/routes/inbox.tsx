import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { listEstimates } from "../lib/api/estimates.functions";
import {
  CONTACT_PREF_OPTIONS,
  DRIVABLE_OPTIONS,
  SERVICE_OPTIONS,
  type EstimateRow,
} from "../site/estimate-schema";
import { pageHead } from "../site/seo";

export const Route = createFileRoute("/inbox")({
  head: () =>
    pageHead({
      title: "Inbox | Charlie's Ace Auto & Body",
      description: "Private.",
      path: "/inbox",
      noindex: true,
    }),
  component: InboxPage,
});

type InboxStatus = "locked" | "loading" | "ok" | "denied" | "unconfigured" | "no-db" | "error";

const MESSAGES: Partial<Record<InboxStatus, string>> = {
  unconfigured:
    "The inbox password isn't set yet. Add an INBOX_PASSWORD secret in the website settings, then redeploy.",
  denied: "That password didn't work.",
  "no-db": "Storage isn't connected yet.",
  error: "Something went wrong. Please try again.",
};

function labelFor(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string | null,
): string {
  if (!value) return "";
  return options.find((o) => o.value === value)?.label ?? value;
}

function formatDate(createdAt: string): string {
  // D1 datetime('now') is UTC, formatted "YYYY-MM-DD HH:MM:SS".
  const d = new Date(`${createdAt.replace(" ", "T")}Z`);
  if (Number.isNaN(d.getTime())) return createdAt;
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(d);
}

function InboxPage() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<InboxStatus>("locked");
  const [rows, setRows] = useState<EstimateRow[]>([]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await listEstimates({ data: { password } });
      setRows(res.rows);
      setStatus(res.status);
    } catch {
      setRows([]);
      setStatus("error");
    }
  }

  const message = MESSAGES[status];

  return (
    <main id="main" className="page-main">
      <div className="wrap inbox">
        <h1 className="h-section rise">Inbox</h1>
        <p className="lede inbox__lede">Estimate requests from the website.</p>

        <form className="inbox-form" onSubmit={onSubmit}>
          <label htmlFor="inbox-password" className="form-label">
            Password
          </label>
          <div className="inbox-form__row">
            <input
              id="inbox-password"
              className="form-input"
              type="password"
              name="password"
              autoComplete="current-password"
              maxLength={200}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="inbox-form__button" disabled={status === "loading"}>
              {status === "loading" ? "Checking..." : "Open inbox"}
            </button>
          </div>
        </form>

        {message ? (
          <div className="contact-panel inbox-message" role="status">
            {message}
          </div>
        ) : null}

        {status === "ok" ? <InboxList rows={rows} /> : null}
      </div>
    </main>
  );
}

function InboxList({ rows }: { rows: EstimateRow[] }) {
  if (rows.length === 0) {
    return <p className="inbox-empty">No requests yet.</p>;
  }

  return (
    <section aria-label="Requests" className="inbox-results">
      <p className="inbox-count">
        {rows.length} {rows.length === 1 ? "request" : "requests"}
      </p>

      <ul className="inbox-cards">
        {rows.map((r) => (
          <li key={r.id} className="inbox-card">
            <p className="inbox-card__date">{formatDate(r.created_at)}</p>
            <h2 className="inbox-card__name">{r.name}</h2>
            <p className="inbox-card__line">
              <a className="text-link" href={`tel:${r.phone.replace(/[^\d+]/g, "")}`}>
                {r.phone}
              </a>
              {r.email ? (
                <>
                  {" · "}
                  <a className="text-link" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </>
              ) : null}
            </p>
            <dl className="inbox-card__meta">
              <div>
                <dt>Service</dt>
                <dd>{labelFor(SERVICE_OPTIONS, r.service)}</dd>
              </div>
              <div>
                <dt>Vehicle</dt>
                <dd>{r.vehicle}</dd>
              </div>
              <div>
                <dt>Drivable</dt>
                <dd>{labelFor(DRIVABLE_OPTIONS, r.drivable) || "Not given"}</dd>
              </div>
              <div>
                <dt>Prefers</dt>
                <dd>{labelFor(CONTACT_PREF_OPTIONS, r.contact_pref)}</dd>
              </div>
            </dl>
            <p className="inbox-card__desc">{r.description}</p>
          </li>
        ))}
      </ul>

      <div className="inbox-table-wrap">
        <table className="inbox-table">
          <caption className="sr-only">Estimate requests, newest first</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Service</th>
              <th scope="col">Vehicle</th>
              <th scope="col">Drivable</th>
              <th scope="col">Prefers</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="inbox-table__date">{formatDate(r.created_at)}</td>
                <td>{r.name}</td>
                <td>
                  <a className="text-link" href={`tel:${r.phone.replace(/[^\d+]/g, "")}`}>
                    {r.phone}
                  </a>
                  {r.email ? (
                    <>
                      <br />
                      <a className="text-link" href={`mailto:${r.email}`}>
                        {r.email}
                      </a>
                    </>
                  ) : null}
                </td>
                <td>{labelFor(SERVICE_OPTIONS, r.service)}</td>
                <td>{r.vehicle}</td>
                <td>{labelFor(DRIVABLE_OPTIONS, r.drivable)}</td>
                <td>{labelFor(CONTACT_PREF_OPTIONS, r.contact_pref)}</td>
                <td className="inbox-table__desc">{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
