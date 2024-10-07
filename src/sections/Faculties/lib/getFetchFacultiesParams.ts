type FetchFacultiesParamsType = {
  populate: {
    image: boolean;
    category: boolean;
    management: {
      populate: {
        image: boolean;
      };
    };
  };
  filters?: {
    category: {
      slug: {
        $eq: string;
      };
    };
  };
};

export const getFetchFacultiesParams = ({
  category
}: {
  category: string;
}): FetchFacultiesParamsType => {
  const urlParamsObject: FetchFacultiesParamsType = {
    populate: {
      image: true,
      category: true,
      management: {
        populate: {
          image: true
        }
      }
    }
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
