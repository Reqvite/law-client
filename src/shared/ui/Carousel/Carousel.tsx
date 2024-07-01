'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import {Box, BoxProps} from '@chakra-ui/react';
import {ComponentType, ReactElement} from 'react';
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react';

interface ItemWithId {
  id: string;
}

type Props<T extends ItemWithId> = SwiperProps & {
  items: T[];
  component: ComponentType<T>;
  maxW?: BoxProps['maxW'];
};

const swiperStyles: SwiperProps['style'] = {
  //@ts-expect-error swiper style exists
  '--swiper-pagination-color': 'var(--chakra-colors-accentColor)',
  '--swiper-pagination-bullet-inactive-color': '#999999',
  '--swiper-pagination-bullet-inactive-opacity': '1',
  '--swiper-pagination-bullet-size': '16px',
  '--swiper-pagination-bullet-horizontal-gap': '6px'
};

const Carousel = <T extends ItemWithId>({
  items,
  component: Component,
  maxW,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <Box position="relative" width="full" overflow="hidden" maxW={maxW}>
      <Swiper
        {...otherProps}
        style={swiperStyles}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Component {...item} />
          </SwiperSlide>
        ))}
        <Box className="swiper-button-next" />
        <Box className="swiper-button-prev" />
      </Swiper>
    </Box>
  );
};

export default Carousel;
