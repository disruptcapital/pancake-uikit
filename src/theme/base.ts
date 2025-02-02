import { MediaQueries, Breakpoints, Spacing } from "./types";
import { baseColors } from "./colors";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows = {
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: `0px 0px 0px 1px ${baseColors.primary}, 0px 0px 4px 8px rgba(204, 39, 116, 0.4)`,
  success: `0px 0px 0px 1px ${baseColors.success}, 0px 0px 0px 4px rgba(69,212,107, 0.3)`,
  warning: `0px 0px 0px 1px ${baseColors.warning}, 0px 0px 0px 4px rgba(254,176,66, 0.3)`,
  focus: `0px 0px 0px 1px #CC2774, 0px 0px 0px 4px rgba(204, 39, 116, 0.6)`,
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
};
