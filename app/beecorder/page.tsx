import type { Metadata } from "next";

import { BeecorderCase } from "@/components/site/beecorder-case";

export const metadata: Metadata = {
  title: "Beecorder case study",
  description:
    "Beecorder, a voice diary for hobby beekeepers: hive notes spoken with gloves on, recorded offline, turned into text. Research, design and code by Gustavo Bispo.",
  alternates: { canonical: "/beecorder", languages: { en: "/beecorder", "pt-BR": "/pt/beecorder", "x-default": "/beecorder" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Beecorder case study · Gustavo Bispo",
    description: "Hive notes you speak with gloves on, from market research to code.",
    url: "/beecorder",
    images: [{ url: "/apps/beecorder/apiary.webp" }],
  },
};

export default function Page() {
  return <BeecorderCase lang="en" />;
}
