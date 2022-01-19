import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text } from "native-base";
import { FC } from "react";

import { RootStackParamList } from "../navigators/RootNavigator";

const OnBoardingProfileScreen: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  return (
    <Box safeArea bg="yellow.300" flex={1} alignItems="center" justifyContent="center">
      <Text textAlign="center">On boarding profile</Text>
      <Button mt={2} onPress={navigation.goBack}>
        Back
      </Button>
    </Box>
  );
};

export default OnBoardingProfileScreen;
