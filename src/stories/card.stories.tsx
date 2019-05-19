import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/card';

storiesOf('Card', module).add('Default', () => (
  <Card
    title="LUT pack 01"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod ducimus voluptatem amet. Eos, eligendi placeat! Corrupti ratione, numquam cum voluptas rem asperiores dicta aperiam perferendis distinctio quaerat laboriosam amet."
    link="/"
  />
));
