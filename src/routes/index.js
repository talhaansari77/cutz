import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack/AuthStack";
import MainStack from "./MainStack";
import PersonalScreen from "../screens/MainScreens/PersonalScreen/PersonalScreen";
import EditProfile from "../screens/MainScreens/EditProfile/EditProfile";
import ManageNotification from "../screens/MainScreens/ManageNotification/ManageNotification";

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ManageNotification" component={ManageNotification} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
