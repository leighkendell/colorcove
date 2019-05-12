import React from 'react';
import { storiesOf } from '@storybook/react';
import Video from '../components/video';

storiesOf('Video', module).add('Default', () => (
  <Video
    width={640}
    height={268}
    url="https://vimeo.com/287359990"
    image="https://images.unsplash.com/photo-1557626204-59dd03fd2d31?ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
  />
));
