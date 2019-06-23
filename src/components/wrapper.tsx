import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';

const Wrapper = styled.div`
  padding: 0 ${spacing(3)};

  ${breakpoint('small')} {
    padding: 0 ${spacing(6)};
  }

  ${breakpoint('medium')} {
    padding: 0 ${spacing(9)};
  }

  ${breakpoint('large')} {
    padding: 0 ${spacing(12)};
  }

  ${breakpoint('xLarge')} {
    padding: 0 ${spacing(15)};
  }
`;

export default Wrapper;
