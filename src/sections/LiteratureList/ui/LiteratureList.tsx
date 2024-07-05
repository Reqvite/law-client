import {Center, GridItemProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {fetchLiterature} from '@/shared/api/getLiterature';
import {CategoryI} from '@/shared/types/category';
import {ButtonType} from '@/shared/types/components';
import {LiteratureI} from '@/shared/types/literature';
import {AppLink, LiteratureCard, Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {TitleWithDescription} from '@/shared/ui/Base/TitleWithDescription';
import {Pagination} from '@/shared/ui/Paginator';
import {queryName} from '../lib/const';
import {getFetchLiteratureParams} from '../lib/getFetchArticlesParams';
import {mappedList} from '../lib/mappedList';
import {LiteratureListTabs} from './LiteratureListTabs/LiteratureListTabs';

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

export const LiteratureList = async ({
  title,
  description,
  button,
  categories,
  searchParams,
  withPagination,
  params
}: Props): Promise<ReactElement> => {
  const category = withPagination ? params.category : searchParams[queryName] || defaultCategory;
  const urlParamsObject = getFetchLiteratureParams({
    category,
    withPagination: Boolean(withPagination),
    page: searchParams?.page
  });
  const list = await fetchLiterature({urlParamsObject});
  const newList = mappedList(list?.data);
  const renderItem = (props: LiteratureI) => (
    <LiteratureCard {...props} styleVariant={withPagination ? 'withDescription' : 'none'} />
  );

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
        <LiteratureListTabs
          withPagination={withPagination}
          categories={categories}
          category={category}
        />
      )}
      <AppGrid<LiteratureI>
        minChildWidth={withPagination ? '350px' : '300px'}
        renderItem={renderItem}
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
          totalResults={list?.meta?.pagination?.total}
          itemsPerPage={list?.meta?.pagination?.pageSize}
        />
      )}
    </Section>
  );
};
