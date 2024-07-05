import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {generateArticleMetaData} from '@/shared/api/generateArticleMetaData';
import {fetchArticles} from '@/shared/api/getArticles';
import {Section} from '@/shared/ui';
import {ArticleBlockRendered} from '@/shared/ui/BlocksRenderer';

type Params = {
  lang: string;
  article: string;
};

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
  const urlParamsObject = {
    populate: {
      imgs: true
    },
    filters: {
      slug: params.article
    }
  };
  return await generateArticleMetaData({urlParamsObject, params});
}

export default async function ArticleRoute({params}: {params: Params}) {
  const urlParamsObject = {
    filters: {
      slug: params.article
    }
  };
  const article = await fetchArticles({urlParamsObject});

  if (!article?.data[0]) {
    notFound();
  }

  return (
    <Section>
      <ArticleBlockRendered description={article.data[0].description} />;
    </Section>
  );
}
