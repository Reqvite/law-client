import {Card as CardChakra, CardBody, CardProps, Heading, Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {CardPropsType} from '@/shared/types/components';
import {AppLink} from '../AppLink/AppLink';
import {Image} from '../Image';

type StyleVariant = 'small' | 'medium' | 'large';

type Props = CardProps & CardPropsType & {styleVariant?: StyleVariant};

export const Card = ({
  maxW = '300px',
  image,
  styleVariant,
  title,
  description,
  href,
  ...otherProps
}: Props): ReactElement => {
  const alt = image?.data?.attributes?.alternativeText || '';
  const imageUrl = getStrapiMedia(image?.data?.attributes?.url || '');

  let content;

  if (styleVariant === 'medium') {
    content = (
      <CardChakra maxW={maxW} {...otherProps} boxShadow="var(--chakra-shadows-cardShadow)">
        <CardBody p={0}>
          {image && (
            <Image src={imageUrl} objectFit="fill" w="100%" h="250px" alt={alt} borderRadius="lg" />
          )}
          <Stack spacing="3" p={5} height={200}>
            {title && (
              <Heading isTruncated size="md">
                {title}
              </Heading>
            )}
            {description && <Text noOfLines={5}>{description}</Text>}
          </Stack>
        </CardBody>
      </CardChakra>
    );
  } else if (styleVariant === 'large') {
    content = (
      <CardChakra maxW={maxW} {...otherProps} boxShadow="var(--chakra-shadows-cardShadow)">
        <CardBody>
          {image && <Image src={imageUrl} alt={alt} borderRadius="lg" />}
          <Stack mt="6" spacing="3">
            {title && <Heading size="md">{title}</Heading>}
            {description && <Text>{description}</Text>}
          </Stack>
        </CardBody>
      </CardChakra>
    );
  } else {
    content = (
      <CardChakra maxW={maxW} {...otherProps}>
        <CardBody>
          {image && (
            <Image
              src={imageUrl}
              objectFit="contain"
              w="100%"
              h="150px"
              alt={alt}
              borderRadius="lg"
            />
          )}
          <Stack mt="6" spacing="3">
            {title && (
              <Heading textAlign="center" size="md">
                {title}
              </Heading>
            )}
            {description && <Text textAlign="center">{description}</Text>}
          </Stack>
        </CardBody>
      </CardChakra>
    );
  }

  return href ? <AppLink href={href} component={content} /> : content;
};
