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
      <Swiper
        {...otherProps}
        style={{
          //@ts-expect-error swiper ignore
          '--swiper-pagination-color': 'var(--chakra-colors-accentColor)',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '16px',
          '--swiper-pagination-bullet-horizontal-gap': '6px'
        }}
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
