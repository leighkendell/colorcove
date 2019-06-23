import { DefaultTheme } from 'styled-components';

const colorcoveTheme: DefaultTheme = {
  // Colors
  colorWhite: '#fff',
  colorBlack: '#090909',
  colorLightGrey: '#f7f7f8',
  colorMidGrey: '#e9e9ea',
  colorBlue: '#335bfa',

  // Fonts
  fontPrimary: `Manrope, sans-serif`,

  // Spacing
  spacingBase: 8,

  // Breakpoints
  breakpoints: {
    small: 420,
    medium: 768,
    large: 1200,
    xLarge: 1600,
  },
};

export { colorcoveTheme };
