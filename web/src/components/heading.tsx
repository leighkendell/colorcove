import React from 'react';
import styled, { css } from 'styled-components';
import { fontSize, spacing, breakpoint } from '../utils/style-helpers';
import CardGroup from './card-group';

type align = 'left' | 'center' | 'right';

interface Heading {
  type: 'h1' | 'h2' | 'h3';
  align?: align;
}

/** Common heading styles */
const sharedStyle = css<{ align: align }>`
  margin: 0 0 ${spacing(2)};

  ${breakpoint('small')} {
    margin-bottom: ${spacing(3)};
  }

  ${breakpoint('medium')} {
    text-align: ${props => props.align};
  }

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
  ${fontSize(38, 6)};

  ${breakpoint('medium')} {
    ${fontSize(45, 7)}
  }

  ${breakpoint('large')} {
    ${fontSize(54, 9)}
  }
`;

const H2 = styled.h2`
  ${sharedStyle};
  ${fontSize(28, 4.5)};

  ${breakpoint('medium')} {
    ${fontSize(32, 5)}
  }

  ${breakpoint('large')} {
    ${fontSize(36, 6)};
  }
`;

const H3 = styled.h3`
  ${sharedStyle};
  ${fontSize(21, 3.5)};

  ${breakpoint('medium')} {
    ${fontSize(22, 3.5)};
  }

  ${breakpoint('large')} {
    ${fontSize(24, 4)};
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
