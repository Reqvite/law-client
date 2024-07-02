'use client';
import {Flex} from '@chakra-ui/react';
import {usePathname, useRouter} from 'next/navigation';
import {ReactElement} from 'react';
import {Routes} from '@/shared/const/routes';
import {Text} from '@/shared/const/text';
import {usePathnames} from '@/shared/lib/hooks';
import {CategoryI} from '@/shared/types/category';
import {ButtonType} from '@/shared/types/components';
import {AppLink, Section} from '@/shared/ui';
import {TitleWithDescription} from '@/shared/ui/Base/TitleWithDescription';
import {AppTabs} from '@/shared/ui/Tabs';

type Props = {
  categories: CategoryI[];
  description?: string;
  title: string;
  button: ButtonType;
};
export const ArticlesCategories = ({
  categories,
  button,
  description,
  title
}: Props): ReactElement | null => {
  const {isArticlePage} = usePathnames();
  const categoriesList = categories?.map((category) => ({
    value: `${Routes.articles.url}/${category.slug}`,
    label: category.title
  }));
  categoriesList.unshift({value: Routes.articles.url, label: Text.all.ukr});
  const path = usePathname();
  const router = useRouter();
  const activeIndex = categories.findIndex(
    (category) => `${Routes.articles.url}/${category.slug}` === path
  );
  if (isArticlePage) return null;

  const onSelect = (value: string): void => {
    router.push(value);
  };

  return (
    <Section>
      <Flex
        gap={2}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{base: 'column', md: 'row'}}
      >
        <TitleWithDescription title={title} description={description} stackProps={{w: '90%'}} />
        <AppLink size="lg" variant={button.variant} label={button.label} href={button.href || ''} />
      </Flex>
      <AppTabs<string>
        defaultIndex={activeIndex === -1 ? 0 : activeIndex + 1}
        variant="enclosed"
        options={categoriesList}
        onChange={onSelect}
      />
    </Section>
  );
};
