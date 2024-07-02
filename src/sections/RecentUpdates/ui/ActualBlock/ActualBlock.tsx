import {GridItem, GridItemProps} from '@chakra-ui/react';
import {Heading} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {ArticleI} from '@/shared/types/article';
import {List} from '@/shared/ui';
import {ActualCard} from '@/shared/ui/Card/ActualCard';
type Props = GridItemProps & {
  data: ArticleI[];
  title?: string;
};

export const ActualBlock = ({data, title, ...otherProps}: Props): ReactElement => {
  return (
    <GridItem {...otherProps} pr={2}>
      <Heading as="h2" mb={2}>
        {title}
      </Heading>
      <List<ArticleI> items={data || []} renderItem={ActualCard} gap={2} />
    </GridItem>
  );
};
