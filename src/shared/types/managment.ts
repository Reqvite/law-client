import {ImgDataAttributesType} from './components';

export interface Managemnet {
  fullname: string;
  role: string;
  email: string;
  phone: string;
  image: {
    data: {
      attributes: ImgDataAttributesType;
    };
  };
}
