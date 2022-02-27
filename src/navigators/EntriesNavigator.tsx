import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { FC } from "react";

import CreateEntryScreen from "../screens/CreateEntryScreen";
import EntriesScreen from "../screens/EntriesScreen";
import { medium } from "../themes/fonts";

export type EntriesStackParamList = {
  EntriesList: undefined;
  CreateEntry: {
    date: Date;
  };
};

const Stack = createNativeStackNavigator<EntriesStackParamList>();

const EntriesNavigator: FC<NativeStackScreenProps<EntriesStackParamList>> = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: medium,
        },
      }}
    >
      <Stack.Screen name="EntriesList" component={EntriesScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="CreateEntry"
        component={CreateEntryScreen}
        options={{
          presentation: "formSheet",
          title: "",
          headerLeft: () => (
            <AntDesign name="close" size={24} color="black" onPress={handlePress} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default EntriesNavigator;
