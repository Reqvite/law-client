'use client';
import {Box, Center, Flex, Heading, Img, Stack, Text} from '@chakra-ui/react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {useGetLang} from '@/shared/lib/hooks/useGetLang';
import {ButtonLink} from '@/shared/types/components';
import {AppLink} from '@/shared/ui';

interface Props {
  image: any;
  buttons: Array<ButtonLink>;
  description: string | null;
  title: string | null;
  benefits: {id: number; title: string; description: string}[];
}
type HeroProps = {
  data: Props;
};

export const Hero = ({data}: HeroProps) => {
  const {title, description, buttons, image} = data;
  const lang = useGetLang();

  const imgUrl = getStrapiMedia(image.data.attributes.url);
  const alt = image.data.attributes.alternativeText || 'Hero image';

  return (
    <Box
      as="section"
      minH="140px"
      h={{base: 'auto', md: '100vh'}}
      position="relative"
      overflow={'hidden'}
    >
      <Box pt={'32'} position="relative" zIndex={1} h={{base: 'auto', md: '100vh'}}>
        <Flex
          height={'100%'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          maxW={{base: 'xl', md: '7xl'}}
          mx="auto"
          px={{base: '6', md: '8'}}
          color="white"
        >
          <Box ml={'auto'} mr={'auto'} maxW="xl">
            <Center flexDirection="column" textAlign="center" color="white" h="full">
              <Heading as="h1" size="3xl" fontWeight="extrabold">
                {title}
              </Heading>
              <Text fontWeight="medium" mt="3" fontSize={{md: '2xl'}} maxW="lg">
                {description}
              </Text>
              <Stack direction={{base: 'column', md: 'row'}} mt="10" spacing="4">
                {buttons.map(({href, label, variant, id, isAnchor}) => (
                  <AppLink
                    size="lg"
                    key={id}
                    variant={variant}
                    label={label}
                    lang={lang}
                    isAnchor={isAnchor}
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
