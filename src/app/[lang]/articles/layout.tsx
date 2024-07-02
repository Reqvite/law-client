import {VisuallyHidden} from '@chakra-ui/react';
import {PropsWithChildren} from 'react';
import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';
import {PageProps} from '@/shared/types/pageParams';

type Props = PageProps & PropsWithChildren;

export default async function Layout({params, children}: Props) {
  const page = await getPageBySlug('Articles', params.lang, urlParamsObject);
  if (page?.data?.length === 0) return null;
  const contentSections = page.data[0].sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );

  return (
    <>
      <VisuallyHidden as="h1">{page?.data[0].h1}</VisuallyHidden>
      {sections}
      {children}
    </>
  );
}
