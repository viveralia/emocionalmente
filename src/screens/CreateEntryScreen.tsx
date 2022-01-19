import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Box, Text } from "native-base";
import { FC } from "react";

import { EntriesStackParamList } from "../navigators/EntriesNavigator";

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = () => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text textAlign="center">CreateEntry</Text>
    </Box>
  );
};

export default CreateEntryScreen;
