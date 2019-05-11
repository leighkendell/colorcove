import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize, lighten } from 'polished';
import { colorcoveTheme } from '../utils/theme';

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
  }

  @font-face {
    font-weight: bold;
    font-family: 'Manrope';
    font-style: normal;
    src: url(${ManropeBoldWoff2}) format('woff2'),
        url(${ManropeBoldWoff}) format('woff');
  }

  html {
    box-sizing: border-box;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fontPrimary};
  }

  * {
    box-sizing: inherit;

    &:focus {
      /* outline: 4px solid ${({ theme }) => lighten(0.3, theme.colorBlue)}; */
      /* outline-offset: 2px; */
    }

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
