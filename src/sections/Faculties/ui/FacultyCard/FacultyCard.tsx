import {Box, Heading, Text, useColorModeValue} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {Faculty} from '@/shared/types/faculty';
import {Image} from '@/shared/ui/Image';

type Props = Faculty;

export const FacultyCard = ({title1, previewDescription, image}: Props): ReactElement => {
  const imageUrl = getStrapiMedia(image?.url);
  return (
    <Box>
      <Box
        marginTop={{base: '1', sm: '5'}}
        display="flex"
        flexDirection={{base: 'column', sm: 'row'}}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{base: '100%', sm: '85%'}} zIndex="2" marginLeft={{base: '0', sm: '5%'}}>
            <Box textDecoration="none" _hover={{textDecoration: 'none'}}>
              <Image w="full" borderRadius="lg" src={imageUrl} alt={title1} objectFit="fill" />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{base: '3', sm: '0'}}
        >
          <Heading as="h2" fontSize={{base: 'sm', md: '2xl'}}>
            {title1}
          </Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            {previewDescription}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
