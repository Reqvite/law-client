'use client'; // Error components must be Client Components

import {Button, Heading, VStack} from '@chakra-ui/react';
import {useEffect} from 'react';
import {Section} from '@/shared/ui';

export default function Error({
  error,
  reset
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section as="main" display="flex" h="100vh" justifyContent="center" alignItems="center">
      <VStack spacing={5}>
        <Heading as="h1">Something went wrong..</Heading>
        <Button variant="primary" onClick={() => reset()}>
          Reload page
        </Button>
      </VStack>
    </Section>
  );
}
