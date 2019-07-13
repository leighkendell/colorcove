import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import { colorcoveTheme } from '../utils/theme';
import { spacing } from '../utils/style-helpers';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    color: ${props => props.theme.colorBlack};
    font-size: 1rem;
    font-family: ${props => props.theme.fontPrimary};
  }

  * {
    box-sizing: inherit;
    outline-color: transparent;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  :focus {
    outline: 4px solid ${props => props.theme.colorDarkGrey};
    outline-offset: 4px;
    transition: outline-color 0.25s ease-in-out;
  }

  /* Storybook specific */
  .sb-show-main {
    padding: ${spacing(4)};
  }
`;

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={colorcoveTheme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Theme;
