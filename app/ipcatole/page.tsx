import type { Metadata } from "next";

import { IpcatoleCase } from "@/components/site/ipcatole-case";

export const metadata: Metadata = {
  title: "IP Catolé case study",
  description:
    "IP Catolé, the app of a Presbyterian church: services, Bible with audio, hymnal, calendar by society, live services and volunteer schedules, designed and built by Gustavo Bispo.",
  alternates: { canonical: "/ipcatole", languages: { en: "/ipcatole", "pt-BR": "/pt/ipcatole", "x-default": "/ipcatole" } },
  openGraph: {
    title: "IP Catolé case study · Gustavo Bispo",
    description: "A whole congregation in one app, run by volunteers on free tiers.",
    url: "/ipcatole",
    images: [{ url: "/apps/ipcatole.webp" }],
  },
};

export default function Page() {
  return <IpcatoleCase lang="en" />;
}
