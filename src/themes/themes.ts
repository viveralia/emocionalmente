import { extendTheme } from "native-base";

import { colors } from "./colors";
import { components } from "./components";
import { themeFonts } from "./fonts";

export const lightTheme = extendTheme({
  ...themeFonts,
  colors,
  components,
});
