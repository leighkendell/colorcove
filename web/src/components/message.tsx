import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { spacing, breakpoint, fontSize } from '../utils/style-helpers';
import { rgba } from 'polished';
import { useTransition, animated } from 'react-spring';
import { isBrowser } from '../utils/helpers';

const notificationEl = isBrowser ? document.body : null;

interface Props {
  isVisible?: boolean;
}

const StyledMessage = styled(animated.div)`
  display: inline-block;
  width: 100%;
  padding: ${spacing(3)};
  ${fontSize(16, 3)};
  background-color: ${props => props.theme.colorWhite};
  border-left: 8px solid ${props => props.theme.colorBlue};
  box-shadow: 0 2px 4px ${props => rgba(props.theme.colorBlack, 0.05)},
    0 10px 15px ${props => rgba(props.theme.colorBlack, 0.05)};

  ${breakpoint('medium')} {
    padding: ${spacing(4)};
  }
`;

const Message: React.FC<Props> = ({ children, isVisible }) => {
  const transition = useTransition(isVisible, null, {
    from: {
      opacity: 0,
      transform: 'scale(0.95) translateY(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1) translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0) translateY(100%)',
    },
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
