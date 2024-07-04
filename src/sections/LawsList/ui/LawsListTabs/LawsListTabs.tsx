'use client';
import {usePathname, useSearchParams} from 'next/navigation';
import {useRouter} from 'next-nprogress-bar';
import {ReactElement} from 'react';
import {Routes} from '@/shared/const/routes';
import {Text} from '@/shared/const/text';
import {CategoryI} from '@/shared/types/category';
import {AppTabs} from '@/shared/ui/Tabs';
import {queryName} from '../../lib/const';

type Props = {
  categories: CategoryI[];
  category: string;
  withPagination?: boolean;
};

export const LawsListTabs = ({
  categories,
  category,
  withPagination
}: Props): ReactElement | null => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const options = categories.map((category) => ({
    value: withPagination ? `${Routes.laws.url}/${category.slug}` : category.slug,
    label: category.title
  }));
  const activeIndex = categories.findIndex((el) =>
    withPagination ? `${Routes.laws.url}/${el.slug}` === pathname : el.slug === category
  );

  const onSelect = (value: string): void => {
    if (withPagination) {
      router.push(value);
    } else {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      if (!value) {
        current.delete(queryName);
      } else {
        current.set(queryName, value as string);
      }
      const search = current.toString();
      const query = search ? `?${search}` : '';

      router.push(`${pathname}${query}`, {
        scroll: false
      });
    }
  };

  return (
    <AppTabs
      defaultIndex={activeIndex === -1 ? 0 : activeIndex + 1}
      options={[
        {
          value: withPagination ? Routes.laws.url : 'all',
          label: Text.all.ukr
        },
        ...options
      ]}
      onChange={onSelect}
    />
  );
};
