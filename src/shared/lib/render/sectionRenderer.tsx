import {HeroSlider} from '@/components/Hero/ui/HeroSlider';

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'blocks.hero':
      return <HeroSlider key={index} data={section} />;
    // case "blocks.submit-form":
    //   return <SubmitForm key={index} data={section} />;
    // case "blocks.subscribe-form":
    //   return <SubscribeForm key={index} data={section} />;
    default:
      return null;
  }
}
