import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { spacing, breakpoint, fontSize } from '../utils/style-helpers';
import { useTransition, animated } from 'react-spring';
import { isBrowser } from '../utils/helpers';

const notificationEl = isBrowser ? document.body : null;

interface Props {
  isVisible?: boolean;
  timeout?: number;
}

const StyledMessage = styled(animated.div)`
  position: fixed;
  top: ${spacing(9)};
  left: 0;
  z-index: 1;
  display: inline-block;
  width: 100%;
  padding: ${spacing(3)};
  color: ${props => props.theme.colorWhite};
  ${fontSize(14, 3)};
  font-weight: bold;
  text-align: center;
  background-color: ${props => props.theme.colorBlack};

  ${breakpoint('medium')} {
    top: ${spacing(10)};
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
      transform: 'translateY(-100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-100%)',
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
