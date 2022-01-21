import { extendTheme } from "native-base";

import { lightPalette } from "./colors";
import { components } from "./components";
import { themeFonts } from "./fonts";

export const lightTheme = extendTheme({
  ...themeFonts,
  colors: { ...lightPalette },
  components,
});

type CustomThemeType = typeof lightTheme;

declare module "native-base" {
  type ICustomTheme = CustomThemeType;
}
