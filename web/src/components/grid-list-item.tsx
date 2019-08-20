import styled from 'styled-components';
import { TextBase } from './text';
import { spacing, breakpoint } from '../utils/style-helpers';

const GridListItem = styled.li`
  ${TextBase};
  margin: ${spacing(1)} ${spacing(2)} ${spacing(1)} 0;
  padding: ${spacing(0.5)};
  font-weight: bold;
  text-align: center;
  list-style: none;
  background-color: ${props => props.theme.colorLightGrey};
  border-radius: ${spacing(0.5)};

  ${breakpoint('medium')} {
    margin: ${spacing(1)};
    padding: ${spacing(1)};
  }
`;

export default GridListItem;
