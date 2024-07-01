import {Flex, Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {ImgDataAttributesType} from '@/shared/types/components';
import {ManagementI} from '@/shared/types/management';
import {Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {H1Heading} from '@/shared/ui/Base/H1Heading';
import {ManagementCard} from '@/shared/ui/Card/ManagementCard/ManagementCard';
import {Image} from '@/shared/ui/Image';

type Props = {
  title?: string;
  description: string;
  image: ImgDataAttributesType;
  management?: ManagementI[];
};

export const Management = ({title, description, management, image}: Props): ReactElement => {
  return (
    <Section>
      <H1Heading title={title} />
      <Stack
        spacing={{base: '8', md: '10'}}
        direction={{base: 'column', lg: 'row'}}
        justify="space-between"
        alignItems="center"
      >
        <Flex
          direction={{base: 'column', md: 'row'}}
          gap={{base: '4', md: '5'}}
          alignItems="center"
        >
          <Text fontSize={{base: 'lg', md: 'xl'}} color="fg.muted" flex="1">
            {description}
          </Text>
          <Image
            src={getStrapiMedia(image.url)}
            alt={image.alternativeText || title}
            w={{base: '100%', md: '50%'}}
            h="auto"
            objectFit="cover"
          />
        </Flex>
      </Stack>
      <AppGrid<ManagementI>
        items={management || []}
        renderItem={ManagementCard}
        columns={{base: 1, md: 3, lg: 4}}
        columnGap="8"
        rowGap={{base: '10', lg: '16'}}
      />
    </Section>
  );
};
