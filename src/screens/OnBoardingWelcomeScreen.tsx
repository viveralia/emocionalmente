import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text } from "native-base";
import { FC } from "react";

import { RootStackParamList } from "../navigators/RootNavigator";

const OnBoardingWelcomeScreen: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  const handlePress = () => {
    navigation.navigate("OnBoardingProfile");
  };

  return (
    <Box safeArea bg="yellow.300" flex={1} alignItems="center" justifyContent="center">
      <Text textAlign="center">On boarding welcome</Text>
      <Button mt={2} onPress={handlePress}>
        Continue
      </Button>
    </Box>
  );
};

export default OnBoardingWelcomeScreen;
