export const mappedList = (list: any): any[] => {
  return list?.map((el: any) => ({
    id: el.id,
    description: el?.previewDescription,
    title: el?.title,
    styleVariant: 'medium',
    href: `articles/${el?.slug}`,
    image: el?.imgs?.[0]
  }));
};
