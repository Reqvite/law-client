'use client';

import {
  Box,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import {ReactElement} from 'react';
import type {NavLink, SubLink} from '@/shared/types/components';
import {AppLink} from '@/shared/ui';

type DesktopNavProps = {
  links: NavLink[];
};
export const DesktopNav = ({links}: DesktopNavProps): ReactElement => {
  const popoverContentBgColor = useColorModeValue(
    'var(--chakra-colors-mainBgColorLight)',
    'var(--chakra-colors-mainBgColorDark)'
  );
  const linkColor = useColorModeValue(
    'var(--chakra-colors-mainColorLight)',
    'var(--chakra-colors-mainColorDark)'
  );

  return (
    <Stack direction="row" spacing={4}>
      {links.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-end">
            <PopoverTrigger>
              <Button
                as="a"
                variant="link"
                p={2}
                href={navItem.href ?? '#'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: 'var(--chakra-colors-accentColor)'
                }}
              >
                {navItem.label}
              </Button>
            </PopoverTrigger>
            {navItem.children.length !== 0 && (
              <PopoverContent
                overflow="auto"
                inset={0}
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'lg'}
                w="100%"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({label, href, subLabel, variant}: SubLink) => {
  return (
    <AppLink
      variant={variant}
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{bg: 'var(--chakra-colors-accentColorTransparent)'}}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{color: 'var(--chakra-colors-accentColor)'}}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
      </Stack>
    </AppLink>
  );
};
