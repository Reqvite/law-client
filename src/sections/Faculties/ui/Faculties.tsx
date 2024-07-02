import {Stack} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {Faculty} from '@/shared/types/faculty';
import {Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {TitleWithDescription} from '@/shared/ui/Base/TitleWithDescription';
import {FacultyCard} from '@/shared/ui/Card/FacultyCard';

type Props = {
  title: string;
  list: Faculty[];
  description: string;
};

export const Faculties = ({title, description, list}: Props): ReactElement => {
  return (
    <Section>
      <Stack spacing="3">
        <TitleWithDescription title={title} description={description} />
      </Stack>
      <AppGrid<Faculty> items={list || []} renderItem={FacultyCard} gap={3} columns={{base: 1}} />
    </Section>
  );
};
