'use client';
import {usePathname} from 'next/navigation';
import {useRouter} from 'next-nprogress-bar';
import {ReactElement} from 'react';
import {TabOptionsI} from '@/shared/types/options';
import {Section} from '@/shared/ui';
import {AppTabs} from '@/shared/ui/Tabs';

type Props = {
  options: TabOptionsI[];
};

export const PageNavigationTabs = ({options}: Props): ReactElement => {
  const path = usePathname();
  const router = useRouter();
  const activeIndex = options.findIndex((item) => item.value === path);

  const onSelect = (value: string): void => {
    router.push(value);
  };

  return (
    <Section>
      <AppTabs<string>
        defaultIndex={activeIndex === -1 ? 0 : activeIndex}
        variant="enclosed"
        options={options}
        onChange={onSelect}
      />
    </Section>
  );
};
