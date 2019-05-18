import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../components/heading';

storiesOf('Typography', module).add('Heading', () => (
  <>
    <Heading type="h1">Heading 1</Heading>
    <Heading type="h2">Heading 2</Heading>
    <Heading type="h3">Heading 3</Heading>
  </>
));
