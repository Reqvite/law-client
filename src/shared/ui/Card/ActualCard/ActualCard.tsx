import {Flex} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {Routes} from '@/shared/const/routes';
import {ArticleI} from '@/shared/types/article';
import {AppLink} from '../../AppLink/AppLink';
import {Image} from '../../Image';

type Props = ArticleI;

export const ActualCard = ({title, slug, category, imgs}: Props): ReactElement => {
  const img = imgs[0];
  return (
    <Flex gap={1} alignItems="center">
      <Image
        src={getStrapiMedia(img.url)}
        alt={img.alternativeText || title}
        borderRadius="10px"
        objectFit="cover"
        quality={1}
        width={50}
        height={50}
      />
      <AppLink whiteSpace="normal" href={`${Routes.articles.url}/${category.slug}/${slug}`} as="h3">
        {title}
      </AppLink>
    </Flex>
  );
};
