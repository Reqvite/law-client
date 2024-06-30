import {CardProps, Center, GridItemProps, Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {fetchArticles} from '@/shared/api/getArticles';
import {CategoryI} from '@/shared/types/category';
import {ButtonType, CardPropsType} from '@/shared/types/components';
import {AppLink, List, Section} from '@/shared/ui';
import {Card} from '@/shared/ui/Card/Card';
import {getFetchArticlesParams} from './lib/getFetchArticlesParams';
import {mappedList} from './lib/mappedList';
import {NewsTabs} from './ui/NewsTabs/NewsTabs';

type Props = GridItemProps & {
  data: {title: string; list: CardPropsType[]; button: ButtonType; categories: CategoryI[]};
  title?: string;
  searchParams: {[key: string]: string};
};

export const News = async ({data, searchParams}: Props): Promise<ReactElement> => {
  const category = searchParams['news-category'];
  const urlParamsObject = getFetchArticlesParams(category);
  const {data: articles} = await fetchArticles({urlParamsObject});
  const {title, button, categories} = data;
  const {variant, label, href} = button;
  const newList = mappedList(articles);

  return (
    <Section>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      {categories && <NewsTabs categories={categories} category={category} />}
      <List<CardPropsType & CardProps>
        row
        renderItem={Card}
        items={newList || []}
        gap={3}
        justifyContent="center"
      />
      <Center mt={6}>
        <AppLink size="lg" variant={variant} label={label} href={href || ''} />
      </Center>
    </Section>
  );
};
