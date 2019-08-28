import React from 'react';
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
  return (
    <Tabs>
      <TabList>
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
