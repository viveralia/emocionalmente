import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const EntriesNavigator: FC = () => {
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
        options={{ presentation: "formSheet" }}
      />
    </Stack.Navigator>
  );
};

export default EntriesNavigator;
