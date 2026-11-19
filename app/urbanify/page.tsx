import type { Metadata } from "next";

import { UrbanifyCase } from "@/components/site/urbanify-case";

export const metadata: Metadata = {
  title: "Urbanify case study",
  description:
    "Urbanify, an urban maintenance platform for city governments: citizen app, city team web, partner and advertiser panels, API and design system, led and rebuilt by Gustavo Bispo.",
  alternates: { canonical: "/urbanify", languages: { en: "/urbanify", "pt-BR": "/pt/urbanify", "x-default": "/urbanify" } },
  openGraph: {
    title: "Urbanify case study · Gustavo Bispo",
    description: "A city repair loop citizens can follow, from report to confirmed fix.",
    url: "/urbanify",
    images: [{ url: "/apps/urbanify.webp" }],
  },
};

export default function Page() {
  return <UrbanifyCase lang="en" />;
}
