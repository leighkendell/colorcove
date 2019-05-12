import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorWhite: string;
    colorBlack: string;
    colorLightGrey: string;
    colorMidGrey: string;
    colorBlue: string;
    fontPrimary: string;
    spacingBase: number;
    breakpoints: {
      small: number;
      medium: number;
      large: number;
    };
  }
}
