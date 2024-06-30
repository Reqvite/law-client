import {Button, Heading, Text, VStack} from '@chakra-ui/react';
import {Section} from '@/shared/ui';

export default function NotFound() {
  return (
    <Section>
      <VStack spacing={5}>
        <Heading as="h2">Error 404</Heading>
        <Heading as="h2">Not Found</Heading>
        <Text>Could not find requested resource</Text>
        <Button as="a" variant={'primary'} href="/">
          Return Home
        </Button>
      </VStack>
    </Section>
  );
}
