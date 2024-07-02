import {News} from '@/sections/News/News';
import {Section} from '@/shared/ui';

const getParams = (category: string, page: string): any => {
  const urlParamsObject: any = {
    populate: {
      imgs: true,
      category: true
    },
    sort: {createdAt: 'desc'},
    pagination: {pageSize: 9, page: page ? parseInt(page) : 1}
  };
  if (category && category !== 'all') {
    urlParamsObject.filters = {
      category: {
        slug: {
          $eq: category
        }
      }
    };
  }

  return urlParamsObject;
};

export default async function CategoryRoute({
  params,
  searchParams
}: {
  params: {category: string};
  searchParams: {page: string};
}) {
  const urlParamsObject = getParams(params.category, searchParams.page);

  return (
    <Section>
      <News withPagination categoryValue={params.category} urlParams={urlParamsObject} />
    </Section>
  );
}
