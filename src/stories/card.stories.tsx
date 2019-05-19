import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/card';
import CardGroup from '../components/card-group';

const exampleCard = (
  <Card
    title="LUT pack 01"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quod ducimus voluptatem amet. Eos, eligendi placeat! Corrupti ratione, numquam cum voluptas rem asperiores dicta aperiam perferendis distinctio quaerat laboriosam amet."
    link="/"
    image={{
      aspectRatio: 1.25,
      src: 'https://picsum.photos/624/464',
      srcSet: '',
      sizes: '',
    }}
  />
);

storiesOf('Card', module)
  .add('Default', () => <div style={{ maxWidth: '800px' }}>{exampleCard}</div>)
  .add('Group', () => (
    <CardGroup>
      {exampleCard}
      {exampleCard}
      {exampleCard}
      {exampleCard}
    </CardGroup>
  ));
