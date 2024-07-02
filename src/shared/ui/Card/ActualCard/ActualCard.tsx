import {ReactElement} from 'react';
import {Routes} from '@/shared/const/routes';
import {ArticleI} from '@/shared/types/article';
import {AppLink} from '../../AppLink/AppLink';

type Props = ArticleI;

export const ActualCard = ({title, slug, category}: Props): ReactElement => {
  return (
    <AppLink whiteSpace="normal" href={`${Routes.articles.url}/${category.slug}/${slug}`} as="h3">
      {title}
    </AppLink>
  );
};
