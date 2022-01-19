import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import CreateEntryScreen from "../screens/CreateEntryScreen";
import EntriesScreen from "../screens/EntriesScreen";

export type EntriesStackParamList = {
  EntriesList: undefined;
  CreateEntry: undefined;
};

const Stack = createNativeStackNavigator<EntriesStackParamList>();

const EntriesNavigator: FC = () => {
  return (
    <Stack.Navigator>
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
