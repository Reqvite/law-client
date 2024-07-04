'use client';
import {BlocksContent, BlocksRenderer} from '@strapi/blocks-react-renderer';
import {ReactElement} from 'react';
import {Image} from '../Image';

type Props = {
  description: BlocksContent;
};

export const LawBlockRendered = ({description}: Props): ReactElement => {
  return (
    <BlocksRenderer
      content={description}
      blocks={{
        image: ({image}) => {
          return (
            <Image
              py={2}
              mx="auto"
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ''}
            />
          );
        }
      }}
    />
  );
};
