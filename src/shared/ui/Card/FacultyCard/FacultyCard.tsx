'use client';
import {Box, Heading, Stack, Text} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import {ReactElement} from 'react';
import {Autoplay, Navigation} from 'swiper/modules';
import {SwiperProps} from 'swiper/react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {Faculty} from '@/shared/types/faculty';
import {ManagementI} from '@/shared/types/management';
import {ManagementCard} from '@/shared/ui/Card/ManagementCard/ManagementCard';
import {Image} from '@/shared/ui/Image';
import {AppLink} from '../../AppLink/AppLink';
import Carousel from '../../Carousel/Carousel';
import {Loader} from '../../Loader';

type Props = Faculty;

const getCarouselConfig = (): SwiperProps => {
  return {
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 4
      }
    },
    spaceBetween: 20,
    speed: 600,
    loop: true,
    navigation: true
  };
};

const DynamicCarousel = dynamic(() => import('../../Carousel/Carousel'), {
  loading: () => <Loader h="250px" />,
  ssr: false
}) as typeof Carousel;

export const FacultyCard = ({
  title1,
  managementTitle,
  previewDescription,
  image,
  slug,
  management
}: Props): ReactElement => {
  const imageUrl = getStrapiMedia(image?.url);
  const Card = (props: ManagementI): ReactElement => (
    <ManagementCard {...props} h={180} maxW={350} imageProps={{h: 150, w: 400}} />
  );

  return (
    <Stack gap={2} boxShadow="var(--chakra-shadows-cardShadow)" p={5} borderRadius={10}>
      <Box
        gap={5}
        display="flex"
        flexDirection={{base: 'column', xl: 'row'}}
        justifyContent="space-between"
      >
        <Image
          maxH={{base: 250, xl: 500}}
          maxW={{base: '100%', xl: '500px'}}
          borderRadius="lg"
          src={imageUrl}
          h={500}
          alt={image?.alternativeText || title1}
          objectFit="fill"
        />
        <Stack display="flex" flex="1" justifyContent="flex-start" marginTop={{base: '3', sm: '0'}}>
          <AppLink
            mr="auto"
            textDecoration="underline"
            whiteSpace="normal"
            href={`/faculties/${slug}`}
            fontSize={{base: 'sm', md: '2xl'}}
          >
            {title1}
          </AppLink>
          <Text as="p" marginTop="2" fontSize="lg" noOfLines={5}>
            {previewDescription}
          </Text>
          {management && management.length && (
            <>
              <Heading as="h3" fontSize={{base: 'sm', md: '2xl'}}>
                {managementTitle}
              </Heading>
              <DynamicCarousel<ManagementI>
                {...getCarouselConfig()}
                maxW={{base: '100%', xl: '620'}}
                items={management}
                modules={[Autoplay, Navigation]}
                component={Card}
              />
            </>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
