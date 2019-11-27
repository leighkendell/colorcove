import styled from 'styled-components';
import { spacing } from '../utils/style-helpers';

const PromoBanner = styled.div`
  width: 100%;
  padding: ${spacing(3)};
  text-align: center;
  background-color: ${props => props.theme.colorOrange};

  > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default PromoBanner;
