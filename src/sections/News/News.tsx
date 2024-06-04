import {CardProps, Flex, GridItemProps, Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CardPropsType} from '@/shared/types/components';
import {AppLink, List, Section} from '@/shared/ui';
import {Card} from '@/shared/ui/Card/Card';

type Props = GridItemProps & {
  data: CardPropsType;
  title?: string;
};

export const News = ({data}: Props): ReactElement => {
  const {title, list, loadMoreButton} = data;
  const {variant, label, href} = loadMoreButton;

  return (
    <Section>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      <List<CardPropsType & CardProps> row renderItem={Card} items={list} />
      <Flex justifyContent="center" mt={5}>
        <AppLink size="lg" variant={variant} label={label} href={href || ''} />
      </Flex>
    </Section>
  );
};
