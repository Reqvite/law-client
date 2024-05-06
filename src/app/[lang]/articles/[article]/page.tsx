import {Box} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';

export default async function ArticleRoute({params}: {params: {article: string}}) {
  const urlParamsObject = {
    filters: {
      slug: params.article
    }
  };
  const {data} = await fetchArticles({urlParamsObject});

  if (data.length === 0) return <div>Not found</div>;

  return <Box>{data[0]?.title}</Box>;
}
