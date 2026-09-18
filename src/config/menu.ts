import { ROUTES_CONFIG } from "@/i18n/routes-config";

export interface ItemMenu {
  label: string;
  ariaLabel?: string;
  to?: string;
}

export const Menu: ItemMenu[] = [
  { label: "home", ariaLabel: "homeAriaLabel", to: ROUTES_CONFIG.home.es },
];
