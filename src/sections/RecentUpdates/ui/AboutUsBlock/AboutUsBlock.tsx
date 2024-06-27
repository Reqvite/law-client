import {CardProps, GridItem, GridItemProps, Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CardPropsType} from '@/shared/types/components';
import {List} from '@/shared/ui';
import {Card} from '@/shared/ui/Card/Card';

type Props = GridItemProps & {
  data: CardPropsType[];
  title?: string;
};

export const AboutUsBlock = ({data, title}: Props): ReactElement => {
  return (
    <GridItem>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      <List<CardPropsType & CardProps> row renderItem={Card} items={data} gap={2} />
    </GridItem>
  );
};
