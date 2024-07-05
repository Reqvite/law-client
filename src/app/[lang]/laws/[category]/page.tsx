import {VisuallyHidden} from '@chakra-ui/react';
import {Metadata} from 'next';
import {PageUnderConstruction} from '@/sections/UnderConstruction';
import {generatePageMetaData} from '@/shared/api/generatePageMetaData';
import {getPageData} from '@/shared/lib/helpers/getPageData';
import {PageProps} from '@/shared/types/pageParams';

export async function generateMetadata({params}: {params: {lang: string}}): Promise<Metadata> {
  return await generatePageMetaData({params, pageName: 'Laws'});
}

export default async function CategoryRoute({params, searchParams}: PageProps) {
  const page = await getPageData({
    params,
    searchParams,
    pageName: 'Laws'
  });

  if (!page) {
    return <PageUnderConstruction />;
  }

  return (
    <>
      {page.h1 && <VisuallyHidden as="h1">{page.h1}</VisuallyHidden>}
      {page.sections}
    </>
  );
}
