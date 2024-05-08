import {Grid} from '@chakra-ui/react';
import {fetchArticles} from '@/shared/api/getArticles';
import {CardPropsType} from '@/shared/types/components';
import {Section} from '@/shared/ui';
import {AboutUsBlock} from './AboutUsBlock/AboutUsBlock';
import {ActualBlock} from './ActualBlock/ActualBlock';

const urlParamsObject = {
  sort: {createdAt: 'desc'},
  pagination: {limit: 5}
};

type Props = {
  data: {
    list1?: CardPropsType[];
    title1?: string;
    title2?: string;
  };
};

export const RecentUpdatesSection = async ({data}: Props) => {
  const {data: articles} = await fetchArticles({urlParamsObject});
  return (
    <Section>
      <Grid templateColumns="70% 30%" gap={4}>
        <AboutUsBlock data={data.list1 || []} title={data.title1} />
        <ActualBlock data={articles} title={data.title2} />
      </Grid>
    </Section>
  );
};
