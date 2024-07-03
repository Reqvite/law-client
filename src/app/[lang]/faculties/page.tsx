import {VisuallyHidden} from '@chakra-ui/react';
import {Metadata} from 'next';
import {PageUnderConstruction} from '@/sections/UnderConstruction';
import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {FALLBACK_SEO} from '@/shared/const/fallbackSeo';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {getPageData} from '@/shared/lib/helpers/getPageData';
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
  const page = await getPageData({
    params,
    searchParams,
    pageName: 'Faculties'
  });

  if (!page) {
    return <PageUnderConstruction />;
  }

  return (
    <>
      {page.h1 && <VisuallyHidden as="h1">{page.h1}</VisuallyHidden>}
      {page.sections}
    </>
  );
}
