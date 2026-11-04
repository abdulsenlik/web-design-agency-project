import { env } from "cloudflare:workers";

/** Password for the private /inbox page. Set as the INBOX_PASSWORD secret. */
export function inboxPassword(): string | undefined {
  const value = (env as unknown as { INBOX_PASSWORD?: string }).INBOX_PASSWORD;
  return value && value.length > 0 ? value : undefined;
}
