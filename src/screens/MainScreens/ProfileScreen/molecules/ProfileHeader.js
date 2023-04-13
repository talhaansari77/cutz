import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import React from "react";
import ProfilePhoto from "../../../../components/ProfilePhoto";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import SepratorLine from "../../../../components/SepratorLine";
import { images } from "../../../../../assets/images";
import { icons } from "../../../../../assets/icons";
import { Avatar } from "react-native-elements";
import { onClickImage } from "../../EditProfile/EditProfile";
const ProfileHeader = ({ AuthUser }) => {
  console.log("CurrentAuth", AuthUser?.firstName);
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
            height: 70,
            width: 70,
            borderRadius: 50,
            alignSelf: "center",
            zIndex: 100,

          }}
        >
          {AuthUser.profilePicture ? (
            <>
              <Image
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 50,
                }}
                source={{uri:AuthUser.profilePicture}}
              />
            </>
          ) : (
            <>
              <Avatar
                source={images.userAvatar}
                rounded
                size={70}
                containerStyle={{}}
              />
                            <TouchableOpacity activeOpacity={0.6} onPress={onClickImage}>

              <Avatar
                source={icons.cameraPlus}
                rounded
                size={35}
                containerStyle={{
                  alignSelf: "center",
                  position: "absolute",
                  bottom: -5,
                  right: -5,
                }}
              />
              </TouchableOpacity>
            </>
          )}
        </View>
        {/* <ProfilePhoto addPhoto/> */}
        <View style={{ marginLeft: scale(15) }}>
          <CustomText
            label={AuthUser.firstName + " " + AuthUser.lastName}
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
