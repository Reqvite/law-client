import {VisuallyHidden} from '@chakra-ui/react';
import {PageUnderConstruction} from '@/sections/UnderConstruction';
import {getPageData} from '@/shared/lib/helpers/getPageData';
import {PageProps} from '@/shared/types/pageParams';

export default async function Institutions({params, searchParams}: PageProps) {
  const page = await getPageData({
    params,
    searchParams,
    pageName: 'Institutions'
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
