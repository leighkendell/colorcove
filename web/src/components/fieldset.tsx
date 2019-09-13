import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import Button from './button';

const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;

  > * + * {
    margin-top: ${spacing(3)};

    ${breakpoint('medium')} {
      margin-top: ${spacing(6)};
    }
  }

  ${Button} {
    margin-top: ${spacing(6)};
  }
`;

export default Fieldset;
