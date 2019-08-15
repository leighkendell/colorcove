import React, { useRef, useEffect } from 'react';
import { FluidObject } from 'gatsby-image';
import styled, { css } from 'styled-components';
import Heading from './heading';
import { spacing, breakpoint } from '../utils/style-helpers';
import Image from './image';
import Text from './text';
import Button from './button';
import { animated, useChain, useSpring, ReactSpringHook } from 'react-spring';
import { isBrowser, springSlowConfig } from '../utils/helpers';
import useStore from '../hooks/use-store';

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
    grid-template-rows: var(--padding) 1fr var(--padding);
  }
`;

const StyledHeader = styled.header<{ hasImage: boolean }>`
  --padding: ${spacing(3)};
  position: relative;

  ${breakpoint('small')} {
    --padding: ${spacing(6)};
  }

  ${breakpoint('medium')} {
    --padding: ${spacing(9)};
    ${({ hasImage }) => hasImage && `min-height: calc(80vh - ${spacing(10)})`};
  }

  ${breakpoint('large')} {
    --padding: ${spacing(12)};
  }

  ${breakpoint('xLarge')} {
    --padding: ${spacing(15)};
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

const StyledImage = styled(animated(Image))`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;

  ${breakpoint('medium')} {
    position: absolute !important;
    grid-row: 1 / span 3;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  z-index: 1;
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  align-self: end;
  max-width: ${spacing(80)};
  padding: var(--padding);
  background: ${props => props.theme.colorBlack};

  ${breakpoint('xLarge')} {
    max-width: ${spacing(90)};
  }

  ${Button} {
    margin-top: ${spacing(2)};

    ${breakpoint('medium')} {
      margin-top: ${spacing(3)};
    }
  }
`;

const AnimatedHeading = animated(Heading);

const Header: React.FC<Props> = ({
  title,
  description,
  image,
  backgroundColor,
  children,
}) => {
  const setHeaderAnimationComplete = useStore(
    state => state.setHeaderAnimationComplete
  );

  const headingEl = useRef<ReactSpringHook>(null);
  const textEl = useRef<ReactSpringHook>(null);

  // Set the initial state of the header animation
  // Used in other components to determine if their animations should start yet
  useEffect(() => {
    setHeaderAnimationComplete(false);

    // Set before the animation finishes when there's only a title
    if (!description || children) {
      setTimeout(() => {
        setHeaderAnimationComplete(true);
      }, 250);
    }
  }, [children, description, setHeaderAnimationComplete]);

  const animationProps = {
    from: {
      opacity: isBrowser ? 0 : 1,
      transform: `translateY(${isBrowser ? '16px' : '0'})`,
    },
    opacity: 1,
    transform: 'translateY(0)',
    config: springSlowConfig,
  };

  const imageAnimation = useSpring({
    from: {
      opacity: isBrowser ? 0 : 1,
    },
    opacity: 1,
    config: springSlowConfig,
  });

  const headingAnimation = useSpring({
    ...animationProps,
    ref: headingEl,
    onRest: () => {
      setHeaderAnimationComplete(true);
    },
  });

  const textAnimation = useSpring({
    ...animationProps,
    ref: textEl,
  });

  useChain([headingEl, textEl], [0, 0.3]);

  return (
    <StyledHeader role="banner" hasImage={image ? true : false}>
      {image ? (
        <>
          <Content>
            <AnimatedHeading type="h1" style={headingAnimation}>
              {title}
            </AnimatedHeading>
            <animated.div style={textAnimation}>
              {description && <Text>{description}</Text>}
              {children}
            </animated.div>
          </Content>
          <StyledImage
            image={image}
            backgroundColor={backgroundColor}
            alt=""
            style={imageAnimation}
          />
        </>
      ) : (
        <AnimatedHeading type="h1" align="center" style={headingAnimation}>
          {title}
        </AnimatedHeading>
      )}
    </StyledHeader>
  );
};

export default Header;
