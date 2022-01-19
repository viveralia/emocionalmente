import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import OnBoardingProfileScreen from "../screens/OnBoardingProfileScreen";
import OnBoardingWelcomeScreen from "../screens/OnBoardingWelcomeScreen";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  OnBoardingWelcome: undefined;
  OnBoardingProfile: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: FC = () => {
  const user = null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="OnBoardingWelcome"
              component={OnBoardingWelcomeScreen}
              options={{
                headerShown: false,
                animationTypeForReplace: "pop",
              }}
            />
            <Stack.Screen
              name="OnBoardingProfile"
              component={OnBoardingProfileScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
