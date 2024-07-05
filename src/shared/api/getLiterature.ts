import {StrapiUrlParams} from '../types/components';
import {LiteratureI} from '../types/literature';
import {fetchAPI} from './fetch-api';

type Props = {
  urlParamsObject?: StrapiUrlParams;
  options?: Record<string, any>;
  lang?: string;
};

export async function fetchLiterature({
  urlParamsObject = {},
  options = {}
}: Props): Promise<
  {data: LiteratureI[]; meta: {pagination: StrapiUrlParams['pagination']}} | undefined
> {
  try {
    const path = `/literatures`;
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
