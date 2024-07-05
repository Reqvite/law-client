import {SimpleGrid, SimpleGridProps} from '@chakra-ui/react';
import {FunctionComponent, ReactElement} from 'react';
import {EmptyMessageBlock} from '../Base/EmptyMessageBlock';

type Props<T> = SimpleGridProps & {
  items: T[];
  renderItem: FunctionComponent<T>;
};

export const AppGrid = <T extends {id: string}>({
  items,
  renderItem: Component,
  ...otherProps
}: Props<T>): ReactElement => {
  if (!items.length) {
    return <EmptyMessageBlock />;
  }

  return (
    <SimpleGrid
      as="ul"
      columns={{base: 1, xs: 2, md: 3, lg: 4}}
      columnGap="8"
      rowGap={{base: 2, lg: 4}}
      {...otherProps}
    >
      {items.map((item, index) => {
        const id = item.id || `${index}-${new Date().getTime()}`;
        return <Component key={id} {...item} />;
      })}
    </SimpleGrid>
  );
};
