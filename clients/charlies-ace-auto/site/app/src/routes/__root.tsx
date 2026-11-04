import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
// Page metadata (browser <title>/favicon + social og: tags) committed into the
// repo by the marketplace meta API and read at BUILD time, no runtime fetch.
import appMetaJson from "../app-meta.json";
import { StructuredData } from "../components/StructuredData";
import { SITE_IS_PREVIEW, THEME_COLOR, business, localBusinessJsonLd } from "../site/business";
import { MobileActionBar, SiteChrome, SiteFooter } from "../site/chrome";

declare const __HF_DESIGN_INSPECTOR__: boolean;

const DEFAULT_TITLE = `${business.name} | Auto Repair & Body Shop in Arlington Heights, IL`;
const DEFAULT_DESCRIPTION =
  "Expert auto repair and bodywork in Arlington Heights, Illinois. Collision and dent repair, paint, brakes, diagnostics and maintenance at 1429 E Algonquin Rd. Call (847) 228-6603.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
  // Read by the Higgsfield platform (marketplace feed card), never by the site.
  marketplace_cover_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

// app-meta.json may carry an absolute higgsfield-app URL with a stale host;
// strip those to a root-relative path so it resolves against this deployment.
const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = DEFAULT_TITLE;
  const description = DEFAULT_DESCRIPTION;
  // The feed card image in app-meta carries platform branding; link previews
  // of the site itself always use the shop's own storefront card.
  const ogImage = "/assets/site/og.jpg";
  const favicon = toOwnAssetUrl(meta.favicon_url) ?? "/favicon-32.png";
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title },
      { name: "description", content: description },
      { name: "robots", content: SITE_IS_PREVIEW ? "noindex, nofollow" : "index, follow" },
      { name: "theme-color", content: THEME_COLOR },
      { property: "og:site_name", content: business.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap",
      },
      {
        rel: "preload",
        href: "/fonts/CabinetGrotesk-Extrabold.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous" as const,
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: favicon, sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  };
}

function NotFoundComponent() {
  return (
    <main id="main" className="page-main">
      <section className="section wrap">
        <p className="eyebrow">Page not found</p>
        <h1 className="h-display">Wrong turn.</h1>
        <p className="lede" style={{ marginTop: "1.5rem" }}>
          That page doesn&apos;t exist. The shop is still right where it was.
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link to="/" className="text-link">
            Back to the home page
          </Link>
        </p>
      </section>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main id="main" className="page-main">
      <section className="section wrap">
        <h1 className="h-section">This page didn&apos;t load.</h1>
        <p className="lede" style={{ marginTop: "1.25rem" }}>
          Something went wrong on our end. Try again, or call us at {business.phoneDisplay}.
        </p>
        <p style={{ marginTop: "2rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <button
            type="button"
            className="text-link"
            style={{ background: "none", border: 0, padding: 0, font: "inherit", cursor: "pointer" }}
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="text-link">
            Go home
          </a>
        </p>
      </section>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="default-dark" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
        <StructuredData json={localBusinessJsonLd} />
      </head>
      <body className="site-body">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) {
      return;
    }

    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((error) => {
        reportHiggsfieldError(
          error instanceof Error ? error : new Error("Failed to load design inspector"),
          {
            boundary: "higgsfield_design_inspector_import",
          },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <SiteFooter />
      <MobileActionBar />
    </QueryClientProvider>
  );
}
