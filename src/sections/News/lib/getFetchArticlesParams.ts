export const getFetchArticlesParams = (category: string): any => {
  const urlParamsObject: any = {
    populate: {
      imgs: true,
      category: true
    },
    sort: {createdAt: 'desc'},
    pagination: {limit: 8}
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
