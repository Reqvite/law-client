'use client';
import {Box, Button, Center, Icon, Text} from '@chakra-ui/react';
import {useRouter} from 'next-nprogress-bar';
import {BsTools} from 'react-icons/bs';

export const PageUnderConstruction = () => {
  const router = useRouter();

  return (
    <Center minH="100vh">
      <Box
        textAlign="center"
        p={8}
        bg="white"
        boxShadow="var(--chakra-shadows-cardShadow)"
        borderRadius="md"
      >
        <Icon as={BsTools} boxSize={12} color="var(--chakra-colors-accentColor)" mb={4} />
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          Сторінка в розробці
        </Text>
        <Text fontSize="lg" color="gray.600">
          Вибачте за незручності. Ми працюємо над цією сторінкою.
        </Text>
        <Button onClick={() => router.back()} variant="primary" mt={4}>
          Повернутися назад
        </Button>
      </Box>
    </Center>
  );
};
