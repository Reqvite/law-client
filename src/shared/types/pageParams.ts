import {Locale} from '@/config/i18n/i18n';

export interface PageParams {
  lang: Locale;
}

export interface SearchParams {
  searchParams: {[key: string]: string | string[] | undefined};
}

export interface PageProps {
  params: PageParams;
  searchParams: SearchParams;
}
