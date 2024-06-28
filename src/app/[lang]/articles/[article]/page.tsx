import {Heading} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';
import {Section} from '@/shared/ui';
import {ArticleBlockRendered} from '@/shared/ui/BlocksRenderer';

export default async function ArticleRoute({params}: {params: {article: string}}) {
  const urlParamsObject = {
    filters: {
      slug: params.article
    }
  };
  const {data} = await fetchArticles({urlParamsObject});

  if (data.length === 0) return <div>Not found</div>;

  return (
    <Section>
      <Heading>{data[0].title}</Heading>
      <ArticleBlockRendered description={data[0].description} />;
    </Section>
  );
}
