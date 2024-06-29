'use client';
import {usePathname} from 'next/navigation';
import {ReactElement} from 'react';
import {AppLink, List, Section} from '@/shared/ui';
import {CustomLinkProps} from '@/shared/ui/AppLink/AppLink';

type CustomLinkPropsList = CustomLinkProps & {id: string};

export const SchoolHero = (): ReactElement => {
  const path = usePathname();
  const list: CustomLinkPropsList[] = [
    {
      id: '1',
      href: '/school',
      label: 'Документи',
      variant: path === '/school' ? 'primary' : 'outline'
    },
    {
      id: '2',
      href: '/school/management',
      label: 'Керівництво',
      variant: path === '/school/management' ? 'primary' : 'outline'
    },
    {
      id: '3',
      href: '/school/institutions',
      label: 'Установи',
      variant: path === '/school/institutions' ? 'primary' : 'outline'
    }
  ];

  return (
    <Section>
      <List<CustomLinkPropsList> row renderItem={AppLink} items={list || []} gap={3} />
    </Section>
  );
};
