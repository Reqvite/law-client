import {StrapiUrlParams} from '../types/components';
import {LawI} from '../types/law';
import {fetchAPI} from './fetch-api';

type Props = {
  urlParamsObject?: StrapiUrlParams;
  options?: Record<string, unknown>;
  lang?: string;
};

export async function fetchLaws({
  urlParamsObject = {},
  options = {}
}: Props): Promise<{data: LawI[]; meta: {pagination: StrapiUrlParams['pagination']}} | undefined> {
  try {
    const path = `/laws`;
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
