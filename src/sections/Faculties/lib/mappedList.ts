import {FacultyI} from '@/shared/types/faculty';

export const mappedList = (list?: FacultyI[]): any[] => {
  if (!list) {
    return [];
  }

  return list?.map((el: FacultyI) => ({
    id: el.id,
    title1: el?.title1,
    title2: el?.title2,
    managementTitle: el?.managementTitle,
    previewDescription: el?.previewDescription,
    href: `/faculties/${el.category.slug}/${el?.slug}`,
    image: el?.image,
    management: el?.management
  }));
};
