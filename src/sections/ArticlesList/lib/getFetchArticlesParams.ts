export const getFetchArticlesParams = ({
  category,
  withPagination,
  page
}: {
  category: string;
  withPagination: boolean;
  page: string;
}): any => {
  const urlParamsObject: any = {
    populate: {
      imgs: true,
      category: true
    },
    sort: {createdAt: 'desc'},
    pagination: withPagination ? {pageSize: 9, page: page ? parseInt(page) : 1} : {limit: 8}
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
