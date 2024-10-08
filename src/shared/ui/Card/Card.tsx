import {
  Badge,
  Card as CardChakra,
  CardBody,
  CardProps,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {cardAnimation} from '@/shared/const/animations';
import {formateDate} from '@/shared/lib/helpers/formateDate';
import {CardPropsType} from '@/shared/types/components';
import {AppLink} from '../AppLink/AppLink';
import {Image} from '../Image';
import {AppImageProps} from '../Image/Image';

type StyleVariant = 'small' | 'medium' | 'large';

export type AppCardProps = CardProps &
  CardPropsType & {
    styleVariant?: StyleVariant;
    withoutAnimation?: boolean;
    imageProps?: AppImageProps;
  };

export const Card = ({
  image,
  styleVariant,
  title,
  description,
  href,
  createdAt,
  withoutAnimation,
  imageProps,
  ...otherProps
}: AppCardProps): ReactElement => {
  const alt = image?.alternativeText || title || '';
  const imageUrl = getStrapiMedia(image?.url || '');
  const animation = withoutAnimation ? {} : cardAnimation;

  let content;

  if (styleVariant === 'medium') {
    content = (
      <CardChakra
        maxW={600}
        boxShadow="var(--chakra-shadows-cardShadow)"
        position="relative"
        sx={animation}
        {...otherProps}
      >
        {createdAt && (
          <Badge position="absolute" right={0}>
            {formateDate(createdAt)}
          </Badge>
        )}
        <CardBody p={0}>
          {image && (
            <Image
              src={imageUrl}
              objectFit="fill"
              w="100%"
              h="250px"
              alt={alt}
              borderRadius="lg"
              {...imageProps}
            />
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
      <CardChakra
        maxW="100%"
        boxShadow="var(--chakra-shadows-cardShadow)"
        sx={animation}
        {...otherProps}
      >
        <CardBody>
          {image && <Image src={imageUrl} alt={alt} borderRadius="lg" {...imageProps} />}
          <Stack mt="6" spacing="3">
            {title && <Heading size="md">{title}</Heading>}
            {description && <Text>{description}</Text>}
          </Stack>
        </CardBody>
      </CardChakra>
    );
  } else {
    content = (
      <CardChakra
        maxW={300}
        boxShadow="var(--chakra-shadows-cardShadow)"
        sx={animation}
        {...otherProps}
      >
        <CardBody>
          {image && (
            <Image
              src={imageUrl}
              objectFit="contain"
              w="100%"
              h="150px"
              alt={alt}
              borderRadius="lg"
              {...imageProps}
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
