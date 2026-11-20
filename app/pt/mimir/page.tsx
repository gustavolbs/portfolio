import type { Metadata } from "next";

import { MimirCase } from "@/components/site/mimir-case";

export const metadata: Metadata = {
  title: "Mimir, estudo de caso",
  description:
    "Mimir: uma história de ninar nova por noite, com o nome e o bichinho da criança, narração opcional e timer. Por Gustavo Bispo.",
  alternates: { canonical: "/pt/mimir", languages: { en: "/mimir", "pt-BR": "/pt/mimir", "x-default": "/mimir" } },
  openGraph: {
    title: "Mimir, estudo de caso · Gustavo Bispo",
    description: "Histórias de ninar com o nome do seu filho, da pesquisa de mercado à arquitetura.",
    url: "/pt/mimir",
    locale: "pt_BR",
    images: [{ url: "/apps/mimir/tonight.webp" }],
  },
};

export default function Page() {
  return <MimirCase lang="pt" />;
}
