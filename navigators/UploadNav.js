import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const UploadNav = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: { backgroundColor: "white", top: 0 },
      }}
    >
      <Tab.Screen name="Select">
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Select" component={SelectPhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
};

export default UploadNav;
