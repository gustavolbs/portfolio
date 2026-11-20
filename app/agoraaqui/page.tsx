import type { Metadata } from "next";

import { AgoraaquiCase } from "@/components/site/agoraaqui-case";

export const metadata: Metadata = {
  title: "agoraaqui case study",
  description:
    "agoraaqui, websites for small Brazilian businesses shown finished on WhatsApp before payment: offer, storefront, multi-tenant sites platform and an AI sales agent, built by Gustavo Bispo.",
  alternates: { canonical: "/agoraaqui", languages: { en: "/agoraaqui", "pt-BR": "/pt/agoraaqui", "x-default": "/agoraaqui" } },
  openGraph: {
    title: "agoraaqui case study · Gustavo Bispo",
    description: "A small business site you see before you pay.",
    url: "/agoraaqui",
    images: [{ url: "/apps/agoraaqui.webp" }],
  },
};

export default function Page() {
  return <AgoraaquiCase lang="en" />;
}
