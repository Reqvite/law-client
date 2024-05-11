import {Heading, Stack, Text} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';

export default async function ArticleRoute({params}: {params: {article: string}}) {
  const urlParamsObject = {
    filters: {
      slug: params.article
    }
  };
  const {data} = await fetchArticles({urlParamsObject});

  if (data.length === 0) return <div>Not found</div>;

  return (
    <Stack>
      <Heading>{data[0]?.title}</Heading>
      <Text>{data[0]?.description}</Text>
    </Stack>
  );
}
