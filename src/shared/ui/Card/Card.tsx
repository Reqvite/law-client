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
import {ImgDataType} from '@/shared/types/components';

type variantTypes = 'medium' | 'large';

type AdvantagesCardProps = CardProps & {
  styleVariant?: variantTypes;
  image?: {data: ImgDataType};
  alternativeText?: string;
  title?: string;
  description?: string;
};

export const Card = ({
  maxW = '250px',
  image,
  styleVariant,
  title,
  description,
  ...otherProps
}: AdvantagesCardProps) => {
  const alt = image?.data?.attributes?.alternativeText || '';
  const imageUrl = getStrapiMedia(image?.data?.attributes?.url || '');

  if (styleVariant === 'medium') {
    return (
      <CardChakra maxW={maxW} {...otherProps}>
        <CardBody>
          <Image src={imageUrl || ''} alt={alt || ''} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </CardChakra>
    );
  }

  if (styleVariant === 'large') {
    return (
      <CardChakra maxW={maxW} {...otherProps}>
        <CardBody>
          <Image src={imageUrl || ''} alt={alt || ''} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </CardChakra>
    );
  }

  return (
    <CardChakra maxW={maxW} {...otherProps}>
      <CardBody>
        <Image src={imageUrl || ''} alt={alt || ''} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </CardChakra>
  );
};
