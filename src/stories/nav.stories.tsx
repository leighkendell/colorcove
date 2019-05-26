import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from '../components/nav';

const items = [
  {
    title: 'Products',
    link: '/',
  },
  {
    title: 'About',
    link: '/',
  },
  {
    title: 'Contact',
    link: '/',
  },
];

storiesOf('Nav', module).add('Nav bar', () => <Nav items={items} />);
