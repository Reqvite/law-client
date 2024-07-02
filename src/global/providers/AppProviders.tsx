'use client';
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import {ReactNode} from 'react';
import ChakraProvider from './CkakraProvider';

interface Props {
  children: ReactNode;
  cookies: 'light' | 'dark';
}
function AppProviders({children, cookies}: Props) {
  return (
    <ChakraProvider colorMode={cookies}>
      <ProgressBar
        height="4px"
        color="var(--chakra-colors-accentColor)"
        options={{showSpinner: false}}
      />
      {children}
    </ChakraProvider>
  );
}

export default AppProviders;
