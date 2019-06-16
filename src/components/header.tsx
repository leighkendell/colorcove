import React from 'react';
import { FluidObject } from 'gatsby-image';
import styled, { css } from 'styled-components';
import Heading from './heading';
import { spacing, breakpoint } from '../utils/style-helpers';
import Image from './image';
import Text from './text';
import Button from './button';

interface Props {
  title: string;
  description?: string;
  image?: FluidObject;
  backgroundColor?: string;
}

const headerGrid = css`
  display: grid;
  grid-template-rows: repeat(2, auto);

  ${breakpoint('medium')} {
    grid-template-rows: 1fr var(--padding);
  }
`;

const StyledHeader = styled.header<{ hasImage: boolean }>`
  --padding: ${spacing(3)};

  ${breakpoint('small')} {
    --padding: ${spacing(6)};
  }

  ${breakpoint('medium')} {
    --padding: ${spacing(9)};
    ${({ hasImage }) => hasImage && `min-height: calc(100vh - ${spacing(12)})`};
  }

  ${breakpoint('large')} {
    --padding: ${spacing(12)};
  }

  ${({ hasImage }) => !hasImage && 'padding: var(--padding)'};
  ${({ hasImage }) => hasImage && headerGrid};
  background-color: ${props => props.theme.colorBlack};

  * {
    color: ${props => props.theme.colorWhite};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledImage = styled(Image)`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;

  ${breakpoint('medium')} {
    grid-row: 1 / span 2;
    max-height: calc(100vh - ${spacing(12)});
  }
`;

const Content = styled.div`
  z-index: 1;
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  align-self: end;
  max-width: 640px;
  padding: var(--padding);
  background: ${props => props.theme.colorBlack};

  ${breakpoint('medium')} {
    grid-row: 1 / span 1;
  }

  ${Button} {
    margin-top: ${spacing(2)};

    ${breakpoint('medium')} {
      margin-top: ${spacing(3)};
    }
  }
`;

const Header: React.FC<Props> = ({
  title,
  description,
  image,
  backgroundColor,
  children,
}) => {
  return (
    <StyledHeader role="banner" hasImage={image ? true : false}>
      {description && image ? (
        <>
          <Content>
            <Heading type="h1">{title}</Heading>
            <Text>{description}</Text>
            {children}
          </Content>
          <StyledImage image={image} backgroundColor={backgroundColor} alt="" />
        </>
      ) : (
        <Heading type="h1">{title}</Heading>
      )}
    </StyledHeader>
  );
};

export default Header;
