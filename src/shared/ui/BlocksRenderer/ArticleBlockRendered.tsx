'use client';
import {Heading} from '@chakra-ui/react';
import {BlocksContent, BlocksRenderer} from '@strapi/blocks-react-renderer';
import {ReactElement} from 'react';
import {AppLink} from '../AppLink/AppLink';
import {Image} from '../Image';

type Props = {
  description: BlocksContent;
};

export const ArticleBlockRendered = ({description}: Props): ReactElement => {
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
              width={1200}
              height={500}
              borderRadius="10px"
              objectFit="contain"
              alt={image.alternativeText || ''}
            />
          );
        },
        heading: ({children, level}) => {
          switch (level) {
            case 1:
              return <Heading as="h2">{children}</Heading>;
            case 2:
              return <Heading variant="h2">{children}</Heading>;
            case 3:
              return <Heading variant="h3">{children}</Heading>;
            case 4:
              return <Heading variant="h4">{children}</Heading>;
            case 5:
              return <Heading variant="h5">{children}</Heading>;
            case 6:
              return <Heading variant="h6">{children}</Heading>;
            default:
              return <Heading variant="h2">{children}</Heading>;
          }
        },
        link: ({children, url}) => <AppLink href={url}>{children}</AppLink>
      }}
    />
  );
};
