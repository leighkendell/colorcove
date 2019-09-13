import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { spacing, breakpoint, fontSize } from '../utils/style-helpers';
import { useTransition, animated } from 'react-spring';
import { isBrowser } from '../utils/helpers';
import { lighten } from 'polished';

const notificationEl = isBrowser ? document.body : null;

interface Props {
  isVisible?: boolean;
  timeout?: number;
}

export const messageBase = css`
  position: fixed;
  right: ${spacing(2)};
  bottom: ${spacing(2)};
  z-index: 1;
  display: inline-block;
  width: calc(100% - ${spacing(4)});
  max-width: 440px;
  padding: ${spacing(3)};
  color: ${props => props.theme.colorWhite};
  ${fontSize(14, 3)};
  font-weight: bold;
  text-align: center;
  background-color: ${props => lighten(0.1, props.theme.colorBlack)};
  border-radius: ${spacing(0.5)};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  * {
    color: ${props => props.theme.colorWhite};
  }

  ${breakpoint('medium')} {
    padding: ${spacing(4)};
  }
`;

const StyledMessage = styled(animated.div)`
  ${messageBase};
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
      transform: 'translateY(50%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(50%)',
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
