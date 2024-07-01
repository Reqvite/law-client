'use client';

import {Box, Center, Flex, Heading, Img, Stack, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {useGetLang} from '@/shared/lib/hooks/useGetLang';
import {ButtonType, ImgDataAttributesType} from '@/shared/types/components';
import {AppLink} from '@/shared/ui';

export type HeroProps = {
  id: string;
  title: string;
  description: string;
  buttons: ButtonType[];
  image: ImgDataAttributesType;
};

const MotionBox = motion(Box);

export const Hero = ({title, description, buttons, image}: HeroProps): ReactElement => {
  const lang = useGetLang();
  const imgUrl = getStrapiMedia(image?.url);
  const alt = image?.alternativeText || 'Hero image';

  return (
    <Box as="section" minH="140px" h={{base: 'auto', md: '750px'}} position="relative">
      <Box position="relative" pt={{base: 20, md: 0}} zIndex={1} h={{base: 'auto', md: '750px'}}>
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="center"
          maxW={{base: 'xl', md: '7xl'}}
          mx="auto"
          px={{base: '6', md: '8'}}
          color="white"
        >
          <Box ml="auto" mr="auto" maxW="xl">
            <Center flexDirection="column" textAlign="center" color="white" h="full">
              <Heading as="h1" size="2xl" fontWeight="extrabold">
                {title}
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
      <MotionBox
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        align="center"
      >
        <MotionBox
          w="full"
          h="full"
          initial={{scale: 1.05, opacity: 1}}
          animate={{scale: 1, opacity: 1}}
          transition={{
            duration: 5
          }}
        >
          <Img
            src={imgUrl || ''}
            alt={alt}
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
        </MotionBox>
      </MotionBox>
    </Box>
  );
};
