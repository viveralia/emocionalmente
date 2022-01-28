import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text, Heading } from "native-base";
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
    <Box
      safeArea
      bg="brand"
      padding={5}
      flex={1}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box marginTop={7}>
        <Logo />
      </Box>
      <EmotionsCarousel />
      <Box>
        <Heading fontSize={26} marginBottom={4} color={"#1E2831"}>
          Pellentesque habitant morbi tristique senectus.
        </Heading>
        <Text fontSize={16} color={"#4E6477"}>
          In mauris justo, tempor nec vehicula vel, scelerisque vel elit. Pellentesque habitant
          morbi tristique senectus.
        </Text>
        <Button onPress={handlePress} marginTop={47} marginBottom={2} backgroundColor={"#0891B2"}>
          Continuar
        </Button>
      </Box>
    </Box>
  );
};

export default OnBoardingWelcomeScreen;
