'use client';

import {Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {H1Heading} from '@/sections/Base/H1Heading';
import {Faculty} from '@/shared/types/faculty';
import {Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {FacultyCard} from './FacultyCard/FacultyCard';

type Props = {
  title: string;
  list: Faculty[];
  description: string;
};

export const Faculties = ({title, description, list}: Props): ReactElement => {
  return (
    <Section>
      <Stack spacing={{base: '12', md: '16'}}>
        <Stack spacing="3" maxW="3xl">
          <H1Heading title={title} />
          <Stack spacing={{base: '4', md: '5'}}>
            <Text fontSize={{base: 'lg', md: 'xl'}} color="fg.muted">
              {description}
            </Text>
          </Stack>
        </Stack>
        <AppGrid<Faculty> items={list || []} renderItem={FacultyCard} gap={3} columns={{base: 1}} />
      </Stack>
    </Section>
  );
};
