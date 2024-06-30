import {Heading, HeadingProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
type Props = HeadingProps;

export const H1Heading = ({title, ...otherProps}: Props): ReactElement => {
  return (
    <Heading as="h1" fontSize={{base: 'sm', md: '3xl'}} {...otherProps}>
      {title}
    </Heading>
  );
};
