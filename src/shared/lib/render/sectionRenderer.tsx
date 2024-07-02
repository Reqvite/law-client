import {ArticlesCategories} from '@/sections/ArticlesCategories';
import {ContactUs} from '@/sections/ContactUs';
import {Faculties} from '@/sections/Faculties';
import {FormSection} from '@/sections/Form';
import {HeroSliderSection} from '@/sections/Hero';
import {LiteratureSection} from '@/sections/Literature';
import {Management} from '@/sections/Management';
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
    case 'blocks.articles-categories':
      return <ArticlesCategories key={index} {...section} />;
    case 'blocks.recent-updates':
      return <RecentUpdatesSection key={index} data={section} />;
    case 'blocks.submit-form':
      return <FormSection key={index} data={section} />;
    case 'blocks.contact-us':
      return <ContactUs key={index} {...section} />;
    case 'blocks.news-and-articles':
      return <News key={index} {...section} searchParams={searchParams!} />;
    case 'blocks.literature':
      return <LiteratureSection key={index} data={section} />;
    case 'blocks.management':
      return <Management key={index} {...section} />;
    case 'blocks.faculties':
      return <Faculties key={index} {...section} />;
    default:
      return null;
  }
}
