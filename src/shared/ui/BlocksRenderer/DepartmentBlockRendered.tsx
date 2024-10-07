'use client';
import {Box, Flex, Grid, Heading, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {Section} from '@/shared/ui';
import {Image} from '@/shared/ui/Image';
import {getStrapiMedia} from '../../api/api-helpers';
import {DepartmentWithAttributesI} from '../../types/departments';

export const DepartmentBlockRendered = (department: DepartmentWithAttributesI): ReactElement => {
  return (
    <Section>
      <Box p={8}>
        <Heading as="h1" textAlign="center" mb={8}>
          {department.attributes.title}
        </Heading>
        <Flex direction={{base: 'column', md: 'row'}} align="flex-start">
          <Box flex="3" pr={{md: 8}} mb={{base: 8, md: 0}}>
            <Text fontSize="lg">{department.attributes.description}</Text>
          </Box>
          <Box flex="1.5" textAlign="right">
            <Image
              src={getStrapiMedia(department.attributes.image?.data.attributes.url)}
              objectFit="cover"
              alt={
                department.attributes.image?.data.attributes.alternativeText ||
                department.attributes.title
              }
              w="full"
              h={{base: 400, md: 300}}
              borderRadius="lg"
              mb={4}
            />
            {department.attributes.image?.data.attributes.caption && (
              <Text fontSize="md" color="gray.600">
                {department.attributes.image.data.attributes.caption}
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
      {department.attributes.students?.data.length && (
        <Box p={8}>
          <Heading as="h3" textAlign="center" mb={8} fontSize="2xl">
            {`Учні кафедри ${department.attributes.title}`}
          </Heading>
          <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)'}} gap={6}>
            {department.attributes.students.data.map((student) => (
              <Box key={student.id} textAlign="center">
                <Image
                  src={getStrapiMedia(student.attributes.image.data.attributes.url)}
                  alt={
                    student.attributes.image?.data.attributes.alternativeText ||
                    student.attributes.title
                  }
                  w="full"
                  h={150}
                  objectFit="cover"
                  borderRadius="md"
                  mb={2}
                />
                <Text fontSize="sm" fontWeight="bold">
                  {student.attributes.title}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      )}
    </Section>
  );
};
