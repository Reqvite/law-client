import {BlocksContent} from '@strapi/blocks-react-renderer';
import {CategoryI} from './category';
import {FileDataAttributesType} from './components';

export interface LawI {
  title: string;
  description: BlocksContent;
  slug: string;
  category: CategoryI;
  file: FileDataAttributesType;
}
