import React, { useRef } from 'react';
import styled from 'styled-components';
import { spacing, breakpoint } from '../utils/style-helpers';
import { useSpring, animated } from 'react-spring';
import useEventListener from '../hooks/use-event-listener';
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
  const sectionEl = useRef<HTMLDivElement>(null);

  const [fadeAnimation, set] = useSpring(() => ({
    opacity: isBrowser ? 0 : 1,
    transform: `translateY(${isBrowser ? '32px' : '0px'})`,
  }));

  const setFadeAnimation = () => {
    set({
      opacity: 1,
      transform: 'translateY(0px)',
    });
  };

  // Set the visibility state based on sal:in event
  useEventListener('sal:in', setFadeAnimation, sectionEl);

  return (
    <StyledSection ref={sectionEl} style={fadeAnimation} data-sal="fade">
      {children}
    </StyledSection>
  );
});

export default Section;
