'use client';
import {usePathname} from 'next/navigation';
import {useRouter} from 'next-nprogress-bar';
import {ReactElement} from 'react';
import {Routes} from '@/shared/const/routes';
import {Text} from '@/shared/const/text';
import {CategoryI} from '@/shared/types/category';
import {AppTabs} from '@/shared/ui/Tabs';

type Props = {
  categories: CategoryI[];
  category: string;
};

export const FacultiesListTabs = ({categories, category}: Props): ReactElement | null => {
  const router = useRouter();
  const pathname = usePathname();
  const options = categories.map((category) => ({
    value: `${Routes.faculties.url}/${category.slug}`,
    label: category.title
  }));

  const activeIndex = categories.findIndex(
    (el) => `${Routes.articles.url}/${el.slug}` === pathname || el.slug === category
  );

  const onSelect = (value: string): void => {
    router.push(value);
  };

  return (
    <AppTabs
      defaultIndex={activeIndex === -1 ? 0 : activeIndex + 1}
      options={[
        {
          value: Routes.faculties.url,
          label: Text.all.ukr
        },
        ...options
      ]}
      onChange={onSelect}
    />
  );
};
