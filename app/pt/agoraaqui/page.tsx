import type { Metadata } from "next";

import { AgoraaquiCase } from "@/components/site/agoraaqui-case";

export const metadata: Metadata = {
  title: "agoraaqui, estudo de caso",
  description:
    "agoraaqui, sites para pequenos negócios mostrados prontos no WhatsApp antes do pagamento: vitrine, plataforma de sites e vendedora com IA. Por Gustavo Bispo.",
  alternates: { canonical: "/pt/agoraaqui", languages: { en: "/agoraaqui", "pt-BR": "/pt/agoraaqui", "x-default": "/agoraaqui" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    title: "agoraaqui, estudo de caso · Gustavo Bispo",
    description: "O site do pequeno negócio que você vê antes de pagar.",
    url: "/pt/agoraaqui",
    locale: "pt_BR",
    images: [{ url: "/apps/agoraaqui.webp" }],
  },
};

export default function Page() {
  return <AgoraaquiCase lang="pt" />;
}
