import { Colors } from "./types";

export const baseColors = {
  failure: "#ff5757",
  primary: "#cc2774",
  primaryBright: "#dc4a8e",
  primaryDark: "#a11f5c",
  secondary: "#403F3F",
  success: "#45D46B",
  warning: "#FEB042",
  white: "#FFFFFF",
  lollipop: "#CC2774",
  seafoam: "#27CC7f",
  seafoamLight30: "#9FEDC9",
  darkGrey: "#403F3F",
  midnight: "#231F20",
  textDisabledDark30: "#6E777A",
  disabledBlueGrey: "#3E6F7C",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#FAF6ED",
  text: "#403F3F",
  textDisabled: "#BDC2C4",
  textSubtle: "##403F3F",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
