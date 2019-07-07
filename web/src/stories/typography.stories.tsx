import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../components/heading';
import Text from '../components/text';
import TextBlock from '../components/text-block';
import TextBlockGroup from '../components/text-block-group';
import RichText from '../components/rich-text';
import List from '../components/list';
import ListItem from '../components/list-item';
import TextLink from '../components/text-link';

storiesOf('Typography', module)
  .add('Rich text', () => (
    <RichText>
      <Heading type="h1">Lorem ipsum dolor</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem,
        aliquam fugit accusamus fugiat nisi. Ullam nesciunt, natus, nemo
        corporis in tenetur laborum eos temporibus aperiam voluptates corrupti,
        error ex?
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem,
        aliquam fugit accusamus fugiat nisi. Ullam nesciunt, natus, nemo
        corporis in tenetur laborum eos temporibus aperiam voluptates corrupti,
        error ex?
      </Text>
      <Heading type="h2">sit amet consectetur</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem,
        aliquam fugit accusamus <TextLink to="/woop">fugiat nisi</TextLink>.
        Ullam nesciunt, natus, nemo corporis in{' '}
        <TextLink to="http://unsplash.com">tenetur</TextLink> laborum eos
        temporibus aperiam voluptates corrupti, error ex?
      </Text>
      <List>
        <ListItem>fugit accusamus fugiat</ListItem>
        <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
        <ListItem>tenetur laborum eos temporibus</ListItem>
        <ListItem>Ullam nesciunt, natus, nemo</ListItem>
      </List>
      <Heading type="h3">Lorem ipsum</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
        recusandae, tenetur earum, error accusantium doloribus nisi praesentium
        optio aliquid nostrum consectetur dolorum velit omnis iste inventore,
        temporibus voluptatibus quaerat sapiente.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem,
        aliquam fugit accusamus fugiat nisi. Ullam nesciunt, natus, nemo
        corporis in tenetur laborum eos temporibus aperiam voluptates corrupti,
        error ex?
      </Text>
    </RichText>
  ))
  .add('Text block', () => (
    <TextBlock
      title="Buy now"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente provident quisquam nulla vero iure, ducimus."
    />
  ))
  .add('Text block with button', () => (
    <TextBlock
      title="Buy now"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente provident quisquam nulla vero iure, ducimus."
      buttonText="Buy for $49.95"
    />
  ))
  .add('Text block horizontal', () => (
    <TextBlock
      title="Focus on telling stories"
      description="We believe a camera is a tool to tell stories. It’s easy to get caught up in tech specs, dynamic range, and resolutions. Stick with the equipment you have, hone your craft, make beautiful pictures, and tell brilliant stories."
      horizontal
    />
  ))
  .add('Text block group', () => (
    <TextBlockGroup>
      <TextBlock
        headingType="h3"
        title="Buy now"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente provident quisquam nulla vero iure, ducimus."
      />
      <TextBlock
        headingType="h3"
        title="Buy now"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente provident quisquam nulla vero iure, ducimus."
      />
    </TextBlockGroup>
  ));
