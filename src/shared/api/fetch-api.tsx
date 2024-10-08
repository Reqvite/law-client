import qs from 'qs';
import {getStrapiURL} from './api-helpers';

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  try {
    const mergedOptions = {
      next: {revalidate: 60},
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      ...options
    };
    const queryString = qs.stringify(urlParamsObject, {encodeValuesOnly: true});
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}
