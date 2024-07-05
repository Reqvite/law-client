import {Accordion, AccordionItem, AccordionProps} from '@chakra-ui/react';
import {BlocksContent} from '@strapi/blocks-react-renderer';
import {FunctionComponent, ReactElement} from 'react';
import {EmptyMessageBlock} from '../Base/EmptyMessageBlock';
import {AppAccordionItem} from './ui/AccordionItem';

type Props<T> = AccordionProps & {
  items?: T[];
  renderItem?: FunctionComponent<T>;
};

export const AppAccordion = <
  T extends {id: string; title: string; description: string | BlocksContent}
>({
  items,
  renderItem: Component,
  ...otherProps
}: Props<T>): ReactElement => {
  if (!items?.length) {
    return <EmptyMessageBlock />;
  }

  return (
    <Accordion border="1px solid black" allowMultiple {...otherProps}>
      {items.map((item) => (
        <AccordionItem key={item.id}>
          {Component ? <Component {...item} /> : <AppAccordionItem {...item} />}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
