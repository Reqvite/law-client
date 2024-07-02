import {Center, GridItemProps, Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {fetchArticles} from '@/shared/api/getArticles';
import {CategoryI} from '@/shared/types/category';
import {ButtonType, CardPropsType} from '@/shared/types/components';
import {AppLink, Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {Card} from '@/shared/ui/Card/Card';
import {Pagination} from '@/shared/ui/Paginator';
import {queryName} from './lib/const';
import {getFetchArticlesParams} from './lib/getFetchArticlesParams';
import {mappedList} from './lib/mappedList';
import {NewsTabs} from './ui/NewsTabs/NewsTabs';

type Props = GridItemProps & {
  title?: string;
  button?: ButtonType;
  categories?: CategoryI[];
  categoryValue?: string;
  searchParams?: {[key: string]: string};
  urlParams?: any;
  withPagination?: boolean;
};

export const News = async ({
  title,
  button,
  categories,
  categoryValue = 'all',
  searchParams,
  urlParams,
  withPagination
}: Props): Promise<ReactElement> => {
  const category = searchParams ? searchParams[queryName] : categoryValue;
  const urlParamsObject = urlParams || getFetchArticlesParams(category);
  const {data: articles, meta} = await fetchArticles({urlParamsObject});
  const newList = mappedList(articles);

  return (
    <Section>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      {categories && <NewsTabs categories={categories} category={category} />}
      <AppGrid<CardPropsType>
        minChildWidth="285px"
        renderItem={Card}
        items={newList || []}
        justifyContent="center"
      />
      {button && (
        <Center mt={6}>
          <AppLink
            size="lg"
            variant={button.variant}
            label={button.label}
            href={button.href || ''}
          />
        </Center>
      )}
      {withPagination && (
        <Pagination
          totalResults={meta?.pagination?.total}
          itemsPerPage={meta?.pagination?.pageSize}
        />
      )}
    </Section>
  );
};
