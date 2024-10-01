import {CategoryI} from './category';
import {ImgDataAttributesType} from './components';
import {ManagementI} from './management';

export interface FacultyI {
  id: string;
  title1: string;
  title2: string;
  category: CategoryI;
  slug: string;
  managementTitle: string;
  previewDescription: string;
  image: ImgDataAttributesType;
  management: ManagementI[];
}
