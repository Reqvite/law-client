import {ArticleI} from '@/shared/types/article';

export const mappedList = (list?: ArticleI[]): any[] => {
  if (!list) {
    return [];
  }
  return list?.map((el: any) => ({
    id: el.id,
    description: el?.previewDescription,
    title: el?.title,
    styleVariant: 'medium',
    href: `/articles/${el.category.slug}/${el?.slug}`,
    image: el?.imgs?.[0],
    createdAt: el.createdAt
  }));
};
