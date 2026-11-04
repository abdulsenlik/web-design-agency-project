# where the charlie's ace website code lives

the source of truth is higgsfield's own hosted git repo for the website. a read-only mirror (commit `00708c4`) is in `site/` next to this file, so any agent can read the code without the higgsfield connector. edits must go through higgsfield to deploy.

## the live build (use this one)
- live url: https://charlies-ace-auto-body.higgsfield.app (public, listed on the higgsfield feed)
- higgsfield website_id: `d63c6e05-4c7c-433d-b35a-b48de2ba5da3`
- slug: `charlies-ace-auto-body`
- branch: `main` (head at handoff: `00708c4`)

## how an agent gets the code
needs the higgsfield mcp connected (same higgsfield account).
1. call `get_workflow_instructions` with `{ workflow: "website-builder-flow" }` (required before any website tool).
2. call `website_repo_access` with `{ website_id: "d63c6e05-4c7c-433d-b35a-b48de2ba5da3", operation: "checkout" }`. it returns a `checkout_path` inside the higgsfield sandbox.
3. read / edit / commit there with `sandbox_exec`. the project is in `app/` (react 19 + tanstack start, cloudflare worker). read `app/AGENTS.md` first.
4. save: `website_repo_access` with `operation: "push"`, then `deploy_website` with the same website_id. publish is already on, so a deploy updates the public site.

## map of the code (inside app/)
- `design-brief.md`: concept, palette, type, section plan
- `src/site/business.ts`: shop facts, preview flag (`SITE_IS_PREVIEW`), json-ld
- `src/site/`: header/footer, buttons, before/after slider, reviews, service page layout, all css (`site.css` + `css/*.css`)
- `src/routes/`: pages (`index`, `body-collision`, `mechanical`, `about`, `contact`, `inbox`, robots, sitemap)
- `src/scroll-scrub-scenes.ts`: the 4-act film chapters
- `src/lib/api/estimates.functions.ts`: estimate form backend (d1 database) + inbox
- `migrations/0002_estimates.sql`: database table
- `public/assets/world/`: the film clips; `public/assets/site/`: photos

## the other build (do not edit unless told)
- `charlies-ace-auto.higgsfield.app`, website_id `f6021c38-670d-4805-b364-8d78f3e111c9`. an earlier, separate build. left untouched.

## still to do
- set the `INBOX_PASSWORD` secret in higgsfield website settings, redeploy, test the estimate form end to end.
- see `confirm-with-charlie.md` and `qa-report.md` in this folder.
