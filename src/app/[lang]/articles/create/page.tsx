import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';
import {PageProps} from '@/shared/types/pageParams';

export default async function ArticleCreate({params}: PageProps) {
  const page = await getPageBySlug('CreateArticle', params.lang, urlParamsObject);
  if (page.data.length === 0) return null;
  const contentSections = page.data[0].sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
  return <>{sections}</>;
}
