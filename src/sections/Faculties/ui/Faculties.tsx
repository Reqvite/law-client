'use client';

import {ReactElement} from 'react';
import {H1Heading} from '@/sections/Base/H1Heading';
import {Faculty} from '@/shared/types/faculty';
import {List, Section} from '@/shared/ui';
import {FacultyCard} from './FacultyCard/FacultyCard';

export type FacultyWithId = Faculty & {id: string};
type Props = {
  title: string;
  list: {data: FacultyWithId[]};
};

export const Faculties = ({title, list}: Props): ReactElement => {
  return (
    <Section>
      <H1Heading title={title} />
      <List<FacultyWithId> items={list?.data || []} renderItem={FacultyCard} gap={2} row />
    </Section>
  );
};
