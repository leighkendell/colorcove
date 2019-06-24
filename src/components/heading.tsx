import React from 'react';
import styled, { css } from 'styled-components';
import { fontSize, spacing, breakpoint } from '../utils/style-helpers';
import CardGroup from './card-group';

type align = 'left' | 'center' | 'right';

interface Heading {
  type: 'h1' | 'h2' | 'h3';
  align?: align;
}

const sharedStyle = css<{ align: align }>`
  margin: 0 0 ${spacing(3)};
  text-align: ${props => props.align};

  & + ${CardGroup} {
    ${breakpoint('medium')} {
      margin-top: ${spacing(4)};
    }

    ${breakpoint('large')} {
      margin-top: ${spacing(5)};
    }
  }
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
  margin: 0 0 ${spacing(2)};
  ${fontSize(22, 5)};

  ${breakpoint('medium')} {
    ${fontSize(24, 5)};
  }

  ${breakpoint('large')} {
    ${fontSize(26, 5)};
  }
`;

const Heading: React.FC<Heading> = ({ children, type, align = 'left' }) => {
  switch (type) {
    case 'h1':
      return <H1 align={align}>{children}</H1>;
    case 'h2':
      return <H2 align={align}>{children}</H2>;
    case 'h3':
      return <H3 align={align}>{children}</H3>;
    default:
      return <H1 align={align}>{children}</H1>;
  }
};

Heading.defaultProps = {
  align: 'left',
};

export default Heading;
