import type { Metadata } from "next";

import { BeecorderCase } from "@/components/site/beecorder-case";

export const metadata: Metadata = {
  title: "Beecorder, estudo de caso",
  description:
    "Beecorder, um diário de voz para apicultores amadores: notas de colmeia faladas de luva, gravadas sem sinal e transformadas em texto. Pesquisa, design e código de Gustavo Bispo.",
  alternates: { canonical: "/pt/beecorder", languages: { en: "/beecorder", "pt-BR": "/pt/beecorder", "x-default": "/beecorder" } },
  openGraph: {
    title: "Beecorder, estudo de caso · Gustavo Bispo",
    description: "Notas de colmeia faladas de luva, da pesquisa de mercado ao código.",
    url: "/pt/beecorder",
    locale: "pt_BR",
    images: [{ url: "/apps/beecorder/apiary.webp" }],
  },
};

export default function Page() {
  return <BeecorderCase lang="pt" />;
}
