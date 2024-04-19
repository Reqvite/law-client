'use client';
import {ChakraProvider as Chakra} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {getTheme} from '../styles/theme';

interface Props {
  children: ReactNode;
  colorMode: 'light' | 'dark';
}
export default function ChakraProvider({children, colorMode}: Props) {
  const theme = getTheme(colorMode);
  return <Chakra theme={theme}>{children}</Chakra>;
}
