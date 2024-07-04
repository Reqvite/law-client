import {Center, GridItemProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {fetchLaws} from '@/shared/api/getLaws';
import {CategoryI} from '@/shared/types/category';
import {ButtonType} from '@/shared/types/components';
import {AppLink, Section} from '@/shared/ui';
import {AppAccordion} from '@/shared/ui/Accordion';
import {TitleWithDescription} from '@/shared/ui/Base/TitleWithDescription';
import {Pagination} from '@/shared/ui/Paginator';
import {queryName} from './lib/const';
import {getFetchLawsParams} from './lib/getFetchArticlesParams';
import {LawsListTabs} from './ui/LawsListTabs/LawsListTabs';

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

export const LawsList = async ({
  title,
  description,
  button,
  categories,
  searchParams,
  withPagination,
  params
}: Props): Promise<ReactElement> => {
  const category = withPagination ? params.category : searchParams[queryName] || defaultCategory;
  const urlParamsObject = getFetchLawsParams({
    category,
    withPagination: Boolean(withPagination),
    page: searchParams?.page
  });
  const {data: laws, meta} = await fetchLaws({urlParamsObject});

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
        <LawsListTabs withPagination={withPagination} categories={categories} category={category} />
      )}
      <AppAccordion items={laws} />
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
