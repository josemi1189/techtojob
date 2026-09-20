import { ROUTES_CONFIG } from "@/i18n/routes-config";

export interface MenuVM {
  label: string;
  ariaLabel?: string;
  to: string;
}

export const itemsMenu: MenuVM[] = [
  { label: "home", ariaLabel: "homeAriaLabel", to: ROUTES_CONFIG.home.es },
  { label: "news", ariaLabel: "newsAriaLabel", to: ROUTES_CONFIG.news.es },
];
