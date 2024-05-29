'use client';
import {Button, ButtonProps} from '@chakra-ui/react';
import Link from 'next/link';
import {ReactNode} from 'react';
import {i18n} from '@/config/i18n/i18n';
import {useGetLang} from '@/shared/lib/hooks';

export interface CustomLinkProps extends ButtonProps {
  href: string;
  label?: string;
  variant?: string;
  children?: ReactNode;
  component?: ReactNode;
}

export const AppLink = ({
  href,
  children,
  label,
  variant = 'link',
  component,
  ...props
}: CustomLinkProps) => {
  const lang = useGetLang();
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  if (component) {
    return <Link href={path}>{component}</Link>;
  }

  return (
    <Button {...props} as={Link} cursor="pointer" variant={variant} href={path}>
      {children ? children : label}
    </Button>
  );
};
