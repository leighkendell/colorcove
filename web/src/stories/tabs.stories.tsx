import React from 'react';
import { storiesOf } from '@storybook/react';
import Tab from '../components/tab';
import TabList from '../components/tab-list';
import { Tabs, TabPanels } from '@reach/tabs';
import TabPanelContent from './tab-panel-content';
import Heading from '../components/heading';
import Text from '../components/text';
import ImageComparison from '../components/image-comparison';
import TabPanel from '../components/tab-panel';

storiesOf('Tabs', module)
  .add('Tab', () => <Tab>Fuji Superia XTRA 400</Tab>)
  .add('Tab List', () => (
    <Tabs>
      <TabList>
        <Tab>Fuji Superia XTRA 400</Tab>
        <Tab>Kodak Pro Image 100</Tab>
        <Tab>Kodak Portra 400</Tab>
      </TabList>
    </Tabs>
  ))
  .add('Full Example', () => (
    <Tabs>
      <TabList>
        <Tab>Fuji Superia XTRA 400</Tab>
        <Tab>Kodak Pro Image 100</Tab>
        <Tab>Kodak Portra 400</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TabPanelContent>
            <Heading type="h3" align="center">
              Fuji Superia XTRA 400
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </TabPanelContent>
          <ImageComparison
            beforeImage={{
              aspectRatio: 3,
              src:
                'https://www.kojicolor.com/wp-content/uploads/2015/06/koji_matt_before.jpg',
              srcSet: '',
              sizes: '',
            }}
            afterImage={{
              aspectRatio: 3,
              src:
                'https://www.kojicolor.com/wp-content/uploads/2015/06/koji_matt_after_2393.jpg',
              srcSet: '',
              sizes: '',
            }}
            beforeLabel="As shot"
            afterLabel="Film grain pro"
          />
        </TabPanel>
        <TabPanel>Kodak Pro Image 100</TabPanel>
        <TabPanel>Kodak Portra 400</TabPanel>
      </TabPanels>
    </Tabs>
  ));
