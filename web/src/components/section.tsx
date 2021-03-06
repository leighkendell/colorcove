import React, { useEffect } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { isBrowser, springSlowConfig } from '../utils/helpers';
import useStore from '../hooks/use-store';

interface Props {
  disableFadeIn?: boolean;
}

const StyledSection = styled(animated.section)`
  margin: ${spacing(6)} 0;

  ${breakpoint('small')} {
    margin: ${spacing(9)} 0;
  }

  ${breakpoint('medium')} {
    margin: ${spacing(12)} 0;
  }

  ${breakpoint('large')} {
    margin: ${spacing(15)} 0;
  }

  ${breakpoint('xLarge')} {
    max-width: 2000px;
    margin: ${spacing(18)} auto;
  }
`;

const Section: React.FC<Props> = React.memo(({ children, disableFadeIn }) => {
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
    <StyledSection ref={ref} style={disableFadeIn ? {} : fadeAnimation}>
      {children}
    </StyledSection>
  );
});

export default Section;
