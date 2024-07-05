import {Metadata} from 'next';
import {getStrapiURL} from '@/shared/api/api-helpers';
import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {FALLBACK_SEO} from '@/shared/const/fallbackSeo';
import {urlParamsObject} from '@/shared/const/pageOptions';

export async function generatePageMetaData({
  params,
  pageName
}: {
  params: {lang: string};
  pageName: string;
}): Promise<Metadata> {
  const page = await getPageBySlug(pageName, params.lang, urlParamsObject);
  if (!page.data[0]) return FALLBACK_SEO;
  const seo = page?.data[0]?.seo;
  const image = seo?.metaImage;

  const metadata: Metadata = {
    metadataBase: new URL(__FRONT_URL__),
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    openGraph: {
      ...(image?.url && {images: getStrapiURL(image.url)})
    },
    alternates: {
      canonical: seo.canonicalURL
    }
  };

  return metadata;
}
