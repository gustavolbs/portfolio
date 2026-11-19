import type { Metadata } from "next";

import { MonteiCase } from "@/components/site/montei-case";

export const metadata: Metadata = {
  title: "Montei, estudo de caso",
  description:
    "Montei, checklist e orçamento para a primeira casa: 138 itens em 10 cômodos, um teto que monta a lista e uma cena do cômodo que se enche a cada compra. Por Gustavo Bispo.",
  alternates: { canonical: "/pt/montei", languages: { en: "/montei", "pt-BR": "/pt/montei", "x-default": "/montei" } },
  openGraph: {
    title: "Montei, estudo de caso · Gustavo Bispo",
    description: "A casa nova que se enche a cada compra, da pesquisa de mercado às telas aprovadas.",
    url: "/pt/montei",
    locale: "pt_BR",
    images: [{ url: "/apps/montei/kitchen.webp" }],
  },
};

export default function Page() {
  return <MonteiCase lang="pt" />;
}
