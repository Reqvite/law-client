import {Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {ManagementI} from '@/shared/types/management';
import {Image} from '@/shared/ui/Image';
type Props = ManagementI;

export const ManagementCard = ({fullname, image, id, role}: Props): ReactElement => {
  return (
    <Stack key={id} spacing="4">
      <Stack spacing="5">
        <Image src={getStrapiMedia(image?.url)} alt={fullname} borderRadius="lg" />
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
