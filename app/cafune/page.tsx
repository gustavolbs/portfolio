import type { Metadata } from "next";

import { CafuneCase } from "@/components/site/cafune-case";

export const metadata: Metadata = {
  title: "Cafuné case study",
  description:
    "Cafuné (working name): a new bedtime story each night with the child's name and pet, optional narration, offline replays and a sleep timer. By Gustavo Bispo.",
  alternates: { canonical: "/cafune", languages: { en: "/cafune", "pt-BR": "/pt/cafune", "x-default": "/cafune" } },
  openGraph: {
    title: "Cafuné case study · Gustavo Bispo",
    description: "Bedtime stories with your child's name, from market research to architecture.",
    url: "/cafune",
    images: [{ url: "/apps/cafune/tonight.webp" }],
  },
};

export default function Page() {
  return <CafuneCase lang="en" />;
}
