import {CardProps, Center, GridItemProps, Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {CardPropsType} from '@/shared/types/components';
import {AppLink, List, Section} from '@/shared/ui';
import {Card} from '@/shared/ui/Card/Card';

type Props = GridItemProps & {
  data: CardPropsType;
  title?: string;
};

export const News = ({data}: Props): ReactElement => {
  const {title, list, button} = data;
  const {variant, label, href} = button;

  const mappedList = list?.data.map((el: any) => ({
    id: el.id,
    description: el?.attributes?.previewDescription,
    title: el?.attributes?.title,
    styleVariant: 'medium',
    href: `articles/${el?.attributes?.slug}`,
    image: {data: el?.attributes?.imgs?.data[0]}
  }));

  return (
    <Section>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      <List<CardPropsType & CardProps>
        row
        renderItem={Card}
        items={mappedList || []}
        gap={3}
        justifyContent="center"
      />
      <Center mt={6}>
        <AppLink size="lg" variant={variant} label={label} href={href || ''} />
      </Center>
    </Section>
  );
};
