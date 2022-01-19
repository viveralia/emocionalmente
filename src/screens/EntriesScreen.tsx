import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Text } from "native-base";
import { FC } from "react";

import { EntriesStackParamList } from "../navigators/EntriesNavigator";

const EntriesScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("CreateEntry");
  };

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text textAlign="center">Entries</Text>
      <Button mt={2} onPress={handlePress}>
        Create entry
      </Button>
    </Box>
  );
};

export default EntriesScreen;
