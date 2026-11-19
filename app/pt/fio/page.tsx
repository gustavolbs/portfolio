import type { Metadata } from "next";

import { FioCase } from "@/components/site/fio-case";

export const metadata: Metadata = {
  title: "Fio, estudo de caso",
  description:
    "Fio, uma ficha para coloristas autônomas: fórmulas, fotos de antes e depois e lembrete de retorno no WhatsApp, tudo no celular. Pesquisa e design de Gustavo Bispo.",
  alternates: { canonical: "/pt/fio", languages: { en: "/fio", "pt-BR": "/pt/fio", "x-default": "/fio" } },
  openGraph: {
    title: "Fio, estudo de caso · Gustavo Bispo",
    description: "A história de cor de cada cliente num fio só, da pesquisa de mercado às telas aprovadas.",
    url: "/pt/fio",
    locale: "pt_BR",
    images: [{ url: "/apps/fio/clients.webp" }],
  },
};

export default function Page() {
  return <FioCase lang="pt" />;
}
