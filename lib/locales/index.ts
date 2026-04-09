import { en } from "@/lib/locales/en";
import { es } from "@/lib/locales/es";
import { fr } from "@/lib/locales/fr";
import { it } from "@/lib/locales/it";
import { pt } from "@/lib/locales/pt";
import type { LocaleMessages } from "@/lib/locales/types";

export const locales = ["pt", "en", "es", "fr", "it"] as const;

export type Locale = (typeof locales)[number];

export const localeMessages: Record<Locale, LocaleMessages> = {
  pt,
  en,
  es,
  fr,
  it,
};
