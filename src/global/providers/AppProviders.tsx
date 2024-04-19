import {ReactNode} from 'react';
import ChakraProvider from './CkakraProvider';

interface Props {
  children: ReactNode;
  cookies: 'light' | 'dark';
}
function AppProviders({children, cookies}: Props) {
  return <ChakraProvider colorMode={cookies}>{children}</ChakraProvider>;
}

export default AppProviders;
