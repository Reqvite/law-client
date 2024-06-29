import {PropsWithChildren, ReactElement} from 'react';
import {SchoolHero} from '@/sections/SchoolHero';
import {Section} from '@/shared/ui';

type Props = PropsWithChildren;

export default async function Layout({children}: Props): Promise<ReactElement> {
  return (
    <>
      <SchoolHero />
      <Section>{children}</Section>
    </>
  );
}
