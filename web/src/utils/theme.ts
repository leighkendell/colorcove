import { DefaultTheme } from 'styled-components';

const colorcoveTheme: DefaultTheme = {
  // Colors
  colorWhite: '#fff',
  colorBlack: '#101010',
  colorLightGrey: '#f7f7f8',
  colorMidGrey: '#e9e9ea',
  colorDarkGrey: '#c3c3c3',
  colorBlue: '#2723F6',
  colorOrange: '#f6a623',

  // Fonts
  fontPrimary: `Manrope, sans-serif`,

  // Spacing
  spacingBase: 8,

  // Breakpoints
  breakpoints: {
    xSmall: 375,
    small: 420,
    medium: 768,
    large: 1200,
    xLarge: 1600,
  },
};

export { colorcoveTheme };
