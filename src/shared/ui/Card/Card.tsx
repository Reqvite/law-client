import {
  Card as CardChakra,
  CardBody,
  CardProps,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {CardPropsType} from '@/shared/types/components';
import {AppLink} from '../AppLink/AppLink';

type Props = CardProps & CardPropsType;

export const Card = ({
  maxW = '250px',
  image,
  styleVariant,
  title,
  description,
  href,
  ...otherProps
}: Props) => {
  const alt = image?.data?.attributes?.alternativeText || '';
  const imageUrl = getStrapiMedia(image?.data?.attributes?.url || '');

  let content;

  if (styleVariant === 'medium') {
    content = (
      <CardChakra maxW={maxW} {...otherProps}>
        <CardBody>
          {image && <Image src={imageUrl} alt={alt} borderRadius="lg" />}
          <Stack mt="6" spacing="3">
            {title && <Heading size="md">{title}</Heading>}
            {description && <Text>{description}</Text>}
          </Stack>
        </CardBody>
      </CardChakra>
    );
  }

  if (styleVariant === 'large') {
    content = (
      <CardChakra maxW={maxW} {...otherProps}>
        <CardBody>
          {image && <Image src={imageUrl} alt={alt} borderRadius="lg" />}
          <Stack mt="6" spacing="3">
            {title && <Heading size="md">{title}</Heading>}
            {description && <Text>{description}</Text>}
          </Stack>
        </CardBody>
      </CardChakra>
    );
  }

  content = (
    <CardChakra maxW={maxW} {...otherProps}>
      <CardBody>
        {image && <Image src={imageUrl} alt={alt} borderRadius="lg" />}
        <Stack mt="6" spacing="3">
          {title && <Heading size="md">{title}</Heading>}
          {description && <Text>{description}</Text>}
        </Stack>
      </CardBody>
    </CardChakra>
  );

  return href ? <AppLink href={href} component={content} /> : content;
};
