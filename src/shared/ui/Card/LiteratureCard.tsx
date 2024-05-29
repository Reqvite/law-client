import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {LiteratureI} from '@/shared/types/literature';
import {AppLink} from '../AppLink/AppLink';

export const LiteratureCard = ({title, href}: LiteratureI): ReactElement => {
  const link = getStrapiMedia(href?.data?.attributes?.url);

  return <AppLink href={link}>{title}</AppLink>;
};
