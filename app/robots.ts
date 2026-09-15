import type { MetadataRoute } from "next";

const BASE = "https://gustavobispo.com";

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
