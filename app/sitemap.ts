import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://iam.linearcraft.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: `${BASE}/`, "pt-BR": `${BASE}/pt` } },
    },
    {
      url: `${BASE}/pt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${BASE}/`, "pt-BR": `${BASE}/pt` } },
    },
    ...["civitasly", "medusa", "urbanify", "ipcatole", "beecorder"].flatMap((slug) => {
      const languages = { en: `${BASE}/${slug}`, "pt-BR": `${BASE}/pt/${slug}` };
      return [`${BASE}/${slug}`, `${BASE}/pt/${slug}`].map((url) => ({
        url,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages },
      }));
    }),
  ];
}
