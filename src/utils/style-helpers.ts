import { colorcoveTheme } from './theme';
import { css, DefaultTheme } from 'styled-components';
import { rem } from 'polished';

/** Consistent spacing between elements */
export const spacing = (multiplier: number) =>
  `${multiplier * colorcoveTheme.spacingBase}px`;

/** Font size and line height relative to base spacing */
export const fontSize = (size: number, multiplier: number) => css`
  font-size: ${rem(size)};
  line-height: ${(multiplier * colorcoveTheme.spacingBase) / size};
`;

/** Breakpoint media query based on theme variables */
export const breakpoint = (
  name: keyof DefaultTheme['breakpoints'],
  type: 'min' | 'max' = 'min',
  matchMedia: boolean = false
) =>
  `${matchMedia ? '' : '@media '}(${type}-width: ${colorcoveTheme.breakpoints[
    name
  ] / 16}em)`;
