import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#8b22ee",
  primaryBright: "#8b22ee",
  primaryDark: "#FFFFFF",
  secondary: "#37733f",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#8b22ee",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#bdc4f5",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#273b4f",
  textDisabled: "#BDC2C4",
  textSubtle: "#273b4f",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#51c4d3",
  background: "#bdc4f5",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#eeeaf4",
  primaryDark: "#FFFFFF",
  tertiary: "#353547",
  text: "#273b4f",
  textDisabled: "#BDC2C4",
  textSubtle: "#273b4f",
  borderColor: "#524B63",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
