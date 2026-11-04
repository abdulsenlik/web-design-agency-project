# charlie's ace site: read-only mirror

snapshot of the higgsfield website repo (website_id `d63c6e05-4c7c-433d-b35a-b48de2ba5da3`, branch `main`, commit `00708c4`), copied 2026-11-04.

- **read here, edit in higgsfield.** changes made in this folder do not deploy. the live site only updates from the higgsfield repo (see `../CODE-LOCATION.md` for the checkout, push and deploy steps).
- left out on purpose: `app/packages/` (higgsfield's vendored sdk + ui kit, not our code) and `app/public/presets/` (template demo images). because of that, `bun install` will not run from this mirror.
- the code we wrote lives in `app/src/site/`, `app/src/routes/`, `app/src/scroll-scrub-scenes.ts`, `app/src/lib/api/estimates.functions.ts`, `app/migrations/0002_estimates.sql`. everything else is the higgsfield scroll-scrub template.
- if this mirror and higgsfield disagree, higgsfield wins. refresh by re-exporting the repo.
