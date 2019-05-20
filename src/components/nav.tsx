import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { ReactComponent as Logo } from '../images/colorcove-logo.svg';
import { ReactComponent as Hamburger } from '../images/hamburger.svg';
import { ReactComponent as Cart } from '../images/cart.svg';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  display: grid;
  grid-gap: ${spacing(3)};
  grid-template-areas: 'logo button button';
  grid-template-columns: 1fr repeat(2, 24px);
  padding: ${spacing(3)};
  background-color: ${props => props.theme.colorWhite};

  > * {
    /* Nav toggle button */
    &:nth-child(4) {
      z-index: 2;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  justify-self: left;

  svg {
    display: block;
    width: auto;
    height: ${spacing(3)};

    ${breakpoint('medium')} {
      height: ${spacing(4)};
    }
  }
`;

const IconButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;

  svg {
    display: block;
    width: ${spacing(3)};
    height: ${spacing(3)};
  }
`;

const NavList = styled(animated.ul)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colorBlack};
`;

const Nav: React.FC = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  const navListAnimation = useSpring({
    opacity: navOpen ? 1 : 0,
  });

  const toggleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <StyledNav role="navigation">
      <StyledLink to="/" aria-label="Home">
        <Logo />
      </StyledLink>
      <NavList style={navListAnimation}>{children}</NavList>
      <IconButton aria-label="Open cart" aria-expanded="false">
        <Cart role="img" />
      </IconButton>
      <IconButton
        aria-label="Open navigation"
        aria-expanded={navOpen}
        onClick={toggleNavOpen}
      >
        <Hamburger role="img" />
      </IconButton>
    </StyledNav>
  );
};

export default Nav;
