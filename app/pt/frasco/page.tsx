import type { Metadata } from "next";

import { FrascoCase } from "@/components/site/frasco-case";

export const metadata: Metadata = {
  title: "Frasco, estudo de caso",
  description:
    "Frasco (nome provisório), catálogo da coleção de perfumes: busca offline, frascos e decants, nível, preço e qual usar hoje, em português, inglês e árabe.",
  alternates: { canonical: "/pt/frasco", languages: { en: "/frasco", "pt-BR": "/pt/frasco", "x-default": "/frasco" } },
  openGraph: {
    title: "Frasco, estudo de caso · Gustavo Bispo",
    description: "O catálogo da sua coleção de perfumes, da pesquisa de mercado à arquitetura.",
    url: "/pt/frasco",
    locale: "pt_BR",
    images: [{ url: "/apps/frasco/collection.webp" }],
  },
};

export default function Page() {
  return <FrascoCase lang="pt" />;
}
