import styled from 'styled-components';
import { Tab as ReachTab } from '@reach/tabs';
import { fontSize, spacing } from '../utils/style-helpers';

const Tab = styled(ReachTab)`
  position: relative;
  display: block;
  flex-shrink: 0;
  margin: 0;
  padding: ${spacing(2)} ${spacing(3)};
  font-weight: bold;
  ${fontSize(15, 3)};
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: 0.25s ease;
  scroll-snap-align: center;

  &[data-selected] {
    color: ${props => props.theme.colorWhite};
    background-color: ${props => props.theme.colorBlue};
  }
`;

export default Tab;
