'use client';

import {Flex, FlexProps, useColorModeValue} from '@chakra-ui/react';
import {ReactElement, ReactNode} from 'react';

interface PaginationButtonProps extends FlexProps {
  children: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const PaginationButton = ({
  children,
  isDisabled,
  isActive,
  ...props
}: PaginationButtonProps): ReactElement => {
  const activeColor = useColorModeValue('var(--chakra-colors-accentColor)', 'blue.200');
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const bg = useColorModeValue('gray.100', 'gray.600');

  return (
    <Flex
      p={3}
      px={4}
      fontSize="md"
      fontWeight="500"
      lineHeight="1rem"
      height="2.5rem"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      border="1px solid"
      mr="-1px"
      borderColor={borderColor}
      bg={isActive ? activeColor : undefined}
      color={isActive ? 'white' : undefined}
      _hover={!isDisabled && !isActive ? {bg} : {}}
      {...props}
    >
      {children}
    </Flex>
  );
};
