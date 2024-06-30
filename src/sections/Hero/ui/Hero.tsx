'use client';
import {Box, Center, Flex, Heading, Img, Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {splitSentence} from '@/shared/lib/helpers/splitSentence';
import {useGetLang} from '@/shared/lib/hooks/useGetLang';
import {ButtonType, ImgDataAttributesType} from '@/shared/types/components';
import {AppLink} from '@/shared/ui';

export type HeroProps = {
  id: number;
  title: string;
  description: string;
  buttons: ButtonType[];
  image: ImgDataAttributesType;
};

export const Hero = ({title, description, buttons, image}: HeroProps): ReactElement => {
  const lang = useGetLang();
  const imgUrl = getStrapiMedia(image?.url);
  const alt = image?.alternativeText || 'Hero image';
  const titles = splitSentence(title || '');

  return (
    <Box as="section" minH="140px" h={{base: 'auto', md: '750px'}} position="relative">
      <Box pt="32" position="relative" zIndex={1} h={{base: 'auto', md: '750px'}}>
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
          maxW={{base: 'xl', md: '7xl'}}
          mx="auto"
          px={{base: '6', md: '8'}}
          color="white"
        >
          <Box ml="auto" mr="auto" maxW="xl">
            <Center flexDirection="column" textAlign="center" color="white" h="full">
              <Heading as="h1" size="2xl" fontWeight="extrabold">
                {titles[0]}
                <Text whiteSpace="nowrap">{titles[1]}</Text>
              </Heading>
              <Text fontWeight="medium" mt="3" fontSize={{md: '2xl'}} maxW="lg">
                {description}
              </Text>
              <Stack direction={{base: 'column', md: 'row'}} mt="10" spacing="4">
                {buttons.map(({href, label, variant, id}: ButtonType) => (
                  <AppLink
                    size="lg"
                    key={id}
                    variant={variant}
                    label={label}
                    lang={lang}
                    href={href || ''}
                  />
                ))}
              </Stack>
            </Center>
          </Box>
        </Flex>
      </Box>
      <Box id="image-wrapper" position="absolute" insetX="0" insetY="0" w="full" h="full">
        <Box w="full" h="full">
          <Img
            src={imgUrl || ''}
            alt={alt}
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Box>
    </Box>
  );
};
