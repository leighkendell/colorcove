import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ButtonBaseStyle } from './button';

const CartWrapper = styled.div`
  .snipcart__cart__button {
    ${ButtonBaseStyle}
  }
`;

const Snipcart: React.FC = () => {
  return (
    <>
      <Helmet>
        <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.1/default/snipcart.js" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.0-beta.1/default/snipcart.css"
        />
      </Helmet>
      <CartWrapper>
        <div hidden id="snipcart" data-api-key={process.env.SNIPCART_KEY} />
      </CartWrapper>
    </>
  );
};

export default Snipcart;
