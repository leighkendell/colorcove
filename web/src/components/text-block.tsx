import React from 'react';
import styled, { css } from 'styled-components';
import Heading from './heading';
import Text from './text';
import Button from './button';
import { spacing, breakpoint } from '../utils/style-helpers';

interface Props {
  title: string;
  description: string;
  horizontal?: boolean;
  buttonText?: string;
  headingType?: Heading['type'];
  onButtonClick?: () => void;
}

const horizontalStyle = css`
  ${breakpoint('medium')} {
    display: grid;
    grid-gap: ${spacing(6)};
    grid-template-columns: 1fr 2fr;
    max-width: 1000px;
    text-align: left;

    * {
      margin: 0;
    }
  }
`;

const StyledTextBlock = styled.div<{ horizontal?: boolean }>`
  max-width: 640px;
  margin: 0 auto;

  ${breakpoint('medium')} {
    text-align: center;

    * {
      text-align: inherit;
    }
  }

  *:last-child {
    margin-bottom: 0;
  }

  ${props => props.horizontal && horizontalStyle};

  ${Button} {
    margin-top: ${spacing(1)};
  }
`;

const TextBlock: React.FC<Props> = ({
  title,
  description,
  horizontal,
  buttonText,
  headingType,
  onButtonClick,
  children,
}) => {
  return (
    <StyledTextBlock horizontal={horizontal}>
      <Heading type={headingType || 'h2'}>{title}</Heading>
      {description && <Text>{description}</Text>}
      {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
      {children}
    </StyledTextBlock>
  );
};

export default TextBlock;
