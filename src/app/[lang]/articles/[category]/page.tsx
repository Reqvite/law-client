import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';

export default async function CategoryRoute({
  params,
  searchParams
}: {
  params: {category: string; lang: string};
  searchParams: any;
}) {
  const page = await getPageBySlug('Articles', params.lang, urlParamsObject);
  if (page?.data?.length === 0) return null;
  const contentSections = page.data[0].sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index, searchParams, params)
  );

  return sections;
}
