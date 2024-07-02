import {CategoryI} from './category';

interface ArticleI {
  id: string;
  title: string;
  category: CategoryI;
  previewDescription: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export {type ArticleI};
