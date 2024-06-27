'use client';
import {ReactElement} from 'react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {SwiperProps} from 'swiper/react';
import {ButtonType, ImgDataType} from '@/shared/types/components';
import {Carousel} from '@/shared/ui';
import {Hero} from './Hero';

type SliderType = {
  id: number;
  title: string;
  description: string;
  buttons: ButtonType[];
  image: ImgDataType[];
};

type Props = {
  data: {
    sliders: SliderType[];
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
    <Carousel<SliderType>
      {...getCarouselConfig()}
      items={data?.sliders || []}
      modules={[Navigation, Pagination, Autoplay]}
      component={Hero}
    />
  );
};
