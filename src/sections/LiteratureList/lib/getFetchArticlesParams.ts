export const getFetchLiteratureParams = ({
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
      image: true,
      category: true,
      file: true
    },
    sort: {createdAt: 'desc'},
    pagination: withPagination ? {pageSize: 9, page: page ? parseInt(page) : 1} : {limit: 3}
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
