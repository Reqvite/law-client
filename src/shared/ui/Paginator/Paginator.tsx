'use client';
import {Flex, Icon, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {usePagination} from './lib/usePagination';
import {PaginationButton} from './PaginatorButton/PaginatorButton';

interface PaginationProps {
  totalResults?: number;
  initialPage?: number;
  itemsPerPage?: number;
  siblingCount?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalResults = 2500,
  initialPage = 1,
  siblingCount = 1,
  itemsPerPage = 10
}): ReactElement | null => {
  const {currentPage, goToPage, nextPage, prevPage, pageNumbers, canNextPage, canPrevPage} =
    usePagination({
      totalItems: totalResults,
      itemsPerPage,
      initialPage,
      siblingCount
    });
  if (!totalResults) return null;

  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center" mt={5}>
      <Text fontSize="lg">{`${totalResults} знайдено`}</Text>
      <Flex alignItems="center" ml={4}>
        <PaginationButton onClick={() => prevPage()} isDisabled={!canPrevPage}>
          <Icon as={FaChevronLeft} w={3.5} h={3.5} />
        </PaginationButton>
        {pageNumbers.map((pageNumber, index) => (
          <PaginationButton
            key={index}
            isActive={currentPage === pageNumber}
            onClick={() => goToPage(Number(pageNumber))}
          >
            {pageNumber}
          </PaginationButton>
        ))}
        <PaginationButton onClick={() => nextPage()} isDisabled={!canNextPage}>
          <Icon as={FaChevronRight} w={3.5} h={3.5} />
        </PaginationButton>
      </Flex>
    </Flex>
  );
};
