import React, { useEffect } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { isBrowser, springSlowConfig } from '../utils/helpers';
import useStore from '../hooks/use-store';

interface Props {
  disableFadeIn?: boolean;
  className?: string;
}

const StyledSection = styled(animated.section)`
  --spacing: ${spacing(6)};
  margin: var(--spacing) 0;

  ${breakpoint('small')} {
    --spacing: ${spacing(9)};
  }

  ${breakpoint('medium')} {
    --spacing: ${spacing(12)};
  }

  ${breakpoint('large')} {
    --spacing: ${spacing(15)};
  }

  ${breakpoint('xLarge')} {
    --spacing: ${spacing(18)};
    max-width: 2000px;
    margin: var(--spacing) auto;
  }
`;

const Section: React.FC<Props> = React.memo(
  ({ children, disableFadeIn, className }) => {
    const headerAnimationComplete = useStore(
      state => state.headerAnimationComplete
    );

    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const [fadeAnimation, set] = useSpring(() => ({
      opacity: isBrowser ? 0 : 1,
      transform: `translateY(${isBrowser ? '24px' : '0px'})`,
      config: springSlowConfig,
    }));

    // Set the visibility based on inView state
    useEffect(() => {
      if (inView && headerAnimationComplete) {
        set({
          opacity: 1,
          transform: 'translateY(0px)',
        });
      }
    }, [headerAnimationComplete, inView, set]);

    return (
      <StyledSection
        ref={ref}
        style={disableFadeIn ? {} : fadeAnimation}
        className={className}
      >
        {children}
      </StyledSection>
    );
  }
);

export default Section;
