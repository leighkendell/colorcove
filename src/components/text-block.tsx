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
  onButtonClick?: () => void;
}

const horizontalStyle = css`
  ${breakpoint('medium')} {
    display: grid;
    grid-gap: ${spacing(6)};
    grid-template-columns: 1fr 2fr;
    max-width: 100%;
    text-align: left;

    * {
      margin: 0;
    }
  }
`;

const StyledTextBlock = styled.div<{ horizontal?: boolean }>`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;

  ${props => props.horizontal && horizontalStyle};

  * {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${Button} {
    margin-top: ${spacing(1)};
  }
`;

const TextBlock: React.FC<Props> = ({
  title,
  description,
  horizontal,
  buttonText,
  onButtonClick,
}) => {
  return (
    <StyledTextBlock horizontal={horizontal}>
      <Heading type="h2">{title}</Heading>
      <Text>{description}</Text>
      {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
    </StyledTextBlock>
  );
};

export default TextBlock;
