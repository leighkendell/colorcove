import React, { useRef, CSSProperties } from 'react';
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
import useMatchMedia from '../hooks/use-match-media';
import { isBrowser } from '../utils/helpers';

interface Props {
  items: {
    title: string;
    link: string;
  }[];
  cartQuantity?: number | null;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onCartOpen?: () => void;
}

const StyledNav = styled.nav`
  --padding-top-bottom: ${spacing(3)};
  --padding-left-right: ${spacing(3)};

  position: sticky;
  top: 0;
  z-index: 2;
  display: grid;
  grid-gap: ${spacing(3)};
  grid-template-columns: 1fr repeat(2, 24px);
  padding: var(--padding-top-bottom) var(--padding-left-right);
  background-color: ${props => props.theme.colorWhite};

  ${breakpoint('small')} {
    --padding-left-right: ${spacing(6)};
  }

  ${breakpoint('medium')} {
    --padding-left-right: ${spacing(9)};
    grid-gap: ${spacing(4)};
    grid-template-columns: repeat(2, 1fr) 24px;
  }

  ${breakpoint('large')} {
    --padding-left-right: ${spacing(12)};
  }

  ${breakpoint('xLarge')} {
    --padding-left-right: ${spacing(15)};
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
  position: relative;
  display: inline-block;
  justify-self: left;
  overflow: hidden;

  &:hover {
    &::before {
      @supports (mix-blend-mode: color) {
        --scale: 1;
      }
    }

    svg {
      stop {
        transition-delay: 0.25s;
        stop-color: ${props => props.theme.colorBlack};
      }
    }
  }

  &::before {
    --scale: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: ${props => props.theme.colorWhite};
    border-radius: 100%;
    transform: scale(var(--scale)) translate(-50%, -50%);
    transform-origin: top left;
    mix-blend-mode: color;
    transition: transform 0.5s ease-in-out;
    content: '';
    pointer-events: none;
  }

  svg {
    display: block;
    width: auto;
    height: ${spacing(3)};

    stop {
      transition: 0.25s ease-in-out;
    }

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
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colorBlack};
  visibility: hidden;

  ${breakpoint('medium')} {
    position: static;
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${spacing(4)};
    justify-content: end;
    background-color: transparent;
    outline: 0;
    visibility: visible;
  }
`;

const NavListItem = styled(animated.li)`
  list-style: none;
`;

const NavLink = styled(Link)`
  position: relative;
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
      --size: 2px;

      position: absolute;
      bottom: calc(var(--size) * -4);
      left: 0;
      z-index: -1;
      width: 100%;
      height: var(--size);
      background-color: ${props => props.theme.colorBlack};
      transform: scale(var(--scale), 1.5);
      opacity: 0;
      transition: 0.25s ease-in-out;
      content: '';
    }

    &:hover {
      &::before {
        --scale: 1;
        opacity: 1;
      }
    }
  }
`;

const Quantity = styled(animated.span)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing(2.5)};
  height: ${spacing(2.5)};
  ${fontSize(12, 2)};
  font-weight: bold;
  background-color: ${props => props.theme.colorOrange};
  border-radius: 100%;
  transform: translate(50%, -50%);
`;

const Nav: React.FC<Props> = ({
  items,
  onCartOpen,
  isOpen,
  onOpen,
  onClose,
  cartQuantity,
}) => {
  const toggleButtonEl = useRef<HTMLButtonElement>(null);
  const navListEl = useRef<HTMLUListElement>(null);
  const navListSpring = useRef<ReactSpringHook>(null);
  const navListItemSpring = useRef<ReactSpringHook>(null);

  const isLargeScreen = useMatchMedia(breakpoint('medium', 'min', true));

  const navListAnimation = useSpring({
    from: { opacity: isLargeScreen ? 1 : 0 },
    opacity: isOpen || isLargeScreen ? 1 : 0,
    immediate: isLargeScreen,
    ref: navListSpring,
  });

  const navListItemAnimation = useTrail(items.length, {
    opacity: isOpen || isLargeScreen ? 1 : 0,
    transform: `scale(${isOpen || isLargeScreen ? 1 : 0.75})`,
    immediate: isLargeScreen,
    ref: navListItemSpring,
  });

  const navListVisibility: CSSProperties = {
    visibility: navListAnimation.opacity.interpolate(opacity =>
      opacity === 0 ? 'hidden' : 'visible'
    ),
  };

  const toggleAnimation = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: {
      opacity: 1,
      color: isOpen ? colorcoveTheme.colorWhite : colorcoveTheme.colorBlack,
      transform: `scale(${isOpen ? 0.8 : 1})`,
    },
    leave: { opacity: 0, transform: 'scale(0)' },
    immediate: !toggleButtonEl.current,
  });

  const quantityAnimation = useSpring({
    opacity: cartQuantity && cartQuantity > 0 ? 1 : 0,
    transform: `translate(50%, -50%) scale(${
      cartQuantity && cartQuantity > 0 ? 1 : 0
    })`,
  });

  useChain(
    isOpen
      ? [navListSpring, navListItemSpring]
      : [navListItemSpring, navListSpring],
    [0, isOpen ? 0.1 : 0.4]
  );

  const toggleNavOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur();
    if (isOpen) {
      onClose && onClose();
    } else {
      onOpen && onOpen();

      if (navListEl.current) {
        setTimeout(() => {
          // Shift focus to nav list
          navListEl.current && navListEl.current.focus();
        }, 250);
      }
    }
  };

  return (
    <StyledNav>
      <StyledLink to="/" aria-label="Home">
        <Logo role="img" />
      </StyledLink>
      <NavList
        style={
          isBrowser
            ? {
                ...navListAnimation,
                ...navListVisibility,
              }
            : {}
        }
        ref={navListEl}
        tabIndex={(!isLargeScreen && 0) || -1}
      >
        {navListItemAnimation.map((props, index) => (
          <NavListItem style={props} key={items[index].title}>
            <NavLink to={items[index].link}>{items[index].title}</NavLink>
          </NavListItem>
        ))}
      </NavList>
      <IconButton aria-label="Open cart" onClick={onCartOpen}>
        <Quantity style={quantityAnimation}>{cartQuantity}</Quantity>
        <IconWrapper>
          <Cart role="img" />
        </IconWrapper>
      </IconButton>
      {!isLargeScreen && (
        <IconButton
          aria-label={`${isOpen ? 'Close' : 'Open'} navigation`}
          aria-expanded={isOpen}
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
