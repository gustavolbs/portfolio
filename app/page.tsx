import type { Metadata } from "next";
import { Home } from "@/components/site/home";
import { personJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Senior Frontend, Product & Forward Deployed Engineer",
  description:
    "Senior frontend engineering expressed through resilient, accessible interfaces.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <Home />
    </>
  );
}
