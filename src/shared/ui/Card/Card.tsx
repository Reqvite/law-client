import {Card as Sanya, CardBody, CardProps, Heading, Image, Stack, Text} from '@chakra-ui/react';

// type AdvantagesCardProps = CardProps & {
//   imageUrl: string | null;
//   alternativeText?: string | null;
//   title?: string | null;
//   description?: string | null;
// };
// export const AdvantagesCard = ({
//   imageUrl,
//   alternativeText,
//   cardHeading,
//   cardText
// }: AdvantagesCardProps) => {
//   return (
//     <Card maxW="sm">
//       <CardBody>
//         <Image src={imageUrl || ''} alt={alternativeText || ''} borderRadius="lg" />
//         <Stack mt="6" spacing="3">
//           <Heading size="md">{title}</Heading>
//           <Text>{description}</Text>
//         </Stack>
//       </CardBody>
//     </Card>
//   );
// };

export const Card = ({maxW = '250px', ...otherProps}) => {
  return (
    <Sanya maxW={maxW} {...otherProps}>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned
            spaces and for people who love a chic design with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
    </Sanya>
  );
};
