import {ArticlesList} from '@/sections/ArticlesList/ArticlesList';
import {ContactUs} from '@/sections/ContactUs';
import {Faculties} from '@/sections/Faculties';
import {FormSection} from '@/sections/Form';
import {HeroSliderSection} from '@/sections/Hero';
import {LiteratureList} from '@/sections/LiteratureList/ui/LiteratureList';
import {Management} from '@/sections/Management';
import {PageNavigationTabs} from '@/sections/PageNavigationTabs';
import {RecentUpdatesSection} from '@/sections/RecentUpdates';
import {SearchParams} from '@/shared/types/pageParams';

export function sectionRenderer(
  section: any,
  index: number,
  searchParams?: SearchParams,
  params?: any
) {
  switch (section.__component) {
    case 'blocks.hero':
      return <HeroSliderSection key={index} data={section} />;
    case 'blocks.recent-updates':
      return <RecentUpdatesSection key={index} data={section} />;
    case 'blocks.submit-form':
      return <FormSection key={index} data={section} />;
    case 'blocks.page-navigation-tabs':
      return (
        <PageNavigationTabs key={index} {...section} searchParams={searchParams!} params={params} />
      );
    case 'blocks.contact-us':
      return <ContactUs key={index} {...section} />;
    case 'blocks.news-and-articles':
      return <ArticlesList key={index} {...section} searchParams={searchParams!} params={params} />;
    case 'blocks.literature':
      return (
        <LiteratureList key={index} {...section} searchParams={searchParams!} params={params} />
      );
    case 'blocks.management':
      return <Management key={index} {...section} />;
    case 'blocks.faculties':
      return <Faculties key={index} {...section} />;
    default:
      return null;
  }
}
