"server-only";
import { LOCALES } from "@/constants";
import { getRequestConfig } from "next-intl/server";

export type Locale = (typeof LOCALES)[number];
export type LANGUAGES = Record<Locale, string>;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const selectedLocale: Locale = LOCALES.includes(locale as Locale)
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
