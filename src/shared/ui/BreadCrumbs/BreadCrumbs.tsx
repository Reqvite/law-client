// /components/NextBreadcrumb.tsx
'use client';

import {Breadcrumb, BreadcrumbItem} from '@chakra-ui/react';
import {usePathname} from 'next/navigation';
import {ReactElement, ReactNode} from 'react';
import {AppLink} from '../AppLink/AppLink';

type Props = {
  homeElement: ReactNode;
  capitalizeLinks?: boolean;
};

export const NextBreadcrumb = ({homeElement, capitalizeLinks}: Props): ReactElement | null => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const isMainPage = pathNames.length === 0;

  if (isMainPage) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <AppLink href="/">{homeElement}</AppLink>
      </BreadcrumbItem>
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isCurrentPage = paths === href;
        const itemLink = capitalizeLinks
          ? link[0].toUpperCase() + link.slice(1, link.length)
          : link;
        return (
          <BreadcrumbItem key={index} isCurrentPage={isCurrentPage}>
            <AppLink
              color={isCurrentPage ? 'var(--chakra-colors-accentColor)' : 'link'}
              href={href}
            >
              {itemLink}
            </AppLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
