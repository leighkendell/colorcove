import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../components/heading';
import Text from '../components/text';
import TextBlock from '../components/text-block';

storiesOf('Typography', module)
  .add('Heading and Text', () => (
    <>
      <Heading type="h1">Heading 1</Heading>
      <Heading type="h2">Heading 2</Heading>
      <Heading type="h3">Heading 3</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem,
        aliquam fugit accusamus fugiat nisi. Ullam nesciunt, natus, nemo
        corporis in tenetur laborum eos temporibus aperiam voluptates corrupti,
        error ex?
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
        recusandae, tenetur earum, error accusantium doloribus nisi praesentium
        optio aliquid nostrum consectetur dolorum velit omnis iste inventore,
        temporibus voluptatibus quaerat sapiente.
      </Text>
    </>
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
  ));
