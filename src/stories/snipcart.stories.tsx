import React from 'react';
import { storiesOf } from '@storybook/react';
import Snipcart from '../components/snipcart';
import Button from '../components/button';

storiesOf('Snipcart', module).add('Snipcart', () => (
  <>
    <Snipcart />
    <Button
      className="snipcart-add-item"
      data-item-id="2"
      data-item-name="Bacon"
      data-item-price="3.00"
      data-item-weight="20"
      data-item-url="http://myapp.com/products/bacon"
      data-item-description="Some fresh bacon"
    >
      Buy bacon
    </Button>
    <br />
    <br />
    <button className="snipcart-checkout">open nav</button>
  </>
));
