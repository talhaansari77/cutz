import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import ProfileHeader from "./molecules/ProfileHeader";
import SepratorLine from "../../../components/SepratorLine";
import { icons } from "../../../../assets/icons";
import ProfileBody from "./molecules/ProfileBody";
import { Spacer } from "../../../components/Spacer";
import { colors } from "../../../utils/Colors";
import CustomText from "../../../components/CustomText";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import authReducers from "../../../redux/reducers/authReducers";
import {
  DeleteClientEvent,
  DeleteVolunteerEvent,
} from "../../../services/EventClientsApi";
import Toast from "react-native-root-toast";

const ProfileScreen = ({ navigation, route }) => {
  console.log("RoutesType", route?.params);

  const AuthUser = useSelector((state) => state.authReducers.authState);

  useEffect(() => {
    console.log("dfkvkdndkbvk", AuthUser);
  }, [useSelector]);

  const profileData = [
    {
      id: 1,
      name: "Personal",
      img: icons.person,
      onPress: () =>
        navigation.navigate("PersonalScreen", { AuthUser: AuthUser }),
    },
    {
      id: 2,
      name: "Edit Profile",
      img: icons.editProfile,
      onPress: () => navigation.navigate("EditProfile", { AuthUser: AuthUser }),
    },
    {
      id: 3,
      name: "Manage Notifications",
      img: icons.manage,
      onPress: () => navigation.navigate("ManageNotification"),
    },
    {
      id: 4,
      name: "How to use Cutz",
      family: "semiBoldItalic",
      img: icons.howuse,
      onPress: () => navigation.navigate(""),
    },
  ];

  const onDeleteAccount = async () => {
    if (AuthUser?.currentUser == "Volunteer") {
      const res = await DeleteVolunteerEvent(AuthUser?.token);
      if (res?.data) {
        Toast.show("Account deleted successfully");
        navigation.navigate("AuthStack", { screen: "signup" });
      }
    } else {
      const res = await DeleteClientEvent(AuthUser?.token);
      if (res?.data) {
        Toast.show("Account deleted successfully");
        navigation.navigate("AuthStack", { screen: "signup" });
      }
    }
  };

  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <PH20>
        <ProfileHeader AuthUser={AuthUser} />
      </PH20>

      <SepratorLine />
      {profileData.map((item) => {
        return (
          <>
            <ProfileBody
              name={item.name}
              img={item.img}
              onPress={item.onPress}
              family={item?.family}
            />
            <SepratorLine backgroundColor={"#C9C9C9"} />
          </>
        );
      })}
      <View style={{ height: "17%" }} />
      <SepratorLine backgroundColor={"#C9C9C9"} />

      <ProfileBody
        name={"Delete Account"}
        img={icons.howuse}
        family={"semiBold"}
        onPress={() => {
          Alert.alert(
            "Caution — Deleting your account ",
            `will prevent retrieving your account including active reservations`,
            [
              {
                text: "confirm",
                onPress: () => {
                  onDeleteAccount();
                },
              },
              {
                text: "cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
            ]
          );
        }}
        color={colors.primary}
      />
      <SepratorLine backgroundColor={"#C9C9C9"} />
      <Spacer height={20} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
