'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Box} from '@chakra-ui/react';
import {ComponentType} from 'react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react';

interface ItemWithId {
  id: number;
}

type Props<T extends ItemWithId> = SwiperProps & {
  items: T[];
  component: ComponentType<any>;
};

export const Carousel = <T extends ItemWithId>({
  items,
  component: Component,
  ...otherProps
}: Props<T>) => {
  return (
    <Box position="relative" width="full" overflow="hidden">
      <Swiper
        navigation
        loop
        autoplay
        pagination={{type: 'fraction'}}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-96 w-full rounded-lg"
        {...otherProps}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Component {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
