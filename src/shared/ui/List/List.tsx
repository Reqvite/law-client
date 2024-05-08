import {List as ChakraList, ListProps} from '@chakra-ui/react';
import {FunctionComponent, ReactElement} from 'react';
import {renderListItem} from './model/renderListItem.service';

type Props<T> = ListProps & {
  items: T[];
  renderItem: FunctionComponent<T>;
  row?: boolean;
  isLoading?: boolean;
} & ({skeleton: ReactElement; skeletonLength: number} | {skeleton?: never; skeletonLength?: never});

export const List = <T extends {id: string}>({
  items,
  renderItem,
  row,
  isLoading,
  skeleton,
  skeletonLength = 5,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <ChakraList
      display="flex"
      flexWrap="wrap"
      flexDirection={row ? 'row' : 'column'}
      {...otherProps}
    >
      {!isLoading && renderListItem<T>({items, renderItem})}
      {isLoading && skeleton && <>{renderListItem<T>({skeleton, length: skeletonLength})}</>}
    </ChakraList>
  );
};
