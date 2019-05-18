import React from 'react';
import styled, { css } from 'styled-components';
import { fontSize, spacing, breakpoint } from '../utils/style-helpers';

interface Props {
  type: 'h1' | 'h2' | 'h3';
}

const sharedStyle = css`
  margin: 0 0 ${spacing(3)};
`;

const H1 = styled.h1`
  ${sharedStyle};
  ${fontSize(44, 6)};

  ${breakpoint('medium')} {
    ${fontSize(54, 10)}
  }

  ${breakpoint('large')} {
    ${fontSize(64, 10)}
  }
`;

const H2 = styled.h2`
  ${sharedStyle};
  ${fontSize(34, 5)};

  ${breakpoint('medium')} {
    ${fontSize(38, 6)}
  }

  ${breakpoint('large')} {
    ${fontSize(42, 6)};
  }
`;

const H3 = styled.h3`
  ${sharedStyle};
  ${fontSize(22, 5)};

  ${breakpoint('medium')} {
    ${fontSize(24, 5)};
  }

  ${breakpoint('large')} {
    ${fontSize(26, 5)};
  }
`;

const Heading: React.FC<Props> = ({ children, type }) => {
  switch (type) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    default:
      return <H1>{children}</H1>;
  }
};

export default Heading;
