import {Raleway} from 'next/font/google';
import localFont from 'next/font/local';

const raleway = Raleway({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif']
});

const bebasNeue = localFont({src: '../../../public/Bebas_Neue.ttf'});

export const fonts = {
  body: raleway.style.fontFamily,
  heading: bebasNeue.style.fontFamily
};
