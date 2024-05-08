import {ListItem, ListItemProps} from '@chakra-ui/react';
import {ReactElement, ReactNode} from 'react';

type RenderListItemsProps<T> = ListItemProps & {
  items?: T[];
  renderItem?: any;
} & ({skeleton: ReactElement; length: number} | {skeleton?: never; length?: never});

export function renderListItem<T extends {id: string}>({
  items,
  renderItem: Component,
  length = 5,
  skeleton,
  ...otherProps
}: RenderListItemsProps<T>): ReactNode {
  const array = items ? items : Array.from({length}, (_, index) => ({id: String(index)}));

  return array.map((item, index) => {
    const id = item.id || `${index}-${new Date().getTime()}`;

    return (
      <ListItem justifyContent={'center'} key={id} {...otherProps}>
        {Component ? <Component {...item} /> : skeleton}
      </ListItem>
    );
  });
}
