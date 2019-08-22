import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';

const CardGroup = styled.ul`
  display: grid;
  grid-gap: ${spacing(4)};
  max-width: 1360px;
  margin: 0 auto;
  padding: 0;

  ${breakpoint('medium')} {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`;

export default CardGroup;
