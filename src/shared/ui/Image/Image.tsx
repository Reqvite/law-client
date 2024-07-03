import {ImageProps as NextImageProps} from '@chakra-ui/react';
import {ImageProps} from 'next/image';
import {ReactElement} from 'react';
import ChakraNextImage from './ChackraImage';

export type AppImageProps = ImageProps & NextImageProps;

export const Image = (props: AppImageProps): ReactElement => {
  return <ChakraNextImage width="500" height="500" quality={70} objectFit="cover" {...props} />;
};
