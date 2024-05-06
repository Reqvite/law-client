import {
  Card as CardChakra,
  CardBody,
  CardProps,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';

type AdvantagesCardProps = CardProps & {
  variant: string | null;
  imageUrl: string | null;
  alternativeText?: string | null;
  title?: string | null;
  description?: string | null;
};
export const Card = ({
  maxW = '350px',
  imageUrl,
  alternativeText,
  title,
  description,
  ...otherProps
}: AdvantagesCardProps) => {
  return (
    <CardChakra maxW={maxW} {...otherProps}>
      <CardBody>
        <Image src={imageUrl || ''} alt={alternativeText || ''} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </CardChakra>
  );
};
