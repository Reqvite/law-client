import {Heading, HeadingProps, Stack, StackProps, Text, TextProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
type Props = {
  title: string;
  description?: string;
  stackProps?: StackProps;
  headingProps?: HeadingProps;
  textProps?: TextProps;
};

export const TitleWithDescription = ({
  description,
  title,
  headingProps,
  stackProps,
  textProps
}: Props): ReactElement => {
  return (
    <Stack {...stackProps}>
      <Heading as="h2" fontSize={{base: 'sm', md: '3xl'}} {...headingProps}>
        {title}
      </Heading>
      {description && (
        <Text fontSize={{base: 'lg', md: 'xl'}} color="fg.muted" {...textProps}>
          {description}
        </Text>
      )}
    </Stack>
  );
};
