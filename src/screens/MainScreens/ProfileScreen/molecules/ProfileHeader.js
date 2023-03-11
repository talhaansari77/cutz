import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePhoto from "../../../../components/ProfilePhoto";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import SepratorLine from "../../../../components/SepratorLine";
import { images } from "../../../../../assets/images";
import { icons } from "../../../../../assets/icons";
import { Avatar } from "react-native-elements";
const ProfileHeader = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: verticalScale(12),
        }}
      >
        <View
          style={{
            height: 75,
            width: 75,
            borderRadius: 50,
            alignSelf: "center",
            zIndex: 100,
          }}
        >
          <Avatar
            source={images.userAvatar}
            rounded
            size={75}
            containerStyle={{}}
          />
          <Avatar
            source={icons.cameraPlus}
            rounded
            size={40}
            containerStyle={{
              alignSelf: "center",
              position: "absolute",
              bottom: -5,
              right: -5,
            }}
          />
        </View>
        {/* <ProfilePhoto addPhoto/> */}
        <View style={{ marginLeft: scale(15) }}>
          <CustomText
            label="Username"
            fontFamily="bold"
            fontSize={18}
            color={colors.txtGray}
          />
          <CustomText
            label="Welcome to Cutz"
            //   fontFamily=""
            fontSize={14}
            color={colors.txtGray}
          />
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
