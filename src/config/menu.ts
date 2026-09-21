import { ROUTES_CONFIG } from "@/i18n/routes-config";

export interface MenuVM {
  label: string;
  ariaLabel?: string;
  to: string;
}

export const itemsMenu: MenuVM[] = [
  { label: "home", ariaLabel: "homeAriaLabel", to: ROUTES_CONFIG.home.es },
  { label: "steps", ariaLabel: "stepsAriaLabel", to: "#steps" },
  { label: "talent", ariaLabel: "talentAriaLabel", to: "#talent" },
  { label: "company", ariaLabel: "companyAriaLabel", to: "#company" },
  { label: "news", ariaLabel: "newsAriaLabel", to: ROUTES_CONFIG.news.es },
];
