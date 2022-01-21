import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

export const fonts = {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
};

export const fontFamily = "Poppins";
export const regular = "Poppins_400Regular";
export const medium = "Poppins_500Medium";
export const semibold = "Poppins_600SemiBold";
export const bold = "Poppins_700Bold";
export const extraBold = "Poppins_800ExtraBold";

export const themeFonts = {
  fontConfig: {
    [fontFamily]: {
      400: {
        normal: regular,
      },
      500: {
        normal: medium,
      },
      600: {
        normal: semibold,
      },
      700: {
        normal: bold,
      },
      800: {
        normal: extraBold,
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
};
