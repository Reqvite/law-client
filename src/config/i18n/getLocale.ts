import {match as matchLocale} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type {NextRequest} from 'next/server';
import {i18n} from './i18n';

export function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales;
  let languages = new Negotiator({
    headers: negotiatorHeaders
  }).languages();
  if (languages.length === 1 && languages[0] === '*') {
    languages = ['uk-UA', 'en-US'];
  }
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}
