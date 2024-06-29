'use client';

import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link,
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
  email?: string;
  phone?: string;
  address?: string;
  emailTitle?: string;
  phoneTitle?: string;
  addressTitle?: string;
}
export const Footer = ({
  logoUrl,
  logoText,
  footerLinks,
  legalLinks,
  lang,
  email,
  phone,
  address,
  emailTitle,
  phoneTitle,
  addressTitle
}: Props) => {
  console.log(email);
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
          <Box width="100px">
            <Logo logoUrl={logoUrl} logoText={logoText} />
          </Box>
          <Flex justifyContent="space-between" w="full" gap={2}>
            <Stack spacing="4" minW={{lg: '40'}}>
              <Text>
                {addressTitle} {address}
              </Text>
              <Text>
                {emailTitle} <Link href={`mailto:${email}`}>{email}</Link>
              </Text>
              <Text>
                {phoneTitle} <Link href={`tel:${phone}`}>{phone}</Link>
              </Text>
            </Stack>
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
          </Flex>
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
