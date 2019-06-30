import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import Text from './text';
import { ReactComponent as Remove } from '../images/close.svg';

interface Props {
  id: string | number;
  name: string;
  price: string;
  image?: string;
  onRemove?: (id: string | number) => void;
}

const StyledCartItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr ${spacing(3)};
  gap: ${spacing(3)};
  align-items: center;

  ${Text} {
    margin: 0;

    strong {
      display: block;
    }
  }
`;

const Image = styled.img`
  width: ${spacing(6)};
  height: ${spacing(6)};
  object-fit: cover;

  ${breakpoint('small')} {
    width: ${spacing(9)};
    height: ${spacing(9)};
  }

  ${breakpoint('medium')} {
    width: ${spacing(12)};
    height: ${spacing(12)};
  }
`;

const RemoveButton = styled.button`
  position: relative;
  display: block;
  width: ${spacing(3)};
  height: ${spacing(3)};
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colorBlue};
  border: 0;
  border-radius: 100%;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${spacing(1.5)};
    height: ${spacing(1.5)};
    transform: translate(-50%, -50%);
    fill: ${props => props.theme.colorWhite};
  }
`;

const CartItem: React.FC<Props> = ({ id, name, price, image, onRemove }) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <StyledCartItem>
      <Image src={image} alt={name} />
      <Text>
        <strong>{name}</strong>
        {price}
      </Text>
      <RemoveButton onClick={handleRemove}>
        <Remove />
      </RemoveButton>
    </StyledCartItem>
  );
};

export default CartItem;
