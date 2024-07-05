import {ArticleI} from '../types/article';
import {StrapiUrlParams} from '../types/components';
import {fetchAPI} from './fetch-api';

type Props = {
  urlParamsObject?: StrapiUrlParams;
  options?: Record<string, any>;
  lang?: string;
};

export async function fetchArticles({
  urlParamsObject = {},
  options = {}
}: Props): Promise<
  {data: ArticleI[]; meta: {pagination: StrapiUrlParams['pagination']}} | undefined
> {
  try {
    const path = `/articles`;
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
