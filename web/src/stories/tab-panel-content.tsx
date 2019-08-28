import styled from 'styled-components';
import { cardContent } from '../components/card';

const TabPanelContent = styled.div`
  ${cardContent};
  text-align: center;

  > * {
    max-width: 640px;
    margin-right: auto;
    margin-left: auto;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

export default TabPanelContent;
