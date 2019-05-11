import styled from 'styled-components';
import { rem, darken } from 'polished';
import { spacing } from '../utils/style-helpers';

interface Props {}

const Button = styled.button<Props>`
  padding: ${spacing(3)} ${spacing(7)};
  color: ${({ theme }) => theme.colorWhite};
  font-weight: bold;
  font-size: ${rem(15)};
  line-height: 1.6;
  background-color: ${({ theme }) => theme.colorBlue};
  border: 0;
  border-radius: ${spacing(8)};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  appearance: none;

  &:hover {
    background-color: ${({ theme }) => darken(0.2, theme.colorBlue)};
  }
`;

export default Button;
