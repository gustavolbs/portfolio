import type { Metadata } from "next";

import { CivitaslyCase, MEDIA } from "@/components/site/civitasly-case";

export const metadata: Metadata = {
  title: "Civitasly, estudo de caso",
  description:
    "Civitasly, um app mobile para corretores de imóveis: produto, marca, design system, iOS/Android, web e um pipeline de anúncios em código, por Gustavo Bispo.",
  alternates: { canonical: "/pt/civitasly", languages: { en: "/civitasly", "pt-BR": "/pt/civitasly", "x-default": "/civitasly" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    title: "Civitasly, estudo de caso · Gustavo Bispo",
    description: "Produto, design system, app mobile, plataforma web e pipeline de anúncios, de ponta a ponta.",
    url: "/pt/civitasly",
    locale: "pt_BR",
    images: [{ url: `${MEDIA}/img/poster-promo-site.jpg`, width: 1920, height: 1080 }],
  },
};

export default function Page() {
  return <CivitaslyCase lang="pt" />;
}
