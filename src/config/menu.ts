import { ROUTES_CONFIG } from "@/i18n/routes-config";

export interface MenuVM {
  label: string;
  ariaLabel?: string;
  to: string;
}
/** Header navigation menu items */
export const itemsMenu: MenuVM[] = [
  { label: "home", ariaLabel: "homeAriaLabel", to: ROUTES_CONFIG.home.es },
  { label: "steps", ariaLabel: "stepsAriaLabel", to: "#" },
  { label: "talent", ariaLabel: "talentAriaLabel", to: "#" },
  { label: "company", ariaLabel: "companyAriaLabel", to: "#" },
  { label: "tournaments", ariaLabel: "tournamentsAriaLabel", to: "#" },
  { label: "community", ariaLabel: "communityAriaLabel", to: "#" },
  { label: "news", ariaLabel: "newsAriaLabel", to: "#" },
];
