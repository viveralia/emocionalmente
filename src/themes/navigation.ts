import { Theme } from "@react-navigation/native";

import { lightPalette } from "./colors";

// Theme used for React Navigation only
export const lightTheme: Theme = {
  colors: {
    background: lightPalette.darkBackground,
    card: lightPalette.lightBackground,
    border: lightPalette.lightBackground,
    primary: lightPalette.secondary![500],
    text: lightPalette.darkText!,
    notification: lightPalette.secondary![500],
  },
  dark: false,
};
