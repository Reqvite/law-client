import {Locale} from '@/config/i18n/i18n';

export interface PageParams {
  lang: Locale;
}

export interface PageProps {
  params: PageParams;
  searchParams: {step?: string; interior?: string; exterior?: string};
}
