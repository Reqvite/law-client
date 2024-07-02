import {PropsWithChildren, ReactElement} from 'react';
import {SchoolHero} from '@/sections/SchoolHero';

type Props = PropsWithChildren;

export default async function Layout({children}: Props): Promise<ReactElement> {
  return (
    <>
      <SchoolHero />
      {children}
    </>
  );
}
