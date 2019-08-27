import styled from 'styled-components';
import { cardContent } from '../components/card';

const TabPanelContent = styled.div`
  ${cardContent};
  text-align: center;

  > *:last-child {
    margin-bottom: 0;
  }
`;

export default TabPanelContent;
