import {MetadataRoute} from 'next';
import {i18n} from '@/config/i18n/i18n';

const checkDefaultLang = (lang: string) => {
  const baseUrl = __FRONT_URL__;
  return lang === i18n.defaultLocale ? baseUrl : `${baseUrl}/${lang}`;
};
export default function sitemap(): MetadataRoute.Sitemap[] {
  const sitemap: any = [];

  for (const language of i18n.locales) {
    const localeUrl = checkDefaultLang(language);
    sitemap.push({
      url: language === i18n.defaultLocale ? `${localeUrl}/` : localeUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.7
    });
  }

  for (const language of i18n.locales) {
    const localeUrl = checkDefaultLang(language);
    sitemap.push({
      url: `${localeUrl}/newPage`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.7
    });
  }

  return sitemap;
}
