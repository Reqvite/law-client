import {ImgDataAttributesType} from './components';
import {ManagementI} from './management';

export interface Faculty {
  id: string;
  title1: string;
  title2: string;
  slug: string;
  managementTitle: string;
  previewDescription: string;
  image: ImgDataAttributesType;
  management: ManagementI[];
}
