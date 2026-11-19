import type { Metadata } from "next";
import { Home } from "@/components/site/home";
import { personJsonLd } from "@/lib/jsonld";

const description =
  "Senior Frontend, Product & Forward Deployed Engineer. Interfaces claras, acessíveis e prontas para produção, e apps próprios publicados.";

export const metadata: Metadata = {
  title: "Senior Frontend, Product & Forward Deployed Engineer",
  description,
  alternates: { canonical: "/pt", languages: { en: "/", "pt-BR": "/pt", "x-default": "/" } },
  openGraph: { locale: "pt_BR", url: "/pt", description },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <Home lang="pt" />
    </>
  );
}
