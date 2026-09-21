"server-only";
import { getRequestConfig } from "next-intl/server";

const locales = ["es", "en"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const selectedLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "es";

  const nav = (await import(`@/messages/nav/${selectedLocale}.json`)).default;
  const home = (await import(`@/messages/home/${selectedLocale}.json`)).default;
  const tournaments = (
    await import(`@/messages/tournaments/${selectedLocale}.json`)
  ).default;

  return {
    locale: selectedLocale,
    messages: { ...nav, ...home, ...tournaments },
  };
});
