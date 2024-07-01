import {Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {Faculty} from '@/shared/types/faculty';
import {Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {H1Heading} from '@/shared/ui/Base/H1Heading';
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
        <H1Heading title={title} />
        <Text fontSize={{base: 'lg', md: 'xl'}} color="fg.muted">
          {description}
        </Text>
      </Stack>
      <AppGrid<Faculty> items={list || []} renderItem={FacultyCard} gap={3} columns={{base: 1}} />
    </Section>
  );
};
