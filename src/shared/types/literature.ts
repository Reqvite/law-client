import {CategoryI} from './category';
import {FileDataAttributesType, ImgDataAttributesType} from './components';

export interface LiteratureI {
  id: string;
  title: string;
  description: string;
  slug: string;
  file: FileDataAttributesType;
  category: CategoryI;
  image: ImgDataAttributesType;
}
