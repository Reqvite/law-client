'use client';

import {Breadcrumb, BreadcrumbItem} from '@chakra-ui/react';
import {ReactElement, ReactNode} from 'react';
import {usePathnames} from '@/shared/lib/hooks';
import {AppLink} from '../AppLink/AppLink';
import {Section} from '../Section/Section';

type Props = {
  homeElement: ReactNode;
  capitalizeLinks?: boolean;
};

export const NextBreadcrumb = ({homeElement, capitalizeLinks}: Props): ReactElement | null => {
  const {path, isMainPage, pathNames} = usePathnames();

  if (isMainPage) {
    return null;
  }

  return (
    <Section pt="var(--chakra-sizes-headerHeight)">
      <Breadcrumb>
        <BreadcrumbItem>
          <AppLink href="/">{homeElement}</AppLink>
        </BreadcrumbItem>
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const isCurrentPage = path === href;
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
    </Section>
  );
};
