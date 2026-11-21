import type { Metadata } from "next";

import { SalesFactoryCase } from "@/components/site/sales-factory-case";

export const metadata: Metadata = {
  title: "Sales Factory, estudo de caso",
  description:
    "Sales Factory, um agente de vendas com IA que acha pequenos negócios, mostra a prévia do site, conversa no WhatsApp, cobra e publica. Por Gustavo Bispo.",
  alternates: { canonical: "/pt/sales-factory", languages: { en: "/sales-factory", "pt-BR": "/pt/sales-factory", "x-default": "/sales-factory" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    title: "Sales Factory, estudo de caso · Gustavo Bispo",
    description: "Um agente de IA que prospecta, vende e entrega sozinho.",
    url: "/pt/sales-factory",
    locale: "pt_BR",
    images: [{ url: "/apps/sales-factory.webp" }],
  },
};

export default function Page() {
  return <SalesFactoryCase lang="pt" />;
}
