'use client';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {ReactElement} from 'react';
import {CategoryI} from '@/shared/types/category';
import {AppTabs} from '@/shared/ui/Tabs';
import {queryName} from '../../lib/const';

type Props = {
  categories: CategoryI[];
  category: string;
};

export const NewsTabs = ({categories, category}: Props): ReactElement => {
  const index = categories.findIndex((el) => el.slug === category);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const options = categories.map((category) => ({
    value: category.slug,
    label: category.title
  }));

  const onSelect = (value: string | number): void => {
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
  };

  return (
    <AppTabs
      defaultIndex={index === -1 ? 0 : index + 1}
      options={[{value: 'all', label: 'Всі'}, ...options]}
      onChange={onSelect}
    />
  );
};
