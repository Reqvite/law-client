'use client';
import {Button, ButtonProps} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {i18n} from '@/config/i18n/i18n';
import {useGetLang} from '@/shared/lib/hooks';

interface CustomLinkProps extends ButtonProps {
  href: string;
  label?: string;
  isAnchor?: boolean;
  variant?: string;
  children?: ReactNode;
}

export const AppLink = ({
  href,
  children,
  label,
  variant = 'link',
  isAnchor,
  ...props
}: CustomLinkProps) => {
  const lang = useGetLang();
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return (
    <Button {...props} as={'a'} cursor={'pointer'} variant={variant} href={isAnchor ? href : path}>
      {children ? children : label}
    </Button>
  );
};
