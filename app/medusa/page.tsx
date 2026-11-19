import type { Metadata } from "next";

import { MedusaCase } from "@/components/site/medusa-case";

export const metadata: Metadata = {
  title: "Medusa case study",
  description:
    "Medusa, a free Apple TV client for your own Jellyfin server: tvOS design for the Siri Remote, a two-engine player and a privacy-first build, designed and built by Gustavo Bispo.",
  alternates: { canonical: "/medusa", languages: { en: "/medusa", "pt-BR": "/pt/medusa", "x-default": "/medusa" } },
  openGraph: {
    title: "Medusa case study · Gustavo Bispo",
    description: "An Apple TV app for your own media server, designed and built end to end.",
    url: "/medusa",
    images: [{ url: "/apps/medusa.webp", width: 1200, height: 675 }],
  },
};

export default function Page() {
  return <MedusaCase lang="en" />;
}
