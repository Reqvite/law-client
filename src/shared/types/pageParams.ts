import {Locale} from '@/config/i18n/i18n';

export interface PageParams {
  lang: Locale;
  category: string;
}

export interface SearchParams {
  searchParams: never;
}

export interface PageProps {
  params: PageParams;
  searchParams: never;
}
