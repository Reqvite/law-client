import {Stack, StackProps, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {ManagementI} from '@/shared/types/management';
import {Image} from '@/shared/ui/Image';
import {AppImageProps} from '../../Image/Image';

type Props = ManagementI &
  StackProps & {
    imageProps?: {w?: AppImageProps['w']; h?: AppImageProps['h']};
  };

export const ManagementCard = ({
  fullname,
  image,
  role,
  maxW = '100%',
  maxH,
  imageProps
}: Props): ReactElement => {
  return (
    <Stack maxW={maxW} maxH={maxH} spacing="4">
      <Stack spacing="5">
        <Image
          src={getStrapiMedia(image?.url)}
          objectFit="cover"
          alt={image.alternativeText || fullname}
          w="full"
          h={{base: 400, md: 300}}
          borderRadius="lg"
          {...imageProps}
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
