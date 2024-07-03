import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {PageParams, SearchParams} from '@/shared/types/pageParams';
import {sectionRenderer} from '../render/sectionRenderer';

export interface GetPageDataParams {
  params: PageParams;
  searchParams: SearchParams;
  pageName: string;
}

export interface PageData {
  sections: any;
  h1: string;
}

export const getPageData = async ({
  params,
  searchParams,
  pageName
}: GetPageDataParams): Promise<PageData | null> => {
  const page = await getPageBySlug(pageName, params.lang, urlParamsObject);
  if (page?.data?.length === 0) return null;
  const contentSections = page?.data[0]?.sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index, searchParams, params)
  );

  return {sections, h1: page?.data[0]?.h1};
};
