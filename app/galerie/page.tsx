import type { Metadata } from "next";

import { GalerieCase } from "@/components/site/galerie-case";

export const metadata: Metadata = {
  title: "Galerie case study",
  description:
    "Galerie, a perfume collection catalog: offline search, bottles and decants, levels, prices and a daily pick, in Portuguese, English and Arabic.",
  alternates: { canonical: "/galerie", languages: { en: "/galerie", "pt-BR": "/pt/galerie", "x-default": "/galerie" } },
  openGraph: {
    title: "Galerie case study · Gustavo Bispo",
    description: "A catalog for your perfume collection, from market research to architecture.",
    url: "/galerie",
    images: [{ url: "/apps/galerie/collection.webp" }],
  },
};

export default function Page() {
  return <GalerieCase lang="en" />;
}
