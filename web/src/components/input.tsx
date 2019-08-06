import styled, { css } from 'styled-components';
import { spacing } from '../utils/style-helpers';
import { TextBase } from './text';

export const inputStyles = css`
  --border-color: ${props => props.theme.colorDarkGrey};

  ${TextBase};
  width: 100%;
  padding: ${spacing(2)};
  border: 1px solid var(--border-color);
  border-radius: 4px;
  outline: 0;
  transition: box-shadow 0.25s ease-in-out, border 0.25s ease-in-out;

  &:hover {
    --border-color: ${props => props.theme.colorBlack};
  }

  &:focus {
    --border-color: ${props => props.theme.colorBlue};
    box-shadow: inset 0 0 0 1px var(--border-color);
  }
`;

const Input = styled.input`
  ${inputStyles};
`;

export default Input;
