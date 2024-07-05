'use client';
import {Box, Center, Icon, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {TbMoodEmpty} from 'react-icons/tb';

type Props = {
  message?: string;
};

export const EmptyMessageBlock = ({message = 'Нічого не знайдено'}: Props): ReactElement => {
  return (
    <Center>
      <Box textAlign="center" p={8} bg="white" borderRadius="md">
        <Icon as={TbMoodEmpty} boxSize={12} color="var(--chakra-colors-accentColor)" mb={4} />
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          {message}
        </Text>
      </Box>
    </Center>
  );
};
