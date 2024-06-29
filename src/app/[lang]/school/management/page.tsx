import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';
import {PageProps} from '../../../../../.next/types/app/[lang]/layout';

export default async function ManagementPage({params, searchParams}: PageProps) {
  const page = await getPageBySlug('Management', params.lang, urlParamsObject);
  if (page?.data?.length === 0) return null;
  const contentSections = page.data[0].attributes.sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index, searchParams)
  );
  return sections;
}
