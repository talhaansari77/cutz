import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import { Spacer } from "../../../components/Spacer";
import ProfilePhoto from "../../../components/ProfilePhoto";
import CustomInputs from "./molecules/CustomInputs";
import ClientEditProfile from "./molecules/ClientEditProfile";
import VolunteerEditProfile from "./molecules/VolunteerEditProfile";

const EditProfile = () => {
  return (
    <SafeAreaView style={commonStyles.commonMain}>


      <PH20>
      <Spacer height={5} />


      <ProfilePhoto addPhoto alignSelf="center" />
      <Spacer height={15} />
      {/* <ClientEditProfile/> */}
      <VolunteerEditProfile/>



      </PH20>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
