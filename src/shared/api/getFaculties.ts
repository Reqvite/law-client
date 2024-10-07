import {StrapiUrlParams} from '../types/components';
import {FacultyI} from '../types/faculty';
import {fetchAPI} from './fetch-api';

type Props = {
  urlParamsObject?: StrapiUrlParams;
  options?: Record<string, unknown>;
  lang?: string;
};

export async function fetchFaculties({
  urlParamsObject = {},
  options = {}
}: Props): Promise<
  {data: FacultyI[]; meta: {pagination: StrapiUrlParams['pagination']}} | undefined
> {
  try {
    const path = `/faculties`;
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
