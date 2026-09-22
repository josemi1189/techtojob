import { Locale } from "@/i18n/request";

const DEFAULT_LOCALE: Locale = "es";

export const pickLanguage = <T>(
  value: Partial<Record<Locale, T>>,
  locale: Locale
): T => {
  return (value[locale] ?? value[DEFAULT_LOCALE]) as T;
};
