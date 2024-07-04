import {CategoryI} from './category';
import {ImgDataAttributesType} from './components';

interface ArticleI {
  id: string;
  title: string;
  category: CategoryI;
  previewDescription: string;
  imgs: ImgDataAttributesType[];
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export {type ArticleI};
