import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://iam.linearcraft.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_design",
          "/api/",
          "/work",
          "/about",
          "/craft",
          "/notes",
          "/colophon",
          "/contact",
        ],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
