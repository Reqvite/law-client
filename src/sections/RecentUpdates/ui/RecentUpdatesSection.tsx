import {Grid} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';
import {Section} from '@/shared/ui';
import {ActualBlock} from './ActualBlock/ActualBlock';
import {SomeBlock} from './SomeBlock/SomeBlock';

const urlParamsObject = {
  sort: {createdAt: 'desc'},
  pagination: {limit: 5}
};

type Props = {
  data: {
    title1?: string;
    title2?: string;
  };
};

export const RecentUpdatesSection = async ({data}: Props) => {
  const {data: articles} = await fetchArticles({urlParamsObject});
  return (
    <Section>
      <Grid templateColumns="70% 30%" gap={4}>
        <SomeBlock data={articles} />
        <ActualBlock data={articles} title={data.title2} />
      </Grid>
    </Section>
  );
};
