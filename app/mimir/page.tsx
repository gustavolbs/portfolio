import type { Metadata } from "next";

import { MimirCase } from "@/components/site/mimir-case";

export const metadata: Metadata = {
  title: "Mimir case study",
  description:
    "Mimir: a new bedtime story each night with the child's name and pet, optional narration, offline replays and a sleep timer. By Gustavo Bispo.",
  alternates: { canonical: "/mimir", languages: { en: "/mimir", "pt-BR": "/pt/mimir", "x-default": "/mimir" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Mimir case study · Gustavo Bispo",
    description: "Bedtime stories with your child's name, from market research to architecture.",
    url: "/mimir",
    images: [{ url: "/apps/mimir/tonight.webp" }],
  },
};

export default function Page() {
  return <MimirCase lang="en" />;
}
