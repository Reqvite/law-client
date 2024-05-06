import {ReactElement} from 'react';
import {ArticleI} from '@/shared/types/article';
import {AppLink} from '../../AppLink/AppLink';

type Props = ArticleI & {
  title: string;
  slug: string;
};

export const ArticleCard = ({title, slug}: Props): ReactElement => {
  return (
    <AppLink whiteSpace="normal" href={`/articles/${slug}`} as="h3">
      {title}
    </AppLink>
  );
};
