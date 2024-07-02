import {VisuallyHidden} from '@chakra-ui/react';
import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {PageProps} from '@/shared/types/pageParams';

//@ts-expect-error ///
export default async function Layout({params, children}: PageProps) {
  const page = await getPageBySlug('Articles', params.lang, urlParamsObject);
  if (page?.data?.length === 0) return null;

  return (
    <>
      <VisuallyHidden as="h1">{page?.data[0].h1}</VisuallyHidden>
      {children}
    </>
  );
}
