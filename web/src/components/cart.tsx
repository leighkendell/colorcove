import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { animated, useSpring } from 'react-spring';
import Heading from './heading';
import { ReactComponent as Close } from '../images/close.svg';
import Text from './text';
import Button from './button';
import { rgba } from 'polished';

interface Props {
  isOpen?: boolean;
  subtotal?: string;
  onCheckout?: () => void;
  onClose?: () => void;
}

/** The main containing element */
const StyledCart = styled(animated.aside)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  max-width: 600px;
  height: 100%;
  padding: ${spacing(3)};
  overflow: auto;
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

/** The overlay visible when the cart is open */
const Overlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: ${props => rgba(props.theme.colorBlack, 0.75)};
  backdrop-filter: blur(8px);
`;

const Cart: React.FC<Props> = ({
  isOpen,
  children,
  subtotal,
  onClose,
  onCheckout,
}) => {
  const { opacity, transform } = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: `translateX(${isOpen ? 0 : 100}%)`,
  });

  const overlayVisibility: CSSProperties = {
    visibility: opacity.interpolate(opacity =>
      opacity === 0 ? 'hidden' : 'visible'
    ),
  };

  return (
    <>
      <Overlay onClick={onClose} style={{ opacity, ...overlayVisibility }} />
      <StyledCart style={{ transform }}>
        <Header>
          <CloseButton onClick={onClose}>
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
            <Button onClick={onCheckout}>Checkout</Button>
          </>
        )}
      </StyledCart>
    </>
  );
};

Cart.defaultProps = {
  isOpen: false,
};

export default Cart;
