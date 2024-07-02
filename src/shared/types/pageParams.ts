import {ReactNode} from 'react';
import {Locale} from '@/config/i18n/i18n';

export interface PageParams {
  lang: Locale;
}

export interface SearchParams {
  searchParams: never;
}

export interface PageProps {
  params: PageParams;
  children?: ReactNode;
  searchParams: never;
}
