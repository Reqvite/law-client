import {GridItem, GridItemProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
type Props = GridItemProps & {
  data: any;
};

export const SomeBlock = (props: Props): ReactElement => {
  return <GridItem bg="green"></GridItem>;
};
