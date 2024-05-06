import {Box} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';

// async function fetchPostsByCategory(filter: string) {
//   try {
//     const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//     const path = `/products`;
//     const urlParamsObject = {
//       sort: {createdAt: 'desc'},
//       filters: {
//         category: {
//           slug: filter
//         }
//       },
//       populate: {
//         cover: {fields: ['url']},
//         category: {
//           populate: '*'
//         },
//         authorsBio: {
//           populate: '*'
//         },
//         images: {
//           populate: '*'
//         },
//         tags: {
//           populate: '*'
//         },
//         detailsButton: {
//           populate: '*'
//         },
//         options: {
//           populate: {
//             color: {
//               populate: '*'
//             },
//             size: {
//               populate: '*'
//             }
//           }
//         }
//       }
//     };
//     const options = {headers: {Authorization: `Bearer ${token}`}};
//     const responseData = await fetchAPI(path, urlParamsObject, options);
//     return responseData;
//   } catch (error) {
//     console.error(error);
//   }
// }

export default async function ArticleRoute({params}: {params: {article: string}}) {
  const urlParamsObject = {
    filters: {
      slug: params.article
    }
  };
  const {data} = await fetchArticles({urlParamsObject});

  return (
    <Box as="main" pt={'var(--chakra-sizes-headerHeight)'}>
      {data[0].title}
    </Box>
  );
}
