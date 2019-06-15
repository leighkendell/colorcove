import React from 'react';
import { storiesOf } from '@storybook/react';
import Cart from '../components/cart';
import CartItem from '../components/cart-item';

const image = {
  aspectRatio: 1,
  src: 'https://picsum.photos/96/96',
  srcSet: '',
  sizes: '',
};

storiesOf('Cart', module).add('Default', () => (
  <Cart subtotal="$40" isOpen={true}>
    <CartItem id="asdf" image={image} name="Woop" price="$20"></CartItem>
    <CartItem id="a1df" image={image} name="Woop" price="$20"></CartItem>
  </Cart>
));
