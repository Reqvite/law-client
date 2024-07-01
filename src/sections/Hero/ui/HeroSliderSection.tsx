'use client';
import {ReactElement} from 'react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {SwiperProps} from 'swiper/react';
import Carousel from '@/shared/ui/Carousel/Carousel';
import {Hero, HeroProps} from './Hero';

type Props = {
  data: {
    sliders: HeroProps[];
  };
};

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
    speed: 600,
    loop: true
  };
};

export const HeroSliderSection = ({data}: Props): ReactElement => {
  return (
    <Carousel<HeroProps>
      {...getCarouselConfig()}
      items={data?.sliders || []}
      modules={[Navigation, Pagination, Autoplay]}
      component={Hero}
    />
  );
};
