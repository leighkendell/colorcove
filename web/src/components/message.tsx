import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { spacing, breakpoint, fontSize } from '../utils/style-helpers';
import { rgba } from 'polished';
import { useTransition, animated } from 'react-spring';
import { isBrowser } from '../utils/helpers';

const notificationEl = isBrowser ? document.body : null;

interface Props {
  isVisible?: boolean;
  timeout?: number;
}

const StyledMessage = styled(animated.div)`
  position: fixed;
  right: ${spacing(4)};
  bottom: ${spacing(4)};
  z-index: 1;
  display: inline-block;
  width: calc(100% - ${spacing(8)});
  max-width: 400px;
  padding: ${spacing(3)};
  ${fontSize(16, 3)};
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorBlack};
  border: 1px solid ${props => rgba(props.theme.colorWhite, 0.25)};
  border-radius: 4px;

  ${breakpoint('medium')} {
    padding: ${spacing(4)};
  }
`;

const Message: React.FC<Props> = ({ children, isVisible, timeout = 4000 }) => {
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (timeout && isVisible) {
      setTimerActive(true);

      const timer = setTimeout(() => {
        setTimerActive(false);
      }, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible, timeout]);

  const transition = useTransition(isVisible && timerActive, null, {
    from: {
      opacity: 0,
      transform: 'translateY(16px) scale(0.95)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0) scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(16px) scale(0.95)',
    },
    trail: timeout,
  });

  return (
    notificationEl &&
    ReactDOM.createPortal(
      transition.map(
        ({ item, key, props }) =>
          item && (
            <StyledMessage key={key} style={props}>
              {children}
            </StyledMessage>
          )
      ),
      notificationEl
    )
  );
};

export default Message;
