import {ImgDataAttributesType} from './components';
import {DataWithAttributesI} from './dataWithAttributes';

export interface StudentWithAttributesI {
  id: number;
  attributes: {
    title: string;
    image: DataWithAttributesI<ImgDataAttributesType>;
  };
}
