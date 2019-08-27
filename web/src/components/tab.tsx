import styled from 'styled-components';
import { Tab as ReachTab } from '@reach/tabs';
import { fontSize, spacing, breakpoint } from '../utils/style-helpers';

const Tab = styled(ReachTab)`
  position: relative;
  width: 100%;
  margin: 0;
  padding: ${spacing(2)} ${spacing(3)};
  font-weight: bold;
  ${fontSize(15, 3)};
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: 0.25s ease;

  ${breakpoint('medium')} {
    width: auto;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: ${spacing(0.5)};
    height: 100%;
    background-color: transparent;
    transition: 0.25s ease;
    content: '';

    ${breakpoint('medium')} {
      display: none;
    }
  }

  &[data-selected] {
    background: ${props => props.theme.colorLightGrey};

    &::before {
      background-color: ${props => props.theme.colorBlue};
    }
  }
`;

export default Tab;
