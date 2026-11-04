import { createFileRoute } from "@tanstack/react-router";

import { SITE_IS_PREVIEW } from "@/site/business";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        // Concept preview: keep search engines out until the owner approves.
        const rules = SITE_IS_PREVIEW
          ? ["User-agent: *", "Disallow: /"]
          : ["User-agent: *", "Allow: /", "Disallow: /inbox"];
        const body = [...rules, "", `Sitemap: ${origin}/sitemap.xml`].join("\n");
        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
