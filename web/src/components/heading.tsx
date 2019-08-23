import React from 'react';
import styled, { css } from 'styled-components';
import { fontSize, spacing, breakpoint } from '../utils/style-helpers';

type align = 'left' | 'center' | 'right';

interface Heading extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3';
  align?: align;
  preventWidows?: boolean;
  moduleHeading?: boolean;
}

/** Common heading styles */
const sharedStyle = css<{ align?: align; moduleHeading?: boolean }>`
  margin: 0 0 ${spacing(2)};

  ${breakpoint('small')} {
    margin-bottom: ${spacing(3)};
  }

  ${breakpoint('medium')} {
    text-align: ${props => props.align};
  }

  /** Extra margin when used as a module heading */
  ${props =>
    props.moduleHeading &&
    `
    ${breakpoint('medium')} {
      margin-bottom: ${spacing(4)};
    }

    ${breakpoint('large')} {
      margin-bottom: ${spacing(5)};
    }
  `}
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

const Heading: React.FC<Heading> = ({
  children,
  type,
  align = 'left',
  preventWidows,
  ...props
}) => {
  let text = children;

  // Prevent "widows" by replacing the last space in a heading with a unicode space character
  if (preventWidows) {
    text =
      typeof children === 'string' &&
      children.replace(/\s(?=[^\s]*$)/g, '\u00a0');
  }

  switch (type) {
    case 'h1':
      return (
        <H1 align={align} {...props}>
          {text}
        </H1>
      );
    case 'h2':
      return (
        <H2 align={align} {...props}>
          {text}
        </H2>
      );
    case 'h3':
      return (
        <H3 align={align} {...props}>
          {text}
        </H3>
      );
    default:
      return (
        <H1 align={align} {...props}>
          {text}
        </H1>
      );
  }
};

Heading.defaultProps = {
  align: 'left',
};

export default Heading;
