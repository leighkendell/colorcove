import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageComparison from '../components/image-comparison';

storiesOf('Image comparison', module).add('Default', () => (
  <>
    <ImageComparison
      beforeImage="https://picsum.photos/id/1018/2000/1000?grayscale"
      afterImage="https://picsum.photos/2000/1000"
      beforeLabel="fsdfds"
      afterLabel="fdsfds"
      width={2000}
      height={1000}
    />
  </>
));
