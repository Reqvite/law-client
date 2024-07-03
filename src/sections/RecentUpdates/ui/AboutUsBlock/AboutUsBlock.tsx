import {GridItem, GridItemProps, Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CardPropsType} from '@/shared/types/components';
import {AppGrid} from '@/shared/ui/AppGrid';
import {Card} from '@/shared/ui/Card/Card';

type Props = GridItemProps & {
  data: CardPropsType[];
  title?: string;
};

export const AboutUsBlock = ({data, title}: Props): ReactElement => {
  const CardRender = (props: any) => <Card withoutAnimation {...props} maxW={600} />;
  return (
    <GridItem>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      <AppGrid
        columnGap="3"
        minChildWidth="285px"
        renderItem={CardRender}
        items={data}
        justifyContent={{base: 'center', md: 'normal'}}
      />
    </GridItem>
  );
};
