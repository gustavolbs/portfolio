import type { Metadata } from "next";

import { FrascoCase } from "@/components/site/frasco-case";

export const metadata: Metadata = {
  title: "Frasco case study",
  description:
    "Frasco (working name), a perfume collection catalog: offline search, bottles and decants, levels, prices and a daily pick, in Portuguese, English and Arabic.",
  alternates: { canonical: "/frasco", languages: { en: "/frasco", "pt-BR": "/pt/frasco", "x-default": "/frasco" } },
  openGraph: {
    title: "Frasco case study · Gustavo Bispo",
    description: "A catalog for your perfume collection, from market research to architecture.",
    url: "/frasco",
    images: [{ url: "/apps/frasco/collection.webp" }],
  },
};

export default function Page() {
  return <FrascoCase lang="en" />;
}
