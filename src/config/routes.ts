import { ROUTES_CONFIG } from "@/i18n/routes-config";

export const routes = {
  home: ROUTES_CONFIG.home.es,
  cookies: ROUTES_CONFIG.cookies.es,
  privacy: ROUTES_CONFIG.privacy.es,
  about: ROUTES_CONFIG.about.es,
} as const;
