import type { Metadata } from "next";

import { CafuneCase } from "@/components/site/cafune-case";

export const metadata: Metadata = {
  title: "Cafuné, estudo de caso",
  description:
    "Cafuné (nome provisório): uma história de ninar nova por noite, com o nome e o bichinho da criança, narração opcional e timer. Por Gustavo Bispo.",
  alternates: { canonical: "/pt/cafune", languages: { en: "/cafune", "pt-BR": "/pt/cafune", "x-default": "/cafune" } },
  openGraph: {
    title: "Cafuné, estudo de caso · Gustavo Bispo",
    description: "Histórias de ninar com o nome do seu filho, da pesquisa de mercado à arquitetura.",
    url: "/pt/cafune",
    locale: "pt_BR",
    images: [{ url: "/apps/cafune/tonight.webp" }],
  },
};

export default function Page() {
  return <CafuneCase lang="pt" />;
}
