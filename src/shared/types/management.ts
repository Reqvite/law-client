import {ImgDataAttributesType} from './components';

export interface ManagementI {
  id: string;
  fullname: string;
  role: string;
  email: string;
  phone: string;
  image: ImgDataAttributesType;
}
