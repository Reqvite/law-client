import {StrapiUrlParams} from '../types/components';
import {DepartmentWithAttributesI} from '../types/departments';
import {fetchAPI} from './fetch-api';

export async function fetchDepartments(
  urlParamsObject?: StrapiUrlParams
): Promise<
  {data: DepartmentWithAttributesI[]; meta: {pagination: StrapiUrlParams['pagination']}} | undefined
> {
  try {
    const path = `/departments`;
    const responseData = await fetchAPI(path, urlParamsObject);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
