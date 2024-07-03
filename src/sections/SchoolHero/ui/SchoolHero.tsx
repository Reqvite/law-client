'use client';
import {usePathname} from 'next/navigation';
import {useRouter} from 'next-nprogress-bar';
import {ReactElement} from 'react';
import {Routes} from '@/shared/const/routes';
import {Section} from '@/shared/ui';
import {AppTabs} from '@/shared/ui/Tabs';

const list = [
  {
    value: Routes.school.url,
    label: Routes.school.name
  },
  {
    value: Routes.management.url,
    label: Routes.management.name
  },
  {
    value: Routes.institutions.url,
    label: Routes.institutions.name
  }
];

export const SchoolHero = (): ReactElement => {
  const path = usePathname();
  const router = useRouter();
  const activeIndex = list.findIndex((item) => item.value === path);

  const onSelect = (value: string): void => {
    router.push(value);
  };

  return (
    <Section>
      <AppTabs<string>
        defaultIndex={activeIndex === -1 ? 0 : activeIndex}
        variant="enclosed"
        options={[...list]}
        onChange={onSelect}
      />
    </Section>
  );
};
