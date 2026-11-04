import { SITE_IS_PREVIEW, SITE_ORIGIN } from "./business";

type PageHeadInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Force noindex even after launch (e.g. /inbox). */
  noindex?: boolean;
};

/** Per-route head: unique title/description, canonical, OG, robots. */
export function pageHead({ title, description, path, image, noindex }: PageHeadInput) {
  const url = `${SITE_ORIGIN}${path}`;
  const ogImage = `${SITE_ORIGIN}${image ?? "/assets/site/og.jpg"}`;
  const robots = SITE_IS_PREVIEW || noindex ? "noindex, nofollow" : "index, follow";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
