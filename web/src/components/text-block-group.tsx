import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';

const TextBlockGroup = styled.div`
  display: grid;
  gap: ${spacing(3)};
  justify-content: center;

  ${breakpoint('medium')} {
    grid-template-columns: repeat(2, minmax(auto, 640px));
    gap: ${spacing(4)} ${spacing(9)};
  }

  ${breakpoint('large')} {
    column-gap: ${spacing(12)};
  }

  > * {
    ${breakpoint('medium')} {
      text-align: left;
    }
  }
`;

export default TextBlockGroup;
