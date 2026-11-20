import type { Metadata } from "next";

import { SalesFactoryCase } from "@/components/site/sales-factory-case";

export const metadata: Metadata = {
  title: "Sales Factory case study",
  description:
    "Sales Factory, an AI sales agent that finds small businesses, builds each one a site preview, talks to the owner on WhatsApp, charges and publishes the site, with the CRM to watch it, built by Gustavo Bispo.",
  alternates: { canonical: "/sales-factory", languages: { en: "/sales-factory", "pt-BR": "/pt/sales-factory", "x-default": "/sales-factory" } },
  openGraph: {
    title: "Sales Factory case study · Gustavo Bispo",
    description: "An AI agent that prospects, sells and delivers on its own.",
    url: "/sales-factory",
    images: [{ url: "/apps/sales-factory.webp" }],
  },
};

export default function Page() {
  return <SalesFactoryCase lang="en" />;
}
