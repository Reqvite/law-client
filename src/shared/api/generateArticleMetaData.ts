import {Metadata} from 'next';
import {getStrapiURL} from '@/shared/api/api-helpers';
import {FALLBACK_SEO} from '@/shared/const/fallbackSeo';
import {StrapiUrlParams} from '../types/components';
import {fetchArticles} from './getArticles';

export async function generateArticleMetaData({
  urlParamsObject,
  params
}: {
  params: {lang: string};
  urlParamsObject?: StrapiUrlParams;
}): Promise<Metadata> {
  const article = await fetchArticles({urlParamsObject, lang: params.lang});
  if (!article?.data[0]) return FALLBACK_SEO;
  const image = article?.data[0]?.imgs[0];

  const metadata: Metadata = {
    metadataBase: new URL(__FRONT_URL__),
    title: article?.data[0]?.title,
    description: article?.data[0]?.previewDescription,
    openGraph: {
      ...(image?.url && {images: getStrapiURL(image.url)})
    }
  };

  return metadata;
}
