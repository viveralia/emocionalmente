import { Theme } from "native-base";

export interface Colors extends Partial<Theme["colors"]> {
  brand: string;
  darkBackground: string;
  lightBackground: string;
  buttonPrimary: string;
}

export const lightPalette: Colors = {
  primary: {
    50: "#dbfbff",
    100: "#b0efff",
    200: "#82e3fb",
    300: "#54d8f7",
    400: "#2cccf4",
    500: "#1ab3db",
    600: "#088bab",
    700: "#00637b",
    800: "#003d4b",
    900: "#00161c",
  },
  secondary: {
    50: "#fff3db",
    100: "#ffe1ae",
    200: "#fed17f",
    300: "#fcc64e",
    400: "#fbbd1e",
    500: "#e19504",
    600: "#af6800",
    700: "#7d4200",
    800: "#4c2300",
    900: "#1c0800",
  },
  darkText: "#1E2831",
  lightText: "#4E6477",
  brand: "#FDE047",
  darkBackground: "#F8FAFC",
  lightBackground: "#FFFFFF",
  buttonPrimary: "#0891B2",
};
