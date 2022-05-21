import { Box, Text } from "native-base";
import { FC } from "react";
import { Dimensions } from "react-native";

import { profileCharacters } from "../constants/emotions";
import { useAppSelector } from "../hooks/redux";
import { getProperSize } from "../utils/size";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const avatarSize = getProperSize(SCREEN_HEIGHT, 0.15, 180);

const NoEntries: FC = () => {
  const { profile } = useAppSelector((state) => state.user);
  const { EmotionSvg } = profileCharacters[profile.avatar]!;

  return (
    <Box flex={1} justifyContent="center" px={4}>
      <Box alignSelf="center">
        <EmotionSvg width={avatarSize} height={avatarSize} />
      </Box>
      <Text textAlign="center" mb={6}>
        Parece que no he escrito nada aún
      </Text>
    </Box>
  );
};

export default NoEntries;
