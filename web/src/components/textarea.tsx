import styled from 'styled-components';
import { inputStyles } from './input';

const Textarea = styled.textarea`
  ${inputStyles};
  min-height: 120px;
`;

export default Textarea;
