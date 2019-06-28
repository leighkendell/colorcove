import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';

const Section = styled.section`
  margin: ${spacing(6)} 0;

  ${breakpoint('small')} {
    margin: ${spacing(9)} 0;
  }

  ${breakpoint('medium')} {
    margin: ${spacing(12)} 0;
  }

  ${breakpoint('large')} {
    margin: ${spacing(15)} 0;
  }

  ${breakpoint('xLarge')} {
    max-width: 2000px;
    margin: ${spacing(18)} auto;
  }
`;

export default Section;
