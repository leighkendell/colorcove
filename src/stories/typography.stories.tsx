import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../components/heading';
import Text from '../components/text';

storiesOf('Typography', module).add('Heading and Text', () => (
  <>
    <Heading type="h1">Heading 1</Heading>
    <Heading type="h2">Heading 2</Heading>
    <Heading type="h3">Heading 3</Heading>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem,
      aliquam fugit accusamus fugiat nisi. Ullam nesciunt, natus, nemo corporis
      in tenetur laborum eos temporibus aperiam voluptates corrupti, error ex?
    </Text>
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis recusandae,
      tenetur earum, error accusantium doloribus nisi praesentium optio aliquid
      nostrum consectetur dolorum velit omnis iste inventore, temporibus
      voluptatibus quaerat sapiente.
    </Text>
  </>
));
