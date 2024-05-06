import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {urlParamsObject} from '@/shared/const/pageOptions';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';
import {PageProps} from '@/shared/types/pageParams';
import {Card} from '@/shared/ui/Card/Card';

const card = {
  variant: 'small',
  imageUrl:
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  alternativeText: 'Green double couch with wooden legs',
  title: 'Living room Sofa',
  description:
    'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
};

export default async function Home({params}: PageProps) {
  const page = await getPageBySlug('Home', params.lang, urlParamsObject);
  if (page.data.length === 0) return null;
  const contentSections = page.data[0].attributes.sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
  return (
    <>
      {sections}
      <Card {...card} />
    </>
  );
}
