import {Heading, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {getStrapiMedia} from '@/shared/api/api-helpers';
import {ButtonType} from '@/shared/types/components';
import {Managemnet} from '@/shared/types/managment';
import {AppLink, Section} from '@/shared/ui';
import {Image} from '@/shared/ui/Image';

type Props = {
  data: {
    title?: string;
    description: string;
    buttons: ButtonType[];
    management?: {
      data: {
        id: string;
        attributes: Managemnet;
      }[];
    };
  };
};

export const Management = ({
  data: {title, description, management, buttons}
}: Props): ReactElement => {
  return (
    <Section>
      <Stack spacing={{base: '12', md: '16'}}>
        <Stack
          spacing={{base: '8', md: '10'}}
          direction={{base: 'column', lg: 'row'}}
          justify="space-between"
          alignItems="center"
        >
          <Stack spacing="3" maxW="3xl">
            <Heading as="h1" fontSize={{base: 'sm', md: '3xl'}}>
              {title}
            </Heading>
            <Stack spacing={{base: '4', md: '5'}}>
              <Text fontSize={{base: 'lg', md: 'xl'}} color="fg.muted">
                {description}
              </Text>
            </Stack>
          </Stack>
          <Stack flex={{base: 1, md: 0}} justify="flex-end" direction="row" spacing={6}>
            {buttons.map(({href, label, variant, id}) => (
              <AppLink size="lg" key={id} variant={variant} label={label} href={href || ''} />
            ))}
          </Stack>
        </Stack>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} columnGap="8" rowGap={{base: '10', lg: '16'}}>
          {management?.data?.map((member) => (
            <Stack key={member.id} spacing="4">
              <Stack spacing="5">
                <Image
                  src={getStrapiMedia(member?.attributes?.image?.data?.attributes.url)}
                  alt={member?.attributes.fullname}
                  borderRadius="lg"
                />
                <Stack spacing="1">
                  <Text fontWeight="bold" fontSize={{base: 'lg', md: 'xl'}}>
                    {member?.attributes.fullname}
                  </Text>
                  <Text fontSize={{base: 'md', md: 'lg'}}>{member.attributes.role}</Text>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Section>
  );
};
