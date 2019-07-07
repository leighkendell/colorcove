import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import Text from './text';

const Wrapper = styled.div`
  --space: ${spacing(4)};
  max-width: 1000px;
  margin: 0 auto;

  ${breakpoint('medium')} {
    --space: ${spacing(6)};
  }

  ${breakpoint('large')} {
    --space: ${spacing(8)};
  }

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: var(--space);
  }

  ${Text} + ${Text} {
    margin-top: ${spacing(2)};
  }

  h1, h2, h3 {
    + ${Text} {
      margin-top: calc(var(--space) / 2);
    }
  }
`;

const RichText: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default RichText;
