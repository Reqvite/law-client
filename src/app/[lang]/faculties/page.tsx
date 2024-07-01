import {Metadata} from 'next';
import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {FALLBACK_SEO} from '@/shared/const/fallbackSeo';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';
import {PageProps} from '@/shared/types/pageParams';

export async function generateMetadata({params}: {params: {lang: string}}): Promise<Metadata> {
  const page = await getPageBySlug('Faculties', params.lang, urlParamsObject);
  if (!page.data) return FALLBACK_SEO;
  const {seo} = page.data[0];

  return {
    metadataBase: new URL(__FRONT_URL__),
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalURL
    }
  };
}

export default async function Faculties({params, searchParams}: PageProps) {
  const page = await getPageBySlug('Faculties', params.lang, urlParamsObject);
  if (page?.data?.length === 0) return null;
  const contentSections = page.data[0].sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index, searchParams)
  );

  return <>{sections}</>;
}
