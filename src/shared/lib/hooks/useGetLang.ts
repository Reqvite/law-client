import {usePathname} from 'next/navigation';
import {i18n} from '@/config/i18n/i18n';

export const useGetLang = () => {
  const pathname = usePathname();
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  const lang = pathnameIsMissingLocale ? i18n.defaultLocale : pathname.split('/')[1];
  return lang;
};
