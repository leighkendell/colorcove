import styled from 'styled-components';
import { TabList as ReachTabList } from '@reach/tabs';

const TabList = styled(ReachTabList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  background-color: ${props => props.theme.colorMidGrey};
`;

export default TabList;
