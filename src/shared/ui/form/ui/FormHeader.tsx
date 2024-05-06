import {Heading, Stack} from '@chakra-ui/react';
import {ReactElement} from 'react';

type Props = {
  heading: string;
};

export const FormHeader = ({heading}: Props): ReactElement => {
  return (
    <Stack>
      <Heading as="h2">{heading}</Heading>
    </Stack>
  );
};
