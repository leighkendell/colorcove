import styled from 'styled-components';
import { TabList as ReachTabList } from '@reach/tabs';
import Tab from './tab';

const TabList = styled(ReachTabList)`
  position: relative;
  display: flex;
  overflow: auto;
  background-color: ${props => props.theme.colorMidGrey};
  scroll-snap-type: x mandatory;

  ${Tab} {
    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: auto;
    }
  }
`;

export default TabList;
