import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text } from "native-base";
import { FC } from "react";

import EmotionsCarousel from "../components/EmotionsCarousel";
import Logo from "../components/Logo";
import { RootStackParamList } from "../navigators/RootNavigator";

const OnBoardingWelcomeScreen: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  const handlePress = () => {
    navigation.navigate("OnBoardingProfile");
  };

  return (
    <Box safeArea bg="brand" padding={5} flex={1} alignItems="center" justifyContent="center">
      <Logo />
      <EmotionsCarousel />
      <Text fontSize={26} bold={true} textAlign="left">
        Pellentesque habitant morbi tristique senectus.
      </Text>
      <Text textAlign="left">
        In mauris justo, tempor nec vehicula vel, scelerisque vel elit. Pellentesque habitant morbi
        tristique senectus.
      </Text>
      <Button mt={2} onPress={handlePress} width={"full"}>
        Continuar
      </Button>
    </Box>
  );
};

export default OnBoardingWelcomeScreen;
