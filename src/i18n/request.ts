"server-only";

import { getRequestConfig } from "next-intl/server";
import { isLocale, type Locale } from "./locales";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const selectedLocale: Locale = isLocale(locale) ? locale : "es";

  const [nav, home, tournaments] = await Promise.all([
    import(`@/messages/nav/${selectedLocale}.json`),
    import(`@/messages/home/${selectedLocale}.json`),
    import(`@/messages/tournaments/${selectedLocale}.json`),
  ]);

  return {
    locale: selectedLocale,
    messages: { ...nav.default, ...home.default, ...tournaments.default },
  };
});
