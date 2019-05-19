import React from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { ReactComponent as Logo } from '../images/colorcove-logo.svg';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  padding: ${spacing(3)};
  background-color: ${props => props.theme.colorWhite};
`;

const StyledLink = styled(Link)`
  display: inline-block;

  svg {
    display: block;
    width: auto;
    height: ${spacing(3)};

    ${breakpoint('medium')} {
      height: ${spacing(4)};
    }
  }
`;

const Nav: React.FC = () => (
  <StyledNav role="navigation">
    <StyledLink to="/" aria-label="Home">
      <Logo />
    </StyledLink>
  </StyledNav>
);

export default Nav;
