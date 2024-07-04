import {Flex, Heading, HeadingProps, Stack, StackProps, Text, TextProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {ButtonType} from '@/shared/types/components';
import {AppLink} from '../../AppLink/AppLink';
type Props = {
  title: string;
  description?: string;
  stackProps?: StackProps;
  headingProps?: HeadingProps;
  textProps?: TextProps;
  button?: ButtonType;
};

export const TitleWithDescription = ({
  description,
  title,
  headingProps,
  stackProps,
  textProps,
  button
}: Props): ReactElement => {
  return (
    <Stack {...stackProps} mb={1}>
      {button ? (
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h2" fontSize={{base: 'xl', md: '3xl'}} {...headingProps}>
            {title}
          </Heading>
          <AppLink
            size="lg"
            variant={button.variant}
            label={button.label}
            href={button.href || ''}
          />
        </Flex>
      ) : (
        <Heading as="h2" fontSize={{base: 'xl', md: '3xl'}} {...headingProps}>
          {title}
        </Heading>
      )}

      {description && (
        <Text fontSize={{base: 'lg', md: 'xl'}} color="fg.muted" {...textProps}>
          {description}
        </Text>
      )}
    </Stack>
  );
};
