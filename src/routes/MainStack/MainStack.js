// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Image, Text } from "react-native";
import { verticalScale } from "react-native-size-matters";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomText from "../../components/CustomText";
import MakeReservation from "../../screens/MainScreens/MakeReservation/MakeReservation";
import WelcomeScreen from "../../screens/MainScreens/WelcomeScreen/WelcomeScreen";
import { colors } from "../../utils/Colors";
import { icons } from "../../../assets/icons";
import SearchScreen from "../../screens/MainScreens/SearchScreen/SearchScreen";
import ReceiptScreen from "../../screens/MainScreens/ReceiptScreen/ReceiptScreen";
import ProfileScreen from "../../screens/MainScreens/ProfileScreen/PofileScreen";
import EventLocations from "../../screens/MainScreens/EventLocation/EventLocations";

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarColor: ({focused, size, color}) => {},
        // tabBarStyle:()=>{innerHeight:1000},
        tabBarStyle: {
          // height: verticalScale(65),
          // paddingTop: 5,
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.gray1,
          display: route.name === "Event" ? "none" : "flex",
        },
        headerShown: false,
        tabBarLabel: ({ focused, size, color }) => {
          return false;
        },

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Welcome") {
            iconName = icons.home;
            // size = focused ? 35 : 30;
            color = focused ? colors.primary : colors.secondary;
          } else if (route.name === "Search") {
            iconName = icons.search;
            // size = focused ? 35 : 30;
            color = focused ? colors.primary : colors.secondary;
          } else if (route.name === "Receipt") {
            iconName = icons.receipt;
            color = focused ? colors.primary : colors.secondary;

            // size = focused ? 35 : 30;
          } else if (route.name === "Profile") {
            iconName = icons.user;
            // size = focused ? 35 : 30;
            color = focused ? colors.primary : colors.secondary;
          }
          return (
            <Image
              source={iconName}
              resizeMode={"contain"}
              style={{
                tintColor: color,
                height: 40,
                width: 40,
                marginTop: 10,
              }}
            />
          );
        },
      })}
      // initialRouteName={"Receipt"}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Receipt" component={ReceiptScreen} />
      <Tab.Screen
        options={{
          tabBarItemStyle: { display: "none" },
        }}
        name="Event"
        component={EventLocations}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;
