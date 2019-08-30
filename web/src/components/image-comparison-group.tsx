import React, { useRef } from 'react';
import { SanityImageComparison } from '../types/graphql-types';
import { Tabs, TabPanels } from '@reach/tabs';
import TabList from './tab-list';
import Tab from './tab';
import TabPanel from './tab-panel';
import TabPanelContent from '../stories/tab-panel-content';
import Heading from './heading';
import Text from './text';
import ImageComparison from './image-comparison';
import { getNestedObject } from '../utils/helpers';

interface Props {
  items: SanityImageComparison[];
}

const ImageComparisonGroup: React.FC<Props> = ({ items }) => {
  const tabsListEl = useRef<HTMLDivElement>(null);

  // Scroll the active tab into view
  const handleChange = (index: number) => {
    if (tabsListEl.current) {
      const tabEl = tabsListEl.current.children[index] as HTMLButtonElement;
      const { width } = tabEl.getBoundingClientRect();
      const left = tabEl.offsetLeft - width / 2;

      tabsListEl.current.scrollTo({
        left,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Tabs onChange={handleChange}>
      <TabList ref={tabsListEl}>
        {items.map((item, index) => (
          <Tab key={item._key || index}>{item.name}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {items.map((item, index) => (
          <TabPanel key={item._key || index}>
            <TabPanelContent>
              {item.name && (
                <Heading type="h3" align="center">
                  {item.name}
                </Heading>
              )}
              {item.description && <Text>{item.description}</Text>}
            </TabPanelContent>
            <ImageComparison
              beforeImage={getNestedObject(item, 'beforeImage.asset.fluid')}
              afterImage={getNestedObject(item, 'afterImage.asset.fluid')}
              beforeLabel="As shot"
              afterLabel={item.name || ''}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ImageComparisonGroup;
