import type { Metadata } from "next";

import { FioCase } from "@/components/site/fio-case";

export const metadata: Metadata = {
  title: "Fio case study",
  description:
    "Fio, a record book for independent hair colorists: formulas, before and after photos and WhatsApp return reminders. Research and design by Gustavo Bispo.",
  alternates: { canonical: "/fio", languages: { en: "/fio", "pt-BR": "/pt/fio", "x-default": "/fio" } },
  openGraph: {
    type: "article",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Fio case study · Gustavo Bispo",
    description: "Every client's color history in one thread, from market research to approved screens.",
    url: "/fio",
    images: [{ url: "/apps/fio/clients.webp" }],
  },
};

export default function Page() {
  return <FioCase lang="en" />;
}
