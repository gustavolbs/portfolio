import type { Metadata } from "next";

import { IpcatoleCase } from "@/components/site/ipcatole-case";

export const metadata: Metadata = {
  title: "IP Catolé, estudo de caso",
  description:
    "IP Catolé, o app de uma igreja presbiteriana: cultos, Bíblia com áudio, hinário, agenda por sociedade, culto ao vivo e escalas, desenhado e construído por Gustavo Bispo.",
  alternates: { canonical: "/pt/ipcatole", languages: { en: "/ipcatole", "pt-BR": "/pt/ipcatole", "x-default": "/ipcatole" } },
  openGraph: {
    title: "IP Catolé, estudo de caso · Gustavo Bispo",
    description: "Uma igreja inteira num app, tocado por voluntários em plano grátis.",
    url: "/pt/ipcatole",
    locale: "pt_BR",
    images: [{ url: "/apps/ipcatole.webp" }],
  },
};

export default function Page() {
  return <IpcatoleCase lang="pt" />;
}
