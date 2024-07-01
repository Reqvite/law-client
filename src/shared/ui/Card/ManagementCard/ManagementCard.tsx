import {Stack, StackProps, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {ManagementI} from '@/shared/types/management';
import {Image} from '@/shared/ui/Image';
type Props = ManagementI & StackProps;

export const ManagementCard = ({fullname, image, role, maxW, maxH}: Props): ReactElement => {
  return (
    <Stack maxW={maxW} maxH={maxH} spacing="4">
      <Stack spacing="5">
        <Image
          src={getStrapiMedia(image?.url)}
          objectFit="cover"
          alt={fullname}
          h={150}
          borderRadius="lg"
        />
        <Stack spacing="1">
          <Text fontWeight="bold" fontSize={{base: 'lg', md: 'xl'}}>
            {fullname}
          </Text>
          <Text fontSize={{base: 'md', md: 'lg'}}>{role}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
