import type { Metadata } from "next";

import { UrbanifyCase } from "@/components/site/urbanify-case";

export const metadata: Metadata = {
  title: "Urbanify, estudo de caso",
  description:
    "Urbanify, uma plataforma de zeladoria urbana para prefeituras: app do cidadão, web da prefeitura, painéis de parceiro e anunciante, API e design system, por Gustavo Bispo.",
  alternates: { canonical: "/pt/urbanify", languages: { en: "/urbanify", "pt-BR": "/pt/urbanify", "x-default": "/urbanify" } },
  openGraph: {
    title: "Urbanify, estudo de caso · Gustavo Bispo",
    description: "Um ciclo de zeladoria que o cidadão acompanha, do relato à solução confirmada.",
    url: "/pt/urbanify",
    locale: "pt_BR",
    images: [{ url: "/apps/urbanify.webp" }],
  },
};

export default function Page() {
  return <UrbanifyCase lang="pt" />;
}
