import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

import { estimateSchema, type EstimateRow } from "../../site/estimate-schema";
import { bindings } from "../bindings.server";
import { inboxPassword } from "../secrets.server";

const IP_SALT = "charlies-ace-estimates-v1";
const RATE_LIMIT_COUNT = 5;

async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function clientIp(): string | undefined {
  try {
    return getRequestHeader("cf-connecting-ip") || undefined;
  } catch {
    return undefined;
  }
}

/** Constant-time string comparison. Length mismatch is always false. */
function safeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const x = enc.encode(a);
  const y = enc.encode(b);
  let diff = x.length === y.length ? 0 : 1;
  const len = Math.max(x.length, y.length);
  for (let i = 0; i < len; i++) {
    diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  }
  return diff === 0;
}

export const submitEstimate = createServerFn({ method: "POST" })
  .validator(estimateSchema)
  .handler(async ({ data }) => {
    // Honeypot: pretend success, save nothing.
    if (data.company && data.company.trim() !== "") {
      return { ok: true as const };
    }

    const { DB } = bindings();
    if (!DB) throw new Error("not-configured");

    const ip = clientIp();
    const ipHash = ip ? await sha256Hex(`${IP_SALT}:${ip}`) : null;

    if (ipHash) {
      const recent = await DB.prepare(
        "SELECT COUNT(*) AS n FROM estimates WHERE ip_hash = ? AND created_at >= datetime('now', '-10 minutes')",
      )
        .bind(ipHash)
        .first<{ n: number }>();
      if ((recent?.n ?? 0) >= RATE_LIMIT_COUNT) throw new Error("rate-limited");
    }

    const result = await DB.prepare(
      "INSERT INTO estimates (name, phone, email, service, vehicle, drivable, contact_pref, description, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    )
      .bind(
        data.name,
        data.phone,
        data.email === "" ? null : data.email,
        data.service,
        data.vehicle,
        data.drivable === "" ? null : data.drivable,
        data.contactPref,
        data.description,
        ipHash,
      )
      .run();

    return { ok: true as const, id: Number(result.meta.last_row_id) };
  });

export const listEstimates = createServerFn({ method: "POST" })
  .validator(z.object({ password: z.string().max(200) }))
  .handler(async ({ data }) => {
    const rows: EstimateRow[] = [];
    const secret = inboxPassword();
    if (!secret) return { status: "unconfigured" as const, rows };

    if (!safeEqual(data.password, secret)) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return { status: "denied" as const, rows };
    }

    const { DB } = bindings();
    if (!DB) return { status: "no-db" as const, rows };

    const result = await DB.prepare(
      "SELECT id, created_at, name, phone, email, service, vehicle, drivable, contact_pref, description FROM estimates ORDER BY id DESC LIMIT 200",
    ).all<EstimateRow>();

    return { status: "ok" as const, rows: result.results ?? [] };
  });
