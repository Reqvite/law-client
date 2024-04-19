export const i18n = {
  defaultLocale: 'uk-UA',
  locales: ['en', 'uk-UA']
} as const;

export type Locale = (typeof i18n)['locales'][number];
