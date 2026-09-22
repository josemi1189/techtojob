import { LOCALES } from "@/constants";

export type Locale = (typeof LOCALES)[number];
export type LANGUAGES = Record<Locale, string>;
export interface TournamentsVM {
  id: string;
  active: boolean;
  title: LANGUAGES;
  subtitle: LANGUAGES;
  linkLabel: LANGUAGES;
  urlLink: string;
  state: "upcoming" | "building" | "voting" | "closed" | "completed";
}
