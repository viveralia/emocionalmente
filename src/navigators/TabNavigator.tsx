import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";

import ProfileScreen from "../screens/ProfileScreen";
import ReportsScreen from "../screens/ReportsScreen";
import { medium } from "../themes/fonts";
import EntriesNavigator from "./EntriesNavigator";

export type TabsParams = {
  Entries: undefined;
  Reports: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabsParams>();

const TabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: medium,
        },
        tabBarLabelStyle: {
          fontFamily: medium,
        },
      }}
    >
      <Tab.Screen
        name="Entries"
        component={EntriesNavigator}
        options={{
          title: "Entradas",
          tabBarIcon: (props) => <Ionicons name="book" {...props} />,
        }}
      />
      <Tab.Screen
        name="Reports"
        component={ReportsScreen}
        options={{
          title: "Reportes",
          tabBarIcon: (props) => <Ionicons name="podium" {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Mi Perfil",
          tabBarIcon: (props) => <Ionicons name="person" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
