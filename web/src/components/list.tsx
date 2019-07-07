import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';

const List = styled.ul`
  padding-left: ${spacing(4)};

  ${breakpoint('medium')} {
    padding-left: ${spacing(5)};
  }

  > * + * {
    margin-top: ${spacing(2)};
  }
`;

export default List;
