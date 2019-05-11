import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'polished';
import { colorcoveTheme } from '../utils/theme';

// Fonts
import ManropeLightWoff from '../fonts/Manrope3-Light.woff';
import ManropeLightWoff2 from '../fonts/Manrope3-Light.woff2';
import ManropeBoldWoff from '../fonts/Manrope3-Bold.woff';
import ManropeBoldWoff2 from '../fonts/Manrope3-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeLightWoff2}) format('woff2'),
        url(${ManropeLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${ManropeBoldWoff2}) format('woff2'),
        url(${ManropeBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: 18px;
  }

  * {
    box-sizing: inherit;

    &::before,
    &::after {
      box-sizing: inherit;
    }
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
