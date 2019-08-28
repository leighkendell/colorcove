import styled from 'styled-components';
import { TabList as ReachTabList } from '@reach/tabs';
import Tab from './tab';

const TabList = styled(ReachTabList)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: -1px;
  background-color: ${props => props.theme.colorMidGrey};

  ${Tab} {
    border: 1px solid ${props => props.theme.colorLightGrey};
    border-top: 0;
    border-right: 0;

    &:first-child {
      border-left: 0;
    }
  }
`;

export default TabList;
