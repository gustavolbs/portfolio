import type { Metadata } from "next";

import { BeecorderCase } from "@/components/site/beecorder-case";

export const metadata: Metadata = {
  title: "Beecorder case study",
  description:
    "Beecorder, a voice diary for hobby beekeepers: speak hive notes with gloves on, recorded offline and turned into text. Research, design and code by Gustavo Bispo.",
  alternates: { canonical: "/beecorder", languages: { en: "/beecorder", "pt-BR": "/pt/beecorder", "x-default": "/beecorder" } },
  openGraph: {
    title: "Beecorder case study · Gustavo Bispo",
    description: "Hive notes you speak with gloves on, from market research to code.",
    url: "/beecorder",
    images: [{ url: "/apps/beecorder/apiary.webp" }],
  },
};

export default function Page() {
  return <BeecorderCase lang="en" />;
}
