import { LANGUAGES } from "@/i18n/request";
export interface TournamentsVM {
  id: string;
  active: boolean;
  title: LANGUAGES;
  subtitle: LANGUAGES;
  linkLabel: LANGUAGES;
  urlLink: string;
  state: "upcoming" | "building" | "voting" | "closed" | "completed";
}
