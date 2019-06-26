import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageComparison from '../components/image-comparison';

storiesOf('Image comparison', module).add('Default', () => (
  <>
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
  </>
));
