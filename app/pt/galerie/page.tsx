import type { Metadata } from "next";

import { GalerieCase } from "@/components/site/galerie-case";

export const metadata: Metadata = {
  title: "Galerie, estudo de caso",
  description:
    "Galerie, catálogo da coleção de perfumes: busca offline, frascos e decants, nível, preço e qual usar hoje, em português, inglês e árabe.",
  alternates: { canonical: "/pt/galerie", languages: { en: "/galerie", "pt-BR": "/pt/galerie", "x-default": "/galerie" } },
  openGraph: {
    title: "Galerie, estudo de caso · Gustavo Bispo",
    description: "O catálogo da sua coleção de perfumes, da pesquisa de mercado à arquitetura.",
    url: "/pt/galerie",
    locale: "pt_BR",
    images: [{ url: "/apps/galerie/collection.webp" }],
  },
};

export default function Page() {
  return <GalerieCase lang="pt" />;
}
