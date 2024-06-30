import {Stack, Text} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {H1Heading} from '@/sections/Base/H1Heading';
import {ButtonType} from '@/shared/types/components';
import {ManagementI} from '@/shared/types/management';
import {AppLink, Section} from '@/shared/ui';
import {AppGrid} from '@/shared/ui/AppGrid';
import {ManagementCard} from './ManagementCard/ManagementCard';

type Props = {
  title?: string;
  description: string;
  buttons: ButtonType[];
  management?: ManagementI[];
};

export const Management = ({title, description, management, buttons}: Props): ReactElement => {
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
            <H1Heading title={title} />
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
        <AppGrid<ManagementI>
          items={management || []}
          renderItem={ManagementCard}
          columns={{base: 1, md: 3, lg: 4}}
          columnGap="8"
          rowGap={{base: '10', lg: '16'}}
        />
      </Stack>
    </Section>
  );
};
