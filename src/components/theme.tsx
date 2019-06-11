import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import { colorcoveTheme } from '../utils/theme';
import { spacing } from '../utils/style-helpers';

// Fonts
import ManropeLightWoff from '../fonts/Manrope3-Light.woff';
import ManropeLightWoff2 from '../fonts/Manrope3-Light.woff2';
import ManropeBoldWoff from '../fonts/Manrope3-Bold.woff';
import ManropeBoldWoff2 from '../fonts/Manrope3-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-weight: 300;
    font-family: 'Manrope';
    font-style: normal;
    src: url(${ManropeLightWoff2}) format('woff2'),
        url(${ManropeLightWoff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-weight: bold;
    font-family: 'Manrope';
    font-style: normal;
    src: url(${ManropeBoldWoff2}) format('woff2'),
        url(${ManropeBoldWoff}) format('woff');
    font-display: swap;
  }

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
