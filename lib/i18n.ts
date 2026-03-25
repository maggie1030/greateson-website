export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, path: string): string {
  return `/${locale}${path === "/" ? "" : path}`;
}
