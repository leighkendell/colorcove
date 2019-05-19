import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';

const CardGroup = styled.ul`
  display: grid;
  grid-gap: ${spacing(4)};
  margin: 0;
  padding: 0;

  ${breakpoint('medium')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default CardGroup;
