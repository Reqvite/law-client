import {Image as ChackraImage, ImageProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
type Props = ImageProps;

export const Image = (props: Props): ReactElement => {
  return <ChackraImage {...props} />;
};
