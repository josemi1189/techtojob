import type { Locale } from "@/i18n/locales";

type TranslatedText = Record<Locale, string>;

export interface TournamentsVM {
  id: string;
  active: boolean;
  title: TranslatedText;
  subtitle: TranslatedText;
  linkLabel: TranslatedText;
  urlLink: string;
  state: "upcoming" | "building" | "voting" | "closed" | "completed";
}
