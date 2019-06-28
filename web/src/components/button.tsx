import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { spacing, fontSize, breakpoint } from '../utils/style-helpers';

interface Props {
  icon?: boolean;
  to?: string;
}

export const ButtonBaseStyle = css`
  position: relative;
  display: inline-block;
  padding: ${spacing(2)} ${spacing(4)};
  color: ${props => props.theme.colorWhite};
  font-weight: bold;
  ${fontSize(15, 3)};
  text-align: center;
  text-decoration: none;
  background-color: ${props => props.theme.colorBlue};
  border: 0;
  border-radius: ${spacing(8)};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  appearance: none;

  ${breakpoint('large')} {
    padding: ${spacing(3)} ${spacing(7)};
  }

  &:hover {
    background-color: ${props => darken(0.2, props.theme.colorBlue)};
  }
`;

const Button = styled.button<Props>`
  ${ButtonBaseStyle};

  /* When the icon prop is true */
  ${props => props.icon && `padding-left: ${spacing(9)};`}

  ${breakpoint('small')} {
    ${props => props.icon && `padding-left: ${spacing(12)};`}
  }

  svg {
    position: absolute;
    top: 50%;
    left: ${spacing(5)};
    display: inline-block;
    width: ${spacing(3)};
    height: ${spacing(3)};
    line-height: 0;
    transform: translateY(-50%);

    ${breakpoint('small')} {
      left: ${spacing(7)};
    }

    * {
      fill: ${props => props.theme.colorWhite};
    }
  }
`;

export default Button;
