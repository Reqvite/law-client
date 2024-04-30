'use client';

import {Collapse, Icon, Stack, Text, useColorModeValue, useDisclosure} from '@chakra-ui/react';
import {IoChevronDownCircleOutline} from 'react-icons/io5';
import {NavLink} from '@/shared/types/components';
import {AppLink} from '@/shared/ui';

type MobileNavProps = {
  links: NavLink[];
};
export const MobileNav = ({links}: MobileNavProps) => {
  const headerBg = useColorModeValue(
    'var(--chakra-colors-secondaryBgColorLightTransparent)',
    'var(--chakra-colors-secondaryBgColorDarkTransparent)'
  );
  return (
    <Stack bg={headerBg} p={4} display={{md: 'none'}}>
      {links.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({label, children, href, variant}: NavLink) => {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <AppLink
        py={2}
        variant={variant}
        href={href || '#'}
        justifyContent="space-between"
        alignItems="center"
        display={'flex'}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={IoChevronDownCircleOutline}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </AppLink>
      <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <AppLink variant={variant} key={child.label} py={2} href={child.href}>
                {child.label}
              </AppLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
