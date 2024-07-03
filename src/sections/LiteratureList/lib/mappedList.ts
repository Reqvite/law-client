import {LiteratureI} from '@/shared/types/literature';

export const mappedList = (list: LiteratureI[]): any[] => {
  return list?.map((el) => ({
    id: el.id,
    description: el?.description,
    title: el?.title,
    styleVariant: 'medium',
    file: el.file,
    image: el?.image,
    slug: el.slug
  }));
};
