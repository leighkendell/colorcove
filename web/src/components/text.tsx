import styled from 'styled-components';
import { fontSize, spacing, breakpoint } from '../utils/style-helpers';

const Text = styled.p`
  margin: 0 0 ${spacing(2)};
  ${fontSize(16, 3)};

  ${breakpoint('medium')} {
    ${fontSize(18, 4)};
  }
`;

export default Text;
