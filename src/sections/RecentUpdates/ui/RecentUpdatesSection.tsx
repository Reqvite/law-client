import {Grid} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';
import {ArticleI} from '@/shared/types/article';
import {CardPropsType} from '@/shared/types/components';
import {Section} from '@/shared/ui';
import {AboutUsBlock} from './AboutUsBlock/AboutUsBlock';
import {ActualBlock} from './ActualBlock/ActualBlock';

const urlParamsObject = {
  populate: {
    category: true,
    imgs: true
  },
  sort: {createdAt: 'desc'},
  pagination: {limit: 10}
};

type Props = {
  list1?: CardPropsType[];
  actualArticles: ArticleI[];
  title1: string;
  title2: string;
};

export const RecentUpdatesSection = async ({actualArticles, title1, title2, list1}: Props) => {
  let actualBlockArticles;
  if (actualArticles) {
    actualBlockArticles = actualArticles;
  } else {
    const {data} = await fetchArticles({urlParamsObject});
    actualBlockArticles = data;
  }

  return (
    <Section>
      <Grid templateColumns={{base: '1fr', md: '72% 28%'}} gap={4}>
        <AboutUsBlock data={list1 || []} title={title1} />
        <ActualBlock data={actualBlockArticles} title={title2} />
      </Grid>
    </Section>
  );
};
