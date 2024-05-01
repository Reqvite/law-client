import {Box, BoxProps} from '@chakra-ui/react';
import {PropsWithChildren, ReactElement} from 'react';
type Props = BoxProps & PropsWithChildren;

export const Section = ({children, ...otherProps}: Props): ReactElement => {
  return <Box {...otherProps}>{children}</Box>;
};
