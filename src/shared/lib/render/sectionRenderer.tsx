import {FormSection} from '@/sections/Form';
import {HeroSliderSection} from '@/sections/Hero';
import {LiteratureSection} from '@/sections/Literature';
import {News} from '@/sections/News/News';
import {RecentUpdatesSection} from '@/sections/RecentUpdates';

export function sectionRenderer(
  section: any,
  index: number,
  searchParams?: {[key: string]: string}
) {
  switch (section.__component) {
    case 'blocks.hero':
      return <HeroSliderSection key={index} data={section} />;
    case 'blocks.recent-updates':
      return <RecentUpdatesSection key={index} data={section} />;
    case 'blocks.submit-form':
      return <FormSection key={index} data={section} />;
    case 'blocks.news-and-articles':
      return <News key={index} data={section} searchParams={searchParams!} />;
    case 'blocks.literature':
      return <LiteratureSection key={index} data={section} />;
    default:
      return null;
  }
}
