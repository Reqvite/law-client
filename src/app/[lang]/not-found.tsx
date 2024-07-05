import {Heading, Text, VStack} from '@chakra-ui/react';
import {AppLink, Section} from '@/shared/ui';

export default function NotFound() {
  return (
    <Section display="flex" h="100vh" justifyContent="center" alignItems="center">
      <VStack spacing={5}>
        <Heading as="h2">Помилка 404</Heading>
        <Heading as="h2">Ресурс не знайдено</Heading>
        <Text>Не вдалося знайти запитуваний ресурс</Text>
        <AppLink as="a" variant="primary" href="/">
          Повернутися на головну
        </AppLink>
      </VStack>
    </Section>
  );
}
