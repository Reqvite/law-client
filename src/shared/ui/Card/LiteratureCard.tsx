import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
type Props = {};

export const LiteratureCard = (props: Props): ReactElement => {
  return (
    <a href={getStrapiMedia(data?.list?.data[0]?.attributes?.href?.data?.attributes?.url)}>
      {data?.list?.data[0]?.attributes?.title}
    </a>
  );
};
