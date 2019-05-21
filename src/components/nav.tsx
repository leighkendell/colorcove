import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { ReactComponent as Logo } from '../images/colorcove-logo.svg';
import { ReactComponent as Hamburger } from '../images/hamburger.svg';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as Cart } from '../images/cart.svg';
import { Link } from 'gatsby';
import { useSpring, animated, useTransition } from 'react-spring';
import { colorcoveTheme } from '../utils/theme';

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
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

const IconWrapper = styled(animated.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: ${spacing(3)};
  height: ${spacing(3)};

  svg {
    position: absolute;
    top: inherit;
    left: inherit;
    width: inherit;
    height: inherit;
    fill: currentColor;
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
  const toggleButtonEl = useRef<HTMLButtonElement>(null);

  const navListAnimation = useSpring({
    from: { opacity: 0, visibility: 'hidden' },
    to: [
      { visibility: navOpen ? 'visible' : '' },
      { opacity: navOpen ? 1 : 0 },
      { visibility: navOpen ? '' : 'hidden' },
    ],
  });

  const toggleAnimation = useTransition(navOpen, null, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: {
      opacity: 1,
      color: navOpen ? colorcoveTheme.colorWhite : colorcoveTheme.colorBlack,
      transform: `scale(${navOpen ? 0.8 : 1})`,
    },
    leave: { opacity: 0, transform: 'scale(0)' },
    immediate: !toggleButtonEl.current,
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
        <IconWrapper>
          <Cart role="img" />
        </IconWrapper>
      </IconButton>
      <IconButton
        aria-label={`${navOpen ? 'Close' : 'Open'} navigation`}
        aria-expanded={navOpen}
        onClick={toggleNavOpen}
        ref={toggleButtonEl}
      >
        {toggleAnimation.map(({ item, key, props }) =>
          item ? (
            <IconWrapper style={props} key={key}>
              <Close role="img" />
            </IconWrapper>
          ) : (
            <IconWrapper style={props} key={key}>
              <Hamburger role="img" />
            </IconWrapper>
          )
        )}
      </IconButton>
    </StyledNav>
  );
};

export default Nav;
