import styled from 'styled-components';
import { fontSize, breakpoint } from '../utils/style-helpers';

const ListItem = styled.li`
  ${fontSize(16, 3)};

  ${breakpoint('medium')} {
    ${fontSize(18, 4)};
  }
`;

export default ListItem;
