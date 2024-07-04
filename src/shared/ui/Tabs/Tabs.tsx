'use client';
import {Tab, TabIndicator, TabList, TabPanels, Tabs, TabsProps} from '@chakra-ui/react';
import {ReactElement} from 'react';
import {TabOptionsI} from '@/shared/types/options';

type Props<T> = Omit<TabsProps, 'children' | 'onChange'> & {
  options: TabOptionsI[];
  onChange?: (value: T) => void;
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
    <Tabs isFitted variant="line" onChange={onChangeTab} {...otherProps}>
      <TabList mb="1em" overflowY="hidden" overflowX="auto">
        {options?.map((tab) => (
          <Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="var(--chakra-colors-accentColor)"
        borderRadius="1px"
      />
      <TabPanels />
    </Tabs>
  );
};
