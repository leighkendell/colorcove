import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import { colorcoveTheme } from '../utils/theme';
import { spacing } from '../utils/style-helpers';
import { messageBase } from './message';

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

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  #gatsby-noscript {
    ${messageBase};
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
