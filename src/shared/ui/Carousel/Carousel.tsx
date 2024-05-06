'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Box} from '@chakra-ui/react';
import {ComponentType} from 'react';
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react';

interface ItemWithId {
  id: number;
}

type Props<T extends ItemWithId> = SwiperProps & {
  items: T[];
  component: ComponentType<T>;
};

export const Carousel = <T extends ItemWithId>({
  items,
  component: Component,
  ...otherProps
}: Props<T>) => {
  return (
    <Box position="relative" width="full" overflow="hidden">
      <Swiper {...otherProps}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Component {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
