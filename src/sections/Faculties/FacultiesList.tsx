import {GridItemProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CategoryI} from '@/shared/types/category';
import {ButtonType} from '@/shared/types/components';
import {FacultyI} from '@/shared/types/faculty';
import {Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {TitleWithDescription} from '@/shared/ui/Base/TitleWithDescription';
import {FacultyCard} from '@/shared/ui/Card/FacultyCard';
import {fetchFaculties} from '../../shared/api/getFaculties';
import {queryName} from './lib/const';
import {getFetchFacultiesParams} from './lib/getFetchFacultiesParams';
import {mappedList} from './lib/mappedList';
import {FacultiesListTabs} from './ui/FacultiesListTabs/FacultiesListTabs';

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

export const FacultiesList = async ({
  title,
  description,
  categories,
  params
}: Props): Promise<ReactElement> => {
  const category = params.category;
  const urlParamsObject = getFetchFacultiesParams({
    category
  });

  const faculties = await fetchFaculties({urlParamsObject});
  const newList = mappedList(faculties?.data);

  return (
    <Section>
      {title && <TitleWithDescription title={title} description={description} />}
      {categories && <FacultiesListTabs categories={categories} category={category} />}
      <AppGrid<FacultyI & {href: string}>
        items={newList || []}
        renderItem={FacultyCard}
        gap={3}
        columns={{base: 1}}
      />
    </Section>
  );
};
