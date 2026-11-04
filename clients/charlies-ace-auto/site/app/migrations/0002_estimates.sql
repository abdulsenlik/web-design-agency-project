-- Estimate requests submitted from /contact. Additive only.
CREATE TABLE IF NOT EXISTS estimates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  vehicle TEXT NOT NULL,
  drivable TEXT,
  contact_pref TEXT NOT NULL,
  description TEXT NOT NULL,
  ip_hash TEXT
);

CREATE INDEX IF NOT EXISTS idx_estimates_created_at ON estimates (created_at);
CREATE INDEX IF NOT EXISTS idx_estimates_ip_hash ON estimates (ip_hash);
