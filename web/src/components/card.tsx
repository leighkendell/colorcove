import React from 'react';
import styled, { css } from 'styled-components';
import Heading from './heading';
import Text from './text';
import Button from './button';
import Image from './image';
import { Link } from 'gatsby';
import { spacing, breakpoint } from '../utils/style-helpers';
import { FluidObject } from 'gatsby-image';

interface Props {
  title: string;
  description: string;
  link: string;
  image: FluidObject;
}

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;

  ${Text} {
    max-width: 800px;
  }

  ${Button} {
    margin-top: ${spacing(2)};

    ${breakpoint('medium')} {
      margin-top: ${spacing(4)};
    }
  }
`;

export const cardContent = css`
  padding: ${spacing(3)};
  background-color: ${props => props.theme.colorLightGrey};

  ${breakpoint('small')} {
    padding: ${spacing(4)};
  }

  ${breakpoint('medium')} {
    padding: ${spacing(6)};
  }

  ${breakpoint('large')} {
    padding: ${spacing(8)};
  }
`;

const Content = styled.div`
  flex-grow: 1;
  order: 2;
  ${cardContent};
`;

const StyledImage = styled(Image)`
  order: 1;
`;

const Card: React.FC<Props> = ({ title, description, link, image }) => {
  return (
    <StyledCard>
      <Content>
        <Heading type="h3">{title}</Heading>
        <Text>{description}</Text>
        <Button to={link} as={Link}>
          View product
        </Button>
      </Content>
      <StyledImage image={image} alt="" />
    </StyledCard>
  );
};

export default Card;
