import type { Metadata } from "next";

import { MedusaCase } from "@/components/site/medusa-case";

export const metadata: Metadata = {
  title: "Medusa, estudo de caso",
  description:
    "Medusa, um cliente gratuito de Apple TV para o seu servidor Jellyfin: design de tvOS para o Siri Remote, player com dois motores e privacidade em primeiro lugar, por Gustavo Bispo.",
  alternates: { canonical: "/pt/medusa", languages: { en: "/medusa", "pt-BR": "/pt/medusa", "x-default": "/medusa" } },
  openGraph: {
    title: "Medusa, estudo de caso · Gustavo Bispo",
    description: "Um app de Apple TV para o seu próprio servidor de mídia, desenhado e construído de ponta a ponta.",
    url: "/pt/medusa",
    locale: "pt_BR",
    images: [{ url: "/apps/medusa.webp", width: 1200, height: 675 }],
  },
};

export default function Page() {
  return <MedusaCase lang="pt" />;
}
