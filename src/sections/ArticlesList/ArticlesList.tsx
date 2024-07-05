import {Center, GridItemProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {fetchArticles} from '@/shared/api/getArticles';
import {CategoryI} from '@/shared/types/category';
import {ButtonType} from '@/shared/types/components';
import {AppLink, Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {TitleWithDescription} from '@/shared/ui/Base/TitleWithDescription';
import {AppCardProps, Card} from '@/shared/ui/Card/Card';
import {Pagination} from '@/shared/ui/Paginator';
import {queryName} from './lib/const';
import {getFetchArticlesParams} from './lib/getFetchArticlesParams';
import {mappedList} from './lib/mappedList';
import {ArticlesListTabs} from './ui/ArticlesListTabs/ArticlesListTabs';

type Props = GridItemProps & {
  title?: string;
  description?: string;
  button?: ButtonType;
  categories?: CategoryI[];
  categoryValue?: string;
  searchParams: {page: string; [queryName]: string};
  params: {category: string};
  withPagination?: boolean;
  withQueries?: boolean;
};

const defaultCategory = 'all';

export const ArticlesList = async ({
  title,
  description,
  button,
  categories,
  searchParams,
  withPagination,
  params
}: Props): Promise<ReactElement> => {
  const category = withPagination ? params.category : searchParams[queryName] || defaultCategory;
  const urlParamsObject = getFetchArticlesParams({
    category,
    withPagination: Boolean(withPagination),
    page: searchParams?.page
  });
  const articles = await fetchArticles({urlParamsObject});
  const newList = mappedList(articles?.data);

  return (
    <Section>
      {title && (
        <TitleWithDescription
          title={title}
          description={description}
          button={withPagination ? button : undefined}
        />
      )}
      {categories && (
        <ArticlesListTabs
          withPagination={withPagination}
          categories={categories}
          category={category}
        />
      )}
      <AppGrid<AppCardProps>
        minChildWidth={withPagination ? '290px' : '285px'}
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
          totalResults={articles?.meta?.pagination?.total}
          itemsPerPage={articles?.meta?.pagination?.pageSize}
        />
      )}
    </Section>
  );
};
