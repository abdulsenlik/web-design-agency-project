# qa report: charlie's ace concept preview

live: https://charlies-ace-auto-body.higgsfield.app (owner-only until published; noindex + robots disallow)
checked: 2026-10-23

## verified (actually run)
- type check (`tsc --noEmit`) and the ui colour gate: pass.
- production build (`vite build`): pass.
- local cloudflare runtime (wrangler dev) + headless chromium screenshots at 1440x900 and 390x844: home, body & collision, contact, about.
- no horizontal overflow at 390px after fix (was 402px from an offset photo crop).
- every page returns 200 locally; robots.txt disallows all while in preview.
- film: 4 acts cut from one 15s take, posters are exact first frames, 9.3 MB desktop / 4.6 MB mobile (budget 32 / 16).
- reviews section: 5 verbatim google excerpts, rating 4.7 / 98 checked against google's own panel screenshot.
- mechanical gate: no em/en dashes in visible copy, no placeholders, no h-screen, every image referenced.

## not yet tested
- live form submission into the database (needs a deploy with the D1 binding; test by sending one request, then open /inbox).
- /inbox login (needs INBOX_PASSWORD set in the website settings, then a redeploy).
- real iphone safari scroll feel of the film (only chromium emulation so far).
- lighthouse / axe accessibility scan.

## known decisions
- a separate "Higgsfield Agent" build exists on charlies-ace-auto.higgsfield.app. it was left untouched. this build lives on charlies-ace-auto-body.
- hours are not shown anywhere (sources conflict). "call ahead for today's hours."
- workshop photos are generated and labelled illustrative; the storefront is the real photo, retouched (perspective, sky, clutter removed).
