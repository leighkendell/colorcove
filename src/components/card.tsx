import React from 'react';
import styled from 'styled-components';
import Heading from './heading';
import Text from './text';
import Button from './button';
import { Link } from 'gatsby';
import { spacing, breakpoint } from '../utils/style-helpers';

interface Props {
  title: string;
  description: string;
  link: string;
}

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;

  ${Text} {
    max-width: 800px;
  }

  ${Button} {
    margin-top: ${spacing(4)};
  }
`;

const Content = styled.div`
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

const Card: React.FC<Props> = ({ title, description, link }) => {
  return (
    <StyledCard>
      <Content>
        <Heading type="h3">{title}</Heading>
        <Text>{description}</Text>
        <Button to={link} as={Link}>
          View product
        </Button>
      </Content>
    </StyledCard>
  );
};

export default Card;
