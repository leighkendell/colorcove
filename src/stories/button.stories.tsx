import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';
import { ReactComponent as Icon } from '../images/cart.svg';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('With icon', () => (
    <Button icon>
      <Icon />
      With icon
    </Button>
  ));
