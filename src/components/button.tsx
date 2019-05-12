import styled from 'styled-components';
import { darken } from 'polished';
import { spacing, fontSize, breakpoint } from '../utils/style-helpers';

interface Props {
  icon?: boolean;
}

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

  /* When the icon prop is true */
  ${({ icon }) => icon && `padding-left: ${spacing(9)}`}

  ${breakpoint('small')} {
    padding: ${spacing(3)} ${spacing(7)};

    /* When the icon prop is true */
    ${({ icon }) => icon && `padding-left: ${spacing(12)}`}
  }

  &:hover {
    background-color: ${({ theme }) => darken(0.2, theme.colorBlue)};
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
      fill: ${({ theme }) => theme.colorWhite};
    }
  }
`;

export default Button;
