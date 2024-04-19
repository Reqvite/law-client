'use client';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import {IoCloseCircleOutline} from 'react-icons/io5';
import type {ButtonLink, NavLink} from '@/shared/types/components';
import {AppLink, Logo} from '@/shared/ui';
import {DesktopNav} from './DesktopNav';
import {MobileNav} from './MobileNav';

interface Props {
  links: Array<NavLink>;
  buttons: Array<ButtonLink>;
  logoUrl: string | null;
  logoText: string | null;
}

export const Navbar = ({links, buttons, logoUrl, logoText}: Props) => {
  const {isOpen, onToggle} = useDisclosure();
  const headerBg = useColorModeValue(
    'var(--chakra-colors-secondaryBgColorLightTransparent)',
    'var(--chakra-colors-secondaryBgColorDarkTransparent)'
  );

  return (
    <Box
      as="header"
      css={{backdropFilter: 'blur(4px)'}}
      background={headerBg}
      position={'fixed'}
      zIndex={'var(--chakra-zIndices-navbar)'}
      width="100%"
    >
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          align={'center'}
          flex={{base: 1, md: 'auto'}}
          ml={{base: -2}}
          display={{base: 'flex', md: 'none'}}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <IoCloseCircleOutline w={3} h={3} color={'white'} />
              ) : (
                <IoCloseCircleOutline w={5} h={5} color={'white'} />
              )
            }
            variant={'primary'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}} align={'center'}>
          <Logo logoText={logoText} logoUrl={logoUrl} />
          <Flex display={{base: 'none', md: 'flex'}} ml={10}>
            <DesktopNav links={links} />
          </Flex>
        </Flex>
        <Stack flex={{base: 1, md: 0}} justify={'flex-end'} direction={'row'} spacing={6}>
          {buttons.map(({href, label, variant, id, isAnchor}) => (
            <AppLink
              size="lg"
              key={id}
              variant={variant}
              label={label}
              isAnchor={isAnchor}
              href={href || ''}
            />
          ))}
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav links={links} />
      </Collapse>
    </Box>
  );
};
