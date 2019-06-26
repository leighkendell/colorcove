import React, { useState, useRef, CSSProperties } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint, fontSize } from '../utils/style-helpers';
import { ReactComponent as Logo } from '../images/colorcove-logo.svg';
import { ReactComponent as Hamburger } from '../images/hamburger.svg';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as Cart } from '../images/cart.svg';
import { Link } from 'gatsby';
import {
  useSpring,
  animated,
  useTransition,
  useChain,
  useTrail,
  ReactSpringHook,
} from 'react-spring';
import { colorcoveTheme } from '../utils/theme';
import { useMatchMedia } from '../hooks/use-match-media';

interface Props {
  items: {
    title: string;
    link: string;
  }[];
  onCartOpen?: () => void;
}

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  display: grid;
  grid-gap: ${spacing(3)};
  grid-template-columns: 1fr repeat(2, 24px);
  padding: ${spacing(3)};
  background-color: ${props => props.theme.colorWhite};

  ${breakpoint('small')} {
    padding: ${spacing(3)} ${spacing(6)};
  }

  ${breakpoint('medium')} {
    grid-gap: ${spacing(4)};
    grid-template-columns: repeat(2, 1fr) 24px;
    padding: ${spacing(4)} ${spacing(9)};
  }

  ${breakpoint('large')} {
    padding: ${spacing(4)} ${spacing(12)};
  }

  ${breakpoint('xLarge')} {
    padding: ${spacing(4)} ${spacing(15)};
  }

  > * {
    /* Nav toggle button */
    &:nth-child(4) {
      z-index: 2;

      ${breakpoint('medium')} {
        display: none;
      }
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
  cursor: pointer;
`;

const IconWrapper = styled(animated.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    width: ${spacing(3)};
    height: ${spacing(3)};
    transform: translateY(-50%);
    fill: currentColor;
  }
`;

const NavList = styled(animated.ul)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colorBlack};

  ${breakpoint('medium')} {
    position: static;
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${spacing(4)};
    justify-content: end;
    background-color: transparent;
  }
`;

const NavListItem = styled(animated.li)`
  list-style: none;
`;

const NavLink = styled(Link)`
  display: block;
  padding: ${spacing(3)};
  color: ${props => props.theme.colorWhite};
  font-weight: bold;
  ${fontSize(14, 3)};
  text-decoration: none;

  ${breakpoint('medium')} {
    padding: 0;
    color: ${props => props.theme.colorBlack};

    &::before {
      --scale: 0;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.colorMidGrey};
      border-radius: 4px;
      transform: scale(var(--scale), 1.5);
      opacity: 0;
      transition: 0.25s ease-in-out;
      content: '';
    }

    &:hover {
      &::before {
        --scale: 1.5;
        opacity: 1;
      }
    }
  }
`;

const Nav: React.FC<Props> = ({ items, onCartOpen }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleButtonEl = useRef<HTMLButtonElement>(null);
  const navListEl = useRef<ReactSpringHook>(null);
  const navListItemEl = useRef<ReactSpringHook>(null);

  const isLargeScreen = useMatchMedia(breakpoint('medium', 'min', true));

  const navListAnimation = useSpring({
    from: { opacity: isLargeScreen ? 1 : 0 },
    opacity: navOpen || isLargeScreen ? 1 : 0,
    immediate: isLargeScreen,
    ref: navListEl,
  });

  const navListItemAnimation = useTrail(items.length, {
    from: { opacity: 0, transform: 'scale(0.75)' },
    opacity: navOpen || isLargeScreen ? 1 : 0,
    transform: `scale(${navOpen || isLargeScreen ? 1 : 0.75})`,
    immediate: isLargeScreen,
    ref: navListItemEl,
  });

  const navListVisibility: CSSProperties = {
    visibility: navListAnimation.opacity.interpolate(opacity =>
      opacity === 0 ? 'hidden' : 'visible'
    ),
  };

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

  useChain(navOpen ? [navListEl, navListItemEl] : [navListItemEl, navListEl], [
    0,
    navOpen ? 0.1 : 0.6,
  ]);

  const toggleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <StyledNav>
      <StyledLink to="/" aria-label="Home">
        <Logo role="img" />
      </StyledLink>
      <NavList
        style={{
          ...navListAnimation,
          ...navListVisibility,
        }}
      >
        {navListItemAnimation.map((props, index) => (
          <NavListItem style={props} key={items[index].title}>
            <NavLink to={items[index].link}>{items[index].title}</NavLink>
          </NavListItem>
        ))}
      </NavList>
      <IconButton aria-label="Open cart" onClick={onCartOpen}>
        <IconWrapper>
          <Cart role="img" />
        </IconWrapper>
      </IconButton>
      {!isLargeScreen && (
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
      )}
    </StyledNav>
  );
};

export default Nav;