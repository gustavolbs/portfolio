import type { Metadata } from "next";
import { Home } from "@/components/site/home";
import { personJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Gustavo Bispo, Senior Frontend, Product & Forward Deployed Engineer" },
  alternates: { canonical: "/", languages: { en: "/", "pt-BR": "/pt", "x-default": "/" } },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <Home />
    </>
  );
}
