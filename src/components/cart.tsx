import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { animated } from 'react-spring';
import Heading from './heading';
import { ReactComponent as Close } from '../images/close.svg';
import Text from './text';
import Button from './button';

interface Props {
  isOpen?: boolean;
  subtotal?: string;
}

const StyledCart = styled(animated.aside)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 600px;
  height: 100%;
  padding: ${spacing(3)};
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorBlack};

  ${breakpoint('medium')} {
    padding: ${spacing(4)};
  }

  ${Button} {
    ${breakpoint('medium')} {
      margin-top: ${spacing(2)};
    }
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: ${spacing(3)} 1fr ${spacing(3)};
  align-items: center;
  justify-items: center;

  * {
    margin: 0;
  }
`;

const CloseButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  svg {
    display: block;
    width: ${spacing(3)};
    height: ${spacing(3)};
    fill: ${props => props.theme.colorWhite};
  }
`;

const CartList = styled.ul`
  display: grid;
  gap: ${spacing(4)};
  margin: ${spacing(4)} 0;
  padding: 0;

  ${breakpoint('medium')} {
    gap: ${spacing(6)};
    margin: ${spacing(6)} 0;
  }

  ${breakpoint('large')} {
    gap: ${spacing(8)};
    margin: ${spacing(8)} 0;
  }
`;

const Cart: React.FC<Props> = ({ isOpen, children, subtotal }) => {
  console.log(isOpen);

  return (
    <StyledCart>
      <Header>
        <CloseButton>
          <Close role="img" />
        </CloseButton>
        <Heading type="h3">Your cart</Heading>
      </Header>
      <CartList>{children}</CartList>
      {children && subtotal && (
        <>
          <Text>
            <strong>Subtotal: </strong> {subtotal}
          </Text>
          <Button>Checkout</Button>
        </>
      )}
    </StyledCart>
  );
};

Cart.defaultProps = {
  isOpen: false,
};

export default Cart;
