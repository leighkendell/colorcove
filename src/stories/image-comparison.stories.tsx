import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageComparison from '../components/image-comparison';

storiesOf('Image comparison', module).add('Default', () => (
  <>
    <ImageComparison
      beforeImage="https://www.kojicolor.com/wp-content/uploads/2015/06/koji_matt_before.jpg"
      afterImage="https://www.kojicolor.com/wp-content/uploads/2015/06/koji_matt_after_2393.jpg"
      beforeLabel="As shot"
      afterLabel="Film grain pro"
      width={1920}
      height={640}
    />
  </>
));
