import {getPageBySlug} from '@/shared/api/get-page-by-slug';
import {sectionRenderer} from '@/shared/lib/render/sectionRenderer';
import {PageProps} from '@/shared/types/pageParams';

const urlParamsObject = [
  'sections',
  'sections.benefits',
  'sections.buttons',
  'sections.image',
  'sections.inputs',
  'sections.checkboxes',
  'sections.submitButton',
  'sections.subscribeButton',
  'sections.inputSubscribe',
  'sections.sliders',
  'sections.sliders.buttons',
  'sections.sliders.image'
];

export default async function Home({params}: PageProps) {
  const page = await getPageBySlug('Home', params.lang, urlParamsObject);
  if (page.data.length === 0) return null;
  const contentSections = page.data[0].attributes.sections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  );
  return <>{sections}</>;
}
