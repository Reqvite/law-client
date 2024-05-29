import {Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {LiteratureI} from '@/shared/types/literature';
import {List, LiteratureCard, Section} from '@/shared/ui';
type Props = {
  data: {
    title?: string;
    list?: {
      data: {
        id: string;
        attributes: LiteratureI;
      }[];
    };
  };
};

export const LiteratureSection = ({data}: Props): ReactElement => {
  const mapList = data?.list?.data?.map((el) => ({
    ...el.attributes,
    id: el.id
  }));

  return (
    <Section>
      <Heading textAlign="center" as="h2" mb={2}>
        {data?.title}
      </Heading>
      <List<LiteratureI> items={mapList || []} renderItem={LiteratureCard} gap={2} />
    </Section>
  );
};
