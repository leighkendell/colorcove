import styled from 'styled-components';
import { breakpoint, spacing } from '../utils/style-helpers';

const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -${spacing(1)} auto;
  padding: 0;

  ${breakpoint('medium')} {
    justify-content: center;
    max-width: 1000px;
  }
`;

export default GridList;
