import {GridItem, GridItemProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CardPropsType} from '@/shared/types/components';
import {AppGrid} from '@/shared/ui/AppGrid';
import {TitleWithDescription} from '@/shared/ui/Base/TitleWithDescription';
import {Card} from '@/shared/ui/Card/Card';

type Props = GridItemProps & {
  data: CardPropsType[];
  title: string;
};

export const AboutUsBlock = ({data, title}: Props): ReactElement => {
  const CardRender = (props: any) => (
    <Card
      withoutAnimation
      imageProps={{w: 70, h: 70, ml: 'auto', mr: 'auto'}}
      {...props}
      maxW={600}
    />
  );
  return (
    <GridItem>
      <TitleWithDescription title={title} />
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
