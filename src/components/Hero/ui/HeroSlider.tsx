import {ReactElement} from 'react';
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

export const HeroSlider = ({data}: Props): ReactElement => {
  return <Carousel<SliderType> items={data?.sliders || []} component={Hero} />;
};
