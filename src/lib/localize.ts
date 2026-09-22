import { LANGUAGES, Locale } from "@/content/tournaments";

const DEFAULT_LOCALE: Locale = "es";

export const pickLanguage = (
  value: Partial<LANGUAGES>,
  locale: Locale
): string => {
  return value[locale] ?? value[DEFAULT_LOCALE] ?? "";
};
