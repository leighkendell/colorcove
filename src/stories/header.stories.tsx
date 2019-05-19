import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/header';

storiesOf('Header', module)
  .add('Default', () => <Header title="Tools for filmmakers" />)
  .add('With image', () => (
    <Header
      title="Tools for filmmakers"
      description="We supply assets to help filmmakers achieve organic, film-inspired looks. Our products are specifically designed with a wide selection of camera systems in mind; we don’t discriminate."
      image={{
        aspectRatio: 1.8,
        src: 'https://picsum.photos/1440/800',
        srcSet: '',
        sizes: '',
      }}
    />
  ));
