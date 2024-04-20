import {fetchAPI} from './fetch-api';

export async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token) return null;
  const path = `/global`;
  const options = {headers: {Authorization: `Bearer ${token}`}};
  const urlParamsObject = {
    populate: [
      'seo',
      'favicon',
      'seo.metaImage',
      'navbar.links',
      'navbar.links.children',
      'navbar.buttons',
      'navbar.logo.img',
      'footer.links',
      'footer.links.children',
      'footer.logo.img'
    ],
    locale: lang
  };

  return await fetchAPI(path, urlParamsObject, options);
}
