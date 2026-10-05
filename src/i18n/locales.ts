const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && locales.some((locale) => locale === value);
