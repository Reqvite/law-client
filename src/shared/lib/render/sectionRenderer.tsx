import {FormSection} from '@/sections/Form';
import {HeroSliderSection} from '@/sections/Hero';
import {RecentUpdatesSection} from '@/sections/RecentUpdates';

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'blocks.hero':
      return <HeroSliderSection key={index} data={section} />;
    case 'blocks.recent-updates':
      return <RecentUpdatesSection key={index} data={section} />;
    case 'blocks.submit-form':
      return <FormSection key={index} data={section} />;
    default:
      return null;
  }
}
