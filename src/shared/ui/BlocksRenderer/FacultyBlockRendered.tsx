'use client';
import {Box, Flex, Grid, Heading, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {AppLink, Section} from '@/shared/ui';
import {Image} from '@/shared/ui/Image';
import {FacultyParams} from '../../../app/[lang]/faculties/[category]/[faculty]/page';
import {FacultyI} from '../../types/faculty';

export const FacultyBlockRendered = ({
  faculty,
  params
}: {
  faculty: FacultyI;
  params: FacultyParams;
}): ReactElement => {
  return (
    <Section>
      <Box p={8}>
        <Heading as="h1" textAlign="center" mb={8}>
          {faculty.title1}
        </Heading>
        <Flex direction={{base: 'column', md: 'row'}} align="flex-start">
          <Box flex="3" pr={{md: 8}} mb={{base: 8, md: 0}}>
            <Text fontSize="lg">{faculty.previewDescription}</Text>
          </Box>
          <Box flex="1.5">
            <Image
              src={getStrapiMedia(faculty.image?.url)}
              objectFit="cover"
              alt={faculty.image?.alternativeText || faculty.title1}
              w="full"
              h={{base: 400, md: 300}}
              borderRadius="lg"
            />
          </Box>
        </Flex>
      </Box>
      {faculty.departments?.length && (
        <Box p={8}>
          <Heading as="h2" textAlign="left" mb={8} fontSize="3xl">
            Наші кафедри
          </Heading>
          <Grid templateColumns={{base: '1fr', md: 'repeat(3, 1fr)'}} gap={8}>
            {faculty.departments.map((department) => (
              <Box key={department.id} textAlign="center">
                <Box maxW="85%" mx="auto">
                  <Image
                    src={getStrapiMedia(department.image.url)}
                    alt={department.image?.alternativeText || department.title}
                    w="full"
                    h={{base: 400, md: 300}}
                    mb={4}
                    borderRadius="lg"
                  />
                  <AppLink
                    mr="auto"
                    textDecoration="underline"
                    whiteSpace="normal"
                    href={`/faculties/${params.category}/${params.faculty}/${department.slug}`}
                    fontSize={{base: 'sm', md: '2xl'}}
                  >
                    <Text fontWeight="bold" mb={4}>
                      {department.title}
                    </Text>
                  </AppLink>
                </Box>
                <Box maxW="100%" mx="auto">
                  <Text fontSize="sm" textAlign="left">
                    {department.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      )}
    </Section>
  );
};
