import {BoxProps, Container} from '@chakra-ui/react';
import {PropsWithChildren, ReactElement} from 'react';
type Props = BoxProps & PropsWithChildren;

export const Section = ({children, ...otherProps}: Props): ReactElement => {
  return (
    <Container as="section" maxW="7xl" py={3} {...otherProps}>
      {children}
    </Container>
  );
};
