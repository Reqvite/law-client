'use client';
import {Tab, TabList, TabPanels, Tabs, TabsProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {TabOptionsI} from '@/shared/types/options';

type Props<T> = Omit<TabsProps, 'children'> & {
  options: TabOptionsI[];
  onChange: (value: T) => void;
};

export const AppTabs = <T extends string>({
  options,
  onChange,
  ...otherProps
}: Props<T>): ReactElement => {
  const onChangeTab = (index: number): void => {
    if (onChange) {
      onChange(options[index].value as T);
    }
  };

  return (
    <Tabs isFitted onChange={onChangeTab} {...otherProps}>
      <TabList mb="1em">
        {options?.map((tab) => (
          <Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels />
    </Tabs>
  );
};
