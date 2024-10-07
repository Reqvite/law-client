import {ImgDataAttributesType} from './components';
import {DataWithAttributesI} from './dataWithAttributes';
import {StudentWithAttributesI} from './student';

export interface DepartmentI {
  id: number;
  title: string;
  slug: string;
  previewDescription: string;
  description: string;
  image: ImgDataAttributesType;
}

export interface DepartmentWithAttributesI {
  id: number;
  attributes: {
    title: string;
    slug: string;
    previewDescription: string;
    description: string;
    image: DataWithAttributesI<ImgDataAttributesType>;
    students?: {
      data: StudentWithAttributesI[];
    };
  };
}
