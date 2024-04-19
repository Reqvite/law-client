'use client';

import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import {NavLink} from '@/shared/types/components';
import {AppLink, Logo} from '@/shared/ui';

interface Props {
  lang: string;
  logoUrl: string | null;
  logoText: string | null;
  footerLinks: Array<NavLink>;
  legalLinks: Array<NavLink>;
  socialLinks: Array<NavLink>;
}
export const Footer = ({logoUrl, logoText, footerLinks, legalLinks, lang, socialLinks}: Props) => {
  return (
    <Box bg="bg.surface">
      <Container as="footer" role="contentinfo" maxW={'8xl'}>
        <Divider />
        <Stack
          justify="space-between"
          align="start"
          direction={{base: 'column', lg: 'row'}}
          py={{base: '12', md: '16'}}
          spacing="8"
        >
          <Box>
            <Logo logoUrl={logoUrl} logoText={logoText} isFooter />
          </Box>
          <SimpleGrid columns={{base: 2, md: 4}} gap="8" width={{base: 'full', lg: 'auto'}}>
            {footerLinks?.map((group, idx) => (
              <Stack key={idx} spacing="4" minW={{lg: '40'}}>
                <Text fontSize="sm" fontWeight="semibold" color="gray">
                  {group.label}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  {group.children.map((link, idx) => (
                    <AppLink
                      key={idx}
                      variant={link.variant}
                      label={link.label}
                      lang={lang}
                      href={link.href || ''}
                    />
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{base: 'column-reverse', md: 'row'}}
          align="center"
        >
          <HStack>
            {legalLinks?.map((link, idx) => (
              <Stack key={idx} spacing="4" minW={{lg: '40'}}>
                <AppLink
                  padding={0}
                  key={idx}
                  variant={link.variant}
                  label={link.label}
                  lang={lang}
                  href={link.href || ''}
                />
              </Stack>
            ))}
            <Text fontSize="sm">
              &copy; {new Date().getFullYear()} TITLE, Inc. All rights reserved.
            </Text>
          </HStack>
          <ButtonGroup>
            <IconButton
              variant={'primary'}
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />
            <IconButton
              variant={'primary'}
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub />}
            />
            <IconButton
              variant={'primary'}
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
};
