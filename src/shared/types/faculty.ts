import {ImgDataAttributesType} from './components';

export interface Faculty {
  title1: string;
  title2: string;
  previewDescription: string;
  image: {
    data: {
      attributes: ImgDataAttributesType;
    };
  };
}
