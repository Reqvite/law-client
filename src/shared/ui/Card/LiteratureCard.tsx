import {Box, Flex, Heading, Stack} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {LiteratureI} from '@/shared/types/literature';
import {AppLink} from '../AppLink/AppLink';
import {DownloadButton} from '../Button/DownloadButton';
import {Image} from '../Image';

export const LiteratureCard = ({title, image, file}: LiteratureI): ReactElement => {
  const link = getStrapiMedia(file?.url);
  const alt = image?.alternativeText || '';
  const imageUrl = getStrapiMedia(image?.url || '');

  return (
    <Stack gap={1}>
      <Box color="black" position="relative" borderRadius="lg" boxShadow="md">
        <Flex
          justifyContent="flex-end"
          css={{backdropFilter: 'blur(4px)'}}
          bg="var(--chakra-colors-secondaryBgColorLightTransparent)"
          ml="auto"
          zIndex={100}
          position="absolute"
          top={0}
          w="100%"
          p={2}
        >
          <DownloadButton link={link} />
        </Flex>
        <AppLink w="full" maxW="100%" href={''}>
          {image && <Image src={imageUrl} objectFit="cover" w="100%" h="500px" alt={alt} />}
        </AppLink>
        <Box
          position="absolute"
          bottom="0"
          w="100%"
          bg="whiteAlpha.800"
          css={{backdropFilter: 'blur(4px)'}}
          p={2}
          textAlign="center"
          overflow="hidden"
        >
          <Heading isTruncated size="md">
            {title}
          </Heading>
        </Box>
      </Box>
    </Stack>
  );
};
