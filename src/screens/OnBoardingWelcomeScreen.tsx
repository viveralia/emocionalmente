import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text } from "native-base";
import { FC } from "react";

import EmotionsCarousel from "../components/EmotionsCarousel";
import { RootStackParamList } from "../navigators/RootNavigator";

const OnBoardingWelcomeScreen: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  const handlePress = () => {
    navigation.navigate("OnBoardingProfile");
  };

  return (
    <Box safeArea bg="brand" flex={1} alignItems="center" justifyContent="center">
      <Text textAlign="center">On boarding welcome</Text>
      <EmotionsCarousel />
      <Button mt={2} onPress={handlePress}>
        Continue
      </Button>
    </Box>
  );
};

export default OnBoardingWelcomeScreen;
