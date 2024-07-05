import {BlocksContent} from '@strapi/blocks-react-renderer';
import {CategoryI} from './category';
import {FileDataAttributesType} from './components';

export interface LawI {
  id: string;
  title: string;
  description: BlocksContent;
  slug: string;
  category: CategoryI;
  file: FileDataAttributesType;
}
