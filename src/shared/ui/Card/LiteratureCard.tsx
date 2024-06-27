import {Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {LiteratureI} from '@/shared/types/literature';
import {AppLink} from '../AppLink/AppLink';
import {Image} from '../Image';

export const LiteratureCard = ({title, image, href}: LiteratureI): ReactElement => {
  const link = getStrapiMedia(href?.data?.attributes?.url);
  const alt = image?.data?.attributes?.alternativeText || '';
  const imageUrl = getStrapiMedia(image?.data?.attributes?.url || '');

  return (
    <AppLink href={link}>
      {image && (
        <Image src={imageUrl} objectFit="contain" w="100%" h="150px" alt={alt} borderRadius="lg" />
      )}
      <Heading>{title}</Heading>
    </AppLink>
  );
};
