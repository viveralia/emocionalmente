import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";

import ProfileScreen from "../screens/ProfileScreen";
import ReportsScreen from "../screens/ReportsScreen";
import EntriesNavigator from "./EntriesNavigator";

export type TabsParams = {
  Entries: undefined;
  Reports: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabsParams>();

const TabNavigator: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entries" component={EntriesNavigator} options={{ title: "Entradas" }} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
