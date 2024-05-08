import {GridItem, Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {List} from '@/shared/ui';
import {Card} from '@/shared/ui/Card/Card';

type Props = GridItemProps & {
  data: any[];
};

export const AboutUsBlock = ({data, title}): ReactElement => {
  return (
    <GridItem>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      <List row renderItem={Card} items={data} />
    </GridItem>
  );
};
