import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';
import {PageProps} from '@/shared/types/pageParams';

const urlParamsObject = [
  'contentSections',
  'contentSections.benefits',
  'contentSections.buttons',
  'contentSections.image',
  'contentSections.inputs',
  'contentSections.checkboxes',
  'contentSections.submitButton',
  'contentSections.subscribeButton',
  'contentSections.inputSubscribe'
];

export default async function Home({params}: PageProps) {
  const page = await getPageBySlug('Home', params.lang, urlParamsObject);
  if (page.data.length === 0) return null;
  const contentSections = page.data[0].attributes.contentSections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
  return <>{sections}</>;
}
