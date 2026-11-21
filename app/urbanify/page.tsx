import type { Metadata } from "next";

import { UrbanifyCase } from "@/components/site/urbanify-case";

export const metadata: Metadata = {
  title: "Urbanify case study",
  description:
    "Urbanify, an urban maintenance platform for city governments: citizen app, city team web, partner panels, API and design system, rebuilt by Gustavo Bispo.",
  alternates: { canonical: "/urbanify", languages: { en: "/urbanify", "pt-BR": "/pt/urbanify", "x-default": "/urbanify" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Urbanify case study · Gustavo Bispo",
    description: "A city repair loop citizens can follow, from report to confirmed fix.",
    url: "/urbanify",
    images: [{ url: "/apps/urbanify.webp" }],
  },
};

export default function Page() {
  return <UrbanifyCase lang="en" />;
}
