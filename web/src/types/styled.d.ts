import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorWhite: string;
    colorBlack: string;
    colorLightGrey: string;
    colorMidGrey: string;
    colorDarkGrey: string;
    colorBlue: string;
    colorOrange: string;
    fontPrimary: string;
    spacingBase: number;
    breakpoints: {
      xSmall: number;
      small: number;
      medium: number;
      large: number;
      xLarge: number;
    };
  }
}
