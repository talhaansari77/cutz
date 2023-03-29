import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "../AuthStack/AuthStack";
import MainStack from "../MainStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GetClientEvent,
  GetVolunteerEvent,
} from "../../services/EventClientsApi";
import { LoginActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RootNavigator = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.authReducers.authState);
  // console.log("DataSIUser", data);
  const [AuthData, setAuthData] = useState(null);

  useEffect(() => {
    (async function () {
      let user = await AsyncStorage?.getItem("CurrentAuth");
      let AsyncData = JSON.parse?.(user);
      console.log("AsycDataa", AsyncData.token);
      if (AsyncData?.token) {
        setAuthData(AsyncData);
        if (AsyncData?.checkUser == "Client") {
          const res = await GetClientEvent(AsyncData?.token);
          const data = res?.data;
          console.log("DataIS", data);
          data["token"] = AsyncData?.token;
          data["rememberMe"] = AsyncData?.rememberMe;
          data["currentUser"] = AsyncData?.checkUser;

          dispatch(LoginActions(data));
        } else {
          const res = await GetVolunteerEvent(AsyncData?.token);
          const data = res?.data;
          console.log("DataIS", data);

          data["token"] = AsyncData?.token;
          data["rememberMe"] = AsyncData?.rememberMe;
          data["currentUser"] = AsyncData?.currentUser;
          console.log("currentUserAsyncData", data);

          dispatch(LoginActions(data));
        }
      }
    })();
  }, []);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainStack" component={MainStack} />

        {/* {AuthData?.rememberMe ? (
          <Stack.Screen name="MainStack" component={MainStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )} */}
        {/* <Stack.Screen name="Reservation" component={MakeReservation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
