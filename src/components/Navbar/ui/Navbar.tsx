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
import {ReactElement} from 'react';
import {IoClose} from 'react-icons/io5';
import {RxHamburgerMenu} from 'react-icons/rx';
import {usePathnames} from '@/shared/lib/hooks';
import type {ButtonType, NavLink} from '@/shared/types/components';
import {AppLink, Logo} from '@/shared/ui';
import {DesktopNav} from './DesktopNav';
import {MobileNav} from './MobileNav';

interface Props {
  links: Array<NavLink>;
  buttons: Array<ButtonType>;
  logoUrl: string | null;
  logoText: string | null;
}

export const Navbar = ({links, buttons, logoUrl, logoText}: Props): ReactElement => {
  const {isOpen, onToggle} = useDisclosure();
  const {isMainPage} = usePathnames();
  const headerBg = useColorModeValue(
    'var(--chakra-colors-secondaryBgColorLightTransparent)',
    'var(--chakra-colors-secondaryBgColorDarkTransparent)'
  );

  return (
    <Box
      as="header"
      css={{backdropFilter: 'blur(4px)'}}
      background={isMainPage ? headerBg : '#f3f3f3'}
      position="absolute"
      zIndex="var(--chakra-zIndices-navbar)"
      width="100%"
    >
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{base: 2}}
        px={{base: 4}}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
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
                <IoClose size={20} color="black" />
              ) : (
                <RxHamburgerMenu size={20} color="black" />
              )
            }
            variant="primary"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}} align={'center'}>
          <Logo logoText={logoText} logoUrl={logoUrl} />
          <Flex display={{base: 'none', md: 'flex'}} ml={10}>
            <DesktopNav links={links} />
          </Flex>
        </Flex>
        <Stack flex={{base: 1, md: 0}} justify="flex-end" direction="row" spacing={6}>
          {buttons.map(({href, label, variant, id}) => (
            <AppLink size="lg" key={id} variant={variant} label={label} href={href || ''} />
          ))}
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav links={links} />
      </Collapse>
    </Box>
  );
};
