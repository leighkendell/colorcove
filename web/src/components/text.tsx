import styled, { css } from 'styled-components';
import { fontSize, spacing, breakpoint } from '../utils/style-helpers';

export const TextBase = css`
  ${fontSize(16, 3)};

  ${breakpoint('medium')} {
    ${fontSize(18, 4)};
  }
`;

const Text = styled.p`
  ${TextBase};
  margin: 0 0 ${spacing(2)};
`;

export default Text;
