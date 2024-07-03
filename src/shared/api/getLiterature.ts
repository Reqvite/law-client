import {fetchAPI} from './fetch-api';

type Props = {
  urlParamsObject?: Record<string, any>;
  options?: Record<string, any>;
};

export async function fetchLiterature({urlParamsObject = {}, options = {}}: Props) {
  try {
    const path = `/literatures`;
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
