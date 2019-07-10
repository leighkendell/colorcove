import React from 'react';
import { storiesOf } from '@storybook/react';
import Message from '../components/message';

storiesOf('Message', module).add('Default', () => (
  <Message isVisible>Item added to cart</Message>
));
