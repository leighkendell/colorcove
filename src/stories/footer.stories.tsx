import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../components/footer';

const items = [
  {
    title: 'Support',
    link: '/',
  },
  {
    title: 'Contact',
    link: '/',
  },
];

storiesOf('Footer', module).add('Footer bar', () => <Footer items={items} />);
