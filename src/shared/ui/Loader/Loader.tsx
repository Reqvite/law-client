import {Spinner, SpinnerProps, Stack} from '@chakra-ui/react';
import {ReactElement} from 'react';
type Props = SpinnerProps & {
  h?: string;
};

export const Loader = ({h, ...otherProps}: Props): ReactElement => {
  return (
    <Stack align="center" justify="center" h={h}>
      <Spinner size="xl" {...otherProps} />
    </Stack>
  );
};
