import type { Metadata } from "next";

import { CivitaslyCase, MEDIA } from "@/components/site/civitasly-case";

export const metadata: Metadata = {
  title: "Civitasly case study",
  description:
    "Civitasly, a mobile-first app for real estate agents: product, brand, design system, iOS/Android, web and a code-driven ad pipeline, built by Gustavo Bispo.",
  alternates: { canonical: "/civitasly", languages: { en: "/civitasly", "pt-BR": "/pt/civitasly", "x-default": "/civitasly" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Civitasly case study · Gustavo Bispo",
    description: "Product, design system, mobile app, web platform and ad pipeline, designed and built end to end.",
    url: "/civitasly",
    images: [{ url: `${MEDIA}/img/poster-promo-site.jpg`, width: 1920, height: 1080 }],
  },
};

export default function Page() {
  return <CivitaslyCase lang="en" />;
}
