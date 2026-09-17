import { defineRouting } from "next-intl/routing";
import { ROUTES_CONFIG } from "./routes-config";
import { Locale } from "next-intl";

export function buildPathnames() {
  const pathnames: Record<string, string | Record<Locale, string>> = {};

  Object.values(ROUTES_CONFIG).forEach((route) => {
    pathnames[route.es] = {
      es: route.es,
      en: route.en,
    };
  });

  return pathnames;
}

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",

  pathnames: buildPathnames(),
});
