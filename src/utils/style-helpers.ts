import { colorcoveTheme } from './theme';

export const spacing = (multiplier: number) =>
  `${multiplier * colorcoveTheme.spacingBase}px`;
