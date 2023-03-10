import { StyleSheet, Text, View, Image, Platform, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import { icons } from "../../../../assets/icons";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import SepratorLine from "../../../components/SepratorLine";
import { Spacer } from "../../../components/Spacer";
import NameContainer from "./NameContainer";
import DetailContainer from "./DetailContainer";

const PersonalScreen = ({navigation, route}) => {

  console.log("RoutesType",route?.params?.type?.params?.userType)
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <ScrollView>

      <Spacer height={5} />

      <PH20>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>navigation.navigate("Profile")}
          >
          <Image source={icons.cross} style={commonStyles.imgContainer} />


          </TouchableOpacity>

          <CustomText
            color={colors.secondary}
            fontSize={16}
            fontFamily="medium"
            marginLeft={10}
            label="Personal"
          />
        </View>
      </PH20>
      <Spacer height={15} />

      <SepratorLine
        height={1.5}
        style={{
          shadowColor: Platform.OS == "ios" ? "black" : colors.black,
          shadowRadius: 2,
          elevation: 5,
          shadowOpacity: 0.4,
          // inputMarginTop:-20,
          shadowOffset: { width: -1, height: 3 },
        }}
      />
      <Spacer height={1} />

      <NameContainer name={"FULL NAME"} />
      <DetailContainer name={"First Name & Last Name"} />
      <NameContainer name={"YOUR INFO"} />
      <DetailContainer name={"(000) 000-0000"} />
      <DetailContainer name={"email@gmail.com"} />
      <NameContainer name={"ADDRESS"} />
      <DetailContainer
        name={"26255 Schoolcraft St Redford Charter Twp, MI 48239"}
      />
      <NameContainer name={"Affiliation"} />
      <DetailContainer name={"Employer (if any)"} />
      {route?.params?.type?.params?.userType === "Client" && (
        <>
          <NameContainer name={"FAMILY SIZE"} />
          <DetailContainer name={"# of mouths"} />
        </>
      )}
      {/* if  account type volunteer */}
      {/* <NameContainer name={"FAMILY SIZE"} />
        <DetailContainer name={"# of mouths"}/> */}
              </ScrollView>

    </SafeAreaView>
  );
};

export default PersonalScreen;

const styles = StyleSheet.create({});
