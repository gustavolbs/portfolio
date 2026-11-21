import type { Metadata } from "next";

import { MonteiCase } from "@/components/site/montei-case";

export const metadata: Metadata = {
  title: "Montei case study",
  description:
    "Montei, a checklist and budget for a first home in Brazil: 138 items in 10 rooms, a spending cap that builds the list, a room that fills as you buy.",
  alternates: { canonical: "/montei", languages: { en: "/montei", "pt-BR": "/pt/montei", "x-default": "/montei" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Montei case study · Gustavo Bispo",
    description: "A new home that fills up as you buy, from market research to approved screens.",
    url: "/montei",
    images: [{ url: "/apps/montei/kitchen.webp" }],
  },
};

export default function Page() {
  return <MonteiCase lang="en" />;
}
