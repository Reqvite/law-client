'use client';
import {Heading, List} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {LiteratureCard, Section} from '@/shared/ui';
type Props = {
  data: {
    title?: string;
  };
};

export const LiteratureSection = ({data}: Props): ReactElement => {
  return (
    <Section>
      <Heading textAlign="center" as="h2" mb={2}>
        {data?.title}
      </Heading>
      <List<any> items={data?.list || []} renderItem={LiteratureCard} gap={2} />
    </Section>
  );
};
