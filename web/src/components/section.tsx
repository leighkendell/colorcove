import React, { useEffect } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { isBrowser } from '../utils/helpers';

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

const Section: React.FC = React.memo(({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [fadeAnimation, set] = useSpring(() => ({
    opacity: isBrowser ? 0 : 1,
    transform: `translateY(${isBrowser ? '32px' : '0px'}) scale(0.95)`,
  }));

  // Set the visibility based on inView state
  useEffect(() => {
    if (inView) {
      set({
        opacity: 1,
        transform: 'translateY(0px) scale(1)',
      });
    }
  }, [inView, set]);

  return (
    <StyledSection ref={ref} style={fadeAnimation} data-sal>
      {children}
    </StyledSection>
  );
});

export default Section;
