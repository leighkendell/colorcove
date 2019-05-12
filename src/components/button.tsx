import styled from 'styled-components';
import { darken } from 'polished';
import { spacing, fontSize, breakpoint } from '../utils/style-helpers';

interface Props {}

const Button = styled.button<Props>`
  padding: ${spacing(2)} ${spacing(5)};
  color: ${({ theme }) => theme.colorWhite};
  font-weight: bold;
  ${fontSize(15, 3)};
  background-color: ${({ theme }) => theme.colorBlue};
  border: 0;
  border-radius: ${spacing(8)};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  appearance: none;

  ${breakpoint('small')} {
    padding: ${spacing(3)} ${spacing(7)};
  }

  &:hover {
    background-color: ${({ theme }) => darken(0.2, theme.colorBlue)};
  }
`;

export default Button;
